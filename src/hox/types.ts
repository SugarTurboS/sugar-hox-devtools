export type ModelHook<T = any, P = any> = (hookArg: P) => T;

type Deps<T> = (model: T) => unknown[];
export interface UseModel<T> {
  (depsFn?: Deps<T>): T;
  data?: T;
}

// 扩展 Window 
export interface MyWindow extends Window {
  sugarHox: {
    [key: string]: any
  }
}