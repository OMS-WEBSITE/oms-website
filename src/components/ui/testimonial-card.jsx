
const TestimonialCard = ({ quote, author, title, company, image = undefined }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="text-3xl text-blue-300 mb-4">❝</div>
      <p className="text-gray-600 mb-6">
        {quote}
      </p>
      <div className="flex items-center">
        <div className={`w-12 h-12 rounded-full ${image ? 'bg-cover bg-center' : 'bg-gray-200'}`} 
             style={image ? { backgroundImage: `url(${image})` } : {}}>
        </div>
        <div className="ml-4">
          <p className="font-medium">{author}</p>
          <p className="text-sm text-gray-600">{title}</p>
          <p className="text-sm text-gray-600">{company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
