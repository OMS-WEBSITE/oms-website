import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "OMS Software is a one-stop shop where I can research and track organizations' security needs all in one place.",
      name: "Sarah Chen",
      title: "Chief Information Security Officer",
      company: "TechSecure Solutions"
    },
    {
      quote: "OMS Software has fundamentally changed the way we work, especially finding organizations that match our security expertise.",
      name: "Theresa Anderson",
      title: "Security Audit Director",
      company: "CyberGuard Consulting"
    },
    {
      quote: "OMS Software is an all-year round platform where we can track security assessments and compliance history. The documentation and reporting features make everything easier.",
      name: "Beth Noble",
      title: "Senior Security Auditor",
      company: "SecureNet Systems"
    }
  ];
  
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);
  
  return (
    <div className="py-12 sm:py-16 bg-gray-50">
      <div className="container mx-auto max-w-5xl px-4">
        
        {/* Stars and Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex justify-center mb-4 space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 sm:w-8 sm:h-8 text-orange-400" fill="#f97316" />
            ))}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Teams of 1 to 100 Win More with OMS Software
          </h2>
        </div>

        {/* Testimonials Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`bg-white shadow-md transition-all duration-500 transform ${index === activeIndex ? 'scale-105' : 'scale-100'}`}
            >
              <CardContent className="p-4 sm:p-6 flex flex-col justify-between h-full">
                <div>
                  <div className="text-2xl sm:text-3xl text-blue-300 mb-3">❝</div>
                  <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">{testimonial.quote}</p>
                </div>
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded-full flex-shrink-0"></div>
                    <div className="ml-3 sm:ml-4">
                      <p className="font-medium text-sm sm:text-base">{testimonial.name}</p>
                      <p className="text-xs sm:text-sm text-gray-600">{testimonial.title}</p>
                      <p className="text-xs sm:text-sm text-gray-600">{testimonial.company}</p>
                    </div>
                  </div>
                  <Button variant="link" className="text-blue-600 p-0 text-sm sm:text-base">
                    Read more stories →
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-8 sm:mt-12 text-center">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-3">
            Try 14 days for free
          </Button>
        </div>

      </div>
    </div>
  );
};

export default TestimonialsSection;
