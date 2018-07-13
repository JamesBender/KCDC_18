import { vol } from './volume';

xtest('volume should work', () => {
    expect(vol(2, 3, 4)).toBe(24);
});
