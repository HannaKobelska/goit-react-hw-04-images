import { useEffect } from "react";
import PropTypes from "prop-types";
import css from "./Modal.module.css";

export default function Modal( {onCloseModal, content} ) {

    const handleBackdropClick = (event) => {
      if (event.target === event.currentTarget) {
        onCloseModal();
      }
  };
  

  useEffect(() => {
    const onTap = (event) => {
        if (event.code === "Escape") {
      onCloseModal();
    }
  };
      
    window.addEventListener("keydown", onTap);
  
    return () => {
      window.removeEventListener("keydown", onTap);
    };
  }, [onCloseModal]);

    
    return (
      <div className={css.Overlay} onClick={handleBackdropClick}>
        <div className={css.Modal}>
          <img src={content} alt="" />
        </div>
      </div>
    );

}

Modal.propTypes = {
    onCloseModal: PropTypes.func.isRequired,
    content: PropTypes.string.isRequired,
  };

