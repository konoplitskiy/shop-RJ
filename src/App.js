import React from 'react';
import axios from "axios";
import { Route } from "react-router-dom";
import Header from './components/Header/Header';
import Draver from './components/Draver/Draver';
import './App.scss';
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";





function App() {


    const [cartOpnened, setCartOpened] = React.useState(false);
    const [cartItems,setCartItems] = React.useState([]);
    const [favorites,setFavorites] = React.useState([]);
    const [items,setItems] = React.useState([]);
    const [searchValue,setSearchValue] = React.useState('');


    // fetch variant

  // React.useEffect(()=> {
  //     fetch('https://60e2b6939103bd0017b474c0.mockapi.io/items')
  //         .then(res=>{
  //             return res.json();
  //         })
  //         .then(json=> {
  //             setItems(json)
  //         })
  // },[])


    //axios variant
    React.useEffect(()=> {
        //Получаю все товары
        axios.get('https://60e2b6939103bd0017b474c0.mockapi.io/items').then(res=>{
            // устанавливаю их в стейт
            setItems(res.data)
        })
        // получаю корзину добавленых товаров
        axios.get('https://60e2b6939103bd0017b474c0.mockapi.io/cart').then(res=>{
            // устанавливаю их в стейт
            setCartItems(res.data)
        })

        axios.get('https://60e2b6939103bd0017b474c0.mockapi.io/favorites').then(res=>{
            // устанавливаю их в стейт
            setFavorites(res.data)
        })
    },[])


    // const onAddToCart = (obj) => {
    //     setCartItems([...cartItems,obj])
    //     console.log(cartItems)
    // }

    const onAddToCart = (obj) => {
        // При клике срабатывает onAddToCart который отправляет запрос на сервер и устанавливает наш обьект продукта
        axios.post('https://60e2b6939103bd0017b474c0.mockapi.io/cart', obj);
        // Записываем в состояние нашей корзины чтоб отобразить результат сразу
        setCartItems(prev =>[...prev,obj]);
    }


    const onRemoveItem = (id)=> {
        console.log(id);
        axios.delete(`https://60e2b6939103bd0017b474c0.mockapi.io/cart/${id}`);
        setCartItems(prev =>prev.filter(item => item.id !== id));
    }


    const onFavorite = async (obj) => {
        try {
            if(favorites.find(favObj => favObj.id === obj.id)){
                axios.delete(`https://60e2b6939103bd0017b474c0.mockapi.io/favorites/${obj.id}`);
                // setFavorites(prev =>prev.filter(item => item.id !== obj.id));
            }else{
                const { data } = await axios.post('https://60e2b6939103bd0017b474c0.mockapi.io/favorites', obj);
                setFavorites(prev =>[...prev,data]);
            }
        }catch (e) {
            alert('Не удалось добавить в фавориты')
        }
    }

    const onChangeSearchInput = (event)=> {
        setSearchValue(event.target.value);
    }

  return (

    <div className="wrapper clear">
        {cartOpnened && <Draver items={cartItems}  onRemove={onRemoveItem} onClose = {()=> setCartOpened(false)}/> }
     <Header onClickCart = {()=> setCartOpened(true)}/>

        <Route path="/" exact>
            <Home items={items} searchValue={searchValue} setSearchValue={setSearchValue} onChangeSearchInput={onChangeSearchInput} onFavorite={onFavorite} onAddToCart={onAddToCart}/>
        </Route>

        <Route path="/favorites">
            <Favorites items={favorites} onFavorite={onFavorite}/>
        </Route>

    </div>
  );
}

export default App;

// #5 video  01:15:00
