import { FC, useContext } from "react";
import Box from '@mui/material/Box';
import { DetailCard, TeamStats, Header, NavTabs } from "../components";
import { MatchesContext } from "../context/MatchesContext";

export const Detail: FC = () => {
    const { matchData } = useContext(MatchesContext);
    const tabs = [
        {
            title: 'TIMELINE',
            component: null,
            disable: true,
            active: false
        },
        {
            title: 'LINEUPS',
            component: null,
            disable: true,
            active: false
        },
        {
            title: 'STATS',
            component: <TeamStats />,
            disable: false,
            active: true
        },

        {
            title: 'NEWS',
            component: null,
            disable: true,
            active: false
        },
        {
            title: 'COMMENTS',
            component: null,
            disable: true,
            active: false
        }
    ]

    return (
        <>
            <Header color="#212121" title={`${matchData?.team1.name} vs ${matchData?.team2.name}`} />
            <Box sx={{ maxWidth: 630, margin: '0 auto' }}>
                <DetailCard />
                <NavTabs tabs={tabs} styling="inner" active={2} />
            </Box>
        </>
    );
}