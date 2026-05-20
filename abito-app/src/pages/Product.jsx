import { useOutlet, useOutletContext, useParams } from "react-router-dom"

import { Possibilities } from "../components/Possibilities/Possibilities";
// import { cardArray } from "../constants";

export const Product = () => {
    const {products} = useOutletContext()
    const { id } = useParams();
    const findProduct = products.find((p) => p.id === +id) // +id - стркоа в число
    
    return (
        <main>
            <section className="content">
                <div className="container">
                    {findProduct
                        ?
                        <div className="content-box" >
                            <div className="content-product">
                                <div className="content-product__left">
                                    <h2 className="content-product__title">
                                        {findProduct.title}
                                    </h2>
                                    <img className="content-product__img" src={findProduct.image} alt="card-ing" />
                                    <p className="content-product__text">
                                        {findProduct.description}
                                    </p>
                                </div>
                                <div className="content-product__right">
                                    <h2 className="content-product__price">
                                        {findProduct.price}
                                    </h2>
                                    <button className="btn btn-primary btn-large">Показать телефон</button>
                                </div>
                            </div>
                            <div className="content-side">
                                <h3 className="content-side__title">Сервисы и услуги</h3>
                                <div className="content-side__box">

                                    <Possibilities />

                                    <div className="content-side__footer">
                                        <p className="content-side__footer--item">
                                            © ООО «Абито», 2011–2021
                                        </p>
                                        <a href="#!" className="content-side__footer--item">
                                            Политика конфиденциальности
                                        </a>
                                        <a href="#!" className="content-side__footer--item">
                                            Обработка данных
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        <h2> Товар не найден 🙁</h2>
                    }
                </div>
            </section>
        </main>
    );
}