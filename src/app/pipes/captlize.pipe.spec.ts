import { CaptilizePipe } from './captlize.pipe';

describe('CaptlizePipe', () => {
  fit('create an instance', () => {
    const pipe = new CaptilizePipe();
    expect(pipe).toBeTruthy();
  });
});
