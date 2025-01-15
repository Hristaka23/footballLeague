import {useState, useEffect} from "react";
import {
    Table,
    SimpleGrid,
    Text,
    Image,
    Group,
} from "@mantine/core";
import {Link} from 'react-router-dom';
import club1 from "../assets/images/club1.png";
import supabase from "../utils/supabase";
//import styles from "../assets/css/Standings.module.css";
import {Schedule} from "../types";

interface Props {
    date: Date | null;
}

function GameInfo({date}: Props) {
    // const [teams, setTeams] = useState<Teams[]>([]);
    const [schedules, setSchedules] = useState<Schedule[]>([]);

    const formatDate: (date: Date | null) => string = (date) => {
        const year = date?.getFullYear();
        const month = date ? (date.getMonth() + 1).toString().padStart(2, "0") : ""; // Months are zero-based
        const day = String(date?.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    };

    const getSchedule = async () => {

        const {data, error} = await supabase
            .from('games_schedule')
            .select(`
      id_game,
      date,
      id_team1,
      id_team2,
      status,
      time,
      team1_score,
      team2_score,
      team1: teams!id_team1 (id, name), 
      team2: teams!id_team2 (id, name)
    `).eq("date", formatDate(date));

        if (error) {
            console.error("Error fetching games:", error);
        } else {
            // console.log(schedules);
            setSchedules((data ?? []) as unknown as Schedule[]);
        }
    };


    useEffect(() => {
        getSchedule();
    }, [date]);


    const rowsSchedule = schedules.map((schedule) => {

        return (
            <Table.Tr key={schedule.id_game}>
                <Table.Td>
                    <SimpleGrid cols={1} spacing="xs" verticalSpacing="xs">
                        <Group>
                            <Image src={club1} width={30} height={30} radius="50%" ></Image>
                            <Text fw={700}> {schedule.team1?.name}</Text>
                        </Group>
                        <Group>
                            <Image src={club1} width={30} height={30} radius="50%" ></Image>
                            <Text fw={700}> {schedule.team2?.name}</Text>
                        </Group>

                    </SimpleGrid>

                </Table.Td>
                <Table.Td>

                </Table.Td>
                <Table.Td>
                    {schedule.status !== "Scheduled" ? (
                        <SimpleGrid>
                            <Group justify="flex-end">
                                <Text fw={700} ta="center">{schedule.team1_score}</Text>
                            </Group>
                            <Group justify="flex-end">
                                <Text fw={700} ta="center">{schedule.team2_score}</Text>
                            </Group>
                        </SimpleGrid>
                    ) : (
                        <SimpleGrid>
                            <Group justify="flex-end">
                                <Text fw={700} ta="center">{schedule.time}</Text>
                            </Group>

                        </SimpleGrid>
                    )}
                </Table.Td>

            </Table.Tr>


        );
    });
    return (
        <>
            <Table verticalSpacing="xl">
                <Table.Tbody>{rowsSchedule}</Table.Tbody>
                <Table.Th>
                    <Link to="/teams">Standings</Link>
                </Table.Th>
            </Table>
        </>
    );
}

export default GameInfo;