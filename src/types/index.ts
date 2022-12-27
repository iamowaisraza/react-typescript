import React from "react";

export type MatchContextType = {
    data: MatchContextProps | null,
    setData: React.Dispatch<React.SetStateAction<MatchContextProps | null>>,
    matchData: MatchDataType | null,
    setMatchData: React.Dispatch<React.SetStateAction<MatchDataType | null>>
}

export type MatchContextProviderProps = {
    children: React.ReactNode
}

export interface Team {
    name: string,
    flag: string,
    winner: boolean,
    score: number,
    penalties: boolean | number
}

export type MatchDataType = {
    id?: string,
    date: string,
    title: string,
    ft: string,
    videoImg: string,
    team1: Team,
    team2: Team,
    stats?: [],
    recaps: []
}

export type MatchContextProps = {
    groups: MatchDataType[]
}

export type MatchCardProps = {
    data: MatchDataType
}

export type StatsType = {
    team1: string,
    team2: string,
    detail: string
}

export type HeaderPropsType = {
    color: string,
    title: string
}

export interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

export type TabsProp = {
    tabs: TabsObjType[],
    styling: string,
    active: number
}

export type TabsObjType = {
    title: string,
    component: React.ReactNode | null,
    disable: boolean,
    active: boolean
}