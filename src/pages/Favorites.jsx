// import Card from "../components/Card";
import React from "react";
import Card from "../components/Card";



function Favorites({items, onFavorite}){
    return(
        <div className="content p-40 ">
            <div className="d-flex align-center justify-between mb-40">
                <h1 className="mb-40">Мои закладки</h1>
            </div>
            <div className="card-list d-flex flex-wrap">
                {
                    items.map((item,index) => {
                        return <Card
                            key={`${index}${item.price}`}
                            favorited={true}
                            onFavorite={onFavorite}
                            {...item}
                        />
                    })
                }
            </div>
        </div>
    )
}


export  default Favorites;