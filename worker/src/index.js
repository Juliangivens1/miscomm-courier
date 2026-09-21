import Perplexity from '@perplexity-ai/perplexity_ai';

const ALLOWED_ORIGINS = new Set([
  'https://miscommlogistics.com',
  'https://www.miscommlogistics.com',
]);

const SYSTEM_PROMPT =
  'You are the website assistant for Miscomm Logistics, a Columbus, Ohio courier ' +
  'company offering personal SUV courier and medical courier services, last-mile ' +
  'transport, errands, and airport pickup/drop-off. Answer visitor questions ' +
  'about these services concisely and helpfully. If asked about pricing, hours, ' +
  'or anything not covered by the site, tell the visitor to contact Miscomm ' +
  'Logistics directly rather than guessing.';

const MAX_MESSAGE_LENGTH = 2000;

function corsHeaders(origin) {
  const headers = {
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
  if (ALLOWED_ORIGINS.has(origin)) {
    headers['Access-Control-Allow-Origin'] = origin;
    headers['Vary'] = 'Origin';
  }
  return headers;
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';
    const headers = corsHeaders(origin);

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers });
    }

    if (!ALLOWED_ORIGINS.has(origin)) {
      return new Response(JSON.stringify({ error: 'Origin not allowed' }), {
        status: 403,
        headers: { ...headers, 'Content-Type': 'application/json' },
      });
    }

    const url = new URL(request.url);
    if (url.pathname !== '/api/chat' || request.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Not found' }), {
        status: 404,
        headers: { ...headers, 'Content-Type': 'application/json' },
      });
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return new Response(JSON.stringify({ error: 'Invalid JSON body' }), {
        status: 400,
        headers: { ...headers, 'Content-Type': 'application/json' },
      });
    }

    const message = typeof body.message === 'string' ? body.message.trim() : '';
    if (!message) {
      return new Response(JSON.stringify({ error: 'message is required' }), {
        status: 400,
        headers: { ...headers, 'Content-Type': 'application/json' },
      });
    }
    if (message.length > MAX_MESSAGE_LENGTH) {
      return new Response(
        JSON.stringify({ error: `message must be ${MAX_MESSAGE_LENGTH} characters or fewer` }),
        { status: 400, headers: { ...headers, 'Content-Type': 'application/json' } },
      );
    }

    const client = new Perplexity({ apiKey: env.PERPLEXITY_API_KEY });

    let completion;
    try {
      completion = await client.chat.completions.create({
        model: 'sonar',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: message },
        ],
      });
    } catch (err) {
      return new Response(JSON.stringify({ error: 'Upstream request failed' }), {
        status: 502,
        headers: { ...headers, 'Content-Type': 'application/json' },
      });
    }

    const reply = completion.choices?.[0]?.message?.content ?? '';
    return new Response(JSON.stringify({ reply }), {
      status: 200,
      headers: { ...headers, 'Content-Type': 'application/json' },
    });
  },
};
