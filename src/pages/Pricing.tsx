import { Check, ArrowRight, Sparkles, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const STARTER_FEATURES = [
  "AI client intake — conversational chat and structured form",
  "Bilingual support (English & Spanish)",
  "Branded intake link — vanity URL, your logo and greeting",
  "Structured intake summary delivered to your inbox",
  "AI clinical insights flagging presenting concerns and session prep notes",
  "Therapist + client email notifications",
  "Consultation invite via Calendly or scheduling link",
  "Admin portal — review and manage all submissions",
  "Up to 50 client intakes per month",
];

const PRO_EXTRAS = [
  "Up to 150 client intakes per month",
  "Marketing Kit — generate social media posts and branded visual cards",
  "Platform-ready post copy for Facebook, Instagram, LinkedIn & Nextdoor",
  "Branded image cards sized for every platform (7 formats)",
  "Website banner downloads — leaderboard and rectangle",
  "English and Spanish content generation",
];

const PRO_PLUS_EXTRAS = [
  "Unlimited client intakes per month",
  "Dedicated AI phone intake line — your own local number",
  "Clients speak naturally with your AI assistant — 24/7, in a warm, safe environment",
  "Document Intelligence — request, receive, and AI-analyze clinical documents",
  "AI extracts treatment history, medication lists, diagnoses, and insurance details",
  "Secure encrypted uploads with 30-day retention",
  "Phone number displayed in Marketing Kit materials",
];

const Pricing = () => {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">Simple, Transparent Pricing</h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">Start with the intake automation you need. Add the marketing tools when you're ready to grow your practice.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="border border-slate-200 flex flex-col">
            <CardHeader className="pb-2 pt-8 px-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">Starter</p>
              <div className="mb-1"><span className="text-5xl font-bold">$49</span><span className="text-muted-foreground text-lg"> /month</span></div>
              <p className="text-sm text-muted-foreground">per therapist · 50 intakes/month</p>
            </CardHeader>
            <CardContent className="px-8 pb-8 flex flex-col flex-1">
              <ul className="space-y-3 mt-6 mb-8 flex-1">
                {STARTER_FEATURES.map((f) => (<li key={f} className="flex items-start gap-3"><Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-sm">{f}</span></li>))}
              </ul>
              <a href="#waitlist" className="block w-full border border-[#0F2745] text-[#0F2745] text-sm font-medium px-6 py-3.5 rounded-md hover:bg-slate-50 transition text-center">Join the Waitlist</a>
              <p className="text-xs text-muted-foreground text-center mt-4">Coming Q3 2026</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-[#0F2745] flex flex-col relative">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2"><span className="bg-[#0F2745] text-white text-xs font-semibold px-4 py-1 rounded-full">Most Popular</span></div>
            <CardHeader className="pb-2 pt-8 px-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#0F2745] mb-3 flex items-center gap-1.5"><Sparkles className="h-3 w-3" /> Pro</p>
              <div className="mb-1"><span className="text-5xl font-bold">$79</span><span className="text-muted-foreground text-lg"> /month</span></div>
              <p className="text-sm text-muted-foreground">per therapist · 150 intakes/month</p>
            </CardHeader>
            <CardContent className="px-8 pb-8 flex flex-col flex-1">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mt-6 mb-3">Everything in Starter, plus:</p>
              <ul className="space-y-3 mb-8 flex-1">
                {PRO_EXTRAS.map((f) => (<li key={f} className="flex items-start gap-3"><Check className="h-4 w-4 text-[#0F2745] flex-shrink-0 mt-0.5" /><span className="text-sm font-medium">{f}</span></li>))}
              </ul>
              <a href="#waitlist" className="block w-full bg-[#0F2745] text-white text-sm font-medium px-6 py-3.5 rounded-md hover:bg-[#0C2038] transition text-center">Join the Waitlist</a>
              <p className="text-xs text-muted-foreground text-center mt-4">Coming Q3 2026</p>
            </CardContent>
          </Card>

          <Card className="border border-slate-200 flex flex-col relative">
            <CardHeader className="pb-2 pt-8 px-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-1.5"><Phone className="h-3 w-3" /> Pro+</p>
              <div className="mb-1"><span className="text-5xl font-bold">$119</span><span className="text-muted-foreground text-lg"> /month</span></div>
              <p className="text-sm text-muted-foreground">per therapist · unlimited intakes</p>
            </CardHeader>
            <CardContent className="px-8 pb-8 flex flex-col flex-1">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mt-6 mb-3">Everything in Pro, plus:</p>
              <ul className="space-y-3 mb-8 flex-1">
                {PRO_PLUS_EXTRAS.map((f) => (<li key={f} className="flex items-start gap-3"><Check className="h-4 w-4 text-[#0F2745] flex-shrink-0 mt-0.5" /><span className="text-sm font-medium">{f}</span></li>))}
              </ul>
              <a href="#waitlist" className="block w-full border border-[#0F2745] text-[#0F2745] text-sm font-medium px-6 py-3.5 rounded-md hover:bg-slate-50 transition text-center">Join the Waitlist</a>
              <p className="text-xs text-muted-foreground text-center mt-4">Coming Q3 2026</p>
            </CardContent>
          </Card>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8 max-w-xl mx-auto">All plans include a 14-day free trial. Your card is required at signup but you won't be charged until day 15.</p>

        <div className="mt-24 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1"><AccordionTrigger>What's included in the free trial?</AccordionTrigger><AccordionContent>Your 14-day free trial gives you full access to everything. A credit card is required at signup, but you won't be charged until day 15.</AccordionContent></AccordionItem>
            <AccordionItem value="item-2"><AccordionTrigger>Does the AI provide therapy or counseling?</AccordionTrigger><AccordionContent>No. The AI assistant is strictly an intake tool — it collects information and presenting concerns from prospective clients on your behalf. It never provides therapeutic advice, diagnoses, or crisis intervention. If it detects language indicating immediate risk, it provides 988 Suicide & Crisis Lifeline information as an automated safety measure.</AccordionContent></AccordionItem>
            <AccordionItem value="item-3"><AccordionTrigger>Is SoloTherapistAI HIPAA compliant?</AccordionTrigger><AccordionContent>SoloTherapistAI is designed with HIPAA principles in mind — all data is encrypted in transit and at rest, documents auto-delete after 30 days, and no human reviews intake data. We recommend consulting with your compliance advisor to ensure it meets your specific practice requirements.</AccordionContent></AccordionItem>
            <AccordionItem value="item-4"><AccordionTrigger>Can I switch plans?</AccordionTrigger><AccordionContent>Yes. Upgrade anytime with prorated billing. Downgrades take effect at your next billing period.</AccordionContent></AccordionItem>
            <AccordionItem value="item-5"><AccordionTrigger>Can I cancel anytime?</AccordionTrigger><AccordionContent>Yes. Cancel from your account settings. Access continues through the end of your billing period.</AccordionContent></AccordionItem>
          </Accordion>
        </div>

        <div className="text-center mt-20">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8">SoloTherapistAI is coming Q3 2026. Join the waitlist to be first in line.</p>
          <a href="#waitlist" className="bg-[#0F2745] text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-[#0C2038] transition inline-flex items-center">Join the Waitlist <ArrowRight className="ml-2 h-4 w-4" /></a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
