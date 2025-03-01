import { NumberInput } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';

    interface Props {
        text: string;
        form: UseFormReturnType<T>;
        number: number;
    }
function InputNumber({text, form,number}: Props) {
    return (
        <NumberInput
            label={text}
            placeholder={text}
            allowNegative={false}
            allowDecimal={false}
            key={form.key(`score${number}`)}
            {...form.getInputProps(`score${number}`)}
        />
    );

}
export default InputNumber;