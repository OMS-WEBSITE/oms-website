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
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 text-orange-400" fill="#f97316" />
            ))}
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Teams of 1 to 100 Win More with OMS Software
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className={`bg-white shadow-md transition-all duration-500 transform ${index === activeIndex ? 'scale-105' : 'scale-100'}`}>
              <CardContent className="p-6">
                <div className="text-3xl text-blue-300 mb-4">❝</div>
                <p className="text-gray-700 mb-6">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                  <div className="ml-4">
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.title}</p>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <Button variant="link" className="text-blue-600 p-0">
                    Read more stories →
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
            Try 14 days for free
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
