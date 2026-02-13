import test from 'node:test';
import assert from 'node:assert/strict';
import { buildWhatsappMessageUrl, getWhatsAppNumber } from '../src/app/whatsapp.js';

test('getWhatsAppNumber returns configured number when valid', () => {
  assert.equal(getWhatsAppNumber('5511999999999'), '5511999999999');
});

test('getWhatsAppNumber strips punctuation and falls back for blank values', () => {
  assert.equal(getWhatsAppNumber('+55 (11) 99999-9999'), '5511999999999');
  assert.equal(getWhatsAppNumber('   '), '5551996359556');
  assert.equal(getWhatsAppNumber(undefined), '5551996359556');
});

test('buildWhatsappMessageUrl encodes message safely', () => {
  assert.equal(
    buildWhatsappMessageUrl('5511999999999', 'Olá! Tenho interesse no plano Básico.'),
    'https://wa.me/5511999999999?text=Ol%C3%A1!%20Tenho%20interesse%20no%20plano%20B%C3%A1sico.'
  );
});
