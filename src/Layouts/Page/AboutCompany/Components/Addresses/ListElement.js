import styled from 'styled-components';
import EditIcon from '../../../../../Icons/EditIcon';
import RemoveIcon from '../../../../../Icons/RemoveIcon';
import IconOnlyButton from '../../../../../Components/IconOnlyButton.js';

const Option = styled.div`
    min-height: 60px;
`;

function ListElement(props) {
    return (
        <div className='d-flex flex-row align-items-center align-self-stretch gap-2'>
            <Option className='d-flex flex-grow-1 align-items-center'>{props.children}</Option>
            <IconOnlyButton icon={<EditIcon />}/>
            <IconOnlyButton icon={<RemoveIcon />}/>
        </div>
    );
}

export default ListElement;