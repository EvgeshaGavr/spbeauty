import Clickable from "./Clickable";
import styled from "styled-components";



function PrimaryButton(props) {
    // Здесь устанавливается минимальная ширина для кнопки
    const minWidth = props.minWidth === undefined ? '217px' : props.minWidth; 
    const Button = styled.div`
        font: var(--ya-text-md);
        background-color: var(--ya-color-accent-blue);
        border-radius: var(--ya-border-radius-md);
        min-width: ${minWidth};
        color: var(--ya-color-white);
        
        &:hover {
            opacity: .8;
        }

        &:active {
           background-color: var(--ya-color-steel-gray-900);
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

export default PrimaryButton;