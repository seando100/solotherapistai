import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MessageSquare, FileText, Phone, ArrowRight, Briefcase, Heart, ChevronRight, Globe, Clock, Upload, Shield, Brain, Sparkles, Link2, Zap, Rss } from 'lucide-react';

// Reusable benefit card components
const TherapistCard = ({ title, body, label }: { title: string; body: string; label: string }) => (
  <div className="bg-white border border-slate-200 rounded-xl p-5 max-w-sm w-full shadow-sm">
    <div className="flex items-center gap-3 mb-2">
      <div className="w-8 h-8 rounded-lg bg-[#0F2745]/8 flex items-center justify-center flex-shrink-0">
        <Briefcase className="h-4 w-4 text-[#0F2745]" />
      </div>
      <span className="text-xs font-semibold text-[#0F2745] uppercase tracking-wider">{label}</span>
    </div>
    <p className="text-sm font-semibold text-slate-800 mb-1">{title}</p>
    <p className="text-sm text-slate-500 leading-relaxed">{body}</p>
  </div>
);

const ClientCard = ({ title, body, label }: { title: string; body: string; label: string }) => (
  <div className="bg-white border border-slate-200 rounded-xl p-5 max-w-sm w-full shadow-sm">
    <div className="flex items-center gap-3 mb-2">
      <div className="w-8 h-8 rounded-lg bg-pink-50 flex items-center justify-center flex-shrink-0">
        <Heart className="h-4 w-4 text-pink-600" />
      </div>
      <span className="text-xs font-semibold text-pink-600 uppercase tracking-wider">{label}</span>
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
  const { t } = useTranslation();
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-16 md:pt-24 pb-12 md:pb-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {t('benefits.hero.title')}
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {t('benefits.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* ── The Journey ── */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">{t('benefits.journey.title')}</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              {t('benefits.journey.subtitle')}
            </p>
          </div>

          <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-[1fr_auto_1fr] md:gap-x-8 md:gap-y-0">

            {/* Step 1: Patient Reaches Out */}
            <div className="flex md:justify-end">
              <TherapistCard
                label={t('benefits.forYou')}
                title={t('benefits.step1.you.title')}
                body={t('benefits.step1.you.body')}
              />
            </div>
            <StepIcon icon={Phone} label={t('benefits.step1.label')} />
            <div className="flex md:justify-start">
              <ClientCard
                label={t('benefits.forPatients')}
                title={t('benefits.step1.patient.title')}
                body={t('benefits.step1.patient.body')}
              />
            </div>

            {/* Step 2: AI Conversation */}
            <div className="flex md:justify-end">
              <TherapistCard
                label={t('benefits.forYou')}
                title={t('benefits.step2.you.title')}
                body={t('benefits.step2.you.body')}
              />
            </div>
            <StepIcon icon={MessageSquare} label={t('benefits.step2.label')} />
            <div className="flex md:justify-start">
              <ClientCard
                label={t('benefits.forPatients')}
                title={t('benefits.step2.patient.title')}
                body={t('benefits.step2.patient.body')}
              />
            </div>

            {/* Step 3: Therapist Reviews */}
            <div className="flex md:justify-end">
              <TherapistCard
                label={t('benefits.forYou')}
                title={t('benefits.step3.you.title')}
                body={t('benefits.step3.you.body')}
              />
            </div>
            <StepIcon icon={FileText} label={t('benefits.step3.label')} />
            <div className="flex md:justify-start">
              <ClientCard
                label={t('benefits.forPatients')}
                title={t('benefits.step3.patient.title')}
                body={t('benefits.step3.patient.body')}
              />
            </div>

            {/* Step 4: First Session */}
            <div className="flex md:justify-end">
              <TherapistCard
                label={t('benefits.forYou')}
                title={t('benefits.step4.you.title')}
                body={t('benefits.step4.you.body')}
              />
            </div>
            <StepIcon icon={ChevronRight} label={t('benefits.step4.label')} showLine={false} />
            <div className="flex md:justify-start">
              <ClientCard
                label={t('benefits.forPatients')}
                title={t('benefits.step4.patient.title')}
                body={t('benefits.step4.patient.body')}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Additional Benefits ── */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">{t('benefits.additional.title')}</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              {t('benefits.additional.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Bilingual */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#0F2745]/8 flex items-center justify-center flex-shrink-0">
                  <Globe className="h-5 w-5 text-[#0F2745]" />
                </div>
                <h3 className="text-base font-semibold">{t('benefits.bilingual.title')}</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold text-[#0F2745] uppercase tracking-wider mb-1">{t('benefits.forYou')}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{t('benefits.bilingual.you')}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-pink-600 uppercase tracking-wider mb-1">{t('benefits.forPatients')}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{t('benefits.bilingual.patient')}</p>
                </div>
              </div>
            </div>

            {/* Phone Intake */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#0F2745]/8 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-[#0F2745]" />
                </div>
                <h3 className="text-base font-semibold">{t('benefits.phoneIntake.title')}</h3>
                <span className="text-[10px] font-semibold text-[#0F2745] bg-[#0F2745]/8 px-2 py-0.5 rounded-full uppercase tracking-wide">Pro+</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold text-[#0F2745] uppercase tracking-wider mb-1">{t('benefits.forYou')}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{t('benefits.phoneIntake.you')}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-pink-600 uppercase tracking-wider mb-1">{t('benefits.forPatients')}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{t('benefits.phoneIntake.patient')}</p>
                </div>
              </div>
            </div>

            {/* Document Intelligence */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#0F2745]/8 flex items-center justify-center flex-shrink-0">
                  <Upload className="h-5 w-5 text-[#0F2745]" />
                </div>
                <h3 className="text-base font-semibold">{t('benefits.docIntel.title')}</h3>
                <span className="text-[10px] font-semibold text-[#0F2745] bg-[#0F2745]/8 px-2 py-0.5 rounded-full uppercase tracking-wide">Pro+</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold text-[#0F2745] uppercase tracking-wider mb-1">{t('benefits.forYou')}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{t('benefits.docIntel.you')}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-pink-600 uppercase tracking-wider mb-1">{t('benefits.forPatients')}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{t('benefits.docIntel.patient')}</p>
                </div>
              </div>
            </div>

            {/* Crisis Detection */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#0F2745]/8 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-[#0F2745]" />
                </div>
                <h3 className="text-base font-semibold">{t('benefits.crisis.title')}</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold text-[#0F2745] uppercase tracking-wider mb-1">{t('benefits.forYou')}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{t('benefits.crisis.you')}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-pink-600 uppercase tracking-wider mb-1">{t('benefits.forPatients')}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{t('benefits.crisis.patient')}</p>
                </div>
              </div>
            </div>

            {/* Security / HIPAA */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#0F2745]/8 flex items-center justify-center flex-shrink-0">
                  <Shield className="h-5 w-5 text-[#0F2745]" />
                </div>
                <h3 className="text-base font-semibold">{t('benefits.security.title')}</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold text-[#0F2745] uppercase tracking-wider mb-1">{t('benefits.forYou')}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{t('benefits.security.you')}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-pink-600 uppercase tracking-wider mb-1">{t('benefits.forPatients')}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{t('benefits.security.patient')}</p>
                </div>
              </div>
            </div>

            {/* Website Widget */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#0F2745]/8 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="h-5 w-5 text-[#0F2745]" />
                </div>
                <h3 className="text-base font-semibold">{t('benefits.widget.title')}</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold text-[#0F2745] uppercase tracking-wider mb-1">{t('benefits.forYou')}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{t('benefits.widget.you')}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-pink-600 uppercase tracking-wider mb-1">{t('benefits.forPatients')}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{t('benefits.widget.patient')}</p>
                </div>
              </div>
            </div>

            {/* AI Intelligence Brief */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#0F2745]/8 flex items-center justify-center flex-shrink-0">
                  <Brain className="h-5 w-5 text-[#0F2745]" />
                </div>
                <h3 className="text-base font-semibold">{t('benefits.intel.title')}</h3>
                <span className="text-[10px] font-semibold text-[#0F2745] bg-[#0F2745]/8 px-2 py-0.5 rounded-full uppercase tracking-wide">Pro+</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold text-[#0F2745] uppercase tracking-wider mb-1">{t('benefits.forYou')}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{t('benefits.intel.you')}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-pink-600 uppercase tracking-wider mb-1">{t('benefits.forPatients')}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{t('benefits.intel.patient')}</p>
                </div>
              </div>
            </div>

            {/* Marketing Kit */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#0F2745]/8 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="h-5 w-5 text-[#0F2745]" />
                </div>
                <h3 className="text-base font-semibold">{t('benefits.marketingKit.title')}</h3>
                <span className="text-[10px] font-semibold text-[#0F2745] bg-[#0F2745]/8 px-2 py-0.5 rounded-full uppercase tracking-wide">Pro</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold text-[#0F2745] uppercase tracking-wider mb-1">{t('benefits.forYou')}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{t('benefits.marketingKit.you')}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-pink-600 uppercase tracking-wider mb-1">{t('benefits.forPatients')}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{t('benefits.marketingKit.patient')}</p>
                </div>
              </div>
            </div>

            {/* CRM Integration */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#0F2745]/8 flex items-center justify-center flex-shrink-0">
                  <Link2 className="h-5 w-5 text-[#0F2745]" />
                </div>
                <h3 className="text-base font-semibold">{t('benefits.crm.title')}</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold text-[#0F2745] uppercase tracking-wider mb-1">{t('benefits.forYou')}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{t('benefits.crm.you')}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-pink-600 uppercase tracking-wider mb-1">{t('benefits.forPatients')}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{t('benefits.crm.patient')}</p>
                </div>
              </div>
            </div>

            {/* Zapier & Webhooks */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#0F2745]/8 flex items-center justify-center flex-shrink-0">
                  <Zap className="h-5 w-5 text-[#0F2745]" />
                </div>
                <h3 className="text-base font-semibold">{t('benefits.zapier.title')}</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold text-[#0F2745] uppercase tracking-wider mb-1">{t('benefits.forYou')}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{t('benefits.zapier.you')}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-pink-600 uppercase tracking-wider mb-1">{t('benefits.forPatients')}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{t('benefits.zapier.patient')}</p>
                </div>
              </div>
            </div>

            {/* AI Blog Posts */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#0F2745]/8 flex items-center justify-center flex-shrink-0">
                  <Rss className="h-5 w-5 text-[#0F2745]" />
                </div>
                <h3 className="text-base font-semibold">{t('benefits.blogGen.title')}</h3>
                <span className="text-[10px] font-semibold text-[#0F2745] bg-[#0F2745]/8 px-2 py-0.5 rounded-full uppercase tracking-wide">Pro</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold text-[#0F2745] uppercase tracking-wider mb-1">{t('benefits.forYou')}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{t('benefits.blogGen.you')}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-pink-600 uppercase tracking-wider mb-1">{t('benefits.forPatients')}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{t('benefits.blogGen.patient')}</p>
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
            {t('benefits.bottomLine.title')}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            {t('benefits.bottomLine.body')}
          </p>
          <p className="text-sm text-slate-500 mb-10">
            {t('benefits.bottomLine.tagline')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/#waitlist"
              className="bg-[#0F2745] text-white px-8 py-3.5 rounded-md text-sm font-semibold hover:bg-[#0C2038] transition inline-flex items-center gap-2"
            >
              {t('benefits.bottomLine.cta')}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/features"
              className="text-sm font-medium text-slate-500 hover:text-slate-900 transition"
            >
              {t('benefits.bottomLine.seeFeatures')}
            </Link>
          </div>
          <p className="mt-3 text-xs text-slate-500">{t('benefits.bottomLine.trial')}</p>
        </div>
      </section>
    </>
  );
};

export default Benefits;
