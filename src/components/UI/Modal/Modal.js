import React from "react";
import "./Modal.css";
import Aux from "../../../hoc/Aux";
import Backdrop from "../Backdrop/Backdrop";

const Modal = (props) => {
  return (
    <Aux>
      <Backdrop clicked={props.closemodal} show={props.show}>
        <div className="modal" style={{ transform: props.show ? "translateY(0)" : "translateY(-100vh)", opacity: props.show ? "1" : "0" }}>
          {props.children}
        </div>
      </Backdrop>
    </Aux>
  );
};

export default Modal;
