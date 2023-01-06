import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const GlobalState = useContext(CartContext)
  const state = GlobalState.state
  const dispatch = GlobalState.dispatch
  const total = state.reduce((total, item) => {
    return (total + item.price*item.quantity)
    }, 0)
  const fixedTotal = total.toFixed(2)

    return (
        <>
        {state.map((item, index) => {
        return (
            <div>
                <img
                  variant="top"
                  src={item.item_picture}
                  alt="picture"
                  className="cartimg"
                  width="100px"
                />
                <p>{item.name}</p>
                <p>{item.quantity * item.price}</p>
                <div className="quantity">
                  <input type="text" 
                  name="name" 
                  value="1" />
                  <br></br>
                  <Button className="plus-btn"
                   size="sm"
                   onClick={() => dispatch({
                   type: "INCREASE",
                   payload: item,})}
                   >
                    +
                  </Button>
                  <Button className="btn btn-danger"
                  size="sm"
                    onClick={() => {
                        if(item.quantity>1){
                            dispatch({
                                type: "DECREASE",
                                payload: item,
                              })
                            }else{
                            dispatch({
                                type: "REMOVE",
                                payload: item,
                                })
                    }
                    }}
                  >
                    -
                  </Button>
                  <br></br>
                  <Button className="btn btn-warning"
                  size="sm"
                   onClick={()=> dispatch({
                    type: "REMOVE",
                    payload: item,
                  })}>Remove item</Button>
                </div>
                {state.length > 0 && (
                    <div className="total">
                        <h2>Total:{fixedTotal}</h2>
                    </div>
                )}
            </div>
        );
        })}
        </>
    )
}

export default Cart