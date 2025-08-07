import Image from "next/image";
import Link from "next/link";

const portfolioItems = [
  {
    title: "Website Design for SCFC Canada",
    description: `Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp, surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.`,
    image: "/case-study.png",
    bgColor: "bg-light-purple", // light purple
  },
  {
    title: "Website Design for SCFC Canada",
    description: `Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp, surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.`,
    image: "/case-study2.png",
    bgColor: "bg-light-green",
  },
  {
    title: "Website Design for SCFC Canada",
    description: `Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp, surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.`,
    image: "/case-study3.png",
    bgColor: "bg-light-pink", // light pink
  },
];

export function CaseStudySection() {
  return (
    <section id="casestudies" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto h-1.5 w-20 bg-brand-gradient mb-8 rounded-full" />

        {/* Header */}
        <div className="text-center mb-28">
          <h2 className="text-4xl text-mutedForeground mb-4">Our recent</h2>
          <h1 className="text-4xl sm:text-4xl font-bold text-foreground">Case studies</h1>
        </div>

        {/* Case Study Cards */}
        <div className="space-y-8">
          {portfolioItems.map((item, idx) => (
            <div
              key={idx}
              className={`${item.bgColor} rounded-2xl overflow-hidden flex flex-col lg:flex-row`}
            >
              {/* Image - left side */}
              <div className="relative w-full aspect-video lg:w-1/2">
  <Image
    src={item.image}
    alt={item.title}
    fill
    className="object-cover w-full h-full"
    priority={idx === 0}
  />
</div>

              {/* Content - right side */}
              <div className="lg:w-1/2 w-full p-6 sm:p-8 lg:p-10 flex flex-col justify-start">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-12">
                  {item.title}
                </h3>
                <p className="text-base text-muted leading-relaxed mb-6 lg:mb-20">
                  {item.description}
                </p>
                <Link
                  href="#"
                  className="justify-end text-sm font-medium text-transparent bg-clip-text bg-brand-gradient hover:underline inline-flex items-center"
                >
                  Read more <span className="ml-1">&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="text-right mt-12">
          <Link
            href="#"
            className="text-sm font-semibold text-brand hover:underline"
          >
            Read more case studies &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
