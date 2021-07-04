import React from 'react';
import Card from './components/Card';
import Header from './components/Header/Header';
import Draver from './components/Draver/Draver';
import './App.scss';





function App() {
    const [cartOpnened, setCartOpened] = React.useState(false);
    const [cartItems,setCartItems] = React.useState([]);
    const [items,setItems] = React.useState([]);


  React.useEffect(()=> {
      fetch('https://60e1ad2b5a5596001730f1c8.mockapi.io/items')
          .then(res=>{
              return res.json();
          })
          .then(json=> {
              setItems(json)
          })
  },[])


    // const onAddToCart = (obj) => {
    //     setCartItems([...cartItems,obj])
    //     console.log(cartItems)
    // }

    const onAddToCart = (obj) => {
       setCartItems(prev =>[...prev,obj]);
        console.log(cartItems)
    }

  return (
    <div className="wrapper clear">
        {cartOpnened && <Draver items={cartItems}  onClose = {()=> setCartOpened(false)}/> }
     <Header onClickCart = {()=> setCartOpened(true)}/>
        <div className="content p-40 ">
            <div className="d-flex align-center justify-between mb-40">
                <h1 className="mb-40">Все красовки</h1>
                <div className="search-block d-flex">
                    <img src="/img/search.svg" alt=""/>
                    <input type="text" placeholder="Поиск..."/>
                </div>
            </div>
            <div className="card-list d-flex flex-wrap">
                {
                   items.map(item => {
                       return <Card
                           title={item.name}
                           price={item.price}
                           imgUrl ={item.imgUrl}
                           onFavorite ={()=> console.log('Добавили в закладки')}
                           onPlus={(obj)=>onAddToCart(obj)}
                       />
                   })
                }
            </div>
        </div> 
    </div>
  );
}

export default App;
// https://www.youtube.com/watch?v=gfx8IBUzZqw&list=PL0FGkDGJQjJEos_0yVkbKjsQ9zGVy3dG7&index=4
// #4video 2:08:25