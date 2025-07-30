import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function TrustSection() {
  return (
    <section className="bg-white py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Text Section */}
        <div>
          <div className="h-1 w-10 bg-pink-600 mb-6" />
          <h2 className="text-3xl sm:text-4xl font text-gray-900 mb-6 leading-relaxed">
            Leading companies trust us <br />{" "}
            <span className="font-extrabold">to develop software</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mb-6 leading-loose">
            We{" "}
            <span className="text-pink-800 font-medium">
              add development capacity
            </span>{" "}
            to tech teams. Our value isn’t limited to building teams but is
            equally distributed across the project lifecycle. We are a custom
            software development company that guarantees the successful delivery
            of your project.
          </p>

          <a
            href="#"
            className="text-purple-700 font-semibold text-sm sm:text-base inline-flex items-center hover:underline"
          >
            See more Informations <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>

        {/* Right Image Section */}
        <div className="relative w-full max-w-xl mx-auto rounded-2xl overflow-hidden shadow-md">
          <Image
            src="/teams.png"
            alt="Team working"
            width={800}
            height={500}
            className="object-cover w-full h-full"
          />
          <button className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white opacity-60 rounded-full p-3">
              <div className="w-10 h-10 rounded-full bg-purple-700 flex items-center justify-center text-white text-xl">
                ▶
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
