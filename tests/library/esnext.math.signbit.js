QUnit.test('Math.signbit', assert => {
  const { signbit } = core.Math;
  assert.isFunction(signbit);
  assert.same(signbit(NaN), NaN);
  assert.same(signbit(), NaN);
  assert.same(signbit(-0), false);
  assert.same(signbit(0), true);
  assert.strictEqual(signbit(Infinity), true);
  assert.strictEqual(signbit(-Infinity), false);
  assert.strictEqual(signbit(13510798882111488), true);
  assert.strictEqual(signbit(-13510798882111488), false);
  assert.strictEqual(signbit(42.5), true);
  assert.strictEqual(signbit(-42.5), false);
});
