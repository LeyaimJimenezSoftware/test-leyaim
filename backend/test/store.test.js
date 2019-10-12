const store = require('../routes/utils/sotore')

test('Items: PANTS, TSHIRT, HAT Total: $32.50', () => {
  expect(store.price({
	"HAT": 1,
	"PANTS": 1,
	"TSHIRT":1
    })).toEqual("$ 32.50");
});

test('Items: PANTS, TSHIRT, PANTS Total: $25.00', () => {
    expect(store.price({
      "PANTS": 2,
      "TSHIRT":1
      })).toEqual("$ 25.00");
  });

  test('Items: TSHIRT, TSHIRT, TSHIRT, PANTS, TSHIRT Total: $81.00', () => {
    expect(store.price({
      "PANTS": 1,
      "TSHIRT":4
      })).toEqual("$ 81.00");
  });

  test('Items: PANTS, TSHIRT, PANTS, PANTS, HAT, TSHIRT, TSHIRT Total: $74.50', () => {
    expect(store.price({
      "HAT": 1,
      "PANTS": 3,
      "TSHIRT":3
      })).toEqual("$ 74.50");
  });