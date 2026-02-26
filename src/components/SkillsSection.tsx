import { Card } from "@/components/ui/card";
import { Code2, Database, Brain, Wrench, TrendingUp } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      color: "bg-secondary/10",
      iconColor: "text-secondary",
      skills: [
        { name: "Python" },
        { name: "HTML" },
        { name: "CSS" },
        { name: "JavaScript" },
        { name: "Node.js" },
        { name: "React.js" },
        { name: "Java" },
      ],
    },
    {
      icon: Brain,
      title: "Machine Learning",
      color: "bg-accent/10",
      iconColor: "text-accent",
      skills: [
        { name: "Scikit-learn" },
        { name: "PyTorch" },
        { name: "Data Analysis" },
        { name: "Model Training" },
      ],
    },
    {
      icon: Database,
      title: "Database",
      color: "bg-teal/10",
      iconColor: "text-teal",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "Data Modeling", level: 80 },
        { name: "Firestore Database", level: 85 },
      ],
    },
    {
      icon: Wrench,
      title: "Tools",
      color: "bg-teal/10",
      iconColor: "text-teal",
      skills: [
        { name: "Firebase" },
        { name: "Supabase" },
        { name: "Git & GitHub" },
      ],
    },
    {
      icon: TrendingUp,
      title: "Soft Skills",
      color: "bg-primary/10",
      iconColor: "text-primary",
      skills: [
        { name: "Problem Solving" },
        { name: "Analytical Thinking" },
        { name: "Time Management" },
        { name: "Communication" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit combining technical proficiency with
            essential soft skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 animate-fade-in border-0 shadow-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`${category.color} w-14 h-14 rounded-lg flex items-center justify-center`}
                >
                  <category.icon className={category.iconColor} size={28} />
                </div>
                <h3 className="text-2xl font-bold text-primary">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-foreground">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
