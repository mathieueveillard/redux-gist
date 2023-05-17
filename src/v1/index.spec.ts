import createStore from ".";

test("Simple state update", () => {
  // GIVEN
  const store = createStore(0);

  // WHEN
  store.updateState((n) => n + 1);

  // THEN
  expect(store.getState()).toEqual(1);
});
