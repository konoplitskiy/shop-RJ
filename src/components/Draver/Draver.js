import React from 'react';
import './Draver.scss';

const Draver = ({onClose, onRemove, items=[]}) => {
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

                {
                    items.length > 0 ?
                        <React.Fragment>
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
                                            <img onClick={()=>onRemove(obj.id)} className="removeBtn" src="/img/delon.svg" alt="Remove"/>
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
                        </React.Fragment>

                        : <div className='cartEmpty d-flex align-center justify-center flex-column flex'>
                        <img className='mb-20' width={120} height={120}  src="./img/empty-cart.jpg" alt="basket clear"/>
                        <h2>Корзина пустая</h2>
                        <p className="opacity-6">
                            Добавте хотя бы одну пару кросовок, чтоб сделать заказ.
                        </p>
                        <button onClick={onClose} className="greenButton">
                            <img src="./img/arrow.svg" alt="Arrow"/>
                            Вернуться назад
                        </button>
                    </div>
                }


            </div>
        </div>
    );
}

export default Draver;
