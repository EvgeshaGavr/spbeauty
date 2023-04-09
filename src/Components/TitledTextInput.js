import styled from "styled-components";
import { Label } from "./Label";

const Input = styled.input`
    font: 400 15px/18px 'Inter';
    outline: none;
    background: var(--ya-color-steel-gray-50);
    border: 1px solid var(--ya-color-steel-gray-200);
    border-radius: var(--ya-border-radius-md);
    color: var(--ya-color-steel-gray-900);
    padding: 8px 16px;

    &::placeholder {
        color: var(--ya-color-steel-gray-400);
    }

    &:hover {
        background: var(--ya-color-steel-gray-50);
    }
`;

function TitledTextInput({title, def}) {
    return (
        <div className='d-flex flex-column gap-2'>
            <Label>
                {title}
                <Input defaultValue={def} />
            </Label>
        </div>
    );
}

export default TitledTextInput;