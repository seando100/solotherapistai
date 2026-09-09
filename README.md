# SoloTherapistAI

Bilingual marketing site for SoloTherapistAI, an AI front office for therapy practices.
Live at **[solotherapistai.vercel.app](https://solotherapistai.vercel.app)**.

Built as a React and Vite single-page application, English and Spanish sharing one URL.

**Scheduled for the Astro migration proven on [solovetai](https://github.com/seando100/solovetai).**
The reason is discoverability: AI answer engines execute no JavaScript, so a client-rendered
SPA serves them an empty `<div id="root">` and is invisible to them. The pilot rebuilds the
site as statically rendered pages with separate crawlable URLs per language. That architecture
now replicates across the remaining vertical sites.

## Stack

React, Vite, TypeScript, Tailwind. Supabase for the waitlist, deployed on Vercel.

---

One of the vertical sites for [SoloBusinessAI](https://www.solosolutionsai.com).
Built by [Sean Doherty](https://github.com/seando100).
