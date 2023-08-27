import React, { useState, useEffect } from 'react';

import { Notify } from 'notiflix';

import { SearchBar } from './SearchBar/SearchBar';
import { AppContainer, ErrorMessage } from './App.style';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { getImages } from 'services/APIpixabay';

import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';

export const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [totalImages, setTotalImages] = useState(0);

  const lastPage = Math.ceil(totalImages / 12);

  useEffect(() => {
    async function fetchImages() {
      if (query === '') return;

      const options = { query, page };

      try {
        setError(false);
        setIsLoading(prevState => !prevState);

        const { hits, totalHits } = await getImages(options);

        const nextImages = hits.map(
          ({ id, webformatURL, tags, largeImageURL }) => ({
            id,
            webformatURL,
            tags,
            largeImageURL,
          })
        );

        if (page === 1) {
          if (!nextImages.length) {
            Notify.error(`There is no result for "${query}"`);
            return;
          }

          setImages([...nextImages]);

          setTotalImages(totalHits);

          if (page === lastPage) {
            Notify.success(`You have got all images for request ${query}`);
          }
        } else {
          setImages(prevState => [...prevState, ...nextImages]);
        }
      } catch (err) {
        if (err.code !== 'ERR_CANCELED') {
          setError(err);
        }
      } finally {
        setIsLoading(prevState => !prevState);
      }
    }

    fetchImages();
  }, [page, query, lastPage]);

  const handleSubmit = value => {
    setImages([]);
    setQuery(value);
    setPage(1);
    setTotalImages(0);
  };

  const handleLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  const loadMoreVisible =
    !isLoading && images.length !== 0 && images.length < totalImages;

  return (
    <Layout>
      <AppContainer>
        <GlobalStyle />

        <SearchBar onSubmit={handleSubmit} />
        {images.length > 0 && <ImageGallery images={images} />}

        {error && (
          <ErrorMessage>
            Oops, something went wrong... Try again later!
          </ErrorMessage>
        )}

        {loadMoreVisible && <Button onClick={handleLoadMore} />}
        {isLoading && <Loader />}
      </AppContainer>
    </Layout>
  );
};
