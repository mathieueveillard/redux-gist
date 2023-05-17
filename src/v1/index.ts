type Reducer<State> = (state: State) => State;

const createStore = <State>(defaultState: State) => {
  let state: State = defaultState;

  const getState = (): State => state;

  const updateState = (reducer: Reducer<State>): void => {
    state = reducer(state);
  };

  return {
    getState,
    updateState,
  };
};

export default createStore;
