import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog';
import { X } from 'lucide-react';

const HeroSection = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <div className="relative bg-gradient-to-r from-indigo-50 to-blue-50 py-16 px-4 md:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              <span className="marker-underline">OMS Software</span> Workflow &amp; TIC Compliance Platform
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Cloud-based solutions for Testing, Inspection, and Certification (TIC) companies, NDT/DT operations, and laboratories.
              Streamline workflow management, audits, reporting, and ISO compliance with a secure and scalable platform.
            </p>
            <div className="flex gap-3 items-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white py-6 px-8 rounded-md">
                Book a demo
              </Button>
              <Button size="lg" variant="outline" className="py-6 px-8 rounded-md">
                Explore features
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-4">The choice of TIC professionals and labs across the globe.</p>
          </div>

          <div className="relative bg-white p-6 rounded-xl shadow-lg">
            <div className="bg-blue-50 rounded-lg p-4 mb-4">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-sm text-gray-600">Compliance Dashboard</p>
                  <p className="text-xs text-gray-500">Live audit status</p>
                </div>
                <p className="text-lg font-bold text-black">ISO 17025</p>
              </div>
              <Button size="sm" variant="outline" className="text-orange-500 border-orange-500 w-full">
                <span className="mr-2">❤</span> Save report
              </Button>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden">
              <video
                src="/videos/oms-video.mp4"
                controls
                autoPlay
                className="w-full h-full rounded-lg"
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-xs text-gray-500">24</p>
                <p className="text-sm font-medium">Open Findings</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-xs text-gray-500">7</p>
                <p className="text-sm font-medium">Audits This Week</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
        <DialogContent className="sm:max-w-3xl">
          <DialogClose className="absolute right-4 top-4 text-gray-500 hover:text-gray-800">
            <X className="h-5 w-5" />
          </DialogClose>
          <div className="aspect-video bg-black rounded-lg flex items-center justify-center">
            <p className="text-white px-4 text-center">
              Video placeholder - OMS Software overview (replace with your demo later)
            </p>
          </div>
        </DialogContent>
      </Dialog> */}
      <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
        <DialogContent className="sm:max-w-3xl">
          <DialogClose className="absolute right-4 top-4 text-gray-500 hover:text-gray-800">
            <X className="h-5 w-5" />
          </DialogClose>
          <div className="aspect-video rounded-lg overflow-hidden">
            <video
              src="/videos/oms-video.mp4"
              controls
              autoPlay
              className="w-full h-full rounded-lg"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </DialogContent>
      </Dialog>

    </div>
  );
};

export default HeroSection;