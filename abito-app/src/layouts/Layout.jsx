import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { useEffect, useState } from "react";
import { cardArray } from "../constants";

export const Layout = () => {
    const [searchText, setSearchText] = useState('')
    const [products, setProducts] = useState([])

    const handleSearch = (event) => {
        setSearchText(event.target.value)
    }

    const handleSearchArray = () => {
        setProducts(cardArray.filter((item) => {
        return item.title.includes(searchText) //|| item.price.includes(value)
    }))
    }

    useEffect(() => {
        setProducts(cardArray) // тут передаём продукты
    }, [])

    return (
        <>

        <Header />

            <main>
                <section className="search">
                    <div className="container">
                        <div className="search-box">
                            <input 
                                type="text"
                                value={searchText}
                                onChange={handleSearch}
                            />
                            <button className="btn btn-primary search-btn" onClick={handleSearchArray}>
                                <img className="search-btn__icon" src="/image/search_icon.svg" alt="search_icon" />
                                <span className="search-btn__text">Найти</span>
                            </button>
                        </div>
                        {searchText}
                    </div>
                </section>
            </main>

            <Outlet context={{products: products}}/>
        </>
    );
}