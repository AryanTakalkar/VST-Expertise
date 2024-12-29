import { Mail, Phone, MapPin, Send } from 'lucide-react';
import ContactForm from '../components/forms/ContactForm';

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-emerald-700 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">Contact Us</h1>
          <p className="text-emerald-100 text-xl text-center max-w-3xl mx-auto">
            Get in touch with our team to discuss your manpower needs and how we can help your organization grow.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-emerald-600 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Visit Us</h3>
                    <p className="text-gray-600">
                      123 Business Avenue<br />
                      Mumbai, Maharashtra 400001<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="text-emerald-600 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Call Us</h3>
                    <p className="text-gray-600">
                      +91 123 456 7890<br />
                      +91 098 765 4321
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="text-emerald-600 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email Us</h3>
                    <p className="text-gray-600">
                      contact@vstexpertise.com<br />
                      careers@vstexpertise.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Send className="text-emerald-600 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">Our Location</h2>
          <div className="aspect-video bg-gray-200 rounded-lg">
            {/* Add your map component here */}
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              Map Component Placeholder
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;