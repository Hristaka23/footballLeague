import React, {useState, useEffect} from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import styles from '../src/assets/css/App.module.css'
import Home from '../src/pages/Home'
import Standings from '../src/pages/Standings'
import Admin from '../src/pages/Admin'
import {Analytics} from "@vercel/analytics/react"
import {SpeedInsights} from "@vercel/speed-insights/react"
import {Schedule} from "./types";
import supabase from "./utils/supabase";

function App() {
    const [date, setDate] = useState<Date | null>(new Date());
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


    return (
        <>
            <Analytics/>
            <SpeedInsights/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home schedules={schedules} date={date}
                                                   setDate={setDate}/>}/>
                    <Route path="/admin" element={<Admin schedules={schedules} date={date}/>}/>
                    <Route path="/teams" element={<Standings/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App