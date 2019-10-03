import { Game } from './Engine';

const game = new Game();

game.start();

setTimeout(() => {
  game.pause();
}, 5000);
