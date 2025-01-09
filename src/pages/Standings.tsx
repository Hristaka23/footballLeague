import { Container, Grid, SimpleGrid, Skeleton, rem } from "@mantine/core";
import React, { useState, useEffect } from "react";
import Header from '../components/Header'
import DateSchedule from "../components/DateSchedule";
import GameInfo from "../components/GameInfo";


const PRIMARY_COL_HEIGHT = rem(300);


function Standings() {
    const [date, setDate] = useState<Date | null>(new Date());
    console.log(date);
    const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;



    return (
        <>
            <Header/>
            <DateSchedule date={date} setDate={setDate}/>
            <Container my="md">
                <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
                    <GameInfo date={date}/>
                     <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} />
                </SimpleGrid>

            </Container>

        </>
    );
}

export default Standings;