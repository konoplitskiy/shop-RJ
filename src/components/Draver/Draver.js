import React from 'react';
import './Draver.scss';

const Draver = ({onClose, items=[]}) => {
    return (
        <div className="overlay">
            <div className="drawer">
            <h2 className="mb-30">Корзина
                <img
                    className="removeBtn"
                    src="/img/delon.svg"
                    alt="Remove"
                    width={32} height={32}
                    onClick={onClose}
                />
            </h2>
            <div className="items">
                {
                    items.map((obj)=>
                        <div className="cartItem d-flex align-center mb-20">
                            <div className="cartItemImg" style={{backgroundImage:`url(${obj.imgUrl})`}}></div>
                            <div className="mr-20">
                                <p className="mb-5">
                                    {obj.title}
                                </p>
                                <b>{obj.price} руб.</b>
                            </div>
                            <img className="removeBtn" src="/img/delon.svg" alt="Remove"/>
                        </div>
                    )
                }
            </div>
            <div className="cartTotalBlock">
                <ul>
                    <li>
                        <span>Итого</span>
                        <div></div>
                        <b>21 498 руб. </b>
                    </li>
                    <li>
                        <span>Налог 5%</span>
                        <div></div>
                        <b>1074 руб.</b>
                    </li>
                </ul>
                <button className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt="arrow"/></button>
            </div>
            </div>
        </div>
    );
}

export default Draver;
