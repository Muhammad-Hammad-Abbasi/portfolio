import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { GiTBrick } from "react-icons/gi";

const FeaturedProjects = () => {
  const projects = [
  {
    id: 1,
    title: "Easy Bali Trip",
    description:
      "A modern travel planning platform focused on personalized Bali excursions. It features dynamic routing, detailed itinerary builders, and seamless integration with booking APIs. Built with a focus on Next.js for high performance and SEO, ensuring a smooth and fast user experience for exploring and reserving travel packages.",
    image: "/icons/example.png",
    link: "https://easy-bali-trip.vercel.app/",
    githublink: "https://github.com/Muhammad-Hammad-Abbasi/Easy_Bali_trip",
  },
  {
    id: 2,
    title: "E-commerce Website",
    description:
      "A feature-rich full-stack E-commerce solution developed during a hackathon to demonstrate rapid prototyping skills. The site includes product display, shopping cart management, and user authentication, showcasing proficiency in backend state management and responsive frontend design using Next.js.",
    image: "/icons/example-2.png",
    link: "https://next-js-hackathon-hammad.vercel.app/",
    githublink: "https://github.com/Muhammad-Hammad-Abbasi/next.js-hackathon",
  },
  {
    id: 3,
    title: "Blog Platform",
    description:
      "A robust and scalable Dynamic Blog Platform designed for content creation and management. It features a fully responsive layout, advanced routing for individual posts, and utilizes Markdown/MDX rendering for rich text content. The focus was on building a clean UI and optimizing server-side rendering for speed and performance.",
    image: "/icons/example-3.png",
    link: "https://milestone-03-dynamic-blogs.vercel.app/blogs",
    githublink: "https://github.com/Muhammad-Hammad-Abbasi/Blog-posts",
  },
];

  return (
    <section id="FeaturedProjects" className="py-16 px-6 text-white">
      <h2 className="text-sm text-purple-400 text-center mb-2">
        Featured Project
      </h2>
      <h3 className="text-4xl font-bold text-center mb-12">Projects</h3>

      <div className="flex flex-col gap-16 max-w-5xl mx-auto ">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
          >

            <div data-aos="fade-right" className="relative w-full lg:w-1/2 h-80 bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="opacity-70 object-cover"
              />
            </div>
            <div data-aos="fade-left" className="w-full lg:w-1/2 text-center lg:text-left ">
              <h4 className="text-2xl mb-4 font-[italic] font-semibold">{project.title}</h4>
              <p className="text-gray-300 leading-relaxed mb-2">
                {project.description}
              </p>
              <div className="flex justify-center lg:justify-start">
                {/* Placeholder for icons like stars or other indicators */}
                <span className="text-purple-400 text-2xl">** **</span>

              </div>
              <div className="flex items-center space-x-4 ">
                <Link href={project.link} target="_blank" rel="noopener noreferrer">
                  <button className="px-6 py-3 border border-[#6402b4] hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors duration-300">
                    View Project
                  </button>
                </Link>

                <Link href={project.githublink} target="_blank" rel="noopener noreferrer">
                  <button className="px-2 py-2 hover:bg-[#5c0585] text-white rounded-full font-semibold transition-colors duration-300">
                    <FaGithub size={25}/>
                  </button>
                </Link>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
