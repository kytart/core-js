import DEG_PER_RAD from '../../ponyfill/fn/math/deg-per-rad';

QUnit.test('Math.DEG_PER_RAD', assert => {
  assert.strictEqual(DEG_PER_RAD, Math.PI / 180, 'Is Math.PI / 180');
});
