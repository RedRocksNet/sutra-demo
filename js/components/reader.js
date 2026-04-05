export function createReader({ root, getItem, onExit }) {
  let state = 0;
  let lightTimer = null;
  let leaving = false;

  function cleanupTimer() {
    if (lightTimer) {
      clearTimeout(lightTimer);
      lightTimer = null;
    }
  }

  function leave(section) {
    if (leaving) return;
    leaving = true;
    cleanupTimer();
    section.classList.add('is-leaving');
    setTimeout(() => {
      onExit();
    }, 2000);
  }

  function show() {
    cleanupTimer();
    state = 0;
    leaving = false;

    const item = getItem();

    root.innerHTML = `
      <section class="screen reader-screen">
        <div class="reader-shell">
          <div class="sutra-text">${item.text}</div>
          <div class="sutra-source">${item.source}</div>
          <div class="light-explain">${item.light}</div>
          <div class="deep-explain">${item.deep}</div>
        </div>
      </section>
    `;

    const section = root.querySelector('.reader-screen');
    const light = root.querySelector('.light-explain');
    const deep = root.querySelector('.deep-explain');

    lightTimer = setTimeout(() => {
      light?.classList.add('is-visible');
    }, 2500);

    section?.addEventListener('click', () => {
      if (leaving) return;
      if (state === 0) {
        deep?.classList.add('is-visible');
        state = 1;
      } else {
        leave(section);
      }
    });
  }

  return { show };
}
