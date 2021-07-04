import React from 'react';
import Card from './components/Card';
import Header from './components/Header/Header';
import Draver from './components/Draver/Draver';
import './App.scss';

const arr = [
        {name:'Мужские Кроссовки Nike Blazer Mid Suede', price : 12899, imgUrl : './img/products/product1.jpg'},
        {name:'Мужские Кроссовки Nike Air Max', price : 1299,imgUrl : './img/products/product2.jpg'},
        {name:'Мужские Кроссовки Nike Blazer Mid Suede', price : 8299, imgUrl : './img/products/product3.jpg'},
        {name:'Кроссовки Puma X Aka Boku Future Rider', price : 3299, imgUrl : './img/products/product4.jpg'}
    ];


function App() {
  return (
    <div className="wrapper clear">
     <Draver/>
     <Header/>
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
                <h1 className="mb-40">Все красовки</h1>
                <div className="search-block d-flex">
                    <img src="/img/search.svg" alt=""/>
                    <input type="text" placeholder="Поиск..."/>
                </div>
            </div>
            <div className="card-list d-flex">
                {
                   arr.map(item => {
                       return <Card title={item.name} price={item.price} imgUrl ={item.imgUrl} priCliki={()=>console.log(item)}/>
                   })
                }
            </div>
        </div> 
    </div>
  );
}

export default App;

