import { Mail } from 'lucide-react';

const Newsletter = () => {
  return (
    <section className="bg-accent py-20 px-6 relative overflow-hidden">
      {/* Starburst decoration */}
      <div className="absolute inset-0 starburst-bg opacity-30"></div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Comic speech bubble */}
          <div className="text-center mb-12 relative">
            <div className="comic-border bg-card p-8 relative">
              <h2 className="font-comic text-4xl md:text-6xl text-card-foreground mb-4">
                别错过！
              </h2>
              <p className="font-handwritten text-xl md:text-2xl text-muted-foreground">
                订阅获取独家优惠和新品信息
              </p>

              {/* Speech bubble tail */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[30px] border-t-foreground"></div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-[-26px]">
                  <div className="w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-t-[26px] border-t-card"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter form */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center mt-16">
            <div className="relative flex-1 max-w-md w-full">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-6 h-6" />
              <input
                type="email"
                placeholder="输入你的邮箱"
                className="w-full pl-14 pr-4 py-4 border-4 border-foreground text-lg font-sans focus:outline-none focus:ring-4 focus:ring-primary"
              />
            </div>
            <button className="comic-border bg-primary text-primary-foreground font-handwritten text-xl px-10 py-4 hover:scale-110 transition-transform hover-bounce whitespace-nowrap">
              订阅吧！
            </button>
          </div>

          {/* Decorative elements */}
          <div className="flex justify-center gap-8 mt-12">
            <div className="comic-border-thin bg-secondary px-6 py-3 rotate-3 animate-wiggle">
              <span className="font-comic text-secondary-foreground text-xl">BOOM!</span>
            </div>
            <div className="comic-border-thin bg-primary px-6 py-3 -rotate-3 animate-wiggle" style={{ animationDelay: '0.5s' }}>
              <span className="font-comic text-primary-foreground text-xl">POW!</span>
            </div>
            <div className="comic-border-thin bg-destructive px-6 py-3 rotate-3 animate-wiggle" style={{ animationDelay: '1s' }}>
              <span className="font-comic text-destructive-foreground text-xl">ZAP!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
