import { NumberInput } from '@mantine/core';
interface Props {
    text: string;
}
function InputNumber({text}: Props) {
    return (
        <NumberInput
            label={text}
            placeholder={text}
            allowNegative={false}
            allowDecimal={false}
        />
    );
}
export default InputNumber;