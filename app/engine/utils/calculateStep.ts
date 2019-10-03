import { FrameData } from './../_types';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { clampMax } from './clamp';

export const calculateStep = (prevFrame: FrameData) => {
  const loop = new Observable<FrameData>(observer => {
    requestAnimationFrame(ticks => {
      const nextDeltaTime = (ticks - prevFrame.ticks) / 1000;

      observer.next({
        ticks,
        deltaTime: nextDeltaTime
      });
    });
  });

  return loop.pipe(
    map(frameData => ({
      ...frameData,
      deltaTime: clampMax(frameData.deltaTime, 0.05)
    }))
  );
};
