import {NativeSelect} from '@mantine/core';
import {UseFormReturnType} from "@mantine/form";

interface Props {
    form: UseFormReturnType<T>;

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