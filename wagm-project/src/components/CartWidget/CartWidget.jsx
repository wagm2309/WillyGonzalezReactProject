import cart from "../../assets/cart_image.jpg"
import "./CartWidget.scss";

const CartWidget = ({cantidad}) => {
    return (
        <div className="cart__container">
            <img className="cart__icon" src={cart} alt="" />
            <p className="cant__amount">{cantidad}</p>
        </div>
    )
}

export default CartWidget