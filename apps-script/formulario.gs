/**
 * Formulario de contacto de la web → Gmail + hoja de Google.
 *
 * INSTALACIÓN (una sola vez, ~5 minutos):
 *  1. Crea una hoja de cálculo nueva en Google Sheets (llámala "Contactos web").
 *  2. En la hoja: Extensiones → Apps Script. Borra lo que haya y pega este archivo.
 *  3. Cambia DESTINO si quieres recibir los avisos en otro correo.
 *  4. Guarda (icono del disquete) y pulsa "Ejecutar" con la función `probar`.
 *     Google te pedirá permisos: acepta (es tu propio script).
 *     Te llegará un email de prueba y verás una fila nueva en la hoja.
 *  5. Implementar → Nueva implementación → tipo "Aplicación web":
 *       - Ejecutar como: Yo
 *       - Quién tiene acceso: Cualquier usuario
 *     Pulsa Implementar y copia la URL que termina en /exec.
 *  6. Pega esa URL en src/data/site.ts → formEndpoint, y publica la web.
 *
 * Si cambias el código más adelante: Implementar → Gestionar implementaciones →
 * editar (lápiz) → Versión: "Nueva versión". Así la URL no cambia.
 */

const DESTINO = 'abraham.ceho@hotmail.com';
const HOJA = 'Contactos';
const CAMPOS = ['Fecha', 'Nombre', 'Email', 'Servicio', 'Nivel', 'Mensaje', 'Página'];

function doPost(e) {
  const p = (e && e.parameter) || {};

  // Trampa anti-spam: si un bot rellena el campo oculto, se ignora en silencio.
  if (p._honey) return responder_(p, true);

  const datos = {
    Fecha: new Date(),
    Nombre: limpiar_(p.Nombre, 120),
    Email: limpiar_(p.email, 200),
    Servicio: limpiar_(p.Servicio, 120),
    Nivel: limpiar_(p.Nivel, 120),
    Mensaje: limpiar_(p.Mensaje, 5000),
    'Página': limpiar_(p['Página'], 200),
  };

  if (!datos.Nombre || !datos.Mensaje || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(datos.Email)) {
    return responder_(p, false, 'Faltan datos o el email no es válido.');
  }

  // Evita que un mismo envío entre dos veces si alguien pulsa dos veces.
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    guardar_(datos);
  } finally {
    lock.releaseLock();
  }
  avisar_(datos);
  return responder_(p, true);
}

// Abrir la URL /exec en el navegador muestra que el script está activo.
function doGet() {
  return ContentService.createTextOutput('Formulario activo ✔');
}

function guardar_(d) {
  const libro = SpreadsheetApp.getActiveSpreadsheet();
  let hoja = libro.getSheetByName(HOJA);
  if (!hoja) {
    hoja = libro.insertSheet(HOJA);
    hoja.appendRow(CAMPOS);
    hoja.setFrozenRows(1);
    hoja.getRange(1, 1, 1, CAMPOS.length).setFontWeight('bold');
  }
  hoja.appendRow(CAMPOS.map((c) => d[c]));
}

function avisar_(d) {
  const asunto = `Nuevo contacto web — ${d.Servicio || 'Sin servicio'} — ${d.Nombre}`;
  const filas = CAMPOS.filter((c) => c !== 'Fecha')
    .map((c) => `<tr><td style="padding:6px 12px;color:#8e8e93">${c}</td>` +
      `<td style="padding:6px 12px;color:#1c1c1e">${escapar_(String(d[c] || '—')).replace(/\n/g, '<br>')}</td></tr>`)
    .join('');
  MailApp.sendEmail({
    to: DESTINO,
    replyTo: d.Email, // Pulsa "Responder" y le contestas directamente al cliente.
    name: 'Web Abraham Cedeño',
    subject: asunto,
    htmlBody: `<table style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">${filas}</table>`,
  });
}

function responder_(p, ok, error) {
  // Envío con JavaScript (la web): respuesta JSON.
  if (p._ajax) {
    return ContentService.createTextOutput(JSON.stringify({ success: ok, message: error || '' }))
      .setMimeType(ContentService.MimeType.JSON);
  }
  // Envío sin JavaScript: página sencilla con enlace de vuelta.
  const volver = p._next || '/';
  return HtmlService.createHtmlOutput(
    `<div style="font-family:Arial,sans-serif;text-align:center;padding:60px 20px">` +
    `<h1>${ok ? '¡Mensaje enviado!' : 'No se ha podido enviar'}</h1>` +
    `<p>${ok ? 'Gracias. Te respondo lo antes posible.' : escapar_(error || '')}</p>` +
    `<p><a href="${escapar_(volver)}" target="_top">Volver a la web</a></p></div>`
  );
}

function limpiar_(v, max) {
  return String(v || '').trim().slice(0, max);
}

function escapar_(s) {
  return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

// Ejecuta esta función una vez desde el editor para dar permisos y probar.
function probar() {
  doPost({ parameter: {
    Nombre: 'Prueba', email: DESTINO, Servicio: 'Páginas web', Nivel: 'Landing',
    Mensaje: 'Mensaje de prueba del formulario.', 'Página': '/', _ajax: '1',
  } });
}
