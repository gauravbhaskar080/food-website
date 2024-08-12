import React from 'react';
import ImageSearch from '../components/ImageSearch';
import SideBar from '../components/SideBar';

const ImageSearchPage = () => {
  return (
    <div style={{marginLeft:"100px"}}>
      <h1>Search by Image</h1>
      <SideBar/>
      <ImageSearch />
    </div>
  );
};

export default ImageSearchPage;
