import { Check, ArrowRight, Sparkles, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Pricing = () => {
  const { t } = useTranslation();

  const STARTER_FEATURES = [0,1,2,3,4,5,6,7,8].map(i => t(`pricing.starterFeatures.${i}`));
  const PRO_EXTRAS = [0,1,2,3,4,5].map(i => t(`pricing.proFeatures.${i}`));
  const PRO_PLUS_EXTRAS = [0,1,2,3,4,5,6].map(i => t(`pricing.proPlusFeatures.${i}`));

  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">{t('pricing.title')}</h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">{t('pricing.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="border border-slate-200 flex flex-col">
            <CardHeader className="pb-2 pt-8 px-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">{t('pricing.starter')}</p>
              <div className="mb-1"><span className="text-5xl font-bold">$49</span><span className="text-muted-foreground text-lg"> {t('pricing.month')}</span></div>
              <p className="text-sm text-muted-foreground">{t('pricing.starterDesc')}</p>
            </CardHeader>
            <CardContent className="px-8 pb-8 flex flex-col flex-1">
              <ul className="space-y-3 mt-6 mb-8 flex-1">
                {STARTER_FEATURES.map((f) => (<li key={f} className="flex items-start gap-3"><Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-sm">{f}</span></li>))}
              </ul>
              <a href="/#waitlist" className="block w-full border border-[#0F2745] text-[#0F2745] text-sm font-medium px-6 py-3.5 rounded-md hover:bg-slate-50 transition text-center">{t('pricing.joinWaitlist')}</a>
              <p className="text-xs text-muted-foreground text-center mt-4">{t('pricing.comingQ3')}</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-[#0F2745] flex flex-col relative">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2"><span className="bg-[#0F2745] text-white text-xs font-semibold px-4 py-1 rounded-full">{t('pricing.mostPopular')}</span></div>
            <CardHeader className="pb-2 pt-8 px-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#0F2745] mb-3 flex items-center gap-1.5"><Sparkles className="h-3 w-3" /> {t('pricing.pro')}</p>
              <div className="mb-1"><span className="text-5xl font-bold">$79</span><span className="text-muted-foreground text-lg"> {t('pricing.month')}</span></div>
              <p className="text-sm text-muted-foreground">{t('pricing.proDesc')}</p>
            </CardHeader>
            <CardContent className="px-8 pb-8 flex flex-col flex-1">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mt-6 mb-3">{t('pricing.everythingInStarter')}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {PRO_EXTRAS.map((f) => (<li key={f} className="flex items-start gap-3"><Check className="h-4 w-4 text-[#0F2745] flex-shrink-0 mt-0.5" /><span className="text-sm font-medium">{f}</span></li>))}
              </ul>
              <a href="/#waitlist" className="block w-full bg-[#0F2745] text-white text-sm font-medium px-6 py-3.5 rounded-md hover:bg-[#0C2038] transition text-center">{t('pricing.joinWaitlist')}</a>
              <p className="text-xs text-muted-foreground text-center mt-4">{t('pricing.comingQ3')}</p>
            </CardContent>
          </Card>

          <Card className="border border-slate-200 flex flex-col relative">
            <CardHeader className="pb-2 pt-8 px-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3 flex items-center gap-1.5"><Phone className="h-3 w-3" /> {t('pricing.proPlus')}</p>
              <div className="mb-1"><span className="text-5xl font-bold">$119</span><span className="text-muted-foreground text-lg"> {t('pricing.month')}</span></div>
              <p className="text-sm text-muted-foreground">{t('pricing.proPlusDesc')}</p>
            </CardHeader>
            <CardContent className="px-8 pb-8 flex flex-col flex-1">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mt-6 mb-3">{t('pricing.everythingInPro')}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {PRO_PLUS_EXTRAS.map((f) => (<li key={f} className="flex items-start gap-3"><Check className="h-4 w-4 text-[#0F2745] flex-shrink-0 mt-0.5" /><span className="text-sm font-medium">{f}</span></li>))}
              </ul>
              <a href="/#waitlist" className="block w-full border border-[#0F2745] text-[#0F2745] text-sm font-medium px-6 py-3.5 rounded-md hover:bg-slate-50 transition text-center">{t('pricing.joinWaitlist')}</a>
              <p className="text-xs text-muted-foreground text-center mt-4">{t('pricing.comingQ3')}</p>
            </CardContent>
          </Card>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8 max-w-xl mx-auto">{t('pricing.trial')}</p>

        <div className="mt-24 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">{t('pricing.faq.title')}</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1"><AccordionTrigger>{t('pricing.faq.q1')}</AccordionTrigger><AccordionContent>{t('pricing.faq.a1')}</AccordionContent></AccordionItem>
            <AccordionItem value="item-2"><AccordionTrigger>{t('pricing.faq.q2')}</AccordionTrigger><AccordionContent>{t('pricing.faq.a2')}</AccordionContent></AccordionItem>
            <AccordionItem value="item-3"><AccordionTrigger>{t('pricing.faq.q3')}</AccordionTrigger><AccordionContent>{t('pricing.faq.a3')}</AccordionContent></AccordionItem>
            <AccordionItem value="item-4"><AccordionTrigger>{t('pricing.faq.q4')}</AccordionTrigger><AccordionContent>{t('pricing.faq.a4')}</AccordionContent></AccordionItem>
            <AccordionItem value="item-5"><AccordionTrigger>{t('pricing.faq.q5')}</AccordionTrigger><AccordionContent>{t('pricing.faq.a5')}</AccordionContent></AccordionItem>
          </Accordion>
        </div>

        <div className="text-center mt-20">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">{t('pricing.cta.title')}</h2>
          <p className="text-lg text-muted-foreground mb-8">{t('pricing.cta.subtitle')}</p>
          <a href="/#waitlist" className="bg-[#0F2745] text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-[#0C2038] transition inline-flex items-center">{t('pricing.cta.joinWaitlist')} <ArrowRight className="ml-2 h-4 w-4" /></a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
