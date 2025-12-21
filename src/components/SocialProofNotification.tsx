import { useState, useEffect } from 'react';
import { Users, X } from 'lucide-react';

const notifications = [
  'Business owner from Detroit just requested an audit',
  'Local HVAC company just booked a consultation',
  'Detroit real estate agent viewing this page',
  'Restaurant owner from Detroit just signed up',
  'Dental practice requested a free SEO audit',
  'E-commerce store owner viewing our services'
];

export default function SocialProofNotification() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (isDismissed) return;

    const getRandomDelay = () => Math.floor(Math.random() * 7000) + 8000;

    const showNotification = () => {
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
        setCurrentIndex((prev) => (prev + 1) % notifications.length);
      }, 5000);
    };

    const initialDelay = setTimeout(() => {
      showNotification();
    }, getRandomDelay());

    const interval = setInterval(() => {
      if (!isVisible) {
        showNotification();
      }
    }, getRandomDelay());

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, [isVisible, isDismissed]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
  };

  if (isDismissed || !isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-40 animate-slide-in-left">
      <div className="bg-white rounded-lg shadow-2xl border border-gray-100 p-4 max-w-sm flex items-start gap-3">
        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
          <Users className="w-5 h-5 text-orange-600" />
        </div>

        <div className="flex-1">
          <p className="text-sm text-gray-800 font-medium">
            {notifications[currentIndex]}
          </p>
        </div>

        <button
          onClick={handleDismiss}
          className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
