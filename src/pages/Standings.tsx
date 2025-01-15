import {useState, useEffect} from "react";
import {

    Flex,
    SimpleGrid,
    Text,
    Image,
    Group,
} from "@mantine/core";

import club1 from "../assets/images/club1.png";
import supabase from "../utils/supabase";
import styles from "../assets/css/Standings.module.css";
import {Teams} from "../types";
import Header from '../components/Header'

function Standings() {
    const [teams, setTeams] = useState<Teams[]>([]);


    const getTeams = async () => {
        const {data, error} = await supabase.from("teams").select("*");

        if (error) {
            console.error("Error fetching teams:", error.message);
        } else {
            setTeams(data ?? []);
        }
    };

    useEffect(() => {
        getTeams();

    }, []);
    const sortedTeams = [...teams].sort((team1, team2) => team2.points - team1.points);

    const rowsTeams = sortedTeams.map((team, index) => {
        return (
            <>
                <Group>
                    <Text size="md" fw={700}> {index + 1}.</Text>
                    <Image src={club1} width={30} height={30} radius="50%"></Image>
                    <Text size="lg" fw={700}> {team.name}</Text>

                    <Text className={styles.textMarginMP} fw={700} ta="center">{team.points}</Text>
                </Group>

            </>
        );
    });
    return (
        <>
            <Header/>
            <Group
                justify="flex-start"
                align="center"
                style={{
                    paddingLeft: "3%",

            }}
            >
                <Text fw={700} ta="center">#</Text>

                <Text className={styles.textMargin} fw={700} ta="center">TEAM</Text>
                <Text className={styles.textMarginMP} fw={700} ta="center">MP</Text>
                <Text className={styles.textMargin} fw={700} ta="center">PTS</Text>
            </Group>

            <SimpleGrid cols={1} spacing="xs" verticalSpacing="xs"
                        style={{
                            marginLeft: "3%",
                        }}
            >
                {rowsTeams}
            </SimpleGrid>

        </>
    );
}

export default Standings;