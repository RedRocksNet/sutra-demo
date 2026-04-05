export function renderHome(root, onEnterReader) {
  root.innerHTML = `
    <section class="screen home-screen">
      <div class="home-shell">
        <div class="home-intro">
          <div class="home-kicker">UNIFIED ENTRY</div>
          <h1 class="home-title">如果不急，可以先从这里开始。</h1>
          <div class="home-subtitle">这里不是一个要你立刻做事的界面，而是一个可以先停一下的地方。</div>
        </div>

        <div class="module-grid">
          <article class="module-card">
            <div class="module-title">让自己安静一下</div>
            <div class="module-copy">不用想太多，先听一段</div>
            <div class="module-state">佛乐</div>
          </article>

          <article class="module-card module-card--active" data-enter-reader>
            <div class="module-title">读一小段</div>
            <div class="module-copy">慢慢看，也可以慢慢懂</div>
            <div class="module-state">佛经伴读</div>
          </article>

          <article class="module-card">
            <div class="module-title">说一句心里的话</div>
            <div class="module-copy">看看会有什么回应</div>
            <div class="module-state">人间云</div>
          </article>

          <article class="module-card">
            <div class="module-title">看看自己</div>
            <div class="module-copy">有些东西，每个人都不一样</div>
            <div class="module-state">星码</div>
          </article>
        </div>
      </div>
    </section>
  `;

  const entry = root.querySelector('[data-enter-reader]');
  entry?.addEventListener('click', onEnterReader);
}
