import styled from "styled-components";

const PseudoLabel = styled.label`
    font: var(--ya-text-caption);
    display: flex;
    flex-direction: column;
    color: var(--ya-color-steel-gray-400);

    & > * {
        margin-top: 8px;
    }
`;

export const Label = ({className, children, ...rest}) => {
    return (
        <PseudoLabel className={className} {...rest}>
            {children}
        </PseudoLabel>
    );
}