import { useState } from 'react';
import { ArrowRight, CheckCircle, Loader } from 'lucide-react';
import { supabase } from '../lib/supabase';


export default function Demo() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyName: '',
    selectedServices: [] as string[],
    problems: '',
    additionalInfo: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const services = [
    'Marketing Automation',
    'Automated Scheduling',
    '24/7 Customer Service Bots/Agents'
  ];

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      selectedServices: prev.selectedServices.includes(service)
        ? prev.selectedServices.filter(s => s !== service)
        : [...prev.selectedServices, service]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const { error } = await supabase
        .from('demo_requests')
        .insert([{
          name: formData.name,
          email: formData.email,
          company_name: formData.companyName || null,
          selected_services: formData.selectedServices,
          problems: formData.problems,
          additional_info: formData.additionalInfo || null
        }]);

      if (error) throw error;

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        companyName: '',
        selectedServices: [],
        problems: '',
        additionalInfo: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again or contact us directly.');
    }
  };

  if (status === 'success') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#1a0b4d] via-[#0f0638] to-[#1a0b4d] flex items-center justify-center px-6">
        <div className="max-w-2xl w-full text-center">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-[#4169ff]/30 p-12 shadow-2xl">
            <div className="inline-block mb-6 p-4 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-full border border-green-500/50">
              <CheckCircle className="w-16 h-16 text-green-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Request Received!
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Thank you for your interest in Byte Arch Marketing. We'll review your request and get back to you within 24 hours to schedule your free demo.
            </p>
            <a
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#4169ff] to-[#00d9ff] rounded-lg font-semibold text-white shadow-lg hover:shadow-[#4169ff]/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              Back to Home
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a0b4d] via-[#0f0638] to-[#1a0b4d] py-24 px-6">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSg2NSwgMTA1LCAyNTUsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-10"></div>

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Book Your <span className="bg-gradient-to-r from-[#4169ff] via-[#00d9ff] to-[#4169ff] bg-clip-text text-transparent">Free Demo</span>
          </h1>
          <p className="text-xl text-gray-300">
            Let's discuss how we can help automate and grow your business
          </p>
        </div>

        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-[#4169ff]/30 p-8 md:p-12 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-white font-semibold mb-2">
                Full Name <span className="text-[#ff6b35]">*</span>
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#4169ff] focus:bg-white/15 transition-all"
                placeholder="John Doe"
                required
                disabled={status === 'loading'}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-white font-semibold mb-2">
                Email Address <span className="text-[#ff6b35]">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#4169ff] focus:bg-white/15 transition-all"
                placeholder="john@example.com"
                required
                disabled={status === 'loading'}
              />
            </div>

            <div>
              <label htmlFor="companyName" className="block text-white font-semibold mb-2">
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#4169ff] focus:bg-white/15 transition-all"
                placeholder="Your Company"
                disabled={status === 'loading'}
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-3">
                Selected Service(s) <span className="text-[#ff6b35]">*</span>
              </label>
              <div className="space-y-3">
                {services.map((service) => (
                  <label
                    key={service}
                    className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-lg cursor-pointer hover:bg-white/10 transition-all"
                  >
                    <input
                      type="checkbox"
                      checked={formData.selectedServices.includes(service)}
                      onChange={() => handleServiceToggle(service)}
                      className="w-5 h-5 text-[#4169ff] bg-white/10 border-white/20 rounded focus:ring-[#4169ff] focus:ring-2"
                      disabled={status === 'loading'}
                    />
                    <span className="text-white">{service}</span>
                  </label>
                ))}
              </div>
              {formData.selectedServices.length === 0 && (
                <p className="mt-2 text-sm text-gray-400">Please select at least one service</p>
              )}
            </div>

            <div>
              <label htmlFor="problems" className="block text-white font-semibold mb-2">
                What problems are you looking to solve? <span className="text-[#ff6b35]">*</span>
              </label>
              <textarea
                id="problems"
                value={formData.problems}
                onChange={(e) => setFormData({ ...formData, problems: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#4169ff] focus:bg-white/15 transition-all resize-none"
                placeholder="Tell us about the challenges you're facing..."
                required
                disabled={status === 'loading'}
              />
            </div>

            <div>
              <label htmlFor="additionalInfo" className="block text-white font-semibold mb-2">
                Additional Information
              </label>
              <textarea
                id="additionalInfo"
                value={formData.additionalInfo}
                onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                rows={3}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#4169ff] focus:bg-white/15 transition-all resize-none"
                placeholder="Any other details you'd like to share..."
                disabled={status === 'loading'}
              />
            </div>

            {status === 'error' && (
              <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4">
                <p className="text-red-400">{errorMessage}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading' || formData.selectedServices.length === 0}
              className="group w-full px-8 py-4 bg-gradient-to-r from-[#ff6b35] to-[#ff8c5a] rounded-lg font-semibold text-lg text-white shadow-lg hover:shadow-[#ff6b35]/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-2"
            >
              {status === 'loading' ? (
                <>
                  <Loader className="w-5 h-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  Submit Request
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        </div>

        <div className="mt-8 text-center">
          <a
            href="/"
            className="text-gray-400 hover:text-[#00d9ff] transition-colors"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
