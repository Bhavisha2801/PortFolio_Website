import Link from 'next/link';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Bhavisha Nayi</p>
        </div>
    </footer>
  );
}
