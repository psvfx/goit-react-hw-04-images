import React, { useState } from 'react';
import { Notify } from 'notiflix';

import { Bar, Form, Button, Input } from './SearchBar.style';

import { ImSearch } from 'react-icons/im';

export const SearchBar = ({ onSubmit }) => {
  const [searchImage, setSearchImage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (searchImage.trim() === '') {
      Notify.failure('Please enter text for search images', {
        timeout: 1000,
      });
      return;
    }
    onSubmit(searchImage);
    setSearchImage('');
  };

  const handleChange = e => {
    setSearchImage(e.currentTarget.value.toLowerCase());
  };

  return (
    <Bar>
      <Form onSubmit={handleSubmit}>
        <Button type="submit">
          <ImSearch />
        </Button>

        <Input
          type="text"
          value={searchImage}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
        ></Input>
      </Form>
    </Bar>
  );
};
