import { createContext, FC, ReactNode, useContext, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

interface RouterHistoryContextState {
  current: string;
  previous: string;
}

type RouterHistoryContextProps = RouterHistoryContextState;

const Context = createContext<RouterHistoryContextProps>({} as RouterHistoryContextProps);

export const useRouterHistory = (): RouterHistoryContextProps => useContext(Context);

const initialState: RouterHistoryContextState = {
  current: '',
  previous: '',
};

const useProvideRouterHistory = (): RouterHistoryContextProps => {
  const { asPath } = useRouter();

  const ref = useRef<RouterHistoryContextState>(initialState);

  useEffect(() => {
    ref.current.previous = ref.current.current;
    ref.current.current = asPath;
  }, [asPath]);

  return ref.current;
};

export const RouterHistoryProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const value = useProvideRouterHistory();

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
