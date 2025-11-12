import { Truck, Shield, Sparkles, Zap } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: '闪电配送',
    description: '全国包邮',
    color: 'bg-primary',
  },
  {
    icon: Shield,
    title: '品质保证',
    description: '正品保障',
    color: 'bg-secondary',
  },
  {
    icon: Sparkles,
    title: '独家设计',
    description: '限量发售',
    color: 'bg-accent',
  },
  {
    icon: Zap,
    title: '超快退换',
    description: '7天无忧',
    color: 'bg-primary',
  },
];

const Features = () => {
  return (
    <section className="bg-secondary pop-dots-pattern py-20 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center animate-pop-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="comic-border-thin bg-card p-8 hover:scale-105 transition-transform hover-bounce">
                  <div className={`${feature.color} w-20 h-20 mx-auto mb-6 flex items-center justify-center border-4 border-foreground rotate-6`}>
                    <Icon className="w-10 h-10 text-foreground" />
                  </div>
                  <h3 className="font-handwritten text-2xl text-card-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="font-sans text-lg text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
