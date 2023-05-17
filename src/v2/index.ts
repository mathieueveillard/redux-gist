export type Action<Type extends string, Payload> = {
  type: Type;
  payload: Payload;
};

type Reducer<State, AnyAction extends Action<any, any>> = (action: AnyAction) => (state: State) => State;

const createStore = <State, AnyAction extends Action<any, any>>(
  defaultState: State,
  reducer: Reducer<State, AnyAction>
) => {
  let state: State = defaultState;

  const getState = (): State => state;

  const dispatch = (action: AnyAction): void => {
    state = reducer(action)(state);
  };

  return {
    getState,
    dispatch,
  };
};

export default createStore;
