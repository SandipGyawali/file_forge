import React, {
  ReactNode,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

export interface FolderIdContextType {
  folderId: number | null | string;
  setFolderId: Dispatch<SetStateAction<number | null | string>>;
  triggerRefetch: boolean;
  setTriggerRefetch: Dispatch<SetStateAction<boolean>>;
}

interface FolderIdContextProviderProps {
  children: ReactNode;
}

const defaultValue: FolderIdContextType = {
  folderId: null,
  setFolderId: () => {},
  triggerRefetch: false,
  setTriggerRefetch: () => {},
};

export const FolderIdContext = createContext<FolderIdContextType>(defaultValue);

export const FolderIdContextProvider: React.FC<
  FolderIdContextProviderProps
> = ({ children }) => {
  const [folderId, setFolderId] = useState<number | null | string>(null);
  const [triggerRefetch, setTriggerRefetch] = useState<boolean>(false); //to trigger refetch after successful fetching of data

  return (
    <FolderIdContext.Provider
      value={{ folderId, setFolderId, triggerRefetch, setTriggerRefetch }}
    >
      {children}
    </FolderIdContext.Provider>
  );
};
