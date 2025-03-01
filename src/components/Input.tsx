import { useState } from 'react';
import { TextInput } from '@mantine/core';
import classes from '../assets/css/Input.module.css';

interface Props{
    text: string;

}
function Input({text}: Props) {
    const [focused, setFocused] = useState(false);
    const [value, setValue] = useState('');
    const floating = value.trim().length !== 0 || focused || undefined;

    return (
        <TextInput
            label={text}
            required
            classNames={classes}
            value={value}
            onChange={(event) => setValue(event.currentTarget.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            mt="md"
            autoComplete="nope"
            data-floating={floating}
            labelProps={{ 'data-floating': floating }}
        />
    );
}
export default Input;