import {useState, useEffect} from "react";
import {
    Table,
    SimpleGrid,
    Text,
} from "@mantine/core";


import supabase from "../utils/supabase";
//import styles from "../assets/css/GameInfo.module.css";
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
    `).eq("date", formatDate(date)) ;

        if (error) {
            console.error("Error fetching games:", error);
        } else {
            // console.log(schedules);
            setSchedules((data ?? []) as unknown as Schedule[]);
        }
    };
    // const getTeams = async () => {
    //   const { data, error } = await supabase.from("teams").select("*");
    //
    //   if (error) {
    //     console.error("Error fetching teams:", error.message);
    //   } else {
    //     setTeams(data ?? []);
    //   }
    // };

    useEffect(() => {
        //getTeams();
        getSchedule();
    }, [date]);

    // const rowsTeams = teams.map((team) => {
    //   return (
    //     <Table.Tr key={team.id}>
    //       <Table.Td>{team.name}</Table.Td>
    //
    //       <Table.Td>{team.id}</Table.Td>
    //     </Table.Tr>
    //   );
    // });
    const rowsSchedule = schedules.map((schedule) => {
        // console.log(schedule);
        return (
            <Table.Tr key={schedule.id_game}>
                <Table.Td>
                    <SimpleGrid cols={1} spacing="xs" verticalSpacing="xs">
                        <div><Text fw={700}> {schedule.team1?.name}</Text></div>
                        <div><Text fw={700}>{schedule.team2?.name}</Text></div>
                    </SimpleGrid>

                </Table.Td>
                <Table.Td>

                </Table.Td>
                <Table.Td>
                    {schedule.status !== "Scheduled" ? (
                        <SimpleGrid>
                            <div>
                                <Text fw={700} ta="center">{schedule.team1_score}</Text>
                            </div>
                            <div>
                                <Text fw={700} ta="center">{schedule.team2_score}</Text>
                            </div>
                        </SimpleGrid>
                        ) : (
                        <SimpleGrid>
                            <div>
                                <Text fw={700} ta="center">{schedule.time}</Text>
                            </div>

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
                    Честит Рожден Ден Криска!
                    Бъди жив и здрав, много щастлив и бъди все така целеустремен
                    и добър човек! А да, и много победи в лигата този сезон
                    (може да добавя някоя друга победа на ваша сметка хахха)!
                </Table.Th>
            </Table>
        </>
    );
}

export default GameInfo;