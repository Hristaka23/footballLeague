import React, {useState, useEffect} from "react";
import {
    Table,
    Button,
    Text,
    Image,
    Group,
} from "@mantine/core";
import { useForm } from '@mantine/form';
import {Link} from 'react-router-dom';
import Input from '../components/Input';
import Picker from '../components/Picker';
import PickerNormal from '../components/PickerNormal';
import InputNumber from '../components/InputNumber';
import {Schedule} from "../types";
import supabase from "../utils/supabase";

interface Props {
    date: Date | null;
    schedules: Schedule[];
}

interface FormValues {
    id_game: string;
    score1: number;
    score2: number;
    status: string;
}

function Admin({date, schedules}: Props) {
    const form = useForm<FormValues>({
        mode: 'uncontrolled',
        initialValues: {
            id_game: '0',
            score1: 0,
            score2: 0,
            status: '',
        },
    });
const updateSchedule = async (values: FormValues)=> {
  console.log(values.id_game);
    const {error} = await supabase
        .from('games_schedule')
        .update({
            status: values.status,
            team1_score: values.score1,
            team2_score: values.score2
        }).eq('id_game', +values.id_game);

    if (error) {
        console.error('Error updating schedule:', error);
    } else {
        console.log('Schedule updated successfully!');
    }
}
    return (
        <>
            <form onSubmit={form.onSubmit(updateSchedule)}>
            <Link to="/">Home</Link>
            <PickerNormal form={form} schedules={schedules}></PickerNormal>

            {/*<Input text={"Team Home"}></Input>*/}
            <Picker form={form}></Picker>
            <InputNumber text={"score home"} number={1} form={form}></InputNumber>
            <InputNumber text={"score away"} number={2} form={form}></InputNumber>

            <Button type="submit" mt="md">
                Submit
            </Button>
            </form>
        </>
    );
}

export default Admin;