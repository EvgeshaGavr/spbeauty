import Clickable from "./Clickable";
import styled from "styled-components";

function SecondaryButton(props) {
    // Здесь устанавливается минимальная ширина для кнопки
    const minWidth = props.minWidth === undefined ? '217px' : props.minWidth;
    const Button = styled.div`
        background: var(--ya-color-surface);
        border: 1px solid var(--ya-color-steel-gray-500);
        border-radius: var(--ya-border-radius-md);
        box-shadow: inset 0px 1px 2px rgba(10, 15, 26, 0.08);
        min-width: ${minWidth};
        color: var(--ya-color-steel-gray-500);
        
        &:hover {
            opacity: .8;
        }

        &:active {
            opacity: .6;
        }
    `;
    return (
        <Clickable>
            <Button className='p-2 text-md'>
                {props.children}
            </Button>
        </Clickable>
        
    );
}

export default SecondaryButton;