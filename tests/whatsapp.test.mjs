import test from 'node:test';
import assert from 'node:assert/strict';
import { buildWhatsappMessageUrl, getWhatsAppNumber } from '../src/app/whatsapp.js';

test('getWhatsAppNumber returns configured number when valid', () => {
  assert.equal(getWhatsAppNumber('5511999999999'), '5511999999999');
});

test('getWhatsAppNumber falls back to default for blank values', () => {
  assert.equal(getWhatsAppNumber('   '), '5500000000000');
  assert.equal(getWhatsAppNumber(undefined), '5500000000000');
});

test('buildWhatsappMessageUrl builds expected wa.me URL', () => {
  assert.equal(
    buildWhatsappMessageUrl('5511999999999', 'Olá! Tenho interesse no plano Básico.'),
    'https://wa.me/5511999999999?text=Olá! Tenho interesse no plano Básico.'
  );
});
