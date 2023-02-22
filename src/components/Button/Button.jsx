import css from "./Button.module.css";
import PropTypes from "prop-types";

export const Button = ({ onLoadMore }) => {
  return (
    <div className={css.buttonContainer}
      onClick={onLoadMore}>
      <button type="button"
        className={css.button}>
        Load more
      </button>
    </div>
  );
};

Button.propTypes = {
  onLoadMore: PropTypes.func,
};