import PropTypes from "prop-types";
import css from "./ImageGalleryItem.module.css";

export const ImageGalleryItem = ({ src, alt, largeImageURL, openModal }) => {
    return (
          <li className={css.galleryItem} 
          onClick={() => openModal(largeImageURL)}>
          <img src={src} 
          alt={alt} 
          className={css.galleryItemImg} />
</li>
    )
}


ImageGalleryItem.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    largeImageURL: PropTypes.string,
    openModal: PropTypes.func,
}