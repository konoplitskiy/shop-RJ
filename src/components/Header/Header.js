import React from 'react';
import './Header.scss';

const Header = (props) => {
    return (
        <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
            <img width={40} height={40} src="img/logo.png" alt="logo"/>
            <div>
                <h3 className="text-uppercase">React Sneakers</h3>
                <p className="opacity-5">Магазин лучших красовок</p>
            </div>
        </div>
          <ul className="d-flex">
              <li className="mr-30 cu-p" onClick={props.onClickCart}>
                  <img width={18} height={18} src="img/cart.svg" alt="cart"/>
                  <span>1205 руб</span>
              </li>
              <li>
                  <img width={18} height={18} src="img/person.svg" alt="person"/>
              </li>
          </ul>
      </header>
    );
}

export default Header;


 // time code  useContext  #4 video 1:25:11