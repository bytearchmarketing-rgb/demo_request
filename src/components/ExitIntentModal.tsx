import { useState, useEffect } from 'react';
import { X, Search } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface ExitIntentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ExitIntentModal({ isOpen, onClose }: ExitIntentModalProps) {
  const [name, setName] = useState('');
  const [business, setBusiness] = useState('');
  const [contact, setContact] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const { error: submitError } = await supabase
        .from('exit_intent_leads')
        .insert([
          {
            name,
            business,
            contact,
            created_at: new Date().toISOString()
          }
        ]);

      if (submitError) throw submitError;

      setIsSuccess(true);
      setTimeout(() => {
        onClose();
        setTimeout(() => {
          setIsSuccess(false);
          setName('');
          setBusiness('');
          setContact('');
        }, 500);
      }, 2000);
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error('Error submitting form:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
      <div
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-scale-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {!isSuccess ? (
          <>
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-orange-600" />
            </div>

            <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
              Wait! Get Your Free SEO Audit
            </h2>

            <p className="text-gray-600 text-center mb-6">
              Before you go, let us show you exactly how to get your Detroit business on the first page of Google.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label htmlFor="business" className="block text-sm font-semibold text-gray-700 mb-1">
                  Business Name
                </label>
                <input
                  type="text"
                  id="business"
                  value={business}
                  onChange={(e) => setBusiness(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                  placeholder="Your Business"
                />
              </div>

              <div>
                <label htmlFor="contact" className="block text-sm font-semibold text-gray-700 mb-1">
                  Email or Phone
                </label>
                <input
                  type="text"
                  id="contact"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                  placeholder="john@business.com or (313) 451-4280"
                />
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Get My Free Audit'}
              </button>

              <p className="text-xs text-gray-500 text-center">
                We will send you a detailed audit showing your current rankings and opportunities.
              </p>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
            <p className="text-gray-600">
              We will send your free audit shortly. Check your email or phone for details.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
