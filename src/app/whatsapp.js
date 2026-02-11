const DEFAULT_WHATSAPP_NUMBER = '51996359556';

export function getWhatsAppNumber(configuredNumber) {
  const normalized = configuredNumber?.trim();
  if (!normalized) {
    return DEFAULT_WHATSAPP_NUMBER;
  }

  const digitsOnly = normalized.replace(/\D/g, '');
  return digitsOnly.length > 0 ? digitsOnly : DEFAULT_WHATSAPP_NUMBER;
}

export function buildWhatsappMessageUrl(number, message) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
