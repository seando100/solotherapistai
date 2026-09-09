# SoloTherapistAI

AI customer intake and front-office for therapy practices. Live at **[solotherapistai.vercel.app](https://solotherapistai.vercel.app)**.

## This repository is output, not hand-written source

It was produced by a six-agent pipeline I built, which stands up a complete, deployed,
tested vertical product from a single brief. Every file here was generated. The
interesting engineering is the pipeline, not this codebase.

Each agent owns one stage and hands off to the next. A vertical is not considered live
until the QA agent's smoke test passes against the real deployment.

| Agent | Role | What it did for this vertical |
|---|---|---|
| Skyler | Schema Architect | Researched the profession and designed the full intake schema: questions, field types, validation rules, bilingual labels |
| Rory | Codebase Engineer | Cloned the platform template and swapped every profession-specific element: branding, colour, copy, schema |
| Emery | Copy Strategist | Wrote the customer-facing copy: landing page, emails, FAQ, onboarding, error messages |
| Lennox | Infrastructure Engineer | Created the Supabase project, ran the migrations, deployed to Vercel, configured DNS and environment variables |
| Kai | Voice Systems Engineer | Built the voice assistant, its persona and prompt, the webhook endpoint and the phone number |
| Dakota | QA Engineer | Ran the smoke test end to end: verified the deployment, created a test account, completed an intake, checked the database, confirmed the emails sent |

## What a run produces

A working product for a therapy practice: a deployed Next.js application, a provisioned Supabase
database with its migrations applied, a profession-specific intake schema with bilingual
labels, complete customer-facing copy, a voice assistant with its own phone number, and a
passing end-to-end smoke test.

## Stack

Next.js, TypeScript, Supabase, Vercel, and Vapi for voice.

---

Part of SoloBusinessAI. Built by [Sean Doherty](https://github.com/seando100).
