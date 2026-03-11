import { Link } from 'react-router-dom';
import { MessageSquare, FileText, Phone, ArrowRight, Briefcase, Heart, ChevronRight, Globe, Clock, Upload, Shield, Brain, Sparkles } from 'lucide-react';

// Reusable benefit card components
const TherapistCard = ({ title, body }: { title: string; body: string }) => (
  <div className="bg-white border border-slate-200 rounded-xl p-5 max-w-sm w-full shadow-sm">
    <div className="flex items-center gap-3 mb-2">
      <div className="w-8 h-8 rounded-lg bg-[#0F2745]/8 flex items-center justify-center flex-shrink-0">
        <Briefcase className="h-4 w-4 text-[#0F2745]" />
      </div>
      <span className="text-xs font-semibold text-[#0F2745] uppercase tracking-wider">For You</span>
    </div>
    <p className="text-sm font-semibold text-slate-800 mb-1">{title}</p>
    <p className="text-sm text-slate-500 leading-relaxed">{body}</p>
  </div>
);

const ClientCard = ({ title, body }: { title: string; body: string }) => (
  <div className="bg-white border border-slate-200 rounded-xl p-5 max-w-sm w-full shadow-sm">
    <div className="flex items-center gap-3 mb-2">
      <div className="w-8 h-8 rounded-lg bg-pink-50 flex items-center justify-center flex-shrink-0">
        <Heart className="h-4 w-4 text-pink-600" />
      </div>
      <span className="text-xs font-semibold text-pink-600 uppercase tracking-wider">For Clients</span>
    </div>
    <p className="text-sm font-semibold text-slate-800 mb-1">{title}</p>
    <p className="text-sm text-slate-500 leading-relaxed">{body}</p>
  </div>
);

const StepIcon = ({ icon: Icon, label, showLine = true }: { icon: React.ElementType; label: string; showLine?: boolean }) => (
  <div className="flex flex-col items-center">
    <div className="w-14 h-14 rounded-full bg-[#0F2745] flex items-center justify-center shadow-lg ring-4 ring-[#0F2745]/10">
      <Icon className="h-6 w-6 text-white" />
    </div>
    <p className="text-xs font-bold text-[#0F2745] mt-3 text-center">{label}</p>
    {showLine && <div className="hidden md:block w-px h-8 bg-slate-200 mt-3" />}
  </div>
);

const Benefits = () => {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-16 md:pt-24 pb-12 md:pb-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Better for You. Better for Clients.
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            When your intake runs smarter, everyone wins. You reclaim your time between sessions and walk into every
            first meeting prepared. Your clients feel heard, supported, and cared for — from the very first interaction.
          </p>
        </div>
      </section>

      {/* ── The Journey ── */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">The Intake Journey</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Follow a client from first contact to first session — and see how every step creates value for both sides.
            </p>
          </div>

          <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-[1fr_auto_1fr] md:gap-x-8 md:gap-y-0">

            {/* Step 1: Client Reaches Out */}
            <div className="flex md:justify-end">
              <TherapistCard
                title="Never miss a new client"
                body="Intake runs 24/7 — nights, weekends, holidays. Every person who reaches out is captured the moment they find the courage to take that first step. No more lost connections to voicemail or after-hours silence."
              />
            </div>
            <StepIcon icon={Phone} label="Client Reaches Out" />
            <div className="flex md:justify-start">
              <ClientCard
                title="Get a caring response the moment you're ready"
                body="No voicemail, no waiting until Monday. Reach out at midnight when the weight feels heaviest and get an immediate, warm, judgment-free response. Your healing journey starts on your schedule."
              />
            </div>

            {/* Step 2: AI Conversation */}
            <div className="flex md:justify-end">
              <TherapistCard
                title="Every detail captured with care"
                body="Structured intake with all the information you need — no rushed intake calls between sessions, no missed details, no 20-minute screening calls. Every answer organized and ready for review."
              />
            </div>
            <StepIcon icon={MessageSquare} label="AI Conversation" />
            <div className="flex md:justify-start">
              <ClientCard
                title="Share your story in a safe, unhurried space"
                body="No intimidating forms or clinical jargon. A warm, empathetic conversation that feels safe — in English or Spanish. Share what you're going through at your own pace, in your own words."
              />
            </div>

            {/* Step 3: Therapist Reviews */}
            <div className="flex md:justify-end">
              <TherapistCard
                title="Walk into every first session fully prepared"
                body="AI-generated session prep with comorbidity flags, treatment history patterns, and suggested therapeutic approaches — before you ever sit down together. Know the person, the concerns, and the right starting point."
              />
            </div>
            <StepIcon icon={FileText} label="Therapist Reviews" />
            <div className="flex md:justify-start">
              <ClientCard
                title="Your therapist already understands your situation"
                body="No repeating yourself. No starting from zero. Your first real conversation starts where it should — with understanding, connection, and a plan for moving forward together."
              />
            </div>

            {/* Step 4: First Session */}
            <div className="flex md:justify-end">
              <TherapistCard
                title="More time for what matters"
                body="Spend your session on therapeutic work and building rapport — not gathering demographics or walking through the same screening questions. Focus on what you became a therapist to do."
              />
            </div>
            <StepIcon icon={ChevronRight} label="First Session" showLine={false} />
            <div className="flex md:justify-start">
              <ClientCard
                title="A faster path to feeling better"
                body="From 'I need to talk to someone' to a meaningful first session — faster and more comfortably than you thought possible. The depth of a specialist with the personal warmth of someone who truly cares."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Additional Benefits ── */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">Every Feature, Two Winners</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Beyond the intake journey, every capability in SoloTherapistAI creates a ripple effect — making your practice more efficient and your clients' experience more supportive and professional.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Bilingual */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#0F2745]/8 flex items-center justify-center flex-shrink-0">
                  <Globe className="h-5 w-5 text-[#0F2745]" />
                </div>
                <h3 className="text-base font-semibold">Bilingual Intake</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold text-[#0F2745] uppercase tracking-wider mb-1">For You</p>
                  <p className="text-sm text-slate-500 leading-relaxed">Serve Spanish-speaking clients without hiring bilingual staff or paying for interpreter services. Expand your practice reach.</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-pink-600 uppercase tracking-wider mb-1">For Clients</p>
                  <p className="text-sm text-slate-500 leading-relaxed">Communicate in the language you're most comfortable in — sharing vulnerable feelings is hard enough without a language barrier.</p>
                </div>
              </div>
            </div>

            {/* Phone Intake */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#0F2745]/8 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-[#0F2745]" />
                </div>
                <h3 className="text-base font-semibold">AI Phone Intake</h3>
                <span className="text-[10px] font-semibold text-[#0F2745] bg-[#0F2745]/8 px-2 py-0.5 rounded-full uppercase tracking-wide">Pro+</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold text-[#0F2745] uppercase tracking-wider mb-1">For You</p>
                  <p className="text-sm text-slate-500 leading-relaxed">A dedicated phone line that handles intake calls 24/7. Same structured summary, zero phone tag between sessions.</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-pink-600 uppercase tracking-wider mb-1">For Clients</p>
                  <p className="text-sm text-slate-500 leading-relaxed">Prefer talking over typing? Call anytime and speak naturally about what you're going through — no hold music, no phone trees.</p>
                </div>
              </div>
            </div>

            {/* Document Intelligence */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#0F2745]/8 flex items-center justify-center flex-shrink-0">
                  <Upload className="h-5 w-5 text-[#0F2745]" />
                </div>
                <h3 className="text-base font-semibold">Document Intelligence</h3>
                <span className="text-[10px] font-semibold text-[#0F2745] bg-[#0F2745]/8 px-2 py-0.5 rounded-full uppercase tracking-wide">Pro+</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold text-[#0F2745] uppercase tracking-wider mb-1">For You</p>
                  <p className="text-sm text-slate-500 leading-relaxed">AI analyzes uploaded insurance forms, referral letters, prior treatment records, and medication lists — extracting key details and clinical highlights before you review.</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-pink-600 uppercase tracking-wider mb-1">For Clients</p>
                  <p className="text-sm text-slate-500 leading-relaxed">A simple, secure way to share what's needed. Clear checklist, encrypted upload, no confusion about what to bring.</p>
                </div>
              </div>
            </div>

            {/* Crisis Detection */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#0F2745]/8 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-[#0F2745]" />
                </div>
                <h3 className="text-base font-semibold">Crisis Detection & Safety</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold text-[#0F2745] uppercase tracking-wider mb-1">For You</p>
                  <p className="text-sm text-slate-500 leading-relaxed">Built-in crisis detection surfaces the 988 Suicide & Crisis Lifeline and Crisis Text Line (text HOME to 741741) when language indicates acute distress. Risk indicators flagged in your summary.</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-pink-600 uppercase tracking-wider mb-1">For Clients</p>
                  <p className="text-sm text-slate-500 leading-relaxed">If you're in crisis, you'll be immediately connected to trained professionals who can help right now — 988 Suicide & Crisis Lifeline, available 24/7.</p>
                </div>
              </div>
            </div>

            {/* Security / HIPAA */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#0F2745]/8 flex items-center justify-center flex-shrink-0">
                  <Shield className="h-5 w-5 text-[#0F2745]" />
                </div>
                <h3 className="text-base font-semibold">Privacy & Security</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold text-[#0F2745] uppercase tracking-wider mb-1">For You</p>
                  <p className="text-sm text-slate-500 leading-relaxed">Designed with HIPAA principles in mind. End-to-end encryption, confidentiality protections, and 30-day document retention with deletion rights.</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-pink-600 uppercase tracking-wider mb-1">For Clients</p>
                  <p className="text-sm text-slate-500 leading-relaxed">Everything you share is treated with the same confidentiality as an in-person conversation. Fully encrypted, fully automated — no human sees your data.</p>
                </div>
              </div>
            </div>

            {/* Website Widget */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#0F2745]/8 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="h-5 w-5 text-[#0F2745]" />
                </div>
                <h3 className="text-base font-semibold">Website Widget</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold text-[#0F2745] uppercase tracking-wider mb-1">For You</p>
                  <p className="text-sm text-slate-500 leading-relaxed">One line of code embeds intake directly on your WordPress or any website. Capture prospective clients where they already are.</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-pink-600 uppercase tracking-wider mb-1">For Clients</p>
                  <p className="text-sm text-slate-500 leading-relaxed">Start your intake without leaving your therapist's website. No new tabs, no separate portals — just a welcoming conversation right where you are.</p>
                </div>
              </div>
            </div>

            {/* AI Intelligence Brief */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#0F2745]/8 flex items-center justify-center flex-shrink-0">
                  <Brain className="h-5 w-5 text-[#0F2745]" />
                </div>
                <h3 className="text-base font-semibold">AI Intelligence Brief</h3>
                <span className="text-[10px] font-semibold text-[#0F2745] bg-[#0F2745]/8 px-2 py-0.5 rounded-full uppercase tracking-wide">Pro+</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold text-[#0F2745] uppercase tracking-wider mb-1">For You</p>
                  <p className="text-sm text-slate-500 leading-relaxed">Every intake generates a deep-dive analysis — comorbidity flags, treatment history patterns, risk indicators, and suggested therapeutic approaches for the first session.</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-pink-600 uppercase tracking-wider mb-1">For Clients</p>
                  <p className="text-sm text-slate-500 leading-relaxed">Your therapist spots patterns and concerns you might not have connected yourself — not just what you came in for, but the full picture of what's affecting your wellbeing.</p>
                </div>
              </div>
            </div>

            {/* Marketing Kit */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#0F2745]/8 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="h-5 w-5 text-[#0F2745]" />
                </div>
                <h3 className="text-base font-semibold">Marketing Kit</h3>
                <span className="text-[10px] font-semibold text-[#0F2745] bg-[#0F2745]/8 px-2 py-0.5 rounded-full uppercase tracking-wide">Pro</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold text-[#0F2745] uppercase tracking-wider mb-1">For You</p>
                  <p className="text-sm text-slate-500 leading-relaxed">Generate branded social posts and visual cards for Facebook, Instagram, LinkedIn, and Psychology Today in seconds — no designer, no copywriter needed.</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-pink-600 uppercase tracking-wider mb-1">For Clients</p>
                  <p className="text-sm text-slate-500 leading-relaxed">Find a therapist who feels right for you — on social media, directories, and community boards. One click starts your intake journey.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Bottom Line ── */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
            The Real Difference
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            Solo therapists don't have intake coordinators, front-desk staff, or 24/7 answering services.
            Your clients don't know that — and with SoloTherapistAI, they'll never need to. Every interaction
            feels like a well-staffed practice with the personal depth and warmth only a solo practitioner can provide.
          </p>
          <p className="text-sm text-slate-400 mb-10">
            The therapeutic relationship begins before the first session.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="#waitlist"
              className="bg-[#0F2745] text-white px-8 py-3.5 rounded-md text-sm font-semibold hover:bg-[#0C2038] transition inline-flex items-center gap-2"
            >
              Join the Waitlist
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/features"
              className="text-sm font-medium text-slate-500 hover:text-slate-900 transition"
            >
              See all features →
            </Link>
          </div>
          <p className="mt-3 text-xs text-slate-400">14-day free trial · Cancel anytime</p>
        </div>
      </section>
    </>
  );
};

export default Benefits;
