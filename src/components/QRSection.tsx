import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Smartphone } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const QRSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      const nodes = Array.from(sectionRef.current.querySelectorAll('.fade-in-element')) as HTMLElement[]
      nodes.forEach((el, i) => {
        const dir = el.dataset.fadeDirection || el.dataset.fade || ''
        const from: any = { opacity: 0 }
        if (dir === 'left') from.x = -36
        else if (dir === 'right') from.x = 36
        else from.y = 40

        gsap.fromTo(
          el,
          from,
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            delay: i * 0.12,
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        )
      })
    }
  }, []);

  return (
    <section
      id="order"
      ref={sectionRef}
      className="py-32 px-8 bg-neutral"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* QR Code */}
          <div className="fade-in-element flex justify-center">
            <div className="bg-gray-50 p-8 rounded-lg shadow-2xl">
              <img
                src="/qr-code.png"
                alt="QR Code for ordering"
                className="w-80 h-80 object-contain"
                loading="lazy"
              />
            </div>
          </div>

          {/* Content */}
          <div className="fade-in-element">
            <div className="flex items-center gap-4 mb-8">
              <Smartphone size={48} strokeWidth={2} className="text-tertiary" />
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
                Order Online Now
              </h2>
            </div>

            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              Skip the wait and order your favorite Mediterranean dishes online. Simply scan the QR
              code with your phone or click the button below to get started.
            </p>

            <p className="text-lg text-gray-200 mb-12 leading-relaxed">
              Enjoy the convenience of online ordering with quick pickup or delivery options. Your
              fresh, Halal-certified meal is just a few clicks away.
            </p>

            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-base font-normal px-12 py-6 h-auto glow soft-press"
            >
              Order Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QRSection;
