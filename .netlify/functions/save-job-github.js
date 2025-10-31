import fetch from "node-fetch";
import Papa from "papaparse";

const ADMIN_KEY = process.env.OMS_ADMIN_KEY || "changeme";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const REPO_OWNER = "OMS-WEBSITE";
const REPO_NAME = "oms-website";
const FILE_PATH = "src/data/jobs.csv";
const BRANCH = "main";

export const handler = async (event) => {
  const key = event.headers["x-admin-key"] || "";
  if (key !== ADMIN_KEY) {
    return {
      statusCode: 401,
      body: JSON.stringify({ message: "unauthorised" }),
    };
  }

  const body = JSON.parse(event.body);
  const res = await fetch(
    `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`,
    {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        "User-Agent": "oms-careers-bot",
      },
    }
  );
  const fileJson = await res.json();
  const csvContent = Buffer.from(fileJson.content, "base64").toString("utf8");
  const parsed = Papa.parse(csvContent, { header: true });
  let rows = parsed.data.filter((r) => r.id);

  const existing = rows.find((r) => r.id === body.id);
  if (existing) {
    Object.assign(existing, body);
  } else {
    rows.push(body);
  }

  const newCsv = Papa.unparse(rows);
  const encoded = Buffer.from(newCsv).toString("base64");

  const saveRes = await fetch(
    `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`,
    {
      method: "PUT",
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        "User-Agent": "oms-careers-bot",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: `Update jobs.csv via admin panel`,
        content: encoded,
        sha: fileJson.sha,
        branch: BRANCH,
      }),
    }
  );

  return {
    statusCode: saveRes.ok ? 200 : 500,
    body: JSON.stringify({ ok: saveRes.ok }),
  };
};
