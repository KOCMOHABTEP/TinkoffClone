import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useMemo,
  useState,
} from 'react';

interface IContext {
  activeStories: string[] | null;
  setActiveStories: Dispatch<SetStateAction<string[] | null>>;
}

export const DataContext = createContext<IContext>({} as IContext);

export const DataProvider: FC<PropsWithChildren> = ({children}) => {
  const [activeStories, setActiveStories] = useState<string[] | null>(null);
  console.log('DataProvider >>>>', activeStories);

  const value = useMemo(
    () => ({
      activeStories,
      setActiveStories,
    }),
    [activeStories],
  );

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
