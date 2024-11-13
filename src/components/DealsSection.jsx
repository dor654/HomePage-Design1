import React, { useState, useEffect } from "react";

export default function DealsSection() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 24,
    minutes: 36,
    seconds: 51,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl p-8 shadow-sm">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Special Offer</h2>
              <p className="text-gray-600 mb-6">
                Get up to 20% off on selected items this week!
              </p>
              <div className="flex space-x-4">
                <div className="bg-gray-100 px-4 py-2 rounded-lg text-center">
                  <span className="font-bold block">{timeLeft.hours}</span>
                  <span className="text-sm text-gray-500">Hours</span>
                </div>
                <div className="bg-gray-100 px-4 py-2 rounded-lg text-center">
                  <span className="font-bold block">{timeLeft.minutes}</span>
                  <span className="text-sm text-gray-500">Mins</span>
                </div>
                <div className="bg-gray-100 px-4 py-2 rounded-lg text-center">
                  <span className="font-bold block">{timeLeft.seconds}</span>
                  <span className="text-sm text-gray-500">Secs</span>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&auto=format&fit=crop&q=60"
                alt="Laptop Deal"
                className="rounded-lg transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
