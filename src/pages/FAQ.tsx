import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Link } from 'react-router-dom';

const SECTION_LABEL = "text-xs font-semibold uppercase tracking-widest text-slate-400 pt-10 pb-2 px-1 border-b border-slate-100 mb-2";

const FAQ = () => {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">Frequently Asked Questions</h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">Everything you need to know about SoloTherapistAI.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <p className={SECTION_LABEL}>How It Works</p>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="how-1">
              <AccordionTrigger>How does the AI patient intake work?</AccordionTrigger>
              <AccordionContent>When a prospective patient visits your intake link, they're guided through a warm, conversational intake experience. The AI gently asks about their presenting concerns, therapy history, what they're hoping to get from therapy, scheduling preferences, and insurance information. Patients respond naturally in their own words, and the system structures their answers into a clean intake summary delivered to your inbox.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="how-2">
              <AccordionTrigger>What happens after a patient submits?</AccordionTrigger>
              <AccordionContent>You receive a detailed email with contact info, presenting concerns, and AI-generated session prep notes (comorbidity flags, treatment history patterns, scheduling considerations) — visible only to you. The patient receives a warm confirmation email. All submissions are in your admin portal.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="how-3">
              <AccordionTrigger>Does the AI provide therapy or counseling?</AccordionTrigger>
              <AccordionContent>Absolutely not. The AI is strictly an intake tool — it collects information on your behalf in a warm, non-judgmental way. It never provides therapeutic advice, diagnoses, coping strategies, or crisis intervention. All clinical judgment remains entirely with you as the licensed professional.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="how-4">
              <AccordionTrigger>What happens if a patient expresses suicidal thoughts or crisis?</AccordionTrigger>
              <AccordionContent>The AI includes an automated safety detection feature. If it detects language indicating immediate risk of harm to self or others, it provides the 988 Suicide & Crisis Lifeline number and Crisis Text Line information. This is an automated safety measure — it does not replace your clinical risk assessment protocols. You will also be notified immediately via your intake summary.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="how-5">
              <AccordionTrigger>Does it support bilingual intake?</AccordionTrigger>
              <AccordionContent>Yes. Full English and Spanish support. Patients select their preferred language at the start. The entire intake is delivered in their chosen language. Your notification emails are always in English.</AccordionContent>
            </AccordionItem>
          </Accordion>

          <p className={SECTION_LABEL}>Setup & Customization</p>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="setup-1">
              <AccordionTrigger>How long does setup take?</AccordionTrigger>
              <AccordionContent>Most therapists are set up within 10 minutes. Enter your practice name, credentials, upload your logo, select therapeutic specializations, write a welcoming greeting, add custom intake questions, and connect your scheduling link.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="setup-2">
              <AccordionTrigger>What specializations are supported?</AccordionTrigger>
              <AccordionContent>Anxiety, depression, trauma/PTSD, couples/marriage, family, grief/loss, addiction/substance abuse, ADHD, eating disorders, OCD, child/adolescent, LGBTQ+ affirming, anger management, life transitions, and more. You can add custom specializations.</AccordionContent>
            </AccordionItem>
          </Accordion>

          <p className={SECTION_LABEL}>Privacy & Compliance</p>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="sec-1">
              <AccordionTrigger>Is SoloTherapistAI HIPAA compliant?</AccordionTrigger>
              <AccordionContent>SoloTherapistAI is designed with HIPAA principles in mind — all data is encrypted in transit (TLS) and at rest (AES-256), documents auto-delete after 30 days, no human reviews intake data, and the AI provider does not use your data for training. We recommend consulting with your compliance advisor to ensure it meets your specific requirements.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="sec-2">
              <AccordionTrigger>Who can see my patients' intake submissions?</AccordionTrigger>
              <AccordionContent>Only you. Intake data is scoped strictly to your account. No data is shared across accounts. The AI-generated session prep notes are for your eyes only and never shared with the patient.</AccordionContent>
            </AccordionItem>
          </Accordion>

          <p className={SECTION_LABEL}>Plans & Billing</p>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="billing-1">
              <AccordionTrigger>Do you offer a free trial?</AccordionTrigger>
              <AccordionContent>Yes. 14-day free trial with full access. Credit card required but not charged until day 15.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="billing-2">
              <AccordionTrigger>What is the difference between plans?</AccordionTrigger>
              <AccordionContent>Starter ($49/month) — 50 intakes, full intake system. Pro ($79/month) — 150 intakes + Marketing Kit. Pro+ ($119/month) — unlimited intakes + AI phone line + Document Intelligence.</AccordionContent>
            </AccordionItem>
          </Accordion>

          <p className={SECTION_LABEL}>Support</p>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="support-1">
              <AccordionTrigger>Is this only for solo practitioners?</AccordionTrigger>
              <AccordionContent>Built for solo therapists and small group practices. Each account is one therapist, one intake link, one inbox. Group practices can set up individual accounts per clinician.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="support-2">
              <AccordionTrigger>What if I need help?</AccordionTrigger>
              <AccordionContent>Reach us at <strong>sean@solosolutionsai.com</strong>. We respond within one business day. You can also use the <Link to="/contact" className="underline text-[#0F2745]">contact form</Link>.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="text-center mt-20">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-lg text-muted-foreground mb-8">We're here to help.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#waitlist" className="bg-[#0F2745] text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-[#0C2038] transition inline-flex items-center justify-center">Join the Waitlist</a>
            <Link to="/contact" className="text-sm font-medium text-gray-700 hover:text-black transition-colors inline-flex items-center justify-center px-6 py-3">Contact Us</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
