import { corpus } from './data/corpus.js';
import { renderHome } from './components/home.js';
import { createReader } from './components/reader.js';

const app = document.getElementById('app');

function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const reader = createReader({
  root: app,
  getItem: () => randomItem(corpus),
  onExit: showHome
});

function showHome() {
  renderHome(app, () => reader.show());
}

showHome();
