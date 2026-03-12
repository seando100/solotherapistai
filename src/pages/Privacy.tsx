const Privacy = () => {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-8">Last Updated: March 2026</p>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-muted-foreground">
              SoloTherapistAI ("we," "our," or "us"), a product of SoloSolutionsAI, is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our patient intake automation service for mental health professionals. We designed SoloTherapistAI with HIPAA principles in mind and treat all patient information with the highest standard of care.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-semibold mb-2">2.1 Therapist Information</h3>
            <p className="text-muted-foreground mb-4">
              When you create an account, we collect: name, email address, practice name, office location, phone number, therapeutic specializations, credentials, and optional practice logo.
            </p>
            <h3 className="text-xl font-semibold mb-2">2.2 Patient Intake Information</h3>
            <p className="text-muted-foreground mb-4">
              Information submitted by patients through intake forms including: name, contact information, presenting concerns, therapy history, scheduling preferences, insurance information, and any additional information provided in the intake.
            </p>
            <h3 className="text-xl font-semibold mb-2">2.3 Uploaded Documents</h3>
            <p className="text-muted-foreground">
              When a patient uploads documents at the request of their therapist, we collect the document files, file names, file types, and file sizes. Documents may include insurance verification forms, prior treatment records, psychological assessments, referral letters, or medication lists. Providing documents is entirely voluntary.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">We use collected information to:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Provide and maintain our service</li>
              <li>Process patient intake submissions and route them to the appropriate therapist</li>
              <li>Send email notifications about new intake submissions</li>
              <li>Generate AI-powered summaries of patient intakes</li>
              <li>Analyze uploaded documents using AI to produce structured summaries, helping therapists prepare for initial sessions more effectively</li>
              <li>Improve and personalize our service</li>
              <li>Respond to customer service requests</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
            <p className="text-muted-foreground">
              We implement robust technical and organizational security measures to protect your information. All data is encrypted in transit using SSL/TLS and at rest using AES-256 encryption. We use secure cloud infrastructure designed to support HIPAA-compliant workflows and follow industry best practices for protecting sensitive health-related information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Data Retention</h2>
            <p className="text-muted-foreground mb-4">
              We retain therapist account information for as long as your account is active. Patient intake submissions are retained unless you request deletion.
            </p>
            <p className="text-muted-foreground mb-4">
              <strong>Uploaded Documents:</strong> Patient-uploaded documents and their AI-generated summaries are automatically deleted from our system 30 days after upload. SoloTherapistAI is designed as a pass-through service, not a permanent record repository. Therapists are responsible for downloading and saving any documents they need to their own HIPAA-compliant systems.
            </p>
            <p className="text-muted-foreground">
              <strong>Right to Deletion:</strong> Patients may request immediate deletion of their uploaded documents at any time by contacting <a href="mailto:privacy@solotherapistai.com" className="text-primary hover:underline">privacy@solotherapistai.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. AI Processing & Third-Party Services</h2>
            <p className="text-muted-foreground mb-4">We use third-party services including email delivery providers, cloud hosting services, and AI processing services.</p>
            <p className="text-muted-foreground mb-4"><strong>AI Document Analysis:</strong> Uploaded documents are processed by AI solely to generate structured summaries. AI summaries do not constitute clinical assessments, diagnoses, or therapeutic recommendations.</p>
            <p className="text-muted-foreground mb-4"><strong>No Human Review:</strong> No employee, contractor, or representative of SoloTherapistAI views uploaded documents or intake information. All processing is automated.</p>
            <p className="text-muted-foreground"><strong>AI Provider Data Practices:</strong> Our AI provider does not retain, store, or use your documents or data to train AI models. Data is processed in real time and discarded after the response is generated.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Your Rights</h2>
            <p className="text-muted-foreground mb-4">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Export your data</li>
              <li>Object to processing of your information</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. GDPR Compliance</h2>
            <p className="text-muted-foreground">For users in the EEA, we comply with GDPR. We process your data based on legitimate interests, contractual necessity, or your consent.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Children's Privacy</h2>
            <p className="text-muted-foreground">Our service is not intended for individuals under 18 years of age. We do not knowingly collect personal information from minors. Therapists working with minors are responsible for obtaining appropriate parental or guardian consent.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Changes to This Policy</h2>
            <p className="text-muted-foreground">We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
            <p className="text-muted-foreground">If you have questions about this Privacy Policy, contact us at:</p>
            <p className="text-muted-foreground mt-2">Email: <a href="mailto:sean@solosolutionsai.com" className="text-primary hover:underline">sean@solosolutionsai.com</a></p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
