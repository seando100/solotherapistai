/**
 * SoloLawyerAI Embeddable Widget Loader
 *
 * Usage:
 *   <script src="https://www.sololawyerai.com/widget/v1/loader.js"
 *           data-slug="your-vanity-slug"></script>
 *
 * Options (data attributes):
 *   data-slug       (required) — attorney vanity slug
 *   data-position   — "right" (default) or "left"
 *   data-color      — button color, default "#0F2745"
 *   data-label      — button tooltip, default "Chat with us"
 */
(function () {
  'use strict';

  var script = document.currentScript;
  if (!script) return;

  var slug = script.getAttribute('data-slug');
  if (!slug) {
    console.error('[SoloLawyerAI Widget] Missing data-slug attribute.');
    return;
  }

  var position = script.getAttribute('data-position') || 'right';
  var color = script.getAttribute('data-color') || '#0F2745';
  var label = script.getAttribute('data-label') || 'Chat with us';
  var baseUrl = 'https://sololawyerai.vercel.app';
  var widgetUrl = baseUrl + '/widget/' + encodeURIComponent(slug);

  // --- Styles ---
  var style = document.createElement('style');
  style.textContent = [
    '#slai-widget-bubble{',
    '  position:fixed;bottom:24px;' + position + ':24px;z-index:99999;',
    '  width:60px;height:60px;border-radius:50%;',
    '  background:' + color + ';',
    '  box-shadow:0 4px 16px rgba(0,0,0,0.2);',
    '  cursor:pointer;display:flex;align-items:center;justify-content:center;',
    '  transition:transform 0.2s ease,box-shadow 0.2s ease;',
    '}',
    '#slai-widget-bubble:hover{transform:scale(1.08);box-shadow:0 6px 20px rgba(0,0,0,0.28);}',
    '#slai-widget-bubble svg{width:28px;height:28px;fill:#ffffff;}',
    '#slai-widget-frame-container{',
    '  position:fixed;bottom:100px;' + position + ':24px;z-index:99998;',
    '  width:400px;height:600px;max-width:calc(100vw - 48px);max-height:calc(100vh - 140px);',
    '  border-radius:12px;overflow:hidden;',
    '  box-shadow:0 8px 32px rgba(0,0,0,0.18);',
    '  display:none;',
    '}',
    '#slai-widget-frame-container.slai-open{display:block;}',
    '#slai-widget-frame{width:100%;height:100%;border:none;}',
    '@media(max-width:480px){',
    '  #slai-widget-frame-container{',
    '    width:100vw;height:calc(100vh - 80px);',
    '    bottom:0;left:0;right:0;border-radius:12px 12px 0 0;',
    '    max-width:100vw;max-height:calc(100vh - 80px);',
    '  }',
    '}',
  ].join('\n');
  document.head.appendChild(style);

  // --- Chat bubble button ---
  var bubble = document.createElement('div');
  bubble.id = 'slai-widget-bubble';
  bubble.title = label;
  bubble.setAttribute('aria-label', label);
  bubble.innerHTML =
    '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' +
    '<path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.2L4 17.2V4h16v12z"/>' +
    '</svg>';
  document.body.appendChild(bubble);

  // --- iframe container ---
  var container = document.createElement('div');
  container.id = 'slai-widget-frame-container';

  var iframe = document.createElement('iframe');
  iframe.id = 'slai-widget-frame';
  iframe.title = 'SoloLawyerAI Intake Chat';
  iframe.setAttribute('allow', 'clipboard-write');
  // Lazy-load: don't set src until first open
  container.appendChild(iframe);
  document.body.appendChild(container);

  var isOpen = false;
  bubble.addEventListener('click', function () {
    isOpen = !isOpen;
    if (isOpen) {
      // Load iframe on first open
      if (!iframe.src) {
        iframe.src = widgetUrl;
      }
      container.classList.add('slai-open');
      bubble.innerHTML =
        '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' +
        '<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>' +
        '</svg>';
    } else {
      container.classList.remove('slai-open');
      bubble.innerHTML =
        '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' +
        '<path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.2L4 17.2V4h16v12z"/>' +
        '</svg>';
    }
  });
})();
