import Image from 'next/image';
import Link from 'next/link';
import { FaWhatsapp, FaInstagram, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function ContactMe() {
  const phone_number = process.env.PHONE_NUMBER;
  const email = process.env.EMAIL_ADDRESS; // Make sure to set this in your environment variables

  return (
    <div className="bg-white px-6 py-32 sm:py-40 lg:px-8 relative overflow-hidden" id="contact">
      {/* Background Shape */}
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
        <div className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} />
      </div>
      {/* Content */}
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Me</h2>
      </div>
      <div className="mx-auto mt-12 max-w-xl sm:mt-16">
        <div className="flex justify-center space-x-6 items-center">
          <div className="flex space-x-6 animate-fadeInUp">
            <Link
              href={`https://wa.me/${phone_number}`}
              className="text-gray-500 hover:text-green-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="h-10 w-10 transition duration-300 transform hover:scale-110" aria-hidden="true" />
            </Link>
            <Link
              href="https://www.instagram.com/bhavi__281/"
              className="text-gray-500 hover:text-pink-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="h-10 w-10 transition duration-300 transform hover:scale-110" aria-hidden="true" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/bhavisha-nayi-2b683a211/"
              className="text-gray-500 hover:text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="h-10 w-10 transition duration-300 transform hover:scale-110" aria-hidden="true" />
            </Link>
            <Link
              href={`mailto:${email}`}
              className="text-gray-500 hover:text-red-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope className="h-10 w-10 transition duration-300 transform hover:scale-110" aria-hidden="true" />
            </Link>
            <Link
              href={`tel:${phone_number}`}
              className="text-gray-500 hover:text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPhone className="h-10 w-10 transition duration-300 transform hover:scale-110" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
