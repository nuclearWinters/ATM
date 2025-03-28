import React, {
  useRef,
  createContext,
  useContext,
  useCallback,
  useSyncExternalStore,
} from "react";

export function createFastContext<Store>(initialState: Store) {
  const imperativeContext = {
    set: (value: Partial<Store> | ((state: Store) => Partial<Store>)) => {},
  };
  function useStoreData(): {
    get: () => Store;
    set: (value: Partial<Store> | ((state: Store) => Partial<Store>)) => void;
    subscribe: (callback: () => void) => () => void;
  } {
    const store = useRef(initialState);

    const get = useCallback(() => store.current, []);

    const subscribers = useRef(new Set<() => void>());

    const set = useCallback(
      (value: Partial<Store> | ((state: Store) => Partial<Store>)) => {
        if (typeof value === "function") {
          store.current = { ...store.current, ...value(store.current) };
          subscribers.current.forEach((callback) => callback());
        } else {
          store.current = { ...store.current, ...value };
          subscribers.current.forEach((callback) => callback());
        }
      },
      []
    );

    imperativeContext.set = set;

    const subscribe = useCallback((callback: () => void) => {
      subscribers.current.add(callback);
      return () => subscribers.current.delete(callback);
    }, []);

    return {
      get,
      set,
      subscribe,
    };
  }

  type UseStoreDataReturnType = ReturnType<typeof useStoreData>;

  const StoreContext = createContext<UseStoreDataReturnType | null>(null);

  function Provider({ children }: { children: React.ReactNode }) {
    return (
      <StoreContext.Provider value={useStoreData()}>
        {children}
      </StoreContext.Provider>
    );
  }

  function useStore<SelectorOutput>(
    selector: (store: Store) => SelectorOutput
  ): [SelectorOutput, (value: Partial<Store>) => void] {
    const store = useContext(StoreContext);
    if (!store) {
      throw new Error("Store not found");
    }

    const state = useSyncExternalStore(
      store.subscribe,
      () => selector(store.get()),
      () => selector(initialState)
    );

    return [state, store.set];
  }

  function useSetStore() {
    const store = useContext(StoreContext);
    if (!store) {
      throw new Error("Store not found");
    }
    return store.set;
  }

  return {
    Provider,
    useStore,
    useSetStore,
    StoreContext,
    imperativeContext,
  };
}
