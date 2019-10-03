import { calculateStep } from './utils/calculateStep';
import { Observable, of, Subscription } from 'rxjs';
import { expand, share, pluck } from 'rxjs/operators';
import { FrameData } from './_types';

export class Game {
  private loop: Observable<FrameData>;
  private running?: Subscription;

  constructor() {
    this.loop = of({ ticks: 0, deltaTime: 0 }).pipe(
      expand(calculateStep),
      share()
    );
  }

  public start() {
    this.running = this.loop.pipe(pluck('deltaTime')).subscribe(console.log);
  }

  public pause() {
    if (this.running) {
      this.running.unsubscribe();
    }
  }
}
