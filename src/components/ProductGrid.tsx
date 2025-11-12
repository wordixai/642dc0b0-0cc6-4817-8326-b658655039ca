import ProductCard from './ProductCard';

const products = [
  {
    title: '复古T恤',
    price: '¥299',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop',
    color: 'primary' as const,
  },
  {
    title: '波普外套',
    price: '¥899',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop',
    color: 'secondary' as const,
  },
  {
    title: '艺术卫衣',
    price: '¥599',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop',
    color: 'accent' as const,
  },
  {
    title: '潮流裤装',
    price: '¥699',
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&h=500&fit=crop',
    color: 'secondary' as const,
  },
  {
    title: '印花背心',
    price: '¥399',
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&h=500&fit=crop',
    color: 'accent' as const,
  },
  {
    title: '复古帽子',
    price: '¥199',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500&h=500&fit=crop',
    color: 'primary' as const,
  },
];

const ProductGrid = () => {
  return (
    <section className="bg-background py-20 px-6">
      <div className="container mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 relative">
          <h2 className="font-comic text-5xl md:text-7xl text-primary-foreground mb-4 inline-block">
            热卖商品
          </h2>
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <div className="bg-primary border-4 border-foreground px-6 py-2 rotate-3 animate-bounce-fun">
              <span className="font-handwritten text-xl text-primary-foreground">NEW!</span>
            </div>
          </div>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              price={product.price}
              image={product.image}
              color={product.color}
            />
          ))}
        </div>

        {/* Load more button */}
        <div className="text-center">
          <button className="comic-border bg-primary text-primary-foreground font-handwritten text-2xl px-12 py-4 hover:scale-110 transition-transform hover-bounce">
            查看更多 →
          </button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute right-0 top-1/4 w-24 h-24 bg-primary rotate-45 opacity-20"></div>
      <div className="absolute left-0 bottom-1/4 w-32 h-32 bg-secondary rounded-full opacity-20"></div>
    </section>
  );
};

export default ProductGrid;
