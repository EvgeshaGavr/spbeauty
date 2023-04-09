import Clickable from "./Clickable";
import styled from "styled-components";

function SecondaryButton(props) {
    // Здесь устанавливается минимальная ширина для кнопки
    const minWidth = props.minWidth === undefined ? '217px' : props.minWidth;
    const Button = styled.div`
        font: var(--ya-text-md);
        background: var(--ya-color-surface);
        border: 1px solid var(--ya-color-steel-gray-500);
        border-radius: var(--ya-border-radius-md);
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