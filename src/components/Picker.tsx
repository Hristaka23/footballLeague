import {NativeSelect} from '@mantine/core';
import {UseFormReturnType} from "@mantine/form";
interface FormValues {
    id_game: string;
    score1: number;
    score2: number;
    status: string;
}
interface Props {
    form: UseFormReturnType<FormValues>;

}
function Picker({form}:Props) {
    return (
        <NativeSelect
            data={[
                {label: 'Scheduled', value: 'Scheduled'},
                {label: 'Ongoing', value: 'Ongoing'},
                {label: 'Finished', value: 'Finished'},
            ]}
            key={form.key(`status`)}
            {...form.getInputProps(`status`)}
        />

    );
}

export default Picker;