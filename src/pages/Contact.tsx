import { Mail, Clock } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Get In Touch
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
            Have questions about SoloTherapistAI? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-[#EC4899]/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-[#EC4899]" />
                </div>
                <h3 className="text-base font-semibold">Email Us</h3>
              </div>
              <p className="text-sm text-slate-600 mb-3">
                Send us an email and we'll get back to you within 1 business day.
              </p>
              <a href="mailto:sean@solosolutionsai.com" className="text-sm text-[#EC4899] hover:underline font-medium">
                sean@solosolutionsai.com
              </a>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-[#EC4899]/10 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-[#EC4899]" />
                </div>
                <h3 className="text-base font-semibold">Response Times</h3>
              </div>
              <p className="text-sm text-slate-600">
                Monday – Friday: within 1 business day
              </p>
              <p className="text-sm text-slate-600 mt-1">
                Weekends: next business day
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="text-base font-semibold mb-1">Send Us a Message</h3>
            <p className="text-sm text-slate-600 mb-6">
              Fill out the form below and we'll get back to you soon.
            </p>

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-pink-600" />
                </div>
                <p className="text-lg font-semibold text-slate-800 mb-2">Thanks for reaching out!</p>
                <p className="text-sm text-slate-600">We'll notify you when SoloTherapistAI launches.</p>
              </div>
            ) : (
              <form
                action="mailto:sean@solosolutionsai.com"
                method="POST"
                encType="text/plain"
                onSubmit={() => setSubmitted(true)}
                className="space-y-4"
              >
                <div>
                  <label htmlFor="name" className="text-sm font-medium mb-2 block">Name *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Dr. Jane Smith, LCSW"
                    className="w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#EC4899]/50 focus:border-[#EC4899]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-sm font-medium mb-2 block">Email *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="jane@example.com"
                    className="w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#EC4899]/50 focus:border-[#EC4899]"
                  />
                </div>

                <div>
                  <label htmlFor="practice" className="text-sm font-medium mb-2 block">Practice Focus</label>
                  <input
                    id="practice"
                    name="practice"
                    type="text"
                    placeholder="Individual therapy, couples, family, child/adolescent, etc."
                    className="w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#EC4899]/50 focus:border-[#EC4899]"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium mb-2 block">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell us more about your question or how you'd like to use SoloTherapistAI..."
                    className="w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#EC4899]/50 focus:border-[#EC4899] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0F2745] text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-[#0C2038] transition"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
