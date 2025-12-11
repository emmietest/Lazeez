import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      const nodes = Array.from(sectionRef.current.querySelectorAll('.fade-in-element')) as HTMLElement[]
      nodes.forEach((el, i) => {
        const dir = el.dataset.fadeDirection || el.dataset.fade || ''
        const from: any = { opacity: 0 }
        if (dir === 'left') from.x = -40
        else if (dir === 'right') from.x = 40
        else from.y = 50

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
      id="about"
      ref={sectionRef}
      className="py-32 px-8 bg-neutral"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="fade-in-element">
            <div className="flex items-center gap-4 mb-8">
              <Award size={48} strokeWidth={2} className="text-tertiary" />
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
                Halal-Certified Excellence
              </h2>
            </div>

            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              At Lazeez Eats, we take pride in serving authentic Mediterranean cuisine that honors
              traditional recipes and Halal standards. Every dish is prepared with the finest
              ingredients, ensuring quality, flavor, and integrity in every bite.
            </p>

            <p className="text-lg text-gray-200 mb-12 leading-relaxed">
              Our commitment to Halal certification means you can enjoy our falafel wraps, bowls,
              and sides with complete confidence. We believe great food brings people together, and
              we're honored to be part of your dining experience.
            </p>
          </div>

          {/* Image */}
          <div className="fade-in-element">
            <img
              src="https://c.animaapp.com/mj0ks0tp5Ke6qK/img/ai_4.png"
              alt="halal badge"
              className="w-full h-auto rounded-lg shadow-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
