import { Card, CardContent } from "@/components/ui/card";

export default function FeaturesSection() {
  const features = [
    {
      number: "01",
      title: "Interactive Tutorials",
      description:
        "Master machine learning concepts with our engaging, hands-on tutorials. Progress at your own pace and build a solid foundation in AI and ML.",
      bgColor: "bg-orange-50",
    },
    {
      number: "02",
      title: "Collaborative Projects",
      description:
        "Work on real-world ML projects with peers. Share ideas, code, and insights in our collaborative environment designed for learning and growth.",
      bgColor: "bg-green-50",
    },
    {
      number: "03",
      title: "Community",
      description:
        "Connect with a global community of ML enthusiasts. Share knowledge, ask questions, and stay updated with the latest trends in machine learning.",
      bgColor: "bg-purple-50",
    },
  ];

  return (
    <section className="py-16 px-4 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-pink-600 mb-2">Advantages</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Empowering Tools for Machine Learning Enthusiasts
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Unlock the potential of machine learning with cutting-edge features
            tailored to simplify workflows, foster collaboration, and accelerate
            your learning journey from data to deployment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className={`border-none ${feature.bgColor}`}>
              <CardContent className="p-6">
                <div className="text-xl font-semibold mb-4">
                  {feature.number}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>

                {/* Placeholder for feature-specific UI */}
                <div className="mt-6 h-48 bg-white/50 rounded-lg"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
