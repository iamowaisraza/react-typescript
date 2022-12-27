import { FC, useContext } from 'react';
import { MatchCard } from "./MatchCard";
import { Card, Box } from "@mui/material";
import { MatchDataType } from '../types';
import { MatchesContext } from '../context/MatchesContext';

export const Matches: FC = () => {
    const { data } = useContext(MatchesContext);
    return (
        data && <Box sx={{ maxWidth: '750px', margin: '0 auto' }}>
            <Card>
                {data.groups.map((group: any) => (
                    <div key={group.id}>
                        <h4 className="match-title">{group.title}</h4>
                        <div className="main-grid">
                            {group.matches.map((match: MatchDataType) => (
                                <MatchCard
                                    key={match.id}
                                    data={match}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </Card>
        </Box>
    );
}