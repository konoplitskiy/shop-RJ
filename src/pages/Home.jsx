import Card from "../components/Card";
import React from "react";


function Home ({items,searchValue,setSearchValue, onChangeSearchInput, onFavorite, onAddToCart}) {
    return(
        <div className="content p-40 ">
            <div className="d-flex align-center justify-between mb-40">
                <h1 className="mb-40">{searchValue ? `Поиск по запросу ${searchValue}`: "Все красовки"}</h1>
                <div className="search-block d-flex">
                    <img src="/img/search.svg" alt=""/>
                    { searchValue && <img onClick={()=> setSearchValue('')} className="removeBtn clear cu-p" src="/img/delon.svg" alt="Clear"/>}
                    <input type="text" placeholder="Поиск..." value={searchValue}  onChange={onChangeSearchInput}/>
                </div>
            </div>
            <div className="card-list d-flex flex-wrap">
                {
                    items
                        .filter((item)=> item.name.toLowerCase().includes(searchValue.toLowerCase()))
                        .map((item,index) => {
                            return <Card
                                key={`${index}${item.price}`}
                                title={item.name}
                                price={item.price}
                                imgUrl ={item.imgUrl}
                                onFavorite ={(obj)=> onFavorite(obj)}
                                onPlus={(obj)=>onAddToCart(obj)}
                                {...item}
                            />
                        })
                }
            </div>
        </div>
    )
}


export  default Home;