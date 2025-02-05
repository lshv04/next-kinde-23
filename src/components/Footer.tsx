import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-600 py-6 ">
      <div className="container mx-auto flex flex-col items-center justify-center gap-2">
        <h3 className="text-white text-xs">Developed by: Leandro Hosken</h3>
        <div className="flex flex-row gap-2 ">
          <a
            href="https://www.linkedin.com/in/leandrohosken/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-white hover:text-gray-400 transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/lshv04"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-white hover:text-gray-400 transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://wa.me/5531987670611"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-white hover:text-gray-400 transition-colors"
          >
            <FaWhatsapp size={24} />
          </a>
          <a
            href="mailto:lshv04@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-white hover:text-gray-400 transition-colors"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
