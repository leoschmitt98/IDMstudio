export function getUtmContext(search = '') {
  const params = new URLSearchParams(search);

  return {
    source: params.get('utm_source') || undefined,
    medium: params.get('utm_medium') || undefined,
    campaign: params.get('utm_campaign') || undefined,
    content: params.get('utm_content') || undefined,
    term: params.get('utm_term') || undefined,
  };
}

export function appendCampaignContext(message, utmContext) {
  const tags = [
    utmContext.source ? `utm_source=${utmContext.source}` : null,
    utmContext.medium ? `utm_medium=${utmContext.medium}` : null,
    utmContext.campaign ? `utm_campaign=${utmContext.campaign}` : null,
    utmContext.content ? `utm_content=${utmContext.content}` : null,
    utmContext.term ? `utm_term=${utmContext.term}` : null,
  ].filter(Boolean);

  if (tags.length === 0) {
    return message;
  }

  return `${message} | Origem da campanha: ${tags.join(', ')}`;
}

export function trackCtaClick({ ctaId, service, message, utmContext }) {
  if (typeof window === 'undefined') {
    return;
  }

  const payload = {
    event: 'whatsapp_cta_click',
    cta_id: ctaId,
    service,
    message,
    utm_source: utmContext.source,
    utm_medium: utmContext.medium,
    utm_campaign: utmContext.campaign,
    utm_content: utmContext.content,
    utm_term: utmContext.term,
    timestamp: Date.now(),
  };

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);

  if (typeof window.gtag === 'function') {
    window.gtag('event', 'whatsapp_cta_click', payload);
  }

  if (typeof window.fbq === 'function') {
    window.fbq('trackCustom', 'WhatsAppCTAClick', payload);
  }
}
