import { createContext, useState, FC } from "react";
import { MatchDataType, MatchContextProps, MatchContextProviderProps, MatchContextType } from "../types";

export const MatchesContext = createContext({} as MatchContextType);

export const MatchesContextProvider: FC<MatchContextProviderProps> = ({ children }) => {
    const [data, setData] = useState<MatchContextProps | null>(null)
    const [matchData, setMatchData] = useState<MatchDataType | null>(null);

    return (
        <MatchesContext.Provider value={{ data, setData, matchData, setMatchData }}>
            {children}
        </MatchesContext.Provider>
    );
};