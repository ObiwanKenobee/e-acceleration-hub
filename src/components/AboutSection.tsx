
import { Brain, Network, Rocket } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What is e/acc?</h2>
          <p className="text-lg text-white/80">
            Effective Accelerationism is the vanguard of human progress—merging AI, biotech, and frontier innovation to shape the next civilization.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Brain,
              title: "AI & Consciousness",
              description: "Advancing artificial intelligence and understanding consciousness through cutting-edge research and development."
            },
            {
              icon: Network,
              title: "Decentralized Systems",
              description: "Building the infrastructure for a more resilient and decentralized civilization."
            },
            {
              icon: Rocket,
              title: "Space Frontier",
              description: "Accelerating humanity's journey to become a multi-planetary species."
            }
          ].map((item, index) => (
            <div
              key={index}
              className="glass rounded-xl p-6 transition-all hover:translate-y-[-4px] hover:bg-white/[0.15] animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-4">
                <item.icon className="w-10 h-10 text-eacc-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-white/70">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
