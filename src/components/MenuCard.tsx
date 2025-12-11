import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface MenuItem {
  name: string;
  price: string;
}

interface MenuCategory {
  id: string;
  title: string;
  image: string;
  items: MenuItem[];
}

interface MenuCardProps {
  category: MenuCategory;
  isExpanded: boolean;
  onToggle: () => void;
}

const MenuCard = ({ category }: MenuCardProps) => {
  return (
    <div className="menu-card perspective-1000 h-[400px]">
      <motion.div
        className="relative w-full h-full transition-transform duration-700 transform-style-3d cursor-pointer"
        whileHover={{ rotateY: 180 }}
      >
        {/* Front of Card */}
        <Card className="absolute inset-0 backface-hidden bg-card border-2 border-border hover:border-primary transition-colors duration-300 overflow-hidden">
          <CardHeader className="p-0">
            <div className="relative h-full overflow-hidden">
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <CardTitle className="absolute bottom-4 left-4 font-heading text-2xl font-bold text-gray-50">
                {category.title}
              </CardTitle>
            </div>
          </CardHeader>
        </Card>

        {/* Back of Card */}
        <Card className="absolute inset-0 backface-hidden bg-card border-2 border-primary overflow-hidden rotate-y-180">
          <CardContent className="p-6 h-full overflow-y-auto">
            <CardTitle className="font-heading text-2xl font-bold text-foreground mb-6">
              {category.title}
            </CardTitle>
            <div className="space-y-4">
              {category.items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between pb-3 border-b border-border last:border-0"
                >
                  <span className="text-base text-foreground">{item.name}</span>
                  <span className="text-base font-semibold text-tertiary">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default MenuCard;
