import Image from "next/image";

const SkillsSection = () => {
  const skills = [
    { name: "React", icon: "/icons/react-3.png" },
    { name: "Node.js", icon: "/icons/nodejs-3.png" },
    { name: "TypeScript", icon: "/icons/typescript-1.png" },
    { name: "Next.js", icon: "/icons/next-js-1.png" },
    { name: "Figma", icon: "/icons/figma-1.png" },
    { name: "AI", icon: "/icons/ai-3.png" },
    { name: "Python", icon: "/icons/python-3.png" },
    { name: "MongoDB", icon: "/icons/mongodb-1.png" },
  ];

  return (
    <section className="py-16 px-6 text-white text-center">

      <div className="flex justify-center items-center mb-12">
        {/* Placeholder for the central 'Z' or 'Σ' logo if it's part of this section */}
        <div className="text-5xl font-bold  ">
          Skills 
        </div>
      </div>

      <p className="text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
        I'm currently looking to join a{" "}
        <span className="text-purple-400 font-semibold">cross-functional team</span>{" "}
        that values improving people's lives through accessible design
      </p>

      <div className="flex justify-center items-center mb-12">
      <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="grid grid-cols-4 md:grid-cols-5 gap-8 max-w-4xl mx-auto">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center ">
            <div className="relative w-16 h-16 mb-2 bg-[#5f5168] rounded-full p-4 shadow-lg">
              <Image
                src={skill.icon}
                alt={skill.name}
                fill
                className="object-contain"
              />
            </div>
            <p className="text-sm text-gray-300">{skill.name}</p>
          </div>
        ))}
      </div>
      </div>

    </section>
  );
};

export default SkillsSection;
