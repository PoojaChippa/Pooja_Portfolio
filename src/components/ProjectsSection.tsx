import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Leaf,
  Database,
  LineChart,
  Globe,
  Clock,
  BookOpen,
} from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Soil Fertility Prediction Using Machine Learning",
      description:
        "An intelligent system that revolutionizes agricultural practices by providing data-driven insights into soil health, helping farmers make informed decisions for sustainable farming.",
      mainIcon: Leaf,
      features: [
        {
          icon: LineChart,
          text: "Uses Gaussian Naïve Bayes for soil fertility classification",
        },
        {
          icon: Database,
          text: "Analyzes soil pH, NPK content, and moisture levels",
        },
        {
          icon: Globe,
          text: "Real-time predictions through web interface",
        },
        {
          icon: Leaf,
          text: "Promotes sustainable farming practices",
        },
      ],
      techStack: [
        "Python",
        "Scikit-learn",
        "Machine Learning",
        "Data Analysis",
        "Web Development",
      ],
      link: "https://soil-fertility-prediction-using-machine.onrender.com",
      internal: false,
    },

    // BOOKVAULT PROJECT (SECOND)
    {
      title: "BookVault – Book Management Web App",
      description:
        "A web-based book management system that allows users to organize, track, and manage their personal book collections through a clean and responsive interface.",
      mainIcon: BookOpen,
      features: [
        {
          icon: Globe,
          text: "Interactive web interface hosted on GitHub Pages",
        },
        { icon: Database, text: "Structured book organization and tracking" },
        { icon: LineChart, text: "Simple and efficient management workflow" },
      ],
      techStack: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
      link: "https://poojachippa.github.io/BookVault-Book-Management-Web-App/",
      internal: false,
    },

    // TIMEFLOW PROJECT (THIRD)
    {
      title: "TimeFlow – AI Usage Skill Evaluation",
      description:
        "A web-based tool that evaluates AI usage efficiency and skill growth through structured tracking and analysis. Designed to help users understand productivity patterns and improve workflow decisions.",
      mainIcon: Clock,
      features: [
        { icon: LineChart, text: "Tracks AI usage patterns and performance" },
        { icon: Globe, text: "Deployed via GitHub Pages" },
        { icon: Database, text: "Structured evaluation workflow" },
      ],
      techStack: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
      link: "https://poojachippa.github.io/AI-Usage-Skill-Evaluation/",
      internal: false,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* SECTION HEADER */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            AI-powered systems and modern web applications focused on real-world
            problem solving.
          </p>
        </div>

        {/* PROJECT LIST */}
        <div className="max-w-6xl mx-auto space-y-16">
          {projects.map((project, index) => {
            const MainIcon = project.mainIcon;
            const isReverse = index % 2 !== 0;

            return (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 animate-fade-in border-0 shadow-card"
              >
                <div
                  className={`grid md:grid-cols-2 items-center ${
                    isReverse ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* ICON SIDE */}
                  <div className="bg-gradient-to-br from-secondary/20 to-teal/20 p-12 flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-secondary/20 rounded-full blur-3xl"></div>
                      <div className="relative bg-white rounded-full p-12 shadow-xl">
                        <MainIcon size={120} className="text-secondary" />
                      </div>
                    </div>
                  </div>

                  {/* CONTENT SIDE */}
                  <div className="p-8 md:p-10 space-y-6">
                    <div>
                      <h3 className="text-3xl font-bold text-primary mb-3">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* FEATURES */}
                    <div className="space-y-3">
                      {project.features.map((feature, i) => {
                        const Icon = feature.icon;
                        return (
                          <div key={i} className="flex items-start gap-3">
                            <div className="bg-secondary/10 rounded-lg p-2 mt-1">
                              <Icon size={18} className="text-secondary" />
                            </div>
                            <p className="text-foreground flex-1">
                              {feature.text}
                            </p>
                          </div>
                        );
                      })}
                    </div>

                    {/* TECH STACK */}
                    <div>
                      <h4 className="font-semibold text-primary mb-3">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="px-3 py-1"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* BUTTON */}
                    <div className="pt-4">
                      {project.internal ? (
                        <Button
                          size="lg"
                          className="gap-2"
                          onClick={() =>
                            window.scrollTo({
                              top:
                                document.getElementById("contact")?.offsetTop ||
                                0,
                              behavior: "smooth",
                            })
                          }
                        >
                          Learn More
                        </Button>
                      ) : (
                        <Button
                          size="lg"
                          className="gap-2"
                          onClick={() => window.open(project.link, "_blank")}
                        >
                          Live Demo
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
