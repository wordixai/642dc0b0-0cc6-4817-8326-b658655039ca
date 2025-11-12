const Hero = () => {
  return (
    <section className="relative bg-primary pop-dots-pattern py-20 px-6 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-secondary rotate-12 animate-bounce-fun"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent rounded-full animate-wiggle"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 border-8 border-foreground rotate-45 animate-bounce-fun" style={{ animationDelay: '0.5s' }}></div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-comic text-5xl md:text-8xl text-primary-foreground mb-6 animate-pop-in">
            BOOM!
            <br />
            超级潮流来袭
          </h2>
          <p className="font-handwritten text-2xl md:text-3xl text-primary-foreground mb-8">
            复古波普 × 现代设计
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <button className="comic-border-thin bg-secondary text-secondary-foreground font-handwritten text-2xl px-10 py-4 hover:scale-110 hover:rotate-2 transition-all hover-bounce">
              立即购物
            </button>
            <button className="comic-border-thin bg-card text-card-foreground font-handwritten text-2xl px-10 py-4 hover:scale-110 hover:-rotate-2 transition-all hover-bounce">
              查看系列
            </button>
          </div>
        </div>
      </div>

      {/* Speech bubble decoration */}
      <div className="absolute top-1/4 right-10 hidden lg:block">
        <div className="relative bg-card border-4 border-foreground px-8 py-4 comic-border-thin">
          <p className="font-comic text-2xl text-card-foreground">WOW!</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
