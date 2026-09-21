# Chat widget backend (Cloudflare Worker)

Holds the Perplexity API key server-side and answers the site's chat
widget at `POST /api/chat`. The key never reaches the browser.

## Setup

```sh
npm install
npx wrangler login
npx wrangler secret put PERPLEXITY_API_KEY   # paste the real key when prompted
```

## Local dev

```sh
npm run dev
```

## Deploy

```sh
npm run deploy
```

Then route it under the site's domain so the widget's relative
`/api/chat` call reaches it:

1. Make sure `miscommlogistics.com` is on Cloudflare (orange-clouded DNS).
2. Uncomment the `[[routes]]` block in `wrangler.toml` and redeploy, **or**
   add the route in the Cloudflare dashboard: Workers & Pages → this
   worker → Triggers → Routes → `miscommlogistics.com/api/*`.

If you'd rather not move DNS to Cloudflare, deploy as-is and change
`CHAT_API_ENDPOINT` in `index.html`'s chat widget script to the worker's
`*.workers.dev` URL instead.

## Notes / limitations

- CORS is restricted to `https://miscommlogistics.com` and
  `https://www.miscommlogistics.com` (see `ALLOWED_ORIGINS` in
  `src/index.js`). Update that list if the domain changes.
- There is no rate limiting yet. Since this proxies a paid API, consider
  adding a Cloudflare Rate Limiting rule on the `/api/chat` route (dashboard
  → Security → WAF → Rate limiting rules) before pointing real traffic at
  it, so the key can't be hammered into a large bill.
- Messages are capped at 2000 characters and there's no conversation
  history — each question is answered independently.
