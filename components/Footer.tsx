import Link from 'next/link';
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { BiLocationPlus } from 'react-icons/bi';

export default function Footer() {
  const phone_number = process.env.PHONE_NUMBER;
  const email = process.env.EMAIL_ADDRESS;

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo or Brand */}
          <div className="text-center md:text-left">
            <Link href="/">
              <div className="text-2xl font-bold text-white">Bhavisha Nayi</div>
            </Link>
            <p className="mt-4 text-sm flex justify-center md:justify-start gap-1">
              <BiLocationPlus className="h-4 w-4" /> Ahmedabad, Gujarat
            </p>
          </div>
          {/* Social Media Links */}
          <div className="flex justify-center md:justify-center">
            <div>
              <h3 className="text-lg font-semibold text-center md:text-left">Social Media</h3>
              <ul className="mt-4 flex space-x-4 justify-center md:justify-start">
                <li>
                  <Link href={`https://wa.me/${phone_number}`} target="_blank">
                    <div className="hover:text-gray-400">
                      <FaWhatsapp className="h-6 w-6" />
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.instagram.com/bhavi__281/" target="_blank">
                    <div className="hover:text-gray-400">
                      <FaInstagram className="h-6 w-6" />
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/in/bhavisha-nayi-2b683a211/" target="_blank">
                    <div className="hover:text-gray-400">
                      <FaLinkedin className="h-6 w-6" />
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="mt-4">
              <Link href={`mailto:${email}`}>
                <p className="text-sm">{email}</p>
              </Link>
              <Link href={`tel:${phone_number}`}>
                <p className="text-sm mt-2">{phone_number}</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
