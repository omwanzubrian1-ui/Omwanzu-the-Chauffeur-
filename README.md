# Omwanzu The Chauffeur — website starter

A responsive Next.js recreation inspired by the screenshots supplied in the conversation. It uses a warm ivory / deep forest palette, editorial typography, full-width photography, fleet cards, WhatsApp enquiry links, an accordion FAQ and mobile navigation.

## Run locally

1. Install Node.js 18.17+.
2. In this folder run `npm install`.
3. Run `npm run dev` and open http://localhost:3000.
4. Run `npm run build` before deployment.

## Deploy to Vercel

Import this folder as a new project in Vercel, choose Next.js, and deploy. No environment variables are required.

## Customise before publishing

- The WhatsApp number is set near the top of `app/page.tsx` as `254741455795` (displayed as 0741 455 795).
- Fleet names, guide prices, descriptions and photos are in the `fleet` array in `app/page.tsx`.
- Service cards and FAQ text are in the `services` and `faqs` arrays.
- Replace the sample Unsplash photos with your own original vehicle and chauffeur photos for the closest match to your real business.
- Prices are presented as guide prices and should be confirmed before publication.

This is a fresh implementation inspired by the supplied screenshots, not a copy of the original site's source code.
\n\n## Vehicle photographs\nThe fleet gallery uses the owner's supplied vehicle photographs in `public/cars`. Visible registration plates in the supplied rear-view photos have been blurred before inclusion. Replace these assets only with similarly plate-masked images.\n