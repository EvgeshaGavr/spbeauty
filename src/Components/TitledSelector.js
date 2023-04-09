import styled from "styled-components";
import { Label } from "./Label";
import ArrowDownIcon from "../Icons/ArrowDownIcon";
import { useState } from "react";

const Select = styled.select`
    font: 400 15px/18px 'Inter';
    outline: none;
    background-color: var(--ya-color-steel-gray-50);
    border: 1px solid var(--ya-color-steel-gray-200);
    border-radius: var(--ya-border-radius-md);
    color: var(--ya-color-steel-gray-900);
    padding: 8px 16px;
    flex-grow: 1;
    min-width: 0;

    -moz-appearance:none !important;
    -webkit-appearance: none !important; 
    appearance: none !important;

    &:hover {
        background-color: var(--ya-color-steel-gray-50);
    }
`;

const SelectWrapper = styled.div`
    position: relative;
    display: flex;
    
    .icon-dropdown {
        position: absolute;
        right: 16px;
        top: 8px;

        &_opened {
            transform: rotate(-180deg);
        }
    }
`;

function TitledSelector({title, options}) {

    const [opened, setToggle] = useState(false)
    const toggle = () => setToggle(!opened);

    const iconDropDownClassNames = `icon-dropdown ${opened ? 'icon-dropdown_opened' : null}`;

    return (
        <div className='d-flex flex-column gap-2'>
           <Label>
                {title}
                <SelectWrapper>
                    <Select onClick={toggle}>
                        {options.map(optionName => {
                            return (
                                <option key={optionName}>{optionName}</option>
                            );
                        })}
                    </Select>
                    <div className={iconDropDownClassNames}>
                        <ArrowDownIcon />
                    </div>
                </SelectWrapper>
            </Label>
        </div>
    );
}

export default TitledSelector;