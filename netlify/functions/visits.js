const COUNTER_GET_URL = 'https://api.counterapi.dev/v1/sendero-de-la-80/visitas/'
const COUNTER_HIT_URL = 'https://api.counterapi.dev/v1/sendero-de-la-80/visitas/up'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Content-Type': 'application/json',
}

export async function handler(event) {
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers: corsHeaders, body: '' }
  }

  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      headers: corsHeaders,
      body: JSON.stringify({ error: 'Method not allowed' }),
    }
  }

  const isHit = event.queryStringParameters?.action === 'hit'
  const targetUrl = isHit ? COUNTER_HIT_URL : COUNTER_GET_URL

  try {
    const response = await fetch(targetUrl)

    if (!response.ok) {
      return {
        statusCode: response.status,
        headers: corsHeaders,
        body: JSON.stringify({ error: 'Counter API error' }),
      }
    }

    const data = await response.json()

    return {
      statusCode: 200,
      headers: corsHeaders,
      body: JSON.stringify(data),
    }
  } catch {
    return {
      statusCode: 502,
      headers: corsHeaders,
      body: JSON.stringify({ error: 'Unable to reach counter service' }),
    }
  }
}
