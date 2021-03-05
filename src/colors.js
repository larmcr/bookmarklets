((b = '#2E3440', c = '#D8DEE9') => { // default colors by https://www.nordtheme.com
  const cb = () => { // callback
    mo.disconnect(); // disconnect meanwhile apply the style changes
    const all = document.querySelectorAll('*');
    for (let i = 0; i < all.length; ++i) {
      all[i].style.setProperty('background-color', b, 'important');
      all[i].style.setProperty('color', c, 'important');
    }
    mo.observe(document.documentElement, { // observe for changes in the DOM
      subtree: true,
      childList: true,
      attributes: true
    });
  };
  const mo = new MutationObserver(cb);
  cb();
})() // argumements can be overwritten. Example: ('#000000', '#FFFFFF')
