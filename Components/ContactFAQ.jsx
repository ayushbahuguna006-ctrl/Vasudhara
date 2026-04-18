import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "Vasudhara, and what does it aim to achieve?",
    answer:
      "Vasudhara signifies ‘Star of the Forest.’ Our purpose is to rescue wild animals in distress, provide treatment along with lifelong care, and rehabilitate those fit for the wild. With regulatory approval, we also breed select endangered or extinct-in-the-wild species, serving as a modern Noah's Ark to ensure their survival under human care and restore wild populations through reintroduction.",
  },
  {
    question: "Where is Vasudhara located, and which areas does it serve?",
    answer: "Vasudhara's animal care centres and advanced wildlife hospitals are located in Jamnagar, Gujarat. While based in India, Vasudhara rescues and provides care for animals from around the world, offering a safe haven for those in need of treatment, lifelong care and rehabilitation.",
  },
  {
    question: "What kind of animals does Vasudhara rescue and rehabilitate?",
    answer: "We rescue animals in distress, including those illegally transported, abused in circuses, forced heavy labour, and exploited for trophy or canned hunting. We also rescue animals captured for traditional medicine, in fashion for fur and skin, forced labour, and other forms of cruelty and exploitation. We provide specialised care for endangered species, enhancing their chances of survival and potential return to the wild.",
  },
  {
    question:
      "Why was Vasudhara established, and how does it align with Reliance Foundation’s vision?",
    answer: "Vasudhara is an extension of Reliance Foundation’s commitment to biodiversity conservation, dedicated to rescuing, rehabilitating, and providing lifelong care for non-domesticated animals, with a special focus on wild animals in distress. Our purpose aligns with the foundation’s vision of protecting wildlife, restoring ecosystems, and fostering coexistence between humans and nature.",
  },
  {
    question: "Is Vasudhara open to visitors?",
    answer: "We remain committed to transparency and outreach through our official social media platforms–Facebook, Instagram, and LinkedIn. We regularly share updates on our impactful rescue efforts, the transformation journeys of our resident animals, and rehabilitation stories. In-person visits are currently limited and permitted only with approval from regulatory authorities",
  },

  {
    question:"How can individuals or organisations volunteer with or support vasudhara",
    answer:"You can become a “Vasudharian” and be part of our mission to rescue, protect,  and care for wildlife. Volunteer opportunities will soon be available. In the meantime, you can support us by following, liking, and sharing updates across all social media platforms. Your engagement helps raise awareness and amplifies our efforts to protect and conserve wildlife.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-[#f5f2ed] py-20 px-6">
      <div className="max-w-5xl mx-auto">

       
        <h2 className="text-5xl md:text-6xl font-serif text-center mb-16">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqData.map((item, index) => (
            <div key={index} className="border-t border-gray-300 pt-6">

             
              <div
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center cursor-pointer"
              >
                <h3 className="text-lg md:text-xl font-medium text-gray-800">
                  {item.question}
                </h3>

                <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300">
                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </div>

            
              {activeIndex === index && (
                <p className="mt-4 text-gray-600 leading-relaxed max-w-3xl">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default FAQ;