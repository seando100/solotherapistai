import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BarChart3, Mail, Shield, ArrowRight, Sparkles, Phone, Upload, FileSearch, Clock, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

const BrandSettingsIllustration = () => (
  <div className="relative">
    <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-200 ring-1 ring-slate-900/5 bg-white">
      {/* Panel header */}
      <div className="bg-slate-50 border-b border-slate-100 px-5 py-3 flex items-center justify-between">
        <p className="text-xs font-semibold text-slate-700">Profile Settings</p>
        <div className="flex items-center gap-2">
          <div className="h-5 px-3 rounded bg-[#0F2745] flex items-center">
            <span className="text-white text-[9px] font-semibold">Save Changes</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 divide-x divide-slate-100">
        {/* Left — settings fields */}
        <div className="p-4 space-y-4">
          {/* Logo upload */}
          <div>
            <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest mb-1.5">Practice Logo</p>
            <div className="border-2 border-dashed border-slate-200 rounded-lg p-3 flex items-center gap-3 bg-slate-50">
              <div className="w-10 h-10 rounded bg-[#0F2745]/10 flex items-center justify-center flex-shrink-0">
                <span className="text-[8px] font-bold text-[#0F2745] uppercase">Logo</span>
              </div>
              <div>
                <p className="text-[10px] font-medium text-slate-700">calm-harbor-logo.png</p>
                <p className="text-[9px] text-slate-400">Click to replace</p>
              </div>
            </div>
          </div>
          {/* Practice name */}
          <div>
            <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest mb-1.5">Practice Name</p>
            <div className="border border-slate-200 rounded-md px-2.5 py-1.5 bg-white">
              <p className="text-[11px] text-slate-800">Calm Harbor Therapy</p>
            </div>
          </div>
          {/* Assistant name */}
          <div>
            <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest mb-1.5">Assistant Name</p>
            <div className="border border-slate-200 rounded-md px-2.5 py-1.5 bg-white">
              <p className="text-[11px] text-slate-800">River</p>
            </div>
          </div>
          {/* Vanity URL */}
          <div>
            <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest mb-1.5">Your Intake URL</p>
            <div className="border border-slate-200 rounded-md overflow-hidden flex text-[10px]">
              <span className="bg-slate-50 px-2 py-1.5 text-slate-400 border-r border-slate-200 whitespace-nowrap">.com/</span>
              <span className="px-2 py-1.5 text-[#0F2745] font-semibold">calmharbor</span>
            </div>
            <p className="text-[9px] text-pink-600 mt-1 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-500 inline-block" />
              solotherapistai.com/calmharbor is live
            </p>
          </div>
          {/* Calendly */}
          <div>
            <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest mb-1.5">Scheduling</p>
            <div className="flex items-center gap-2 border border-pink-200 bg-pink-50 rounded-md px-2.5 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-500 flex-shrink-0" />
              <p className="text-[10px] text-pink-700 font-medium">Calendly connected</p>
            </div>
          </div>
        </div>
        {/* Right — live preview */}
        <div className="p-4 bg-slate-50/50">
          <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest mb-2.5">Client Preview</p>
          <div className="rounded-lg overflow-hidden border border-slate-200 shadow-sm bg-white">
            {/* Mini browser bar */}
            <div className="bg-slate-100 px-2 py-1 flex items-center gap-1.5 border-b border-slate-200">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-red-300" />
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-300" />
                <div className="w-1.5 h-1.5 rounded-full bg-green-300" />
              </div>
              <div className="flex-1 bg-white rounded px-2 py-0.5 text-[8px] text-slate-400 font-mono">
                solotherapistai.com/calmharbor
              </div>
            </div>
            {/* Mini client intake page */}
            <div className="bg-[#0F2745] px-3 py-2.5 flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-white/20 flex items-center justify-center flex-shrink-0">
                <span className="text-[7px] font-bold text-white">CH</span>
              </div>
              <div>
                <p className="text-white text-[9px] font-semibold leading-tight">River</p>
                <p className="text-white/60 text-[7px] leading-tight">Calm Harbor Therapy</p>
              </div>
            </div>
            <div className="px-3 py-3 space-y-2">
              <div className="bg-white rounded-xl rounded-bl-sm border border-slate-100 px-2.5 py-1.5 shadow-sm max-w-[85%]">
                <p className="text-[9px] text-slate-700 leading-snug">Welcome. I'm River with Calm Harbor Therapy. I'm here to listen and gather some information to help prepare for your first session. Everything you share is confidential.</p>
              </div>
              <div className="flex justify-end">
                <div className="bg-[#0F2745] rounded-xl rounded-br-sm px-2.5 py-1.5 max-w-[75%]">
                  <p className="text-[9px] text-white leading-snug">I've been feeling really anxious and having trouble sleeping for the past few weeks.</p>
                </div>
              </div>
            </div>
            <div className="px-2 py-2 border-t border-slate-100 bg-white flex items-center gap-1.5">
              <div className="flex-1 bg-slate-50 rounded-full px-2 py-1 border border-slate-200">
                <p className="text-[8px] text-slate-400">Type your response…</p>
              </div>
              <div className="w-5 h-5 rounded-full bg-[#0F2745] flex items-center justify-center">
                <svg className="w-2.5 h-2.5 text-white fill-current" viewBox="0 0 24 24"><path d="M2 21l21-9L2 3v7l15 2-15 2v7z"/></svg>
              </div>
            </div>
          </div>
          <p className="text-[9px] text-slate-400 text-center mt-2">Clients see your brand — never SoloTherapistAI</p>
        </div>
      </div>
    </div>
    <div className="absolute -inset-4 bg-[#0F2745]/5 rounded-2xl blur-2xl -z-10" />
  </div>
);

const ChatModeScreenshot = () => (
  <div className="relative">
    <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-200 ring-1 ring-slate-900/5 bg-slate-50">
      {/* App header */}
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
      {/* Chat messages */}
      <div className="px-4 py-4 space-y-3 bg-slate-50">
        {/* AI bubble */}
        <div className="flex gap-2 items-end">
          <div className="w-6 h-6 rounded-full bg-[#0F2745] flex-shrink-0 flex items-center justify-center mb-0.5">
            <span className="text-white text-[8px] font-bold">R</span>
          </div>
          <div className="bg-white rounded-2xl rounded-bl-sm px-3 py-2 shadow-sm border border-slate-100 max-w-[78%]">
            <p className="text-xs text-slate-700 leading-relaxed">Hi, I'm River, your intake assistant with Calm Harbor Therapy. Thank you for taking this step. I'd like to gather some information to help prepare for your first session.</p>
          </div>
        </div>
        {/* AI bubble */}
        <div className="flex gap-2 items-end">
          <div className="w-6 h-6 rounded-full bg-[#0F2745] flex-shrink-0 flex items-center justify-center mb-0.5">
            <span className="text-white text-[8px] font-bold">R</span>
          </div>
          <div className="bg-white rounded-2xl rounded-bl-sm px-3 py-2 shadow-sm border border-slate-100 max-w-[78%]">
            <p className="text-xs text-slate-700 leading-relaxed">What's been on your mind that brought you to reach out today? There's no wrong answer — take your time.</p>
          </div>
        </div>
        {/* Client bubble */}
        <div className="flex justify-end">
          <div className="bg-[#0F2745] rounded-2xl rounded-br-sm px-3 py-2 max-w-[72%]">
            <p className="text-xs text-white leading-relaxed">I've been struggling with anxiety for a while now. It's gotten worse since some changes at work, and it's starting to affect my relationships. I have trouble sleeping most nights.</p>
          </div>
        </div>
        {/* AI bubble */}
        <div className="flex gap-2 items-end">
          <div className="w-6 h-6 rounded-full bg-[#0F2745] flex-shrink-0 flex items-center justify-center mb-0.5">
            <span className="text-white text-[8px] font-bold">R</span>
          </div>
          <div className="bg-white rounded-2xl rounded-bl-sm px-3 py-2 shadow-sm border border-slate-100 max-w-[78%]">
            <p className="text-xs text-slate-700 leading-relaxed">That sounds really difficult, and I appreciate you sharing that. It's understandable that those things would feel overwhelming. How long have you been noticing these feelings?</p>
          </div>
        </div>
        {/* Typing indicator */}
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
      {/* Input bar */}
      <div className="px-3 py-3 bg-white border-t border-slate-100 flex items-center gap-2">
        <div className="flex-1 bg-slate-50 rounded-full px-4 py-2 border border-slate-200">
          <p className="text-[11px] text-slate-400">Type your response…</p>
        </div>
        <div className="w-8 h-8 rounded-full bg-[#0F2745] flex items-center justify-center flex-shrink-0">
          <svg className="w-3.5 h-3.5 text-white fill-current" viewBox="0 0 24 24"><path d="M2 21l21-9L2 3v7l15 2-15 2v7z"/></svg>
        </div>
      </div>
    </div>
    <div className="absolute -inset-4 bg-[#0F2745]/5 rounded-2xl blur-2xl -z-10" />
  </div>
);

const IntakeSummaryScreenshot = () => (
  <div className="relative">
    <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-200 ring-1 ring-slate-900/5 bg-white">
      {/* Email header */}
      <div className="bg-white px-6 py-4 flex items-center justify-between border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded bg-slate-100 flex items-center justify-center">
            <span className="text-[9px] font-bold text-slate-400 uppercase">Logo</span>
          </div>
          <div>
            <p className="text-xs font-bold text-[#0F2745] uppercase tracking-wider leading-tight">Calm Harbor Therapy</p>
            <p className="text-[10px] text-slate-400 leading-tight">New Client Intake — March 5, 2026</p>
          </div>
        </div>
        <span className="text-[10px] bg-pink-50 text-pink-700 border border-pink-200 rounded-full px-2.5 py-0.5 font-medium">New</span>
      </div>
      {/* Session details table */}
      <div className="px-6 pt-4 pb-3">
        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2.5">Client Details</p>
        <div className="rounded-lg border border-slate-100 overflow-hidden text-[11px]">
          {[
            ['Client', 'Alex Morgan'],
            ['Email', 'alex.morgan@email.com'],
            ['Phone', '(404) 555-0198'],
            ['Location', 'Atlanta, GA'],
            ['Presenting Concern', 'Anxiety, work stress, sleep disruption, relationship strain'],
            ['Preferred Schedule', 'Evening sessions preferred'],
            ['Desired Outcome', 'Better coping strategies and improved sleep'],
          ].map(([label, value], i) => (
            <div key={label} className={`flex ${i % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}>
              <span className="w-[36%] px-3 py-1.5 text-slate-500 font-medium flex-shrink-0">{label}</span>
              <span className="px-3 py-1.5 text-slate-800">{value}</span>
            </div>
          ))}
        </div>
      </div>
      {/* AI clinical notes */}
      <div className="px-6 pb-5">
        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2.5">AI Session Prep Notes</p>
        <div className="rounded-lg border border-amber-100 bg-amber-50 px-4 py-3 space-y-1.5">
          {[
            'Client reports sleep disruption and appetite changes alongside anxiety — consider screening for comorbid depression (PHQ-9)',
            'Work-related stress onset correlates with relationship strain — explore systemic stressors in first session',
            'Client mentions feeling "overwhelmed all the time" — assess for generalized anxiety disorder criteria',
            'Evening preference may indicate daytime occupational demands — explore work-life balance dynamics',
          ].map((note) => (
            <div key={note} className="flex gap-2">
              <span className="text-amber-500 font-bold text-[10px] flex-shrink-0 mt-0.5">•</span>
              <p className="text-[10px] text-amber-900 leading-snug">{note}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="absolute -inset-4 bg-[#0F2745]/5 rounded-2xl blur-2xl -z-10" />
  </div>
);

const MarketingKitIllustration = () => (
  <div className="relative">
    <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-200 ring-1 ring-slate-900/5">
      {/* Social card mock — horizontal layout */}
      <div className="flex" style={{ height: 210 }}>
        {/* White logo zone */}
        <div className="w-[36%] bg-white flex flex-col items-center justify-center p-5 gap-3 border-r border-slate-100">
          <div className="w-16 h-16 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider text-center leading-tight">Your<br/>Logo</span>
          </div>
          <p className="text-[8px] font-semibold text-[#0F2745] uppercase tracking-widest text-center leading-tight">
            Calm Harbor<br/>Therapy
          </p>
        </div>
        {/* Navy content zone */}
        <div className="flex-1 bg-[#0F2745] flex flex-col justify-center px-6 py-5">
          <p style={{ fontFamily: 'Georgia, serif' }} className="text-white font-bold text-sm leading-snug mb-2.5">
            You don't have to carry it all alone. Taking the first step is the hardest part.
          </p>
          <p className="text-[10px] text-white/50 mb-4 tracking-wide">Anxiety · Depression · Life Transitions</p>
          <div className="border-t border-white/20 pt-3">
            <p className="text-[9px] text-white/40 mb-1">Start your journey at:</p>
            <p className="text-[11px] text-white font-semibold">solotherapistai.com/calmharbor</p>
          </div>
        </div>
      </div>
      {/* Bottom strip — color theme + label */}
      <div className="bg-slate-50 border-t border-slate-100 px-5 py-3 flex items-center gap-3">
        <span className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">Color theme</span>
        <div className="flex gap-1.5">
          {['#0F2745','#1C1C1E','#1A4731','#6B1E2E','#334155'].map(c => (
            <div key={c} className="w-4 h-4 rounded-full border-2 border-white shadow-sm ring-1 ring-slate-200" style={{ background: c }} />
          ))}
          <div className="w-4 h-4 rounded-full border-2 border-white shadow-sm ring-1 ring-slate-200 bg-pink-500 relative">
            <span className="absolute -top-1 -right-1 text-[6px] bg-white text-slate-500 rounded-full px-[2px] font-bold leading-none" style={{ paddingTop: 1 }}>B</span>
          </div>
        </div>
      </div>
    </div>
    <div className="absolute -inset-4 bg-[#0F2745]/5 rounded-2xl blur-2xl -z-10" />
  </div>
);

const Features = () => {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">

        {/* Page header */}
        <div className="text-center mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Built for the Solo Therapist
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Intake by chat, phone, or widget. AI document analysis. Marketing tools. Everything you need to welcome new clients — without adding overhead or hiring staff.
          </p>
        </div>

        {/* Feature 1 — AI Client Intake — text left, visual right */}
        <div id="ai-intake" className="grid md:grid-cols-2 gap-12 items-center mb-24 scroll-mt-24">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
              Intake That Feels Like a Conversation
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Clients share their presenting concerns through a warm, conversational AI — in English or Spanish.
              No clinical jargon, no overwhelming forms. You get the details you need, and they feel heard from the very first interaction.
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Warm conversational AI chat mode and structured form mode</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Give your AI assistant a name — clients meet "River" or "Haven," not a generic chatbot</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Bilingual — clients choose English or Spanish at the start</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Fully customizable intake questions tailored to your specialty</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Your confidentiality notice presented to every client before they begin</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Your logo, practice name, and greeting — clients never see SoloTherapistAI</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Crisis detection: surfaces 988 Suicide & Crisis Lifeline and Crisis Text Line (text HOME to 741741) when needed</li>
            </ul>
          </div>
          <ChatModeScreenshot />
        </div>

        {/* Feature 2 — AI Phone Intake — visual left, text right */}
        <div id="phone-intake" className="grid md:grid-cols-2 gap-12 items-center mb-24 scroll-mt-24">
          <div className="order-2 md:order-1">
            {/* Phone illustration */}
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-200 ring-1 ring-slate-900/5 bg-white">
                <div className="bg-[#0F2745] px-5 py-4 text-center">
                  <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center mx-auto mb-2">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-white text-sm font-semibold">Your AI Intake Line</p>
                  <p className="text-white/50 text-xs mt-0.5">(404) 555-0100</p>
                </div>
                <div className="px-5 py-4 space-y-3">
                  {/* Simulated transcript */}
                  <div className="flex gap-2 items-start">
                    <div className="w-5 h-5 rounded-full bg-[#0F2745]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[7px] font-bold text-[#0F2745]">AI</span>
                    </div>
                    <div className="bg-slate-50 rounded-lg px-3 py-2 border border-slate-100">
                      <p className="text-[11px] text-slate-700 leading-relaxed">"Hi, I'm River with Calm Harbor Therapy. Thank you for calling. I'll gather some information to help your therapist prepare for your first session. What's been going on?"</p>
                    </div>
                  </div>
                  <div className="flex gap-2 items-start justify-end">
                    <div className="bg-[#0F2745] rounded-lg px-3 py-2">
                      <p className="text-[11px] text-white leading-relaxed">"I've been having a lot of anxiety lately, especially around work. I can't seem to turn my brain off at night and it's affecting everything."</p>
                    </div>
                    <div className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[7px] font-bold text-slate-500">C</span>
                    </div>
                  </div>
                  <div className="flex gap-2 items-start">
                    <div className="w-5 h-5 rounded-full bg-[#0F2745]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[7px] font-bold text-[#0F2745]">AI</span>
                    </div>
                    <div className="bg-slate-50 rounded-lg px-3 py-2 border border-slate-100">
                      <p className="text-[11px] text-slate-700 leading-relaxed">"That sounds really draining. I'd like to understand more so your therapist can be prepared to help..."</p>
                    </div>
                  </div>
                </div>
                <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
                    <span className="text-[10px] text-slate-500 font-medium">Call in progress — 3:12</span>
                  </div>
                  <span className="text-[9px] bg-purple-50 text-purple-700 border border-purple-200 rounded-full px-2 py-0.5 font-medium">Phone Call</span>
                </div>
              </div>
              <div className="absolute -inset-4 bg-[#0F2745]/5 rounded-2xl blur-2xl -z-10" />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F2745] bg-[#0F2745]/8 px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
              <Phone className="h-3 w-3" />
              Pro+ Plan
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
              AI Phone Intake — 24/7
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Give your practice a dedicated phone number where callers speak naturally with your AI
              assistant. A warm, professional conversation that captures every detail — no hold music,
              no phone trees, no missed connections with people who need support.
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Dedicated local phone number for your practice</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Callers speak naturally — your AI assistant guides the conversation warmly</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Same structured summary, AI clinical notes, and email notifications</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Available 24/7 — never miss an after-hours or weekend call</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Intake source clearly labeled (Web Chat vs. Phone Call) in your portal</li>
            </ul>
          </div>
        </div>

        {/* Feature 3 — Session Prep & AI Notes — text left, visual right */}
        <div id="session-prep" className="grid md:grid-cols-2 gap-12 items-center mb-24 scroll-mt-24">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
              Prepare for Every First Session
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Every submission arrives with a structured client summary and AI-generated session prep notes
              — flagging comorbidity indicators, treatment history patterns, and
              suggested therapeutic approaches — so you're prepared the moment you sit down together.
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Organized client profile: name, contact, location, and presenting concerns</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> AI clinical notes — comorbidity flags, risk indicators, and therapeutic suggestions — for your eyes only</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Suggested first-session focus areas tailored to the presenting concern</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Delivered to your inbox the moment intake is submitted</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Client receives a warm, branded confirmation with their submission summary</li>
            </ul>
          </div>
          <IntakeSummaryScreenshot />
        </div>

        {/* Feature 4 — Document Intelligence — visual left, text right */}
        <div id="document-intelligence" className="grid md:grid-cols-2 gap-12 items-center mb-24 scroll-mt-24">
          <div className="order-2 md:order-1">
            {/* Document Intelligence illustration */}
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-200 ring-1 ring-slate-900/5 bg-white">
                <div className="bg-white px-5 py-3 border-b border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileSearch className="h-4 w-4 text-[#0F2745]" />
                    <p className="text-xs font-semibold text-slate-700">Document Intelligence</p>
                  </div>
                  <span className="text-[9px] bg-pink-50 text-pink-700 border border-pink-200 rounded-full px-2 py-0.5 font-medium">3 of 4 received</span>
                </div>
                <div className="px-5 py-3 space-y-2.5">
                  {[
                    { name: 'Insurance_Card_Front_Back.pdf', status: 'ready', summary: 'Blue Cross PPO, Group #4821, effective through Dec 2026. MH/SA benefits confirmed with $30 copay.' },
                    { name: 'Referral_Letter_DrPatel.pdf', status: 'ready', summary: 'Primary care referral for anxiety and sleep disturbance. Notes elevated GAD-7 score (14). SSRI discussed but client prefers therapy first.' },
                    { name: 'Prior_Treatment_Summary.pdf', status: 'ready', summary: 'CBT with previous therapist (2024, 12 sessions). Reported improvement in panic episodes. Terminated due to relocation.' },
                  ].map((doc) => (
                    <div key={doc.name} className="border border-slate-100 rounded-lg overflow-hidden">
                      <div className="flex items-center gap-2 px-3 py-2 bg-slate-50">
                        <div className="w-1.5 h-1.5 rounded-full bg-pink-500 flex-shrink-0" />
                        <p className="text-[10px] font-medium text-slate-700 flex-1">{doc.name}</p>
                        <span className="text-[9px] text-pink-600 font-medium">Ready</span>
                      </div>
                      <div className="px-3 py-2">
                        <p className="text-[10px] text-slate-500 leading-relaxed">{doc.summary}</p>
                      </div>
                    </div>
                  ))}
                  <div className="border border-dashed border-slate-200 rounded-lg px-3 py-2 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                    <p className="text-[10px] text-slate-400">Medication List — awaiting upload</p>
                  </div>
                </div>
              </div>
              <div className="absolute -inset-4 bg-[#0F2745]/5 rounded-2xl blur-2xl -z-10" />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F2745] bg-[#0F2745]/8 px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
              <Upload className="h-3 w-3" />
              Pro+ Plan
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
              Documents In, Insights Out
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Request insurance forms, referral letters, prior treatment records, and medication lists from clients with one click.
              AI recommends what to ask for based on the presenting concerns, clients upload securely, and every document is
              automatically analyzed — key dates, findings, and clinically relevant highlights — ready for your review.
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> AI recommends documents based on specialty and presenting concerns</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Clients upload securely via a branded, encrypted portal</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> AI extracts key dates, findings, and clinically relevant highlights from each document</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Handles PDFs, images, scanned documents, and Word files</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> 30-day secure retention — pass-through, not a vault</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> No human ever views client documents — fully automated</li>
            </ul>
          </div>
        </div>

        {/* Feature 5 — AI Intelligence Brief — text left, visual right */}
        <div id="intelligence-brief" className="grid md:grid-cols-2 gap-12 items-center mb-24 scroll-mt-24">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F2745] bg-[#0F2745]/8 px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
              <Brain className="h-3 w-3" />
              Pro+ Plan
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
              AI Intelligence Brief
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Every intake automatically generates a deep-dive analysis that goes beyond summarizing what the client shared.
              The Intelligence Brief identifies comorbidity indicators, treatment history patterns, risk factors,
              and suggests therapeutic considerations — so you walk into
              every first session with the clinical preparation of a specialist.
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Comorbidity screening flags — alerts when symptoms suggest co-occurring conditions</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Treatment history pattern analysis with continuity-of-care insights</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Risk indicator identification with suggested safety planning considerations</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Suggested therapeutic approaches tailored to the presenting concern profile</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Delivered alongside the intake summary — no extra step required</li>
            </ul>
          </div>
          {/* Intelligence Brief illustration */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-200 ring-1 ring-slate-900/5 bg-white">
              <div className="bg-white px-5 py-3 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Brain className="h-4 w-4 text-[#0F2745]" />
                  <p className="text-xs font-semibold text-slate-700">AI Intelligence Brief</p>
                </div>
                <span className="text-[9px] bg-[#0F2745]/8 text-[#0F2745] rounded-full px-2 py-0.5 font-semibold uppercase tracking-wide">Pro+</span>
              </div>
              <div className="px-5 py-4 space-y-3">
                {/* Comorbidity flags */}
                <div>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2">Comorbidity Flags</p>
                  <div className="space-y-1.5">
                    {[
                      { flag: 'Depression', note: 'Sleep disruption + appetite changes + persistent overwhelm — screen with PHQ-9 in first session' },
                      { flag: 'GAD', note: 'Difficulty "turning off" racing thoughts, work-triggered anxiety generalizing to relationships — meets GAD screening threshold' },
                    ].map((item) => (
                      <div key={item.flag} className="flex gap-2 items-start bg-amber-50 border border-amber-100 rounded-lg px-3 py-2">
                        <span className="text-[9px] font-semibold text-amber-700 bg-amber-100 rounded px-1.5 py-0.5 flex-shrink-0 mt-px">{item.flag}</span>
                        <p className="text-[10px] text-amber-900 leading-snug">{item.note}</p>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Treatment history */}
                <div>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2">Treatment History Insights</p>
                  <div className="bg-slate-50 border border-slate-100 rounded-lg px-3 py-2">
                    <p className="text-[10px] text-slate-600 leading-snug">Prior CBT engagement (12 sessions, 2024) with reported improvement in panic episodes. Therapy terminated due to relocation, not dissatisfaction. Client may respond well to CBT continuation or integrative approach combining CBT with mindfulness-based techniques.</p>
                  </div>
                </div>
                {/* Risk indicators */}
                <div>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2">Risk Indicators</p>
                  <div className="bg-green-50 border border-green-100 rounded-lg px-3 py-2 flex items-start gap-2">
                    <Clock className="h-3.5 w-3.5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-[10px] text-green-800 leading-snug font-medium">No acute risk indicators identified. Recommend standard safety screening (Columbia Protocol) at intake session as part of best practices.</p>
                  </div>
                </div>
                {/* Suggested approaches */}
                <div>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2">Suggested First-Session Focus</p>
                  <div className="space-y-1">
                    {[
                      'Explore the relationship between work stressors and anxiety onset timeline',
                      'Assess sleep hygiene and consider sleep-focused CBT component',
                      'Review prior CBT experience to identify which techniques were most helpful',
                    ].map((q) => (
                      <div key={q} className="flex gap-2 items-start">
                        <span className="text-[#0F2745] font-bold text-[10px] flex-shrink-0 mt-0.5">?</span>
                        <p className="text-[10px] text-slate-600 leading-snug">{q}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -inset-4 bg-[#0F2745]/5 rounded-2xl blur-2xl -z-10" />
          </div>
        </div>

        {/* Feature 6 — Brand Settings — visual left, text right */}
        <div id="brand-settings" className="grid md:grid-cols-2 gap-12 items-center mb-24 scroll-mt-24">
          <div className="order-2 md:order-1">
            <BrandSettingsIllustration />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
              Your Brand, Your Link
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Clients never see "SoloTherapistAI." They see your practice name, your logo, and your intake
              page — at a URL you control. Every detail is configurable from your admin portal,
              and when they're ready for their first session, send a one-click scheduling invite.
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Your own vanity URL (e.g. solotherapistai.com/yourpractice)</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Upload your practice logo — shown on every client-facing screen and email</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Set your assistant's name, client greeting, and specialty focus</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Configure confidentiality notices in English and Spanish</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Pause intake instantly with a custom unavailability message</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Send session invites via Calendly or any scheduling link</li>
            </ul>
          </div>
        </div>

        {/* Feature 7 — Marketing Kit — text left, visual right */}
        <div id="marketing-kit" className="grid md:grid-cols-2 gap-12 items-center mb-24 scroll-mt-24">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F2745] bg-[#0F2745]/8 px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
              <Sparkles className="h-3 w-3" />
              Pro Plan
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
              Grow Your Practice Visibility
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              The Marketing Kit generates platform-ready social media posts and professionally branded
              visual cards in seconds — tailored to your practice, your specialties, and your intake link.
              Share mental health awareness content, self-care tips, and practice updates effortlessly.
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> AI-written post copy for Facebook, Instagram, LinkedIn, and Psychology Today</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Branded visual cards pre-sized for every platform — download as PNG, ready to upload</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Edit the card headline (AI-suggested, fully customizable) to match your voice</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> 5 color themes — or use your brand color pulled automatically from your logo</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Website banner sizes included for your practice website or Psychology Today profile</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Generate in English or Spanish — bilingual from the start</li>
            </ul>
          </div>
          <MarketingKitIllustration />
        </div>

        {/* Supporting features row */}
        <div className="grid sm:grid-cols-3 gap-6 mb-20 pt-4 border-t border-gray-100">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <BarChart3 className="h-4 w-4 text-primary" />
                Admin Portal
              </CardTitle>
              <CardDescription>
                Review every submission, track status, manage documents, and organize your client pipeline in one place.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li>• Color-coded submission aging and triage</li>
                <li>• Status workflow (new → scheduled → in treatment)</li>
                <li>• Document request and review dashboard</li>
                <li>• Chat and phone intake unified view</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Mail className="h-4 w-4 text-primary" />
                Email Notifications
              </CardTitle>
              <CardDescription>
                You and your client both get a confirmation the moment an intake is submitted.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li>• Instant therapist alert email</li>
                <li>• Warm, professional client confirmation</li>
                <li>• Branded with your practice identity</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Shield className="h-4 w-4 text-primary" />
                Security &amp; Privacy
              </CardTitle>
              <CardDescription>
                Designed with HIPAA principles in mind. Client data is encrypted in transit and at rest.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li>• AES-256 encryption at rest, TLS in transit</li>
                <li>• No human review — fully automated AI processing</li>
                <li>• 30-day document retention with client deletion rights</li>
                <li>• Confidentiality and data handling notice included</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Transform Your Practice?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Coming Q3 2026.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#waitlist"
              className="bg-[#0F2745] text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-[#0C2038] transition inline-flex items-center justify-center"
            >
              Join the Waitlist
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <Link
              to="/pricing"
              className="text-sm font-medium text-gray-700 hover:text-black transition-colors inline-flex items-center justify-center px-6 py-3"
            >
              View Pricing
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;
