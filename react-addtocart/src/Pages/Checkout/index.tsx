import { Fragment, useRef, useState } from "react";
import { useNavigate, NavigateFunction } from "react-router-dom"
import { ButtonCTA } from "../../Components/ButtonCTA";
import { PageProps } from "../../globalTypes";

export const Checkout: React.FC<PageProps> = ({ state, dispatch}): JSX.Element => {
  const { totalAmount } = state
  const navigate: NavigateFunction = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true)
  const errorRef = useRef<HTMLSpanElement>(null)
  const handleConfirmation = () => {
    setIsModalOpen(false)
    if(dispatch){
      dispatch({ type: "FILTER", payload: "All items" })
      dispatch({ type: "RESET" })
    }
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 0)
    navigate("/")
  }

  return(
    <Fragment>
      <section className="Checkout">
      </section>
      {isModalOpen && (
        <section className="Modal">
          <div className="Modal__card">
          <h2>
             <span>
              Thank you for purchasing!
              <h2>Total Amount ₱{totalAmount}</h2>
            </span>
            </h2>
            <div className="Modal__card--footer">
              <ButtonCTA content="OK" onclick={handleConfirmation} />
            </div>
          </div>
        </section>
      )}
    </Fragment>
  )
}