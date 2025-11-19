import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin  } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";

const ContactSection = () => {
  return (
    <section id="ContactSection" className="py-16 px-6 text-white text-center">
  <h2 data-aos="zoom-in" className="text-4xl font-bold mb-8">Contact</h2>

  <p data-aos="zoom-in-up" className="text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
    If you want to build a modern web application, automate your workflow with AI,
    or collaborate on a creative digital project, feel free to reach out. 
    I am always open to discussing new opportunities and innovative ideas.
  </p>

  {/* Social Icons */}
  <div className="flex justify-center space-x-8 text-4xl text-gray-400">
    <Link href="https://www.linkedin.com/in/hammad-abbasi-95388628b/" target="_blank" className="hover:text-white transition">
      <FaLinkedin />

      <span className="sr-only">LinkedIn</span>
    </Link>

    <Link href="https://github.com/Muhammad-Hammad-Abbasi" target="_blank" className="hover:text-white transition">
      <FaGithub />
      <span className="sr-only">GitHub</span>
    </Link>

    <Link href="mailto:hammadabbasi102030@gmail.com" className="hover:text-white transition">
      <MdOutlineAttachEmail />
      <span className="sr-only">Email</span>
    </Link>

    <Link href="https://www.instagram.com/mr_hammad.abbasi/" target="_blank" className="hover:text-white transition">
      <FaInstagram />
      <span className="sr-only">Instagram</span>
    </Link>

    
  </div>
</section>

  );
};

export default ContactSection;
