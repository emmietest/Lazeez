import { MapPin, Phone, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16 px-8 fade-in-on-scroll">
      <div className="max-w-7xl mx-auto">
        {/* Map Section */}
        <div className="mb-16 fade-in-on-scroll">
          <h3 className="font-heading text-xl font-bold text-foreground mb-6">Find Us</h3>
          <div className="rounded-lg overflow-hidden shadow-lg h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2940.4556029851846!2d-83.48115!3d42.2256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824a3e7c3d9d9d9%3A0x5f5f5f5f5f5f5f5f!2s2643%20Ellsworth%20Rd%2C%20Ypsilanti%2C%20MI%2048197!5e0!3m2!1sen!2sus!4v1620000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Contact Info */}
          <div>
            <h3 data-fade-direction="left" className="font-heading text-xl font-bold text-foreground mb-6 fade-in-on-scroll">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={24} strokeWidth={2} className="text-tertiary flex-shrink-0 mt-1" />
                <p className="text-base text-gray-200">
                  2643 Ellsworth Rd<br />
                  Ypsilanti, 48197
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={24} strokeWidth={2} className="text-tertiary flex-shrink-0 mt-1" />
                <a
                  href="tel:734-340-3576"
                  className="text-base text-tertiary hover:text-tertiary/80 transition-colors"
                >
                  734-340-3576
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 data-fade-direction="left" className="font-heading text-xl font-bold text-foreground mb-6 fade-in-on-scroll">
              Opening Hours
            </h3>
            <div className="flex items-start gap-3">
              <Clock size={24} strokeWidth={2} className="text-tertiary flex-shrink-0 mt-1" />
              <div className="space-y-2">
                <p className="text-base text-gray-200">Monday - Friday: 11am - 9pm</p>
                <p className="text-base text-gray-200">Saturday: 12pm - 10pm</p>
                <p className="text-base text-gray-200">Sunday: 12pm - 8pm</p>
              </div>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 data-fade-direction="left" className="font-heading text-xl font-bold text-foreground mb-6 fade-in-on-scroll">
              About Lazeez Eats
            </h3>
            <p className="text-base text-gray-200 leading-relaxed">
              Home of Falafel. Authentic Halal-certified Mediterranean cuisine prepared with fresh
              ingredients and traditional recipes.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-base text-gray-300">
              © {new Date().getFullYear()} Lazeez Eats. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-base text-gray-300 hover:text-tertiary transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-base text-gray-300 hover:text-tertiary transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
