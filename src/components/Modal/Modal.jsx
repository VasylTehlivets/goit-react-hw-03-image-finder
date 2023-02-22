import { Component } from "react";
import PropTypes from "prop-types";
import css from "./Modal.module.css";

export class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown)
    }
    
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)
    }

    handleKeyDown =(event) =>{
        if (event.code === "Escape") {
            this.props.closeModal();
        }
    }

     handleClickBackDrop = e => {
    if (e.currentTarget === e.target) {
      this.props.closeModal();
    }
  };

    render() {
        return (
        <div className={css.overlay} onClick={this.handleClickBackDrop}>
            <div className={css.modal}>
                <img src={this.props.largeImageURL} alt="" />
            </div>
            </div>
        )
    }
}

Modal.propTypes = {
    onModalClose: PropTypes.func,
    largeImageURL: PropTypes.string.isRequired,
}