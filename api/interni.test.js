// Spust: node api/interni.test.js   (z korene repa)
import assert from 'node:assert';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

process.chdir(path.join(path.dirname(fileURLToPath(import.meta.url)), '..'));
const { default: handler } = await import('./interni.js');

function call(headers, env) {
  process.env.INTERNI_USER = env.user;
  process.env.INTERNI_PASS = env.pass;
  if (!env.user) delete process.env.INTERNI_USER;
  if (!env.pass) delete process.env.INTERNI_PASS;

  const out = { code: 0, headers: {}, body: null };
  const res = {
    setHeader: (k, v) => { out.headers[k.toLowerCase()] = v; },
    status: (c) => { out.code = c; return res; },
    send: (b) => { out.body = b; return res; },
  };
  handler({ headers }, res);
  return out;
}

const creds = (u, p) => ({ authorization: 'Basic ' + Buffer.from(u + ':' + p).toString('base64') });
const env = { user: 'test-user', pass: 'test-pass' };

// bez env promennych se stranka nesmi otevrit
const noEnv = call(creds('test-user', 'test-pass'), {});
assert.strictEqual(noEnv.code, 500, 'bez env musi vratit 500');
assert.ok(!String(noEnv.body).includes('<html'), 'bez env nesmi vratit HTML');

// bez hlavicky
assert.strictEqual(call({}, env).code, 401, 'bez auth musi vratit 401');

// spatne heslo, spatny uzivatel, prazdne heslo
assert.strictEqual(call(creds('test-user', 'spatne'), env).code, 401, 'spatne heslo musi vratit 401');
assert.strictEqual(call(creds('nikdo', 'test-pass'), env).code, 401, 'spatny uzivatel musi vratit 401');
assert.strictEqual(call(creds('test-user', ''), env).code, 401, 'prazdne heslo musi vratit 401');

// jine schema nez Basic
assert.strictEqual(call({ authorization: 'Bearer test-pass' }, env).code, 401, 'Bearer musi vratit 401');

// spravne udaje
const ok = call(creds('test-user', 'test-pass'), env);
assert.strictEqual(ok.code, 200, 'spravne udaje musi vratit 200');
assert.ok(String(ok.body).includes('<html'), 'musi vratit HTML stranku');
assert.match(ok.headers['x-robots-tag'], /noindex/, 'musi byt noindex');

console.log('OK: vsech 8 kontrol proslo');
