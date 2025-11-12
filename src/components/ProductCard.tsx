import { ShoppingBag, Heart } from 'lucide-react';

interface ProductCardProps {
  title: string;
  price: string;
  image: string;
  color: 'primary' | 'secondary' | 'accent';
}

const ProductCard = ({ title, price, image, color }: ProductCardProps) => {
  const bgColors = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    accent: 'bg-accent',
  };

  return (
    <div className="group animate-pop-in">
      {/* Comic frame border */}
      <div className="comic-border bg-card p-4 hover:scale-105 transition-transform cursor-pointer">
        {/* Image container with color frame */}
        <div className={`relative ${bgColors[color]} p-6 mb-4 pop-dots-small`}>
          <img
            src={image}
            alt={title}
            className="w-full h-64 object-cover border-4 border-foreground"
          />
          <button className="absolute top-2 right-2 bg-card border-3 border-foreground p-2 hover:scale-110 transition-transform">
            <Heart className="w-5 h-5 text-foreground" />
          </button>

          {/* POW! badge */}
          <div className="absolute -top-4 -left-4 bg-destructive border-4 border-foreground px-4 py-2 rotate-12 animate-wiggle">
            <span className="font-comic text-destructive-foreground text-sm">HOT!</span>
          </div>
        </div>

        {/* Product info */}
        <div className="space-y-3">
          <h3 className="font-handwritten text-2xl text-card-foreground">
            {title}
          </h3>
          <div className="flex items-center justify-between">
            <span className="font-comic text-3xl text-primary">
              {price}
            </span>
            <button className="comic-border-thin bg-secondary text-secondary-foreground font-handwritten px-6 py-2 text-lg hover:scale-110 transition-transform hover-bounce flex items-center gap-2">
              <ShoppingBag className="w-5 h-5" />
              加入
            </button>
          </div>
        </div>

        {/* Comic sound effect */}
        <div className="absolute -bottom-3 -right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="bg-accent border-3 border-foreground px-3 py-1">
            <span className="font-comic text-sm text-accent-foreground">ZAP!</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
