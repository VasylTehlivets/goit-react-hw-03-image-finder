import { Component } from "react";
import PropTypes from "prop-types";
import css from "./Searchbar.module.css";

// export class Searchbar extends Component {
  
//     render() {
//             return (
//     <header className={css.searchbar}>
//   <form className={css.form} onSubmit={this.onSubmit}>
//     <button type="submit" className={css.button}>
//       <span className={css.buttonLabel}>Search</span>
//     </button>

//     <input
//       className={css.input}
//       type="text"
//       name="search"
//       autoComplete="off"
//       autoFocus
//       placeholder="Search images and photos"
//     />
//   </form>
// </header>
// )
//     }
// }

// Searchbar.propTypes = {
//   onSubmit: PropTypes.func,
// };


export class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleChange = e => {
    // const { name, value } = e.currentTarget;
    // this.setState({ [name]: value });
    this.setState({ searchQuery: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.searchQuery.trim() === '') {
      return alert('Please enter something :)');
    }
    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form onSubmit={this.handleSubmit} className={css.form}>
          <button type="submit" className={css.button}>
           
       <span className={css.buttonLabel}>Search</span>
  
          </button>

          <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="searchQuery"
            value={this.state.searchQuery}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};