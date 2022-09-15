import { useEffect, useState } from "react";

import SearchBar from "../Searchbar/Searchbar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import Spinner from "../Loader/Loader";

import fetchPictures from "../Fetch/FetchPictures";

import "./App.css";

export default function App() {
  const [modalContent, setModalContent] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalImages, setTotalImages] = useState(0);
  const [visibleImages, setVisibleImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);


  const hadleChangeQuery = (query) => {
    setSearchQuery(query);
    setPage(1);
    setVisibleImages([]);
  };


  const toggleModal = () => {
    setOpenModal(openModal => !openModal);
  };


  const modalContentSet = (itemId) => {
    const element = visibleImages.find(({ id }) => id === itemId);
    setModalContent(element.largeImageURL);
  };


  const handleNextPage = () => {
    setPage(page => page + 1);
  };


  const toggleLoading = () => {
    setIsLoading(isLoading => !isLoading);
  };


  const handleScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };


const getData = () => {
    
    toggleLoading();
    
    fetchPictures(searchQuery, page)
      .then(({ hits, total }) => {
        
        setVisibleImages([...visibleImages, ...hits]);
        setTotalImages(total);
      })
      .catch((error) => console.log(error.message))
      .finally(toggleLoading);
  };


  useEffect(() => {
    if (searchQuery !== "") {
     
         getData();
    handleScroll();
    }
 
  }, [searchQuery, page]);



    const isNotLastPage = visibleImages.length !== totalImages;
    const btnEnable = visibleImages.length > 0 && !isLoading && isNotLastPage;
    return (
      <div className="App">
        <SearchBar onSubmit={hadleChangeQuery} />
        {visibleImages.length === 0 ? (
          <h2>Enter your request</h2>
        ) : (
          <>
            <ImageGallery
              images={visibleImages}
              onClick={toggleModal}
              onItemClick={modalContentSet}
            />

            {openModal && (
              <Modal content={modalContent} onCloseModal={toggleModal} />
            )}
            {isLoading && <Spinner />}

            {btnEnable && (
              <Button name="Load more" onPress={handleNextPage} />
            )}
          </>
        )}
        
      </div>
    );
  
}