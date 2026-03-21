const Privacy = () => {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-8">Last Updated: March 21, 2026</p>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-muted-foreground">
              SoloSolutionsAI ("we," "our," or "us") operates a multi-vertical client intake automation platform serving solo practitioners and small businesses across multiple professions, including but not limited to: attorneys, therapists, social workers, veterinarians, realtors, accountants, insurance agents, and travel advisors. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you use our platform at app.solosolutionsai.com and associated services (collectively, the "Service").
            </p>
            <p className="text-muted-foreground mt-4">
              This policy applies to all users of the Service, including professionals who create accounts ("Professionals") and their clients who submit information through intake conversations ("Clients").
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>

            <h3 className="text-xl font-semibold mb-2">2.1 Professional Account Information</h3>
            <p className="text-muted-foreground mb-4">
              When a professional creates an account, we collect: full name, email address, business name, office city and state, phone number, profession/vertical, service areas or specialties, and optional business logo. Professionals may also configure: AI assistant name, client greeting, disclaimers (English and Spanish), intake questions, and scheduling preferences.
            </p>

            <h3 className="text-xl font-semibold mb-2">2.2 Client Intake Information</h3>
            <p className="text-muted-foreground mb-4">
              Information submitted by clients through AI-powered chat conversations or phone intake includes: full name, email address, phone number (optional — clients may decline), city and state, primary concern or reason for inquiry, desired outcome, contact preference, and responses to profession-specific intake questions configured by the professional.
            </p>

            <h3 className="text-xl font-semibold mb-2">2.3 Conversation Transcripts</h3>
            <p className="text-muted-foreground mb-4">
              Full transcripts of intake conversations (both chat and phone) are stored and made available to the professional through their admin portal. Transcripts include all messages exchanged between the client and the AI assistant during the intake session.
            </p>

            <h3 className="text-xl font-semibold mb-2">2.4 Uploaded Documents</h3>
            <p className="text-muted-foreground mb-4">
              When a client uploads documents at the request of their professional, we collect the document files, file names, file types, and file sizes. Documents may include records, correspondence, identification, or other materials relevant to the client's matter. Providing documents is entirely voluntary.
            </p>

            <h3 className="text-xl font-semibold mb-2">2.5 Usage and Technical Data</h3>
            <p className="text-muted-foreground">
              We collect standard technical information including: IP address, browser type, device type, pages visited, time spent, referring URLs, and similar analytics data through Google Analytics 4. This data is used to improve the Service and is not linked to individual client intake records.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Information We Refuse to Collect</h2>
            <p className="text-muted-foreground mb-4">
              SoloSolutionsAI employs active data boundary enforcement. Our system is architecturally designed to detect and block the following categories of sensitive information in real time during intake conversations:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Social Security Numbers (SSN)</strong> — detected and redacted automatically</li>
              <li><strong>Credit card numbers</strong> — detected and redacted automatically</li>
              <li><strong>Bank account and routing numbers</strong> — detected and redacted automatically</li>
              <li><strong>Government-issued ID numbers</strong> — detected and blocked</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              If a client volunteers any of this information during an intake conversation, the system detects the pattern, redacts the data from the transcript, does not store it, and gracefully redirects the conversation. This protection operates at the infrastructure level, not the policy level — meaning the system is structurally incapable of retaining this data, regardless of user input.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">We use collected information to:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Provide, operate, and maintain the Service</li>
              <li>Process client intake submissions and deliver them to the appropriate professional</li>
              <li>Generate AI-powered intake summaries, context notes, and intelligence briefs</li>
              <li>Analyze uploaded documents using AI to produce structured summaries for the professional</li>
              <li>Send email notifications about new intake submissions to professionals and confirmation emails to clients</li>
              <li>Generate AI-powered marketing content (blog posts, social media copy) at the professional's request</li>
              <li>Sync intake data to third-party services (HubSpot, Zapier, webhooks) when configured by the professional</li>
              <li>Provide consultation scheduling functionality via Calendly integration</li>
              <li>Monitor platform health and performance via internal analytics</li>
              <li>Improve and personalize the Service</li>
              <li>Respond to support requests</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Third-Party Integrations and Data Sharing</h2>
            <p className="text-muted-foreground mb-4">
              SoloSolutionsAI integrates with third-party services. Data is shared with these services <strong>only when explicitly configured by the professional</strong>. We do not sell, rent, or share client data with third parties for their own marketing purposes.
            </p>

            <h3 className="text-xl font-semibold mb-2">5.1 HubSpot CRM</h3>
            <p className="text-muted-foreground mb-4">
              When a professional connects their HubSpot account via OAuth, completed intake data (client name, email, phone, location, primary concern, desired outcome, contact preference, and AI context summary) is automatically sent to HubSpot to create or update a contact record. Data flows one way: from SoloSolutionsAI to HubSpot. The professional's HubSpot account is governed by HubSpot's own privacy policy and terms.
            </p>

            <h3 className="text-xl font-semibold mb-2">5.2 Webhooks (Zapier, Make, Custom Endpoints)</h3>
            <p className="text-muted-foreground mb-4">
              Professionals may configure webhook URLs that receive intake data when a client completes an intake. The data payload includes: client name, email, phone, location, primary concern, desired outcome, contact preference, intake source, and vertical. Webhook payloads are signed with HMAC-SHA256 when a signing secret is configured. The professional is solely responsible for the security and privacy practices of their webhook endpoints and connected services.
            </p>

            <h3 className="text-xl font-semibold mb-2">5.3 Calendly</h3>
            <p className="text-muted-foreground mb-4">
              When a professional connects Calendly, we store OAuth tokens to facilitate consultation invite emails. We do not access or store Calendly appointment data beyond the scheduling URL and event type.
            </p>

            <h3 className="text-xl font-semibold mb-2">5.4 AI Processing Services</h3>
            <p className="text-muted-foreground mb-4">
              We use Anthropic (Claude) for AI-powered intake conversations, context summaries, intelligence briefs, document analysis, and blog post generation. Our AI provider does not retain, store, or use your data to train AI models. Data is processed in real time and discarded by the provider after the response is generated.
            </p>

            <h3 className="text-xl font-semibold mb-2">5.5 Email Services</h3>
            <p className="text-muted-foreground mb-4">
              Transactional emails (intake notifications, client confirmations, document requests) are sent via Resend. Email content is transmitted securely and is not stored by the email provider beyond delivery.
            </p>

            <h3 className="text-xl font-semibold mb-2">5.6 Analytics</h3>
            <p className="text-muted-foreground">
              We use Google Analytics 4 to collect anonymized usage data on our marketing websites and platform. Analytics data is not linked to individual client intake records.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Data Security</h2>
            <p className="text-muted-foreground mb-4">
              We implement robust technical and organizational security measures to protect your information:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>All data is encrypted in transit using TLS 1.2+ and at rest using AES-256 encryption</li>
              <li>Database access is governed by Row Level Security (RLS) policies — professionals can only access their own data</li>
              <li>Client document storage uses private, encrypted buckets with access-controlled policies</li>
              <li>No employee, contractor, or representative of SoloSolutionsAI views, reads, or reviews client intake data or uploaded documents — all processing is fully automated</li>
              <li>API rate limiting is enforced to prevent abuse</li>
              <li>CORS policies restrict access to authorized domains only</li>
              <li>Integration tokens (HubSpot, Calendly) are encrypted and stored securely</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Data Retention</h2>
            <p className="text-muted-foreground mb-4">
              <strong>Professional accounts:</strong> Account information is retained for as long as your account is active. You may request account deletion at any time.
            </p>
            <p className="text-muted-foreground mb-4">
              <strong>Client intake records:</strong> Intake submissions, conversation transcripts, and AI-generated summaries are retained unless the professional or client requests deletion. Professionals can manage and delete intake records from their admin portal.
            </p>
            <p className="text-muted-foreground mb-4">
              <strong>Uploaded documents:</strong> Client-uploaded documents and their AI-generated summaries are automatically deleted from our systems 30 days after upload. SoloSolutionsAI is designed as a pass-through service, not a permanent document repository. Professionals are responsible for downloading and retaining any documents they need within this window.
            </p>
            <p className="text-muted-foreground mb-4">
              <strong>Integration data:</strong> OAuth tokens for connected services (HubSpot, Calendly) are retained until the professional disconnects the integration. Data that has been synced to third-party services is governed by those services' retention policies.
            </p>
            <p className="text-muted-foreground">
              <strong>Right to deletion:</strong> Clients may request immediate deletion of their data, including intake records and uploaded documents, at any time by contacting <a href="mailto:privacy@solosolutionsai.com" className="text-primary hover:underline">privacy@solosolutionsai.com</a>. Upon receiving a valid request, we will delete the relevant data from our systems. Note: data already synced to third-party services (HubSpot, webhooks) must be deleted by the professional from those services directly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Profession-Specific Considerations</h2>
            <p className="text-muted-foreground mb-4">
              SoloSolutionsAI serves professionals across multiple regulated and unregulated industries. The following considerations apply:
            </p>

            <h3 className="text-xl font-semibold mb-2">8.1 Legal Professionals</h3>
            <p className="text-muted-foreground mb-4">
              SoloSolutionsAI is a software tool only. Use of the Service does not create an attorney-client relationship. Attorneys are responsible for ensuring their use of the platform complies with applicable rules of professional conduct, ethics rules, and client confidentiality requirements in their jurisdiction. Data retention requirements vary by state bar — attorneys should download and retain intake records according to their jurisdictional requirements.
            </p>

            <h3 className="text-xl font-semibold mb-2">8.2 Mental Health Professionals</h3>
            <p className="text-muted-foreground mb-4">
              The Service is designed for initial client onboarding and lead capture — not for clinical documentation, treatment planning, or session notes. The AI intake conversation does not constitute a therapeutic session. Therapists and counselors are responsible for ensuring their use of the platform complies with applicable licensing board requirements and patient confidentiality obligations. The Service is not intended to be HIPAA-compliant and should not be used to collect protected health information (PHI) as defined by HIPAA.
            </p>

            <h3 className="text-xl font-semibold mb-2">8.3 Social Workers</h3>
            <p className="text-muted-foreground mb-4">
              Social workers using the Service should ensure compliance with the NASW Code of Ethics regarding client confidentiality and informed consent. The Service supports initial intake and inquiry capture — it is not a case management system.
            </p>

            <h3 className="text-xl font-semibold mb-2">8.4 Healthcare and Veterinary Professionals</h3>
            <p className="text-muted-foreground mb-4">
              The Service captures initial client/patient owner information for onboarding purposes. It is not an electronic health records (EHR) system and should not be used to store medical records, diagnoses, or treatment plans. AI-generated intelligence briefs are informational tools and do not constitute medical or veterinary diagnosis.
            </p>

            <h3 className="text-xl font-semibold mb-2">8.5 Financial Professionals</h3>
            <p className="text-muted-foreground mb-4">
              Accountants and insurance professionals are responsible for ensuring compliance with applicable financial privacy regulations. Our data boundary enforcement actively blocks collection of financial account numbers, Social Security Numbers, and other sensitive financial identifiers during intake.
            </p>

            <h3 className="text-xl font-semibold mb-2">8.6 All Professions</h3>
            <p className="text-muted-foreground">
              Regardless of profession, all professionals using SoloSolutionsAI are solely responsible for ensuring their use of the platform complies with applicable laws, regulations, professional standards, and ethical codes in their jurisdiction. SoloSolutionsAI provides a technology platform — it does not provide legal, medical, financial, or professional advice of any kind.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Your Rights</h2>
            <p className="text-muted-foreground mb-4">Depending on your location, you may have the following rights:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Portability:</strong> Request your data in a structured, machine-readable format</li>
              <li><strong>Objection:</strong> Object to processing of your information for certain purposes</li>
              <li><strong>Restriction:</strong> Request that we limit how we use your information</li>
              <li><strong>Withdrawal of consent:</strong> Withdraw consent at any time where processing is based on consent</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              To exercise any of these rights, contact us at <a href="mailto:privacy@solosolutionsai.com" className="text-primary hover:underline">privacy@solosolutionsai.com</a>. We will respond within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. US State Privacy Laws</h2>
            <p className="text-muted-foreground mb-4">
              We comply with applicable US state privacy laws, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>California (CCPA/CPRA):</strong> California residents have the right to know what personal information is collected, request deletion, and opt out of the sale of personal information. We do not sell personal information.</li>
              <li><strong>Virginia (VCDPA), Colorado (CPA), Connecticut (CTDPA):</strong> Residents of these states have similar rights to access, correction, deletion, and portability of their personal information.</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              We do not sell, share for cross-context behavioral advertising, or use personal information for profiling in furtherance of decisions that produce legal or similarly significant effects.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. International Users</h2>
            <p className="text-muted-foreground mb-4">
              SoloSolutionsAI is currently operated from and hosted in the United States. All data is stored and processed in the United States. If you access the Service from outside the United States, please be aware that your information will be transferred to, stored, and processed in the United States.
            </p>
            <p className="text-muted-foreground mb-4">
              <strong>GDPR (EU/UK):</strong> For users in the European Economic Area or United Kingdom, we process personal data based on: (a) contractual necessity — to provide the Service you have requested; (b) legitimate interests — to operate and improve our platform; or (c) your explicit consent. You have the right to lodge a complaint with your local data protection authority. EU/UK-specific data residency options may be offered in the future.
            </p>
            <p className="text-muted-foreground">
              By using the Service, you consent to the transfer and processing of your information in the United States in accordance with this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">12. Children's Privacy</h2>
            <p className="text-muted-foreground">
              The Service is not intended for individuals under 18 years of age. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a minor, please contact us immediately at <a href="mailto:privacy@solosolutionsai.com" className="text-primary hover:underline">privacy@solosolutionsai.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">13. Changes to This Policy</h2>
            <p className="text-muted-foreground">
              We may update this Privacy Policy from time to time. We will notify registered professionals of material changes by email and by posting the updated policy on this page with a revised "Last Updated" date. Continued use of the Service after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">14. Contact Us</h2>
            <p className="text-muted-foreground">
              If you have questions about this Privacy Policy, wish to exercise your rights, or have concerns about our data practices, please contact us at:
            </p>
            <p className="text-muted-foreground mt-2">
              Email: <a href="mailto:privacy@solosolutionsai.com" className="text-primary hover:underline">privacy@solosolutionsai.com</a>
            </p>
            <p className="text-muted-foreground mt-2">
              SoloSolutionsAI<br />
              Dunedin, Florida, United States
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
