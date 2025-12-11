import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MenuCard from './MenuCard';

gsap.registerPlugin(ScrollTrigger);

const menuCategories = [
  {
    id: 'sandwiches',
    title: 'Sandwiches',
    image: 'https://c.animaapp.com/mj0ks0tp5Ke6qK/img/ai_2.png',
    items: [
      { name: 'Falafel Wrap', price: '$8.99' },
      { name: 'Chicken Shawarma Wrap', price: '$9.99' },
      { name: 'Beef Shawarma Wrap', price: '$10.99' },
      { name: 'Mixed Grill Wrap', price: '$11.99' },
    ],
  },
  {
    id: 'bowls',
    title: 'Bowls',
    image: 'https://c.animaapp.com/mj0ks0tp5Ke6qK/img/ai_3.png',
    items: [
      { name: 'Falafel Bowl', price: '$10.99' },
      { name: 'Chicken Shawarma Bowl', price: '$11.99' },
      { name: 'Beef Shawarma Bowl', price: '$12.99' },
      { name: 'Mixed Grill Bowl', price: '$13.99' },
    ],
  },
  {
    id: 'dipping-bowls',
    title: 'Dipping Bowls',
    image: 'https://c.animaapp.com/mj0ks0tp5Ke6qK/img/ai_3.png',
    items: [
      { name: 'Hummus Bowl', price: '$6.99' },
      { name: 'Baba Ganoush Bowl', price: '$7.99' },
      { name: 'Tzatziki Bowl', price: '$6.99' },
      { name: 'Mixed Dip Platter', price: '$12.99' },
    ],
  },
  {
    id: 'falafel',
    title: 'Falafel',
    image: 'https://c.animaapp.com/mj0ks0tp5Ke6qK/img/ai_2.png',
    items: [
      { name: 'Falafel (6 pieces)', price: '$5.99' },
      { name: 'Falafel (12 pieces)', price: '$10.99' },
      { name: 'Falafel Platter', price: '$14.99' },
    ],
  },
  {
    id: 'sides',
    title: 'Sides',
    image: 'https://c.animaapp.com/mj0ks0tp5Ke6qK/img/ai_3.png',
    items: [
      { name: 'French Fries', price: '$3.99' },
      { name: 'Rice Pilaf', price: '$4.99' },
      { name: 'Tabbouleh Salad', price: '$5.99' },
      { name: 'Fattoush Salad', price: '$6.99' },
    ],
  },
  {
    id: 'drinks',
    title: 'Drinks',
    image: 'https://c.animaapp.com/mj0ks0tp5Ke6qK/img/ai_2.png',
    items: [
      { name: 'Soft Drinks', price: '$2.49' },
      { name: 'Fresh Lemonade', price: '$3.99' },
      { name: 'Mint Tea', price: '$2.99' },
      { name: 'Turkish Coffee', price: '$3.49' },
    ],
  },
  {
    id: 'desserts',
    title: 'Desserts',
    image: 'https://c.animaapp.com/mj0ks0tp5Ke6qK/img/ai_3.png',
    items: [
      { name: 'Baklava', price: '$4.99' },
      { name: 'Kunafa', price: '$5.99' },
      { name: 'Rice Pudding', price: '$3.99' },
      { name: 'Date Cookies', price: '$4.49' },
    ],
  },
];

const MenuSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current.querySelectorAll('.menu-card'),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);


  return (
    <section
      id="menu"
      ref={sectionRef}
      className="py-32 px-8 bg-background fade-in-on-scroll"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 data-fade-direction="bottom" className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6 fade-in-on-scroll" data-fade-delay="80">
            Our Menu
          </h2>
          <p data-fade-direction="bottom" className="text-lg text-gray-300 max-w-2xl mx-auto fade-in-on-scroll" data-fade-delay="160">
            Explore our selection of authentic Mediterranean dishes, all prepared with fresh
            ingredients and Halal-certified meats.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuCategories.map((category) => (
            <MenuCard
              key={category.id}
              category={category}
              isExpanded={false}
              onToggle={() => {}}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
