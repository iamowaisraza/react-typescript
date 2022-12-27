import { DetailCard } from "../components/DetailCard";
import Box from '@mui/material/Box';
import DetailNavTab from "../components/DetailNavTab";
import { Header } from "../components/Header";
import NavTabs from "../components/NavTabs";

export const Detail = () => {
    const tabs = ['TIMELINE', 'LINEUPS', 'STATS', 'NEWS', 'COMMENTS']
    return (
        <>
            <Header color="#212121" title="FIFA World Cup Qatar 2022™"/>
            <Box sx={{ maxWidth: 630, margin: '0 auto' }}>
                <DetailCard />
                <NavTabs tabs={tabs} styling="inner" active={2}/>
            </Box>
        </>
    );
}