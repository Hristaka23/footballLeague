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
    schedules: Schedule[];
}

function GameInfo({schedules}: Props) {



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
                    {schedule.status == "Finished" ? (
                        <SimpleGrid>
                            <Group justify="flex-end">
                                <Text fw={700} ta="center">{schedule.team1_score}</Text>
                            </Group>
                            <Group justify="flex-end">
                                <Text fw={700} ta="center">{schedule.team2_score}</Text>
                            </Group>
                        </SimpleGrid>
                    ) : schedule.status == "Scheduled" ?  (
                        <SimpleGrid>
                            <Group justify="flex-end">
                                <Text fw={700} ta="center">{schedule.time}</Text>
                            </Group>

                        </SimpleGrid>
                    ):(
                        <SimpleGrid>
                            <Group justify="flex-end">
                                <Text fw={700} ta="center">Live</Text>
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
                <Table.Th>
                    <Link to="/admin">Admin</Link>
                </Table.Th>
            </Table>
        </>
    );
}

export default GameInfo;