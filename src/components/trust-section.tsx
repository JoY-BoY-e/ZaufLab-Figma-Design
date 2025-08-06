import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function TrustSection() {
  return (
    <section className="bg-background py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left Text Section */}
        <div className="lg:w-[90%]">
          <div className="h-1.5 w-20 bg-brand-gradient mb-8 rounded-full" />
          <h2 className="text-4xl sm:text-3xl xs:text-2xl font text-headline mb-4">
            Leading companies trust us <br />
          </h2>
          <h2 className="text-4xl sm:text-3xl xs:text-2xl font text-headline mb-8 leading-relaxed font-extrabold">
            to develop software
          </h2>
          <p className="text-subtext text-left text-base sm:text-lg mb-6 leading-loose">
            We{" "}
            <span className="text-highlight font-medium">
              add development capacity
            </span>{" "}
            to tech teams. Our value isn’t limited to building teams but is
            equally distributed across the project lifecycle. We are a custom
            software development company that guarantees the successful delivery
            of your project.
          </p>

          <a
            href="#"
            className="text-link font-semibold text-sm sm:text-base inline-flex items-center hover:underline"
          >
            See more Informations <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>

        {/* Right Image Section */}
        <div className="relative w-full max-w-xl mx-auto rounded-2xl overflow-hidden shadow-md">
          <Image
            src="/about-us.png"
            alt="Team working"
            width={800}
            height={500}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
