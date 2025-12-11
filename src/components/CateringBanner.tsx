import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { UtensilsCrossed } from 'lucide-react';
import CateringModal from './CateringModal';

const CateringBanner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section
        id="catering"
        className="py-24 px-8 bg-gradient-to-r from-primary to-secondary fade-in-on-scroll"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <UtensilsCrossed size={64} strokeWidth={2} className="text-primary-foreground flex-shrink-0" />
              <div>
                <h2 data-fade-direction="left" className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-2 fade-in-on-scroll">
                  Catering Also Available
                </h2>
                  <p data-fade-direction="left" className="text-lg text-primary-foreground/90 fade-in-on-scroll">
                  Speak to Our Team for Details
                </p>
              </div>
            </div>

            <Button
              size="lg"
              onClick={() => setIsModalOpen(true)}
              className="bg-tertiary text-tertiary-foreground hover:bg-tertiary/90 text-base font-normal px-12 py-6 h-auto flex-shrink-0 glow soft-press"
            >
              Inquire About Catering
            </Button>
          </div>

          <div className="mt-12">
            <img
              src="https://c.animaapp.com/mj0ks0tp5Ke6qK/img/ai_5.png"
              alt="restaurant catering"
              className="w-full h-auto rounded-lg shadow-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <CateringModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default CateringBanner;
