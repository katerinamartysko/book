export interface Action<T = string, R = unknown> {
  type: T;
  payload?: R;
}

export interface PayloadAction<T, R> extends Action<T> {
  payload: R;
}
