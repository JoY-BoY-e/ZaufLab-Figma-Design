import Image from "next/image";
import Link from "next/link";

const portfolioItems = [
  {
    title: "Website Design for SCFC Canada",
    description: `Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp, surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.`,
    image: "/case-study.png",
    bgColor: "bg-[#e8ebfb]", // light purple
  },
  {
    title: "Website Design for SCFC Canada",
    description: `Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp, surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.`,
    image: "/case-study.png",
    bgColor: "bg-[#e8fbf3]", // light green
  },
  {
    title: "Website Design for SCFC Canada",
    description: `Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp, surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.`,
    image: "/case-study.png",
    bgColor: "bg-[#fbe8fb]", // light pink
  },
];

export function CaseStudySection() {
  return (
    <section id="casestudies" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl  text-gray-500 mb-2">Our recent</h2>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Case studies</h1>
        </div>

        {/* Case Study Cards */}
        <div className="space-y-12">
          {portfolioItems.map((item, idx) => (
            <div
              key={idx}
              className={`${item.bgColor} rounded-2xl  flex flex-col md:flex-row items-center md:items-start gap-8`}
            >
              <div className="w-full md:w-1/2">
                <Image
                  src={item.image}
                  alt={item.title}
                    width={400}
                    height={250}
                    priority
                  className="rounded-xl w-full h-auto object-cover"
                />
              </div>
              <div className="w-full md:w-1/2 p-6 sm:p-8 lg:p-10">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {item.description}
                </p>
                <Link href="#" className="text-sm font-medium text-purple-600 hover:underline">
                  Read more &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="text-right mt-12">
          <Link href="#" className="text-sm font-semibold text-purple-600 hover:underline">
            Read more case studies &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
