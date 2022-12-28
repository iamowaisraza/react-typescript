import { FC, useContext, useEffect } from "react";
import Box from '@mui/material/Box';
import { DetailCard, TeamStats, Header, NavTabs, Loader } from "../components";
import { MatchesContext } from "../context/MatchesContext";
import { useParams } from 'react-router-dom';

export const Detail: FC = () => {
    const { id } = useParams();
    const { matchData, setMatchData } = useContext(MatchesContext);
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

    const getMatchDetailData = () => {
        fetch(`${process.env.PUBLIC_URL}/data/matches-detail/match-${id}.json`)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                setMatchData(data);
            });
    }

    useEffect(() => {
        getMatchDetailData();

        return () => {
            setMatchData(null);
        }
    }, [])

    return (
        matchData?
        <>

            <Header color="#212121" title={`${matchData?.team1.name} vs ${matchData?.team2.name}`} />
            <Box sx={{ maxWidth: 630, margin: '0 auto' }}>
                <DetailCard />
                <NavTabs tabs={tabs} styling="inner" active={2} />
            </Box>
        </>
        : <Loader />
    );
}