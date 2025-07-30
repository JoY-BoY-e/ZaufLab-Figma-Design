import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const portfolioItems = [
  {
    title: "Modern Design for SAAS company",
    category: "Web Design",
    description: "We help our client to create a modern and professional website for their SAAS company with clean design and great user experience.",
    image: "/api/placeholder/400/250",
    technologies: ["Figma", "Webflow", "Custom CSS"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Website Design for SAAS company",
    category: "UI/UX Design", 
    description: "Complete website redesign with focus on conversion optimization and user engagement for a growing SAAS platform.",
    image: "/api/placeholder/400/250",
    technologies: ["React", "Next.js", "Tailwind CSS"],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Modern Design for SAAS company",
    category: "Branding",
    description: "Full brand identity and website design for a innovative SAAS company looking to establish their market presence.",
    image: "/api/placeholder/400/250", 
    technologies: ["Adobe Creative Suite", "Brand Guidelines"],
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Website Design for SAAS company", 
    category: "Web Development",
    description: "Custom development and design for a SAAS platform with complex integrations and modern architecture.",
    image: "/api/placeholder/400/250",
    technologies: ["Vue.js", "Node.js", "PostgreSQL"],
    color: "from-orange-500 to-red-500"
  }
];

export function WorkSection() {
  return (
    <section id="work" className="py-24 sm:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center rounded-full px-6 py-3 text-sm bg-purple-100 text-purple-700 mb-8 font-semibold border border-purple-200">
              Leading companies trust us
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl mb-6">
              to develop software
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              We create exceptional digital experiences for companies that want to stand out and make a lasting impact.
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="group overflow-hidden border-0 bg-white shadow-sm hover:shadow-2xl transition-all duration-500">
                <div className="relative overflow-hidden">
                  {/* Project Image Placeholder */}
                  <div className={`h-80 bg-gradient-to-br ${item.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-all duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                      <div className="text-white text-center">
                        <div className="w-20 h-20 bg-white/20 rounded-2xl mx-auto mb-6 flex items-center justify-center backdrop-blur-sm border border-white/30">
                          <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-lg font-semibold mb-2">{item.title}</p>
                        <p className="text-sm opacity-90">{item.category}</p>
                      </div>
                    </div>
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-6 left-6 right-6">
                        <Button variant="secondary" size="sm" className="w-full bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30">
                          View Project
                          <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-8">
                  <div className="mb-4">
                    <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-purple-50 text-purple-700 border border-purple-100">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 group-hover:text-purple-600 transition-colors text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700 border border-gray-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Want to see more of our work?</h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Discover how we&apos;ve helped businesses across various industries achieve their goals 
                through innovative digital solutions and creative excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="primary" 
                  size="lg"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3"
                >
                  View Full Portfolio
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3"
                >
                  Start Your Project
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
