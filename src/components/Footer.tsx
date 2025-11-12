import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 px-6 border-t-8 border-primary">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-comic text-4xl text-primary mb-4">POP SHOP!</h3>
            <p className="font-sans text-background/80">
              复古波普艺术风格<br />
              让你与众不同
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-handwritten text-xl text-secondary mb-4">快速链接</h4>
            <ul className="space-y-2 font-sans">
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">关于我们</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">商品系列</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">配送信息</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">退换政策</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-handwritten text-xl text-secondary mb-4">客户服务</h4>
            <ul className="space-y-2 font-sans">
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">联系我们</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">常见问题</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">尺码指南</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">订单追踪</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-handwritten text-xl text-secondary mb-4">关注我们</h4>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 bg-primary border-3 border-background flex items-center justify-center hover:scale-110 transition-transform hover-bounce">
                <Instagram className="w-6 h-6 text-primary-foreground" />
              </a>
              <a href="#" className="w-12 h-12 bg-secondary border-3 border-background flex items-center justify-center hover:scale-110 transition-transform hover-bounce">
                <Facebook className="w-6 h-6 text-secondary-foreground" />
              </a>
              <a href="#" className="w-12 h-12 bg-accent border-3 border-background flex items-center justify-center hover:scale-110 transition-transform hover-bounce">
                <Twitter className="w-6 h-6 text-accent-foreground" />
              </a>
              <a href="#" className="w-12 h-12 bg-destructive border-3 border-background flex items-center justify-center hover:scale-110 transition-transform hover-bounce">
                <Youtube className="w-6 h-6 text-destructive-foreground" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t-2 border-background/20 pt-8 text-center">
          <p className="font-sans text-background/60">
            © 2024 POP SHOP! All rights reserved. Made with ❤️ and Pop Art vibes
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
