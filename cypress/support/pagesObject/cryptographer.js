import crypto from '../../downloads/crypto';

Cypress.Commands.add('encryptData', (data) => {
  return crypto.encode(data, Cypress.env('blowfishPassphrase'))
});

Cypress.Commands.add('decryptData', (data) => {
  return crypto.decode(data, Cypress.env('blowfishPassphrase'))
});