import {NativeSelect} from '@mantine/core';
import {Schedule} from "../types";
import {UseFormReturnType} from "@mantine/form";
interface FormValues {
    id_game: string;
    score1: number;
    score2: number;
    status: string;
}


interface Props {
    schedules: Schedule[];
    form: UseFormReturnType<FormValues>;
}

function PickerNormal({schedules,form}: Props) {
    const data = schedules.map((schedule) => ({
        label: `${schedule.team1?.name} vs ${schedule.team2?.name}`,
        value: String(schedule.id_game),
    }));
    return (
        <NativeSelect variant="filled" size="lg"
                      radius="lg" label="Game"
                      data={data}
                      key={form.key(`id_game`)}
                      {...form.getInputProps(`id_game`)}

        />

    );
}

export default PickerNormal;