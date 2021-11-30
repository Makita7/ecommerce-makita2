import bagIcon from "../img/bag-icon.png";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import { useContext } from "react";

function CartWidget() {
  const test = useContext(CartContext);

  return (
    <>
      {/* Old Cart Widget
      <div badgeContent={test.calcItemsQty()} >
        <Link to="/Cart">
          <img
            src={bagIcon}
            type="button"
            className="btn imgHeader headerIcons"
            alt="bag"
          />
        </Link>
      </div> */}

      <button type="button" class="btn btn-primary position-relative">
      <Link to="/Cart">
            <img
              src={bagIcon}
              type="button"
              className="btn imgHeader headerIcons"
              alt="bag"
            />
          </Link>
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">  {test.calcItemsQty()}
        <span class="visually-hidden">
          
        </span></span>
      </button>
    </>
  );
}

export default CartWidget;
