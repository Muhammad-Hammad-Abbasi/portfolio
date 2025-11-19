// import Image from "next/image";

// const HeroSection = () => {
//   return (
//     <section id="HeroSection" className="relative flex flex-col items-start justify-center min-h-screen text-white   p-6">
//       {/* Avatar */}
//       <div className="flex flex-row">
//       <div className="relative z-10 w-48 h-48 mb-8 rounded-full overflow-hidden shadow-purple-500/50 shadow-2xl flex items-center justify-center ">
//         <Image
//           src="/Gradient.png"
//           alt="Background Gradient"
//           layout="fill"
//           objectFit="cover"
//           quality={100}
//           className="absolute inset-0 z-0"
//         />
//         <div className="relative z-10 w-40 h-40 rounded-full overflow-hidden"> 
//           <Image
//             src="/img-2.png"
//             alt="Hammad Abbasi"
//             fill
//             className="object-cover"
//           />
//         </div>
//       </div>

//       {/* Intro Text */}
// <div className="flex flex-col justify-center ml-8">
// <p className="text-md text-gray-300 mb-2">Hello! I am <span className="text-purple-400">Hammad Abbasi</span></p>
// <h1 className="text-[30px] font-[italic] mb-4">
//   A Web & AI Developer <br /> building smart <br /> digital <span className="text-purple-400 text-[40px]">experiences</span>
// </h1>
// <p className="text-[10px] text-gray-400 mb-8">
//   Crafting modern applications that combine intelligent <br /> systems with clean and powerful web interfaces.
// </p>
// </div>
// </div>

// {/* Main Role */}
// <h2 className="sm:text-2xl md:text-3xl lg:text-4xl mb-4">
//   I am a Web Developer<span className="text-purple-400">|</span>
// </h2>
// <p className="sm:text-md md:text-md lg:text-lg text-gray-300 mb-8">
//   Currently working as a Web and AI Developer, creating scalable solutions for{" "}
//   <span className="text-purple-400 font-[italic] text-2xl">
//     global clients
//   </span>
//   .
// </p>

// {/* Description */}
// <p className="max-w-2xl sm:text-md md:text-md text-gray-400 leading-relaxed">
//   I specialize in full stack development, AI automation and intelligent app design. My focus is to build fast, secure and efficient products that solve real world problems and deliver value to users and businesses.
// </p>
// </section>

//   );
// };

// export default HeroSection;


import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      id="HeroSection"
      className="relative flex flex-col items-start justify-center min-h-screen text-white p-6"
    >
      {/* Avatar */}
      <div data-aos="fade-down-right" className="flex flex-row flex-wrap md:flex-nowrap">
        <div className="relative z-10 w-40 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mb-8 rounded-full overflow-hidden shadow-purple-500/50 shadow-2xl flex items-center lg:justify-start md:justify-center sm:justify-center mx-auto md:mx-0">
          <Image
            src="/Gradient.png"
            alt="Background Gradient"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="absolute inset-0 z-0"
          />
          <div className="relative z-10 w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full overflow-hidden mx-auto">
            <Image
              src="/img-2.png"
              alt="Hammad Abbasi"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Intro Text */}
        <div className="flex flex-col justify-center ml-0 md:ml-8 text-center md:text-left w-full md:w-auto">
          <p data-aos="fade-down-left" className="text-sm sm:text-md md:text-md text-gray-300 mb-2">
            Hello! I am <span className="text-purple-400">Hammad Abbasi</span>
          </p>
          <h1 data-aos="fade-left" className="text-[22px] sm:text-[26px] md:text-[30px] font-[italic] mb-4">
            A Web & AI Developer <br /> building smart <br /> digital{" "}
            <span className="text-purple-400 text-[28px] sm:text-[34px] md:text-[40px]">
              experiences
            </span>
          </h1>
          <p className="text-[10px] sm:text-[12px] md:text-[14px] text-gray-400 mb-8 leading-relaxed">
            Crafting modern applications that combine intelligent <br /> systems
            with clean and powerful web interfaces.
          </p>
        </div>
      </div>

      {/* Main Role */}
      <h2 data-aos="fade-down" className="text-[18px] sm:text-2xl md:text-3xl lg:text-4xl mb-4">
        I am a Web Developer<span className="text-purple-400">|</span>
      </h2>
      <p data-aos="fade-down" className="text-[12px] sm:text-md md:text-md lg:text-2xl text-gray-300 mb-8">
        Currently working as a Web and AI Developer, <br /> creating scalable solutions
        for{" "}
        <span className="text-purple-400 font-[italic] text-[16px] sm:text-2xl md:text-2xl lg:text-2xl">
          global clients
        </span>
        .
      </p>

      {/* Description */}
      <p data-aos="fade-down" className="max-w-2xl text-[10px] sm:text-md md:text-md text-gray-400 leading-relaxed">
        I specialize in full stack development, AI automation and intelligent
        app design. My focus is to build fast, secure and efficient products that
        solve real world problems and deliver value to users and businesses.
      </p>
    </section>
  );
};

export default HeroSection;
