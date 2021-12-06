import { LanternFish } from './lanternFish';
import { Shoal } from './shoal';

describe('Lantern fish', () => {
  it('should decrease the internal counter by 1 after living 1 day', () => {
    const fish = new LanternFish(3);
    fish.live1Day();
    const actual = fish.getInternalTimer();
    const expected = 2;
    expect(actual).toBe(expected);
  });

  it('should reset its internal counter at 6 after living 1 day when its internalTimer is 0', () => {
    const fish = new LanternFish(0);
    fish.live1Day();
    const actual = fish.getInternalTimer();
    const expected = 6;
    expect(actual).toBe(expected);
  });

  it('should spawn a new fish in a shoal of fish when one is resetting its timer ', () => {
    const shoal = new Shoal([0]);
    shoal.live1Day();
    const actual = shoal.getNumberOfFish();
    const expected = 2;
    expect(actual).toBe(expected);
  });

  it('should spawn 2 new fish in a shoal of fish when two fish are resetting their timer ', () => {
    const shoal = new Shoal([0, 1]);
    shoal.liveDuring(2);
    const actual = shoal.getNumberOfFish();
    const expected = 4;
    expect(actual).toBe(expected);
  });

  it('should spawn 7 new fish after 10 days', () => {
    const shoal = new Shoal([3, 4, 3, 1, 2]);
    shoal.liveDuring(10);
    const actual = shoal.getNumberOfFish();
    const expected = 12;
    expect(actual).toBe(expected);
  });
});
