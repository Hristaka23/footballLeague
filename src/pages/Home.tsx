import { Container, Grid, SimpleGrid, Skeleton, rem } from "@mantine/core";
import React, { useState, useEffect } from "react";
import Header from '../components/Header'
import DateSchedule from "../components/DateSchedule";
import GameInfo from "../components/GameInfo";


function Home() {
  const [date, setDate] = useState<Date | null>(new Date());




  return (
    <>
      <Header/>
      <DateSchedule date={date} setDate={setDate}/>
      <Container my="md">
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
          <GameInfo date={date}/>
        </SimpleGrid>
      
      </Container>
      
    </>
  );
}

export default Home;