import SecondaryButton from "../../../../Components/SecondaryButton";
import styled from "styled-components";

const HeadingWrapper = styled.div`
    margin-bottom: 48px;
`;

function Heading() {
    return (
        <HeadingWrapper className='d-flex flex-row justify-content-between mt-5'>
            <h1 className='large-title'>Данные о компании</h1>
            <SecondaryButton>Закрыть запись</SecondaryButton>
        </HeadingWrapper>
    );
}

export default Heading;