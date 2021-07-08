import React from 'react';
import  styles from './Card.module.scss';


const Card = ({id,onFavorite, title,imgUrl,price,onPlus,favorited = false}) => {
    const [isAdded, setIsAdded] = React.useState(false);
    const [isFavorite, setIsFavorite] = React.useState(favorited);

    const onClickPlus = () => {
        onPlus({title,imgUrl,price});
        setIsAdded(!isAdded)
    }


    const onClickFavorite = ()=> {
        onFavorite({id,title,imgUrl,price});
        setIsFavorite(!isFavorite)
    }


    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onClickFavorite}>
                <img src={isFavorite ? "/img/liked.svg" : "/img/unliked.svg"} alt="liked"/>
            </div>
            <img width={133} height={112} src={imgUrl} alt=""/>
            <h5>
                {title}
            </h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>
                <img
                    className={styles.plus}
                    width={32}
                    height={32}
                    src={isAdded ? "/img/checked.svg" : "/img/btn-plus.svg"}
                    alt="Plus"
                    onClick={onClickPlus}/>
            </div>
        </div>
    );
}

export default Card;
