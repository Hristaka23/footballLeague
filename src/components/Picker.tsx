import {NativeSelect} from '@mantine/core';

function Picker() {
    return (
        <NativeSelect
            data={[
                {label: 'Scheduled', value: 'scheduled'},
                {label: 'Ongoing', value: 'ongoing'},
                {label: 'Finished', value: 'finished'},
            ]}
        />
    );
}

export default Picker;