type Reducer<State> = (state: State) => State;

type Store<State> = {
  getState: () => State;
  updateState: (reducer: Reducer<State>) => void;
};

const createStore = <State>(defaultState: State): Store<State> => {
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
