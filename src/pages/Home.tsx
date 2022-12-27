import { FC } from "react";
import { Header, Matches, NavTabs } from "../components";

export const Home: FC = () => {
    const tabs = [
        {
            title: 'MATCHES',
            component: <Matches />,
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
            title: 'BRACKET',
            component: null,
            disable: true,
            active: false
        },

        {
            title: 'PLAYERS',
            component: null,
            disable: true,
            active: false
        },
        {
            title: 'STATS',
            component: null,
            disable: true,
            active: false
        },
        {
            title: 'STANDINGS',
            component: null,
            disable: true,
            active: false
        }
    ]

    return (
        <>
            <Header color="#8A1538" title="FIFA World Cup Qatar 2022™" />
            <NavTabs tabs={tabs} styling="main" active={0} />
        </>
    );
}