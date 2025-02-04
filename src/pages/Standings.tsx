import {useState, useEffect} from "react";
import {
    Button,
    Flex,
    SimpleGrid,
    Text,
    Image,
    Group,
} from "@mantine/core";
import {useNavigate} from 'react-router-dom';

const baseUrl = "/imges/";
import supabase from "../utils/supabase";
import styles from "../assets/css/Standings.module.css";
import {Teams} from "../types";
import Header from '../components/Header'

function Standings() {
    const [teams, setTeams] = useState<Teams[]>([]);
    const navigate = useNavigate();

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
    //const sortedTeams = [...teams].sort((team1, team2) => team2.points - team1.points);
    const groupATeams = [...teams].filter(team => team.group === 'A').sort((a, b) => b.points - a.points);
    const groupBTeams = teams.filter(team => team.group === 'B').sort((a, b) => b.points - a.points);


    const rowsTeamsA = groupATeams.map((team, index) => {
        return (
            <>
                <Group gap="xs" style={{width:'max-content'}}>
                    <Text size="md" fw={700}> {index + 1}.</Text>
                    <Image src={`${baseUrl}${team.img}`} width={30} height={30} radius="50%"></Image>
                    <Text size="lg" fw={700}> {team.name}</Text>
                </Group>

            </>
        );
    });
    const rowsTeamsB = groupBTeams.map((team, index) => {
        return (
            <>
                <Group gap="xs" style={{width:'max-content'}}>
                    <Text size="md" fw={700}> {index + 1}.</Text>
                    <Image src={`${baseUrl}${team.img}`} width={30} height={30} radius="50%"></Image>
                    <Text size="lg" fw={700}> {team.name}</Text>
                </Group>

            </>
        );
    });

    const rowPointsA = groupATeams.map((team,) => {
        return (
            <>
                <Group gap="xl" style={{width:'max-content'}}>
                    <Text fw={700} ta="center">{team.games_played}</Text>
                    <Text fw={700} ta="center">{team.points}</Text>
                </Group>
            </>
        );
    });

    const rowPointsB = groupBTeams.map((team,) => {
        return (
            <>
                <Group gap="xl" style={{width:'max-content'}}>
                    <Text fw={700} ta="center">{team.games_played}</Text>
                    <Text fw={700} ta="center">{team.points}</Text>
                </Group>
            </>
        );
    });

    return (
        <>
            <Header/>
            <SimpleGrid>
                <Text>Group A</Text>
            </SimpleGrid>
            <Group
                justify="flex-start"
                align="center"
                style={{
                    paddingLeft: "2%",
                    paddingTop: "3%",
                }}
            >
                <Text fw={700} ta="center">#</Text>

                <Text style={{marginLeft: "2%"}} fw={500} ta="center">TEAM</Text>
                <Text style={{marginLeft: "52%"}} fw={500} ta="center">MP</Text>
                <Text fw={500} ta="center">PTS</Text>
            </Group>

            <SimpleGrid cols={2} spacing="xs" >
                <SimpleGrid cols={1} spacing="xs" verticalSpacing="xs"
                            style={{
                                paddingLeft: "3%",
                            }}
                >
                    {rowsTeamsA}
                </SimpleGrid>
                <SimpleGrid spacing="xs" verticalSpacing="md" style={{width:'max-content', marginLeft: '55%'}} >
                    {rowPointsA}
                </SimpleGrid>
            </SimpleGrid>



            {/*group B display down*/}
            <SimpleGrid>
                <Text>Group B</Text>
            </SimpleGrid>
            <Group
                justify="flex-start"
                align="center"
                style={{
                    paddingLeft: "2%",
                    paddingTop: "3%",
                }}
            >
                <Text fw={700} ta="center">#</Text>

                <Text style={{marginLeft: "2%"}} fw={500} ta="center">TEAM</Text>
                <Text style={{marginLeft: "52%"}} fw={500} ta="center">MP</Text>
                <Text fw={500} ta="center">PTS</Text>
            </Group>

            <SimpleGrid cols={2} spacing="xs" >
                <SimpleGrid cols={1} spacing="xs" verticalSpacing="xs"
                            style={{
                                paddingLeft: "3%",
                            }}
                >
                    {rowsTeamsB}
                </SimpleGrid>
                <SimpleGrid spacing="xs" verticalSpacing="md" style={{width:'max-content', marginLeft: '55%'}} >
                    {rowPointsB}
                </SimpleGrid>
            </SimpleGrid>




            <Button className={styles.textMarginMP} variant="filled" color="orange" radius="compact-md"
                    onClick={() => navigate('/')}>Back</Button>
        </>
    );
}

export default Standings;