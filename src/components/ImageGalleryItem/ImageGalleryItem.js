import PropTypes from "prop-types";
import css from "./ImageGalleryItem.module.css";

export default function ImageGalleryItem({ onItemClick, id, webformatURL }) {

  const modalContent = (id) => {
    onItemClick(id);
  };
  
    return (
      <img
        src={webformatURL}
        alt=""
        className={css.ImageGalleryItemImage}
        onClick={() => modalContent(id)}
      />
    );
}


ImageGalleryItem.propTypes = {
    onItemClick: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
};
  


