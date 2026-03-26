import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const SECTION_LABEL = "text-xs font-semibold uppercase tracking-widest text-slate-400 pt-10 pb-2 px-1 border-b border-slate-100 mb-2";

const FAQ = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">{t('faq.title')}</h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">{t('faq.subtitle')}</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <p className={SECTION_LABEL}>{t('faq.section.howItWorks')}</p>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="how-1">
              <AccordionTrigger>{t('faq.how1.q')}</AccordionTrigger>
              <AccordionContent>{t('faq.how1.a')}</AccordionContent>
            </AccordionItem>
            <AccordionItem value="how-2">
              <AccordionTrigger>{t('faq.how2.q')}</AccordionTrigger>
              <AccordionContent>{t('faq.how2.a')}</AccordionContent>
            </AccordionItem>
            <AccordionItem value="how-3">
              <AccordionTrigger>{t('faq.how3.q')}</AccordionTrigger>
              <AccordionContent>{t('faq.how3.a')}</AccordionContent>
            </AccordionItem>
            <AccordionItem value="how-4">
              <AccordionTrigger>{t('faq.how4.q')}</AccordionTrigger>
              <AccordionContent>{t('faq.how4.a')}</AccordionContent>
            </AccordionItem>
            <AccordionItem value="how-5">
              <AccordionTrigger>{t('faq.how5.q')}</AccordionTrigger>
              <AccordionContent>{t('faq.how5.a')}</AccordionContent>
            </AccordionItem>
          </Accordion>

          <p className={SECTION_LABEL}>{t('faq.section.setup')}</p>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="setup-1">
              <AccordionTrigger>{t('faq.setup1.q')}</AccordionTrigger>
              <AccordionContent>{t('faq.setup1.a')}</AccordionContent>
            </AccordionItem>
            <AccordionItem value="setup-2">
              <AccordionTrigger>{t('faq.setup2.q')}</AccordionTrigger>
              <AccordionContent>{t('faq.setup2.a')}</AccordionContent>
            </AccordionItem>
          </Accordion>

          <p className={SECTION_LABEL}>{t('faq.section.privacy')}</p>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="sec-1">
              <AccordionTrigger>{t('faq.sec1.q')}</AccordionTrigger>
              <AccordionContent>{t('faq.sec1.a')}</AccordionContent>
            </AccordionItem>
            <AccordionItem value="sec-2">
              <AccordionTrigger>{t('faq.sec2.q')}</AccordionTrigger>
              <AccordionContent>{t('faq.sec2.a')}</AccordionContent>
            </AccordionItem>
          </Accordion>

          <p className={SECTION_LABEL}>{t('faq.section.billing')}</p>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="billing-1">
              <AccordionTrigger>{t('faq.billing1.q')}</AccordionTrigger>
              <AccordionContent>{t('faq.billing1.a')}</AccordionContent>
            </AccordionItem>
            <AccordionItem value="billing-2">
              <AccordionTrigger>{t('faq.billing2.q')}</AccordionTrigger>
              <AccordionContent>{t('faq.billing2.a')}</AccordionContent>
            </AccordionItem>
          </Accordion>

          <p className={SECTION_LABEL}>{t('faq.section.support')}</p>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="support-1">
              <AccordionTrigger>{t('faq.support1.q')}</AccordionTrigger>
              <AccordionContent>{t('faq.support1.a')}</AccordionContent>
            </AccordionItem>
            <AccordionItem value="support-2">
              <AccordionTrigger>{t('faq.support2.q')}</AccordionTrigger>
              <AccordionContent><span dangerouslySetInnerHTML={{ __html: t('faq.support2.a') }} /></AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="text-center mt-20">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">{t('faq.cta.title')}</h2>
          <p className="text-lg text-muted-foreground mb-8">{t('faq.cta.subtitle')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#waitlist" className="bg-[#0F2745] text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-[#0C2038] transition inline-flex items-center justify-center">{t('faq.cta.joinWaitlist')}</a>
            <Link to="/contact" className="text-sm font-medium text-gray-700 hover:text-black transition-colors inline-flex items-center justify-center px-6 py-3">{t('faq.cta.contactUs')}</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
