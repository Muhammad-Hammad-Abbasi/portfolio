"use client"
import Image from "next/image"
import { useState } from "react"

const WorkExperience = () => {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({})

  const toggleDescription = (id: number) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const workItems = [
    {
      id: 1,
      title: "Web Development",
      // Keeping original image path
      image: "/icons/work-1.png",
      description:
        "Create modern and high performance websites crafted for speed, stability, and a seamless user journey. I focus on building clean structures and optimized workflows that help businesses grow. My development approach includes secure architectures, advanced frontend technologies, backend efficiency, and UI design that keeps users engaged. From landing pages to full platforms, everything is built to scale smoothly.",
    },
    {
      id: 2,
      title: "AI Integration",
      // Keeping original image path
      image: "/icons/work-2.png",
      description:
        "Add intelligence to your systems with smart automation and AI driven features. I integrate advanced models that enhance workflow efficiency, reduce manual work, and enable accurate decision making. AI powered features bring speed, consistency, and automation to your operations. My solutions cover predictive models, chatbots, analytics, and workflow automation tailored to your business needs.",
    },
  ]

  const getShortText = (text: string): string => {
    const words = text.split(" ")
    if (words.length <= 10) return text
    // The short text visually ends with "stability,..." based on the screenshot, which is about 10 words.
    return words.slice(0, 10).join(" ") + "..."
  }

  return (
    <section
    >
      {/* Reverted header styling to a simple h2 for minimal change */}
      <h2 data-aos="fade-down-right" className="text-4xl font-bold font-[italic] text-white mb-12">Work Experience</h2>

      <div className="flex justify-center">
        {/* Reverted container size to your original classes */}
        <div className="max-w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 auto-rows-auto">
          {workItems.map((item) => {
            const isOpen = expanded[item.id]

            return (
               <div
                 data-aos="flip-down"
                  key={item.id}
                  // Keeping original card styling
                  className="relative w-[250px] md:w-[300px] lg:w-[520px] overflow-hidden group bg-[#49295e] border border-t-8 border-purple-700 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:border-purple-500 self-start"
                >
                  <div className="overflow-hidden">
                    <Image
                      src={item.image}
                      // FIX: Changed height/width to use `fill` and set aspect ratio via container height for better rendering 
                      // or keep your fixed sizes but ensure `object-cover` works. Reverted to your original sizing and classes.
                      height={450}
                      width={420}
                      alt={item.title}
                      className="h-[180px] w-full object-cover transform group-hover:scale-120 transition-transform duration-500 ease-in-out"
                    />
                  </div>

                  <div className="p-4 text-center">
                    <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>

                    {/* FIX: Added min-height to the paragraph container. This prevents the card height 
                      from collapsing too much when the short text is displayed, leading to a smoother transition 
                      and better alignment of the two cards when the descriptions are short. 
                  */}
                    <p className="text-gray-400 text-sm mb-4 min-h-[50px] transition-all duration-300 ease-in-out">
                      {isOpen ? item.description : getShortText(item.description)}
                    </p>

                    {/* FIX: Simplified button styling to better match the prominent square/solid triangle in the screenshot.
                      The original button was large and the text too small. Making it a small, defined square/circle for the icon.
                  */}
                    <button
                      onClick={() => toggleDescription(item.id)}
                      className="mt-2 w-10 h-10 flex items-center justify-center mx-auto bg-purple-700 hover:bg-purple-600 text-white text-lg rounded-md transition-colors duration-300"
                      aria-expanded={isOpen}
                    >
                      {isOpen ? "▲" : "▼"}
                    </button>
                  </div>
                </div>
            )
          })}
        </div>
      </div>

    </section>
  )
}

export default WorkExperience