import Box from '@mui/material/Box';
import { Card as MatchCard, CardProps } from "./Card";
import { Card } from "@mui/material";
import data from "../data/matches.json";

export const Matches = () => {
    const matcheGroup: any = data.groups;
    console.log(matcheGroup);

    return (
        <Box sx={{ maxWidth: '750px', margin: '0 auto' }}>
            <Card>
                {matcheGroup.map((group: any) => (
                    <>
                        <h4 className="match-title">{group.title}</h4>
                        <div className="main-grid">
                            {group.matches.map((match: any) => (
                                <MatchCard
                                    ft={match.ft}
                                    date={match.date}
                                    videoImg={match.videoImg}
                                    team1={match.team1}
                                    team2={match.team2}
                                />
                            ))}
                        </div>
                    </>
                ))}
            </Card>
        </Box>
    );
}