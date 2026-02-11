import test from 'node:test';
import assert from 'node:assert/strict';
import { appendCampaignContext, getUtmContext } from '../src/app/marketing.js';

test('getUtmContext extracts known utm params', () => {
  const utm = getUtmContext('?utm_source=meta&utm_medium=cpc&utm_campaign=dia-das-maes&utm_content=video1&utm_term=gestante');

  assert.deepEqual(utm, {
    source: 'meta',
    medium: 'cpc',
    campaign: 'dia-das-maes',
    content: 'video1',
    term: 'gestante',
  });
});

test('appendCampaignContext keeps original message when no utm exists', () => {
  const message = appendCampaignContext('Olá! Tenho interesse no ensaio de gestante.', {});
  assert.equal(message, 'Olá! Tenho interesse no ensaio de gestante.');
});

test('appendCampaignContext appends utm tags when available', () => {
  const message = appendCampaignContext('Olá! Tenho interesse no ensaio de gestante.', {
    source: 'meta',
    medium: 'cpc',
    campaign: 'dia-das-maes',
  });

  assert.equal(
    message,
    'Olá! Tenho interesse no ensaio de gestante. | Origem da campanha: utm_source=meta, utm_medium=cpc, utm_campaign=dia-das-maes'
  );
});
