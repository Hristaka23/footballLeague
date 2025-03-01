import { Container, Grid, SimpleGrid, Skeleton, rem } from "@mantine/core";
import Header from '../components/Header'
import DateSchedule from "../components/DateSchedule";
import GameInfo from "../components/GameInfo";
import React from "react";
import {Schedule} from "../types";

interface Props{
    date: Date | null;
    setDate: React.Dispatch<React.SetStateAction<Date | null>>;
    schedules: Schedule[];
}


function Home({schedules,date, setDate}:Props) {


  return (
    <>
      <Header/>
      <DateSchedule date={date} setDate={setDate}/>
      <Container my="md">
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
          <GameInfo schedules={schedules}/>
        </SimpleGrid>
      
      </Container>
      
    </>
  );
}

export default Home;