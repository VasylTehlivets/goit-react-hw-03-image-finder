import Notiflix from 'notiflix';
import { Component } from "react"
import { Button } from "./Button/Button";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Loader } from "./Loader/Loader";
import { Modal } from "./Modal/Modal";
import { Searchbar } from "./Searchbar/Searchbar";
import {fetchImages} from "./Servises/Api"

import css from "./App.module.css";

export class App extends Component {
  state = {
    images: [],
    page: 1,
    query: '',
    isLoading: false,
    loadMore: false, 
    showModal: false,
    largeImageURL: 'largeImageURL',
    error: null,
  }


    componentDidUpdate(_, prevState) {
    // console.log(prevState.page);
    // console.log(this.state.page);
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.fetchGallery(query, page);
    }
  }


  //  onFormSubmit = (e) => {
  //   e.preventDefault();
  //   this.setState({
  //     query: e.target.search.value,
  //     isLoading: true,
  //     images: [],
  //   });
  //   this.fetchGallery(e.target.search.value, this.state.page);
  // }

   async fetchGallery (query, page) {
    this.setState({ isLoading: true });
    if (!query) {
      return;
    }
    try {
      const { hits, totalHits } = await fetchImages(query, page);
      // console.log(hits, totalHits);
      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        loadMore: this.state.page < Math.ceil(totalHits / this.state.per_page),
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  //  async fetchGallery(query, page) {
  //   try {
  //     const response = await fetchImages(query, page);
  //     this.setState(prevState => {
  //       return {
  //         images: [...prevState.images, ...response],
  //       };
  //     });
  //     if (response.length < 12) {
  //       this.setState({ loadMore: false });
  //     }
  //     if (response.length === 12) {
  //       this.setState({ loadMore: true });
  //     }
  //     if (response.length === 0) {
  //       Notiflix.Notify.failure('No matches found!');
  //     }
  //   } catch (error) {
  //     this.setState({ error });
  //   } finally {
  //     this.setState({ isLoading: false });
  //   }
  // }

  onFormSubmit = (query) => {
    this.setState({
      query,
      images: [],
      page: 1,
      loadMore: false,
    })
  }
  
  openModal = (largeImageURL) => {
    this.setState({
      showModal: true, 
      largeImageURL: largeImageURL
    })
   }

  onLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
    // this.fetchGallery(this.state.query, this.state.page + 1);
  }

  //  onLoadMore = () => {
  //   this.setState({
  //     page: this.state.page + 1,
  //     isLoading: true,});
  //   this.fetchGallery(this.state.query, this.state.page + 1);
  // }
  
  closeModal = () => {
    this.setState({
      showModal: false,
      // largeImageURL: '',
    })
  }
  
  render() {
    const {isLoading, images, loadMore, page, showModal, largeImageURL} = this.state
     return (
       <div className={css.App}>
         <Searchbar onSubmit={this.onFormSubmit} />
         {isLoading ? (<Loader />
         ) : (
             <ImageGallery images={images} openModal={this.openModal} />
         )}
         {loadMore && <Button onLoadMore={this.onLoadMore} page={page} />}
         {showModal && <Modal largeImageURL={largeImageURL} closeModal={this.closeModal} />}
       </div>
  );
  }
 

//   render() {
//     const {isLoading, images, loadMore, showModal, largeImageURL} = this.state
//      return (
//        <div className={css.App}>
//          <Searchbar onSubmit={this.onFormSubmit} />
//          <ImageGallery images={images} openModal={this.openModal}/> 
//          {isLoading && <Loader />}
//          {loadMore && <Button onLoadMore={this.onLoadMore}/>}
//          {showModal && <Modal largeImageURL={largeImageURL} closeModal={this.closeModal} />}
//        </div>
//   );
//   }
// };


// render() {
//     const { images, isLoading, showBtn, showModal, largeImageURL } = this.state;

//     return (
//       <div className={s.App}>
//         <Searchbar onSubmit={this.onSubmit} />
//         <ImageGallery images={images} onClickImage={this.onClickImage} />
//         {isLoading && <Loader />}
//         {showBtn && <Button onNextPage={this.onNextPage} />}
//         {showModal && (
//           <Modal
//             largeImageURL={largeImageURL}
//             onModalClose={this.onModalClose}
//           />
//         )}
//       </div>
//     );
  }