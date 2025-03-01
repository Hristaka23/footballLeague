import {NativeSelect} from '@mantine/core';
import {Schedule} from "../types";

interface Props {
    schedules: Schedule[];
}

function PickerNormal({schedules}: Props) {
    const data = schedules.map((schedule) => ({
        label: `${schedule.team1?.name} vs ${schedule.team2?.name}`,
        value: String(schedule.id_game),
    }));
    return (
        <NativeSelect variant="filled" size="lg" radius="lg" label="Game" data={data}/>
    );
}

export default PickerNormal;