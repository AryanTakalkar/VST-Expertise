import { useState } from "react";
import ProjectCard from "../components/cards/ProjectCard";
import { Building, Users, Code, Database, Cloud, Shield } from "lucide-react";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Tech Giant Expansion",
      category: "IT",
      icon: Code,
      description:
        "Provided 200+ IT professionals for a major tech company's expansion",
      stats: { placements: 200, duration: "18 months", satisfaction: "98%" },
    },
    {
      id: 2,
      title: "Banking Transformation",
      category: "Finance",
      icon: Database,
      description:
        "Staffing support for a leading bank's digital transformation",
      stats: { placements: 150, duration: "24 months", satisfaction: "95%" },
    },
    {
      id: 3,
      title: "Healthcare Staffing",
      category: "Healthcare",
      icon: Users,
      description: "Medical staff recruitment for a new hospital chain",
      stats: { placements: 300, duration: "12 months", satisfaction: "97%" },
    },
    {
      id: 4,
      title: "Manufacturing Setup",
      category: "Manufacturing",
      icon: Building,
      description: "Complete workforce solution for a new manufacturing plant",
      stats: { placements: 500, duration: "8 months", satisfaction: "96%" },
    },
    {
      id: 5,
      title: "Cloud Migration",
      category: "IT",
      icon: Cloud,
      description:
        "Specialized team recruitment for cloud infrastructure project",
      stats: { placements: 75, duration: "6 months", satisfaction: "99%" },
    },
    {
      id: 6,
      title: "Security Operations",
      category: "IT",
      icon: Shield,
      description: "Cybersecurity team setup for a financial institution",
      stats: { placements: 50, duration: "12 months", satisfaction: "97%" },
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-emerald-700 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
            Our Projects
          </h1>
          <p className="text-emerald-100 text-xl text-center max-w-3xl mx-auto">
            Explore our successful partnerships and staffing solutions across
            various industries.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {["all", "IT", "Finance", "Healthcare", "Manufacturing"].map(
              (category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-lg ${
                    filter === category
                      ? "bg-emerald-600 text-white"
                      : "bg-white text-gray-600 hover:bg-emerald-50"
                  } transition-colors`}
                >
                  {category === "all" ? "All Projects" : category}
                </button>
              )
            )}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
