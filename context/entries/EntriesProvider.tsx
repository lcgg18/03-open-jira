import { FC, useEffect, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import { entriesApi } from "../../apis";
import { Entry } from "../../interfaces";
import { EntriesContext, entriesReducer } from "./";

export interface EntriesState {
  entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [],
    
};

export const EntriesProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  const addNewEntry = (description:string) => {

    const newEntry:Entry = {
      description,
      _id: uuidv4(),
      createdAt: Date.now(),
      status: "pending"
    }
    dispatch({type:'[Entry] Add-Entry', payload: newEntry})
  }

  const updateEntry = (entry: Entry) => {
    dispatch({type:'[Entry] Entry-Updated',payload: entry})
  }

  const refreshEntry = async () => {
      const { data } = await entriesApi.get<Entry[]>('/entries');
      dispatch({type:'[Entry] Refresh-Data', payload: data});
  }

  useEffect(() => {
    refreshEntry();
  }, []);
  

  return (
    <EntriesContext.Provider
      value={{
        ...state,
        //Methods

        addNewEntry,
        updateEntry,
        refreshEntry
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
