import Heading from "./Components/Heading";
import General from "./Components/General/General";
import Addresses from "./Components/Addresses/Addresses";

function AboutCompany() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Heading/> {/* Заголовок и кнопка справа */}
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <General/>  {/* Основная информация вроде названия, типа и телефона */}
                </div>
                <div className="col">
                    <Addresses/> {/* Список доступных адресов заведений */}
                </div>
            </div>
        </div>
    );
}

export default AboutCompany;