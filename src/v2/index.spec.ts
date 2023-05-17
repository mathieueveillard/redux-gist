import createStore, { Action } from ".";

type CounterActionType = "INCREMENT" | "DECREMENT" | "RESET";

type CounterAction = Action<CounterActionType, undefined>;

const action = (type: CounterActionType): CounterAction => ({
  type,
  payload: undefined,
});

test("State update via actions", () => {
  // GIVEN
  const store = createStore<number, CounterAction>(0, (action) => {
    switch (action.type) {
      case "INCREMENT":
        return (n) => n + 1;
      case "DECREMENT":
        return (n) => n - 1;
      case "RESET":
        return () => 0;
    }
  });

  // WHEN
  store.dispatch(action("INCREMENT"));
  store.dispatch(action("INCREMENT"));
  store.dispatch(action("RESET"));
  store.dispatch(action("DECREMENT"));

  // THEN
  expect(store.getState()).toEqual(-1);
});
