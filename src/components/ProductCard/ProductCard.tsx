import Bascet from "../../assets/Buy.png";
import "./ProductCard.scss";
import { IProduct } from "../../models/IProduct";
import { Button } from "../Button/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/services/cartBasket/cartSlice";

interface ProductCardProps extends IProduct {
  onAddToCart?: (productId: number) => void; // Дополнительное свойство
  isOnSale?: boolean; // Дополнительное свойст
}

const ProductCard = ({
  name,
  image,
  price,
  info,
  _id,
  categoryId,
  cafeId,
  __v,
}: ProductCardProps) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        _id,
        name,
        image,
        price,
        info,
        categoryId,
        cafeId,
        __v,
        quantity: 1, // Начальное количество
      })
    );
  };

  return (
    <div className="ProductCard">
      <div className="ProductCard__containerPage">
        <div className="ProductCard__container">
          <div className="ProductCard__wrapper">
            <img src={image} alt="" className="ProductCard__Img" />
            <div className="ProductCard__wrapperBottom">
              <div className="ProductCard__wrapperName">
                <div className="ProductCard__foodName">{name}</div>
                <div className="ProductCard__foodWeight">Вес: {222} г</div>
              </div>
              <div className="ProductCard__wrapperInfo">{info}</div>
              <div className="ProductCard__wrapperOrdener">
                <div className="ProductCard__price">{price} ₽</div>
                <button
                  className="ProductCard__inBascet"
                  onClick={handleAddToCart}
                >
                  <Button className="ProductCard__bascetText">В корзину</Button>
                  <img
                    className="ProductCard__bascet"
                    src={Bascet}
                    alt="Cart"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
