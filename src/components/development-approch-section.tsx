import {
  Code,
  ShieldCheck,
  Users,
  CheckCircle,
  Wand2,
  Bug,
} from "lucide-react"; // swap with any icon library you use

const features = [
  {
    icon: <Code className="w-6 h-6 text-white" />,
    bg: "bg-gray-800",
    title: "UX Driven Engineering",
    desc: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
  },
  {
    icon: <Users className="w-6 h-6 text-white" />,
    bg: "bg-blue-400",
    title: "Developing Shared Understanding",
    desc: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
  },
  {
    icon: <Wand2 className="w-6 h-6 text-white" />,
    bg: "bg-pink-500",
    title: "Proven Experience and Expertise",
    desc: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-white" />,
    bg: "bg-teal-400",
    title: "Security & Intellectual Property (IP)",
    desc: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-white" />,
    bg: "bg-yellow-400",
    title: "Code Reviews",
    desc: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
  },
  {
    icon: <Bug className="w-6 h-6 text-white" />,
    bg: "bg-purple-600",
    title: "Quality Assurance & Testing",
    desc: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
  },
];

export function DevelopmentApproachSection() {
  return (
    <section id="howitworks" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="w-12 h-1 bg-purple-600 rounded-full mx-auto mb-4"></div>
          <p className="text-2xl text-gray-600">Our design and</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            development approach
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-xl p-6 flex items-start gap-4 hover:shadow-md transition"
            >
              {/* Icon */}
              <div className={`rounded-xl p-3 ${item.bg} shrink-0`}>
                {item.icon}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
