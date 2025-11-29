import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600 mb-4">
              Last Updated: November 29, 2025
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
                <p className="text-gray-600 leading-relaxed">
                  At Byte Arch Marketing ("we," "us," or "our"), we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">Personal Information</h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Book a strategy call or consultation</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Fill out a contact form</li>
                  <li>Request information about our services</li>
                  <li>Communicate with us via email or phone</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-3">
                  This information may include:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Business name</li>
                  <li>Other information you choose to provide</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Automatically Collected Information</h3>
                <p className="text-gray-600 leading-relaxed">
                  When you visit our website, we may automatically collect certain information about your device and browsing activity, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mt-3">
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website addresses</li>
                  <li>Click patterns and other usage data</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
                <p className="text-gray-600 leading-relaxed mb-3">
                  We use the information we collect for the following purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>To provide and maintain our services</li>
                  <li>To respond to your inquiries and fulfill your requests</li>
                  <li>To schedule and confirm appointments</li>
                  <li>To send you newsletters and marketing communications (with your consent)</li>
                  <li>To improve our website and services</li>
                  <li>To analyze website usage and trends</li>
                  <li>To detect and prevent fraud or abuse</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking Technologies</h2>
                <p className="text-gray-600 leading-relaxed mb-3">
                  We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are small data files stored on your device. We use:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                  <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements and track campaign performance</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-3">
                  You can control cookies through your browser settings. However, disabling cookies may affect your experience on our website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
                <p className="text-gray-600 leading-relaxed mb-3">
                  We may use third-party service providers to help us operate our business and website or administer activities on our behalf. These third parties may have access to your personal information only to perform specific tasks on our behalf and are obligated not to disclose or use it for any other purpose.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Third-party services we use may include:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mt-3">
                  <li>Analytics platforms (e.g., Google Analytics)</li>
                  <li>Email marketing services</li>
                  <li>Customer relationship management (CRM) systems</li>
                  <li>Advertising platforms (e.g., Facebook Pixel)</li>
                  <li>Cloud hosting and storage providers</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
                <p className="text-gray-600 leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</h2>
                <p className="text-gray-600 leading-relaxed">
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Depending on your location, you may have certain rights regarding your personal information, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
                  <li><strong>Data Portability:</strong> Request a copy of your data in a structured format</li>
                  <li><strong>Objection:</strong> Object to certain processing of your personal information</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-3">
                  To exercise any of these rights, please contact us using the information provided below.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
                <p className="text-gray-600 leading-relaxed">
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us, and we will take steps to delete such information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
                <p className="text-gray-600 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically for any changes.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-600 leading-relaxed mb-3">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-gray-50 rounded-lg p-6 space-y-2">
                  <p className="text-gray-900 font-semibold">Byte Arch Marketing</p>
                  <p className="text-gray-600">Email: <a href="mailto:mfife@bytearchmarketing.com" className="text-orange-600 hover:text-orange-700">mfife@bytearchmarketing.com</a></p>
                </div>
              </div>

              <div className="border-t-2 border-gray-200 pt-6 mt-8">
                <p className="text-sm text-gray-500">
                  By using our website and services, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
