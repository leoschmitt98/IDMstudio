const DEFAULT_WHATSAPP_NUMBER = '5500000000000';

export function getWhatsAppNumber(configuredNumber) {
  const normalized = configuredNumber?.trim();
  return normalized && normalized.length > 0 ? normalized : DEFAULT_WHATSAPP_NUMBER;
}

export function buildWhatsappMessageUrl(number, message) {
  return `https://wa.me/${number}?text=${message}`;
}
