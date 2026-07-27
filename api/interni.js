// Interni CRM za Basic auth. Bez INTERNI_USER/INTERNI_PASS vraci 500, nikdy neotevre stranku.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

function safeEqual(a, b) {
  const bufA = Buffer.from(String(a));
  const bufB = Buffer.from(String(b));
  // delky se porovnavaji zvlast, timingSafeEqual na ruznych delkach vyhazuje
  if (bufA.length !== bufB.length) return false;
  return crypto.timingSafeEqual(bufA, bufB);
}

export default function handler(req, res) {
  const user = process.env.INTERNI_USER;
  const pass = process.env.INTERNI_PASS;

  if (!user || !pass) {
    res.status(500).send('INTERNI_USER a INTERNI_PASS nejsou nastavene ve Vercelu.');
    return;
  }

  const [scheme, encoded] = String(req.headers.authorization || '').split(' ');
  let ok = false;
  if (scheme === 'Basic' && encoded) {
    const decoded = Buffer.from(encoded, 'base64').toString('utf8');
    const sep = decoded.indexOf(':');
    if (sep !== -1) {
      // obe porovnani se provedou vzdy, aby se neprozradilo, ktere selhalo
      const userOk = safeEqual(decoded.slice(0, sep), user);
      const passOk = safeEqual(decoded.slice(sep + 1), pass);
      ok = userOk && passOk;
    }
  }

  if (!ok) {
    res.setHeader('WWW-Authenticate', 'Basic realm="SiteSpot interni", charset="UTF-8"');
    res.status(401).send('Neautorizovano.');
    return;
  }

  const file = path.join(process.cwd(), 'private', 'interni.html');
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('X-Robots-Tag', 'noindex, nofollow, noarchive');
  res.setHeader('Cache-Control', 'no-store, private');
  res.setHeader('Referrer-Policy', 'no-referrer');
  res.status(200).send(fs.readFileSync(file));
}
