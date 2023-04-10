import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
import styled from "styled-components";

const AddressesWrapped = styled.div`
    height: 100%;
    width: 100%;
    border: 1px solid rgba(100, 116, 139, 0.12);
    border-radius: 8px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

function Addresses() {
    return (
        <AddressesWrapped className='d-inline-flex flex-column gap-2'>
            <div className='d-inline-flex flex-column gap-3'>
                <div className='title'>Адреса заведений</div>
                <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
                <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
            </div>
            <SecondaryButton>Добавить филиал</SecondaryButton>
        </AddressesWrapped>
    );
}

export default Addresses;