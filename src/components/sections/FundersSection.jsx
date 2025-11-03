
const FundersSection = () => {
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto max-w-7xl">
        <p className="text-center text-xl text-gray-700 mb-8">
          Over $1 billion in active security audits from organizations like:
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-12">
          <div className="w-32 h-16 flex items-center justify-center text-gray-400">Microsoft</div>
          <div className="w-32 h-16 flex items-center justify-center text-gray-400">Amazon</div>
          <div className="w-32 h-16 flex items-center justify-center text-gray-400">Google</div>
          <div className="w-32 h-16 flex items-center justify-center text-gray-400">Salesforce</div>
          <div className="w-32 h-16 flex items-center justify-center text-gray-400">Oracle</div>
        </div>
      </div>
    </div>
  );
};

export default FundersSection;
