import "./Possibilities.css"

export const Possibilities = () => {
    return (
        <div className="content">
            <div className="content-item">
                <img className="content-item--img" src="/image/side-bar/01_side_info.svg" alt="side_info" />
                <h5 className="content-item--title">Доставка</h5>
                <p className="content-item--text">
                    Проверка при получении и возможность бесплатно вернуть товар
                </p>
            </div>

            <div className="content-item">
                <img className="content-item--img" src="/image/side-bar/02_side_info.svg" alt="side_info" />
                <h5 className="content-item--title">Автотека</h5>
                <p className="content-item--text">
                    Отчёт с историей авто: пробег, владельцы, сведения о залоге, ДТП и ремонтах
                </p>
            </div>

            <div className="content-item">
                <img className="content-item--img" src="/image/side-bar/03_side_info.svg" alt="side_info" />
                <h5 className="content-item--title">Онлайн-бронирование жилья</h5>
                <p className="content-item--text">
                    Посуточная аренда квартир и домов: большой выбор вариантов для поездок по России
                </p>
            </div>
        </div>
    );
}