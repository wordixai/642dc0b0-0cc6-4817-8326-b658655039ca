import { ShoppingCart, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-primary border-b-4 border-foreground py-4 px-6 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="lg:hidden hover-bounce">
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="font-comic text-3xl md:text-5xl text-primary-foreground animate-wiggle">
            POP SHOP!
          </h1>
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          <a href="#" className="font-handwritten text-xl text-primary-foreground hover:text-secondary transition-colors hover-bounce">
            新品
          </a>
          <a href="#" className="font-handwritten text-xl text-primary-foreground hover:text-secondary transition-colors hover-bounce">
            热卖
          </a>
          <a href="#" className="font-handwritten text-xl text-primary-foreground hover:text-secondary transition-colors hover-bounce">
            系列
          </a>
          <a href="#" className="font-handwritten text-xl text-primary-foreground hover:text-secondary transition-colors hover-bounce">
            关于
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="relative hover-bounce">
            <ShoppingCart className="w-7 h-7 text-primary-foreground" />
            <span className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center border-2 border-foreground">
              3
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
