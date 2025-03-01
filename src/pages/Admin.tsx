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

interface Props {
    date: Date | null;
    schedules: Schedule[];
}


function Admin({date, schedules}: Props) {
    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            email: '',
            termsOfService: false,
        },
    });
    return (
        <>
            <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <Link to="/">Home</Link>
            <PickerNormal schedules={schedules}></PickerNormal>

            {/*<Input text={"Team Home"}></Input>*/}
            <Picker></Picker>
            <InputNumber text={`score}`}></InputNumber>
            <InputNumber text={"score away"}></InputNumber>
            <Button type="submit" mt="md">
                Submit
            </Button>
            </form>
        </>
    );
}

export default Admin;