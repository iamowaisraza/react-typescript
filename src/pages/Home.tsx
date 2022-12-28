import { FC, useContext, useEffect } from "react";
import { Header, Matches, NavTabs, Loader } from "../components";
import { MatchesContext } from "../context/MatchesContext";

export const Home: FC = () => {
    const { data, setData } = useContext(MatchesContext);
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

    const getData = () => {
        fetch(`${process.env.PUBLIC_URL}/data/matches.json`)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                setData(data);
            });
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        data ?
            <>
                <Header color="#8A1538" title="FIFA World Cup Qatar 2022™" />
                <NavTabs tabs={tabs} styling="main" active={0} />
            </>
            : <Loader />
    );
}