import {useState, useEffect} from "react";
import {
    Flex,
    Group,
    Text,
    Image,
    Avatar,
    Table,
    ActionIcon,
    Menu,
    rem,
} from "@mantine/core";

import supabase from "../utils/supabase";
import styles from "../assets/css/GameInfo.module.css";
import {Teams, Schedule} from "../types";

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
        // const { data, error } = await supabase
        //   .from("games_schedule")
        //   .select("*, teams!inner(name)")
        //   .eq("date", formatDate(date));

        const { data, error } = await supabase
            .from('game_schedule')
            .select(`
      id, 
      name, 
      id_team1,
      id_team2, 
      teams (id, name)
    `)
            .eq("date", formatDate(date));

        setSchedules(data ?? []);
    };
    // const getTeams = async () => {
    //   const { data, error } = await supabase.from("teams").select("*");

    //   if (error) {
    //     console.error("Error fetching teams:", error.message);
    //   } else {
    //     setTeams(data ?? []);
    //   }
    // };
     console.log(schedules);
    useEffect(() => {
        // getTeams();
        getSchedule();
    }, [date]);

    // const rowsTeams = teams.map((team) => {
    //   return (
    //     <Table.Tr key={team.id}>
    //       <Table.Td>{team.name}</Table.Td>

    //       <Table.Td>{team.id}</Table.Td>
    //     </Table.Tr>
    //   );
    // });
    const rowsSchedule = schedules.map((schedule) => {
        console.log(schedule);
        return (
            <Table.Tr key={schedule.id_game}>
                <Table.Td>{schedule.id_game}</Table.Td>
                <Table.Td>{schedule.date}</Table.Td>
                <Table.Td>{schedule.time}</Table.Td>
            </Table.Tr>
        );
    });
    return (
        <>
            <Table verticalSpacing="md">
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>Element position</Table.Th>
                        <Table.Th>Element name</Table.Th>
                        <Table.Th>Symbol</Table.Th>
                    </Table.Tr>
                </Table.Thead>

                <Table.Tbody>{rowsSchedule}</Table.Tbody>
            </Table>
        </>
    );
}

export default GameInfo;
