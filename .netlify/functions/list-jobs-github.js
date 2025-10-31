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

  const res = await fetch(
    `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}?ref=${BRANCH}`,
    {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        "User-Agent": "oms-careers-bot",
      },
    }
  );

  if (!res.ok) {
    const txt = await res.text();
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "cannot read csv", error: txt }),
    };
  }

  const fileJson = await res.json();
  const csvContent = Buffer.from(fileJson.content, "base64").toString("utf8");
  const parsed = Papa.parse(csvContent, { header: true });
  const jobs = parsed.data.filter((r) => r.title);

  return {
    statusCode: 200,
    body: JSON.stringify({ jobs }),
  };
};

if (!res.ok) {
  const txt = await res.text();
  return {
    statusCode: 500,
    body: JSON.stringify({ message: "cannot read csv", error: txt }),
  };
}

const fileJson = await res.json();
const csvContent = Buffer.from(fileJson.content, "base64").toString("utf8");
const parsed = Papa.parse(csvContent, { header: true });
const jobs = parsed.data.filter((r) => r.title);

return {
  statusCode: 200,
  body: JSON.stringify({ jobs }),
};
