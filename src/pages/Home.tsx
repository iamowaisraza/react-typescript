import { Header } from "../components/Header";
import { Matches } from "../components/Matches";
import NavTabs from "../components/NavTabs";

export const Home = () => {
    const tabs = ['MATCHES', 'NEWS', 'BRACKET', 'PLAYERS', 'STATS', 'STANDINGS']
    return (
        <>
            <Header color="#8A1538" title="FIFA World Cup Qatar 2022™"/>
            <NavTabs tabs={tabs} styling="main" active={0}/>
        </>
    );
}