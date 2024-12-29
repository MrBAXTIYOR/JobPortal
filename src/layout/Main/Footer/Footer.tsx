import { Briefcase, Facebook, Youtube, Instagram, Twitter } from 'lucide-react';
import Container from '../../../container/Container';
import { footerLinks } from '../../../data/footerLinks';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <Container>
        <div className="px-4 sm:px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Logo and Contact */}
            <div className="lg:col-span-2">
              <div className="flex items-center text-white mb-4">
                <Briefcase className="h-8 w-8" />
                <span className="ml-2 text-xl font-bold">Jobpilot</span>
              </div>
              <p className="mb-2">Call now: (319) 555-0115</p>
              <p className="text-sm">
                6391 Elgin St. Celina, Delaware 10299, New York, United States
                of America
              </p>
            </div>

            {/* Links */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-white font-semibold mb-4">{title}</h3>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="hover:text-white transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm mb-4 sm:mb-0">
              © 2021 Jobpilot - Job Portal. All rights Reserved
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
