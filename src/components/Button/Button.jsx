// import { Component } from "react";
import css from "./Button.module.css";
import PropTypes from "prop-types";

// export class Button extends Component {
//     render() {
//         return (
//             <button
//             className={css.button}
//             type="button"
//             onClick={this.props.onLoadMore}>
//                 Load more
//             </button>
//         )
//     }
// }


// Button.propTypes = {
//     onLoadMore: PropTypes.func,
// }


export const Button = ({ onloadMore }) => {
  return (
    <div className={css.buttonContainer} onClick={onloadMore}>
      <button type="button" className={css.button}>
        Load more
      </button>
    </div>
  );
};

Button.propTypes = {
  loadMore: PropTypes.func,
};