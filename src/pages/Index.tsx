import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, FileText, Sparkles, Phone, Clock, UserX, ArrowRight, Check, Lock, Globe, Mail, Zap, Upload, Briefcase, Heart, ChevronRight, Brain } from 'lucide-react';

// ─── Hero Illustration ────────────────────────────────────────────────────────

const HeroIllustration = () => (
  <div className="relative">
    {/* Main chat panel */}
    <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-200 ring-1 ring-slate-900/5 bg-slate-50">
      <div className="bg-[#0F2745] px-4 py-3 flex items-center gap-3">
        <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
          <span className="text-white text-[10px] font-bold">CH</span>
        </div>
        <div>
          <p className="text-white text-xs font-semibold leading-tight">River</p>
          <p className="text-white/60 text-[10px] leading-tight">Calm Harbor Therapy · Intake Assistant</p>
        </div>
        <div className="ml-auto flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-pink-400" />
          <span className="text-white/60 text-[10px]">Online</span>
        </div>
      </div>
      <div className="px-4 py-4 space-y-3 bg-slate-50">
        <div className="flex gap-2 items-end">
          <div className="w-6 h-6 rounded-full bg-[#0F2745] flex-shrink-0 flex items-center justify-center mb-0.5">
            <span className="text-white text-[8px] font-bold">R</span>
          </div>
          <div className="bg-white rounded-2xl rounded-bl-sm px-3 py-2 shadow-sm border border-slate-100 max-w-[80%]">
            <p className="text-xs text-slate-700 leading-relaxed">Hi, I'm River with Calm Harbor Therapy. I'm here to help gather some information before your first session. Everything you share is confidential.</p>
          </div>
        </div>
        <div className="flex gap-2 items-end">
          <div className="w-6 h-6 rounded-full bg-[#0F2745] flex-shrink-0 flex items-center justify-center mb-0.5">
            <span className="text-white text-[8px] font-bold">R</span>
          </div>
          <div className="bg-white rounded-2xl rounded-bl-sm px-3 py-2 shadow-sm border border-slate-100 max-w-[80%]">
            <p className="text-xs text-slate-700 leading-relaxed">What's been going on that brought you to reach out today?</p>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-[#0F2745] rounded-2xl rounded-br-sm px-3 py-2 max-w-[72%]">
            <p className="text-xs text-white leading-relaxed">I've been dealing with a lot of anxiety lately and some relationship stress. It's been hard to sleep and I just feel overwhelmed all the time.</p>
          </div>
        </div>
        <div className="flex gap-2 items-end">
          <div className="w-6 h-6 rounded-full bg-[#0F2745] flex-shrink-0 flex items-center justify-center mb-0.5">
            <span className="text-white text-[8px] font-bold">R</span>
          </div>
          <div className="bg-white rounded-2xl rounded-bl-sm px-3 py-2 shadow-sm border border-slate-100 max-w-[80%]">
            <p className="text-xs text-slate-700 leading-relaxed">Thank you for reaching out — that takes courage. I'd like to understand more about what you're going through. How long have you been experiencing these feelings?</p>
          </div>
        </div>
        <div className="flex gap-2 items-end">
          <div className="w-6 h-6 rounded-full bg-[#0F2745] flex-shrink-0 flex items-center justify-center mb-0.5">
            <span className="text-white text-[8px] font-bold">R</span>
          </div>
          <div className="bg-white rounded-2xl rounded-bl-sm px-3 py-2.5 shadow-sm border border-slate-100">
            <div className="flex gap-1 items-center">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-300 animate-bounce" style={{ animationDelay: '0ms' }} />
              <div className="w-1.5 h-1.5 rounded-full bg-slate-300 animate-bounce" style={{ animationDelay: '150ms' }} />
              <div className="w-1.5 h-1.5 rounded-full bg-slate-300 animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
          </div>
        </div>
      </div>
      <div className="px-3 py-3 bg-white border-t border-slate-100 flex items-center gap-2">
        <div className="flex-1 bg-slate-50 rounded-full px-4 py-2 border border-slate-200">
          <p className="text-[11px] text-slate-400">Type your response…</p>
        </div>
        <div className="w-8 h-8 rounded-full bg-[#0F2745] flex items-center justify-center flex-shrink-0">
          <svg className="w-3.5 h-3.5 text-white fill-current" viewBox="0 0 24 24"><path d="M2 21l21-9L2 3v7l15 2-15 2v7z" /></svg>
        </div>
      </div>
    </div>

    {/* Floating therapist notification card */}
    <div className="absolute -bottom-5 -right-5 bg-white rounded-xl shadow-xl border border-slate-200 p-3.5 w-64 ring-1 ring-slate-900/5">
      <div className="flex items-start gap-2.5">
        <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 mt-0.5">
          <Mail className="w-4 h-4 text-pink-600" />
        </div>
        <div className="min-w-0">
          <p className="text-xs font-semibold text-slate-800 leading-tight">New intake received</p>
          <p className="text-[11px] text-slate-500 mt-0.5 leading-tight">Alex Morgan · Anxiety & Work Stress · Prefers evenings</p>
          <div className="mt-2 bg-amber-50 border border-amber-100 rounded-md px-2 py-1">
            <p className="text-[10px] text-amber-800 leading-snug font-medium">AI: Mentions sleep disruption + appetite changes — screen for depression comorbidity</p>
          </div>
        </div>
      </div>
    </div>

    <div className="absolute -inset-4 bg-[#0F2745]/5 rounded-2xl blur-2xl -z-10" />
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

const Index = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, vertical: 'SoloTherapistAI' }),
      });
    } catch {}
    setSubmitted(true);
  };

  return (
    <>
      {/* ── 1. Hero ─────────────────────────────────────────────────────────── */}
      <section className="pt-16 md:pt-24 pb-12 md:pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 items-center gap-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#0F2745] bg-[#0F2745]/8 px-3 py-1.5 rounded-full uppercase tracking-widest">
                  <Zap className="h-3 w-3" />
                  AI-Powered Therapy Intake
                </div>
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-[#EC4899] px-3 py-1.5 rounded-full uppercase tracking-widest">
                  Coming Q3 2026
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1]">
                Your Next Client Intake Runs Itself.
              </h1>
              <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed">
                SoloTherapistAI handles client intake by chat, phone, or website widget — warmly gathering presenting concerns, history, and preferences — and delivers a structured session prep summary with AI clinical insights — so you're ready before the first session begins.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a
                  href="#waitlist"
                  className="bg-[#0F2745] text-white px-7 py-3.5 rounded-md text-sm font-medium hover:bg-[#0C2038] transition inline-flex items-center gap-2"
                >
                  Join the Waitlist
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  to="/features"
                  className="text-sm font-medium text-slate-500 hover:text-slate-900 transition"
                >
                  See all features →
                </Link>
              </div>
              <p className="mt-3 text-xs text-slate-400">Be the first to know when we launch</p>
            </div>
            <div className="relative lg:pl-8">
              <HeroIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Trust bar ────────────────────────────────────────────────────── */}
      <section className="border-y border-slate-100 bg-slate-50/60 py-4">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {[
              { icon: Lock,         label: 'Designed with HIPAA principles in mind' },
              { icon: Globe,        label: 'English & Spanish'          },
              { icon: Phone,        label: 'Chat, phone & widget intake' },
              { icon: Mail,         label: 'Instant email alerts'       },
              { icon: Zap,          label: 'Setup in under 10 minutes'  },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-slate-500">
                <Icon className="h-3.5 w-3.5 text-[#0F2745]/60 flex-shrink-0" />
                <span className="text-xs font-medium whitespace-nowrap">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Pain section ─────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#0F2745]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">Sound familiar?</h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Solo therapists lose clients and burn precious energy on the same three problems every day.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Phone,
                title: 'Phone tag with anxious clients',
                body: 'Someone works up the courage to call your practice. They get voicemail. By the time you call back between sessions, the moment has passed — they never return the call, or they\'ve already reached out to someone else.',
              },
              {
                icon: Clock,
                title: 'Intake paperwork overwhelms new clients',
                body: 'A new client arrives to their first session carrying a clipboard of forms they barely understand. You spend half the session gathering basics instead of building rapport and understanding their needs.',
              },
              {
                icon: UserX,
                title: 'After-hours reach-outs go unanswered',
                body: 'Someone is struggling at 11pm on a Tuesday. They find your website, ready to take the first step — but there\'s no way to connect. By morning, the window of motivation has closed.',
              },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-white/8 border border-white/10 rounded-xl p-6">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5 text-white/70" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{title}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-white/40 text-sm mt-10">
            SoloTherapistAI handles all three — automatically.
          </p>
        </div>
      </section>

      {/* ── 4. Feature highlights ───────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Everything you need. Nothing you don't.</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Six powerful capabilities that transform how solo therapists welcome new clients.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: MessageSquare,
                title: 'AI Client Intake',
                body: 'A warm, branded AI assistant gathers presenting concerns, history, and preferences — via chat, form, or website widget, in English or Spanish — while you focus on your current clients.',
                link: '/features#ai-intake',
              },
              {
                icon: Phone,
                title: 'AI Phone Intake',
                badge: 'Pro+',
                body: 'A dedicated phone number where clients speak naturally with your AI assistant. Every call becomes a structured session prep summary — 24/7, no hold music, no missed opportunities.',
                link: '/features#phone-intake',
              },
              {
                icon: FileText,
                title: 'Session Prep & AI Notes',
                body: 'Every intake lands in your inbox as a structured summary with AI-generated clinical insights: presenting concerns, comorbidity flags, and suggested therapeutic approaches.',
                link: '/features#session-prep',
              },
              {
                icon: Upload,
                title: 'Document Intelligence',
                badge: 'Pro+',
                body: 'Request insurance forms, referral letters, prior treatment records, and medication lists from clients. Receive secure uploads and get AI-powered summaries with clinically relevant highlights.',
                link: '/features#document-intelligence',
              },
              {
                icon: Brain,
                title: 'AI Intelligence Brief',
                badge: 'Pro+',
                body: 'Every intake generates a deep-dive analysis — comorbidity flags, treatment history patterns, risk indicators, and suggested therapeutic considerations for your first session.',
                link: '/features#intelligence-brief',
              },
              {
                icon: Sparkles,
                title: 'Marketing Kit',
                badge: 'Pro',
                body: 'Generate platform-ready social posts and branded visual cards about mental health awareness, self-care tips, and practice visibility — for Facebook, Instagram, LinkedIn, and Psychology Today.',
                link: '/features#marketing-kit',
              },
            ].map(({ icon: Icon, title, badge, body, link }) => (
              <div key={title} className="group rounded-xl border border-slate-200 bg-white p-6 hover:shadow-md hover:border-slate-300 transition-all">
                <div className="w-10 h-10 rounded-lg bg-[#0F2745]/8 flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5 text-[#0F2745]" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-base font-semibold">{title}</h3>
                  {badge && (
                    <span className="text-[10px] font-semibold text-[#0F2745] bg-[#0F2745]/8 px-2 py-0.5 rounded-full uppercase tracking-wide">{badge}</span>
                  )}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{body}</p>
                <Link to={link} className="text-xs font-semibold text-[#0F2745] hover:underline inline-flex items-center gap-1">
                  Learn more <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. How It Works ─────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-slate-50 border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Up and running in minutes</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From first login to receiving your first intake — three simple steps.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10 relative">
            {/* Connecting line — desktop only */}
            <div className="hidden md:block absolute top-8 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-slate-200" />
            {[
              {
                number: '01',
                icon: Zap,
                title: 'Set up your profile',
                description: 'Upload your logo, name your assistant, add your specialties and intake questions, and get your unique client intake link — in under 10 minutes.',
              },
              {
                number: '02',
                icon: MessageSquare,
                title: 'Share your intake link',
                description: 'Add it to your website, Psychology Today profile, email signature, or anywhere you connect with prospective clients. Your AI handles every conversation — 24/7.',
              },
              {
                number: '03',
                icon: FileText,
                title: 'Review and prepare',
                description: 'Get a structured summary with AI clinical insights the moment a client submits. Know the presenting concerns, history, and the right questions before your first session.',
              },
            ].map(({ number, icon: Icon, title, description }) => (
              <div key={number} className="flex flex-col items-center text-center relative">
                <div className="w-16 h-16 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center mb-5 shadow-sm relative z-10">
                  <Icon className="h-6 w-6 text-[#0F2745]" />
                </div>
                <div className="text-xs font-bold text-slate-300 mb-2 tracking-widest">{number}</div>
                <h3 className="text-base font-semibold mb-3">{title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Dual-Benefit Section ──────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Better for You. Better for Clients.
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              When your intake runs smarter, everyone wins — you reclaim your time between sessions, and clients feel heard and supported from the very first interaction.
            </p>
          </div>

          {/* Process flow infographic */}
          <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-[1fr_auto_1fr] md:gap-x-8 md:gap-y-0">

            {/* ── Step 1: Client Reaches Out ── */}
            <div className="flex md:justify-end">
              <div className="bg-white border border-slate-200 rounded-xl p-5 max-w-sm w-full shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-[#0F2745]/8 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="h-4 w-4 text-[#0F2745]" />
                  </div>
                  <span className="text-xs font-semibold text-[#0F2745] uppercase tracking-wider">For You</span>
                </div>
                <p className="text-sm font-semibold text-slate-800 mb-1">Never miss a new client</p>
                <p className="text-sm text-slate-500 leading-relaxed">Intake runs 24/7 — nights, weekends, holidays. Every person who reaches out is captured the moment they find the courage to take that first step.</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-[#0F2745] flex items-center justify-center shadow-lg ring-4 ring-[#0F2745]/10">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <p className="text-xs font-bold text-[#0F2745] mt-3 text-center">Client Reaches Out</p>
              <div className="hidden md:block w-px h-8 bg-slate-200 mt-3" />
            </div>
            <div className="flex md:justify-start">
              <div className="bg-white border border-slate-200 rounded-xl p-5 max-w-sm w-full shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-pink-50 flex items-center justify-center flex-shrink-0">
                    <Heart className="h-4 w-4 text-pink-600" />
                  </div>
                  <span className="text-xs font-semibold text-pink-600 uppercase tracking-wider">For Clients</span>
                </div>
                <p className="text-sm font-semibold text-slate-800 mb-1">Get a caring response the moment you're ready</p>
                <p className="text-sm text-slate-500 leading-relaxed">No voicemail, no waiting until Monday. Reach out at midnight when the weight feels heaviest and receive an immediate, warm, judgment-free response.</p>
              </div>
            </div>

            {/* ── Step 2: AI Intake Conversation ── */}
            <div className="flex md:justify-end">
              <div className="bg-white border border-slate-200 rounded-xl p-5 max-w-sm w-full shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-[#0F2745]/8 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="h-4 w-4 text-[#0F2745]" />
                  </div>
                  <span className="text-xs font-semibold text-[#0F2745] uppercase tracking-wider">For You</span>
                </div>
                <p className="text-sm font-semibold text-slate-800 mb-1">Every detail captured with care</p>
                <p className="text-sm text-slate-500 leading-relaxed">Structured intake with presenting concerns, history, and preferences — no rushed intake calls between sessions, no forms lost in the shuffle.</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-[#0F2745] flex items-center justify-center shadow-lg ring-4 ring-[#0F2745]/10">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
              <p className="text-xs font-bold text-[#0F2745] mt-3 text-center">AI Conversation</p>
              <div className="hidden md:block w-px h-8 bg-slate-200 mt-3" />
            </div>
            <div className="flex md:justify-start">
              <div className="bg-white border border-slate-200 rounded-xl p-5 max-w-sm w-full shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-pink-50 flex items-center justify-center flex-shrink-0">
                    <Heart className="h-4 w-4 text-pink-600" />
                  </div>
                  <span className="text-xs font-semibold text-pink-600 uppercase tracking-wider">For Clients</span>
                </div>
                <p className="text-sm font-semibold text-slate-800 mb-1">Share your story in a safe, unhurried space</p>
                <p className="text-sm text-slate-500 leading-relaxed">No intimidating forms or clinical jargon. A warm, empathetic conversation that feels safe — so you can explain what you're going through at your own pace.</p>
              </div>
            </div>

            {/* ── Step 3: Therapist Reviews ── */}
            <div className="flex md:justify-end">
              <div className="bg-white border border-slate-200 rounded-xl p-5 max-w-sm w-full shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-[#0F2745]/8 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="h-4 w-4 text-[#0F2745]" />
                  </div>
                  <span className="text-xs font-semibold text-[#0F2745] uppercase tracking-wider">For You</span>
                </div>
                <p className="text-sm font-semibold text-slate-800 mb-1">Walk into every first session fully prepared</p>
                <p className="text-sm text-slate-500 leading-relaxed">AI-generated session prep with presenting concern analysis, comorbidity flags, and suggested therapeutic approaches — before the client walks through the door.</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-[#0F2745] flex items-center justify-center shadow-lg ring-4 ring-[#0F2745]/10">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <p className="text-xs font-bold text-[#0F2745] mt-3 text-center">Therapist Reviews</p>
              <div className="hidden md:block w-px h-8 bg-slate-200 mt-3" />
            </div>
            <div className="flex md:justify-start">
              <div className="bg-white border border-slate-200 rounded-xl p-5 max-w-sm w-full shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-pink-50 flex items-center justify-center flex-shrink-0">
                    <Heart className="h-4 w-4 text-pink-600" />
                  </div>
                  <span className="text-xs font-semibold text-pink-600 uppercase tracking-wider">For Clients</span>
                </div>
                <p className="text-sm font-semibold text-slate-800 mb-1">Your therapist already understands your situation</p>
                <p className="text-sm text-slate-500 leading-relaxed">No repeating yourself. Your first session starts where it should — with connection, understanding, and a plan for moving forward together.</p>
              </div>
            </div>

            {/* ── Step 4: First Session ── */}
            <div className="flex md:justify-end">
              <div className="bg-white border border-slate-200 rounded-xl p-5 max-w-sm w-full shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-[#0F2745]/8 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="h-4 w-4 text-[#0F2745]" />
                  </div>
                  <span className="text-xs font-semibold text-[#0F2745] uppercase tracking-wider">For You</span>
                </div>
                <p className="text-sm font-semibold text-slate-800 mb-1">More time for what matters</p>
                <p className="text-sm text-slate-500 leading-relaxed">Spend your session on therapeutic work and building rapport — not gathering demographics or asking the same screening questions you ask every new client.</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-[#0F2745] flex items-center justify-center shadow-lg ring-4 ring-[#0F2745]/10">
                <ChevronRight className="h-6 w-6 text-white" />
              </div>
              <p className="text-xs font-bold text-[#0F2745] mt-3 text-center">First Session</p>
            </div>
            <div className="flex md:justify-start">
              <div className="bg-white border border-slate-200 rounded-xl p-5 max-w-sm w-full shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-pink-50 flex items-center justify-center flex-shrink-0">
                    <Heart className="h-4 w-4 text-pink-600" />
                  </div>
                  <span className="text-xs font-semibold text-pink-600 uppercase tracking-wider">For Clients</span>
                </div>
                <p className="text-sm font-semibold text-slate-800 mb-1">A faster path to feeling better</p>
                <p className="text-sm text-slate-500 leading-relaxed">From "I need to talk to someone" to a meaningful first session — faster and more comfortably than you thought possible. You deserve care that starts the moment you reach out.</p>
              </div>
            </div>
          </div>

          {/* Bottom tagline + link */}
          <p className="text-center text-sm text-slate-400 mt-14 mb-4">
            The therapeutic relationship begins before the first session.
          </p>
          <div className="text-center">
            <Link to="/benefits" className="text-sm font-semibold text-[#0F2745] hover:underline inline-flex items-center gap-1">
              See all benefits <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 7. Pricing preview ───────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Simple, transparent pricing</h2>
            <p className="text-lg text-slate-600 max-w-xl mx-auto">
              Start free for 14 days. Cancel anytime.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {/* Starter */}
            <div className="rounded-xl border border-slate-200 bg-white p-8">
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-2">Starter</p>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-4xl font-bold tracking-tight">$49</span>
                <span className="text-slate-500 mb-1">/month</span>
              </div>
              <p className="text-sm text-slate-500 mb-6">per therapist · Up to 50 intakes/month</p>
              <ul className="space-y-2.5 mb-8">
                {[
                  'AI chat + structured form intake',
                  'Branded assistant & vanity URL',
                  'Bilingual (English & Spanish)',
                  'Session prep summary + AI clinical notes',
                  'Email alerts for therapist & client',
                  'Calendly scheduling integration',
                ].map(f => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <Check className="h-4 w-4 text-pink-500 flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#waitlist" className="block text-center border border-[#0F2745] text-[#0F2745] px-6 py-3 rounded-md text-sm font-medium hover:bg-[#0F2745] hover:text-white transition">
                Join the Waitlist
              </a>
            </div>
            {/* Pro */}
            <div className="rounded-xl border-2 border-[#0F2745] bg-white p-8 relative">
              <div className="absolute -top-3 left-6">
                <span className="bg-[#0F2745] text-white text-xs font-semibold px-3 py-1 rounded-full">Most Popular</span>
              </div>
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-2">Pro</p>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-4xl font-bold tracking-tight">$79</span>
                <span className="text-slate-500 mb-1">/month</span>
              </div>
              <p className="text-sm text-slate-500 mb-6">per therapist · Up to 150 intakes/month</p>
              <ul className="space-y-2.5 mb-8">
                {[
                  'Everything in Starter',
                  'Marketing Kit — AI social posts & branded cards',
                  'Facebook, Instagram, LinkedIn, Psychology Today',
                  'Website banner downloads',
                  'English & Spanish marketing copy',
                ].map(f => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <Check className="h-4 w-4 text-pink-500 flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#waitlist" className="block text-center bg-[#0F2745] text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-[#0C2038] transition">
                Join the Waitlist
              </a>
            </div>
            {/* Pro+ */}
            <div className="rounded-xl border border-slate-200 bg-white p-8">
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-2">Pro+</p>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-4xl font-bold tracking-tight">$119</span>
                <span className="text-slate-500 mb-1">/month</span>
              </div>
              <p className="text-sm text-slate-500 mb-6">per therapist · Unlimited intakes</p>
              <ul className="space-y-2.5 mb-8">
                {[
                  'Everything in Pro',
                  'Dedicated AI phone intake line',
                  'Document Intelligence — AI record analysis',
                  'Clients speak naturally with your assistant',
                  '24/7 availability — never miss a call',
                ].map(f => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <Check className="h-4 w-4 text-pink-500 flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#waitlist" className="block text-center border border-[#0F2745] text-[#0F2745] px-6 py-3 rounded-md text-sm font-medium hover:bg-[#0F2745] hover:text-white transition">
                Join the Waitlist
              </a>
            </div>
          </div>
          <p className="text-center text-sm text-slate-400 mt-6">
            All plans include a 14-day free trial. <Link to="/pricing" className="text-[#0F2745] hover:underline font-medium">Compare plans →</Link>
          </p>
        </div>
      </section>

      {/* ── 8. Waitlist / Contact ──────────────────────────────────────────── */}
      <section id="waitlist" className="py-20 md:py-28 bg-slate-50 border-y border-slate-100">
        <div className="max-w-xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Get notified at launch</h2>
            <p className="text-lg text-slate-600">
              SoloTherapistAI is coming Q3 2026. Leave your info and we'll let you know the moment it's ready.
            </p>
          </div>
          {submitted ? (
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 mb-4"><Check className="h-6 w-6 text-green-600" /></div>
              <h3 className="text-xl font-semibold mb-2">You're on the list!</h3>
              <p className="text-slate-600">We'll notify you when SoloTherapistAI launches.</p>
            </div>
          ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#EC4899]/50 focus:border-[#EC4899]"
                  placeholder="Dr. Sarah Chen, LMFT"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#EC4899]/50 focus:border-[#EC4899]"
                  placeholder="sarah@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="practice" className="block text-sm font-medium text-slate-700 mb-1">Practice Focus</label>
              <input
                type="text"
                id="practice"
                name="practice"
                className="w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#EC4899]/50 focus:border-[#EC4899]"
                placeholder="Individual therapy, couples, family, child/adolescent, etc."
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message (optional)</label>
              <textarea
                id="message"
                name="message"
                rows={3}
                className="w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#EC4899]/50 focus:border-[#EC4899]"
                placeholder="Anything else you'd like us to know?"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#0F2745] text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-[#0C2038] transition"
            >
              Join the Waitlist
            </button>
            <p className="text-xs text-slate-400 text-center">
              We'll notify you when SoloTherapistAI launches. No spam, ever.
            </p>
          </form>
          )}
        </div>
      </section>

      {/* ── 9. Closing CTA ──────────────────────────────────────────────────── */}
      <section className="bg-[#0F2745]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
            Your intake runs while you're in session.
          </h2>
          <p className="text-lg text-white/60 max-w-xl mx-auto mb-8">
            Stop losing prospective clients to missed calls and after-hours silence. Chat, phone, and document intake — always on, always warm, always ready.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#waitlist"
              className="bg-white text-[#0F2745] px-8 py-3.5 rounded-md text-sm font-semibold hover:bg-slate-100 transition inline-flex items-center gap-2"
            >
              Join the Waitlist
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/pricing"
              className="text-white/70 hover:text-white text-sm font-medium transition"
            >
              View pricing →
            </Link>
          </div>
          <p className="mt-4 text-white/40 text-xs">Coming Q3 2026</p>
        </div>
      </section>
    </>
  );
};

export default Index;
