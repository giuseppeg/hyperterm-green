exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    backgroundColor: '#000',
    cursorColor: '#0f0',
    foregroundColor: 'rgba(0, 255, 0, .9)',
    css: `
      body {
        background-image: linear-gradient(rgba(0, 255, 0, .15) 7%, transparent 0%);
        background-size: 100% 5px;
      }
    `,
    termCSS: `
      ${config.termCSS || ''}
      x-screen {
        background-color: transparent !important;
        text-shadow: 0 0 5px rgb(0, 255, 0);
      }
    `
  });
}
