@AGENTS.md

# Campfire Music Foundation (cfmusic.org)

Website for Campfire Music Foundation, a 501(c)(3) nonprofit building a sustainable streaming platform for fair artist compensation. Deployed to Vercel.

## Stack
- Next.js 16 App Router, TypeScript, Tailwind CSS v4
- Webflow CMS integration via API (src/lib/webflow.ts)

## Webflow Integration

The site is designed to coexist with Webflow. The team can edit content in Webflow's visual editor, and Next.js fetches it via the Webflow CMS API.

**Setup:**
1. Set `WEBFLOW_API_TOKEN` and `WEBFLOW_SITE_ID` in `.env.local`
2. Use `src/lib/webflow.ts` functions to fetch CMS collections
3. Content is cached for 5 minutes (ISR via `next: { revalidate: 300 }`)

**When Webflow is not configured**, the site renders static content from the Next.js pages directly.

## Key Files
- `src/app/page.tsx` — Homepage (hero, mission, values, CTA)
- `src/app/layout.tsx` — Root layout with metadata
- `src/lib/webflow.ts` — Webflow CMS API client
- `src/components/` — Shared components

## Design
- Brand color: #AF3F16 (burnt orange)
- Background: #FFFBF5 (warm off-white)
- Text: #131211 (near-black)
- Font: Inter

## Deploy
```bash
cd ~/Documents/cfmusic && vercel --prod
```
