import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes
import './App.css';
import Navbar from './components/Navbar';
import ImageSlider from './components/ImageSlider';
import PhotoGallery from './components/PhotoGallery';
import { images } from './assets/images'; // Import your image array

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes> {/* Use Routes here */}
          <Route path="/" element={<ImageSlider images={images} />} />
          <Route path="/photos" element={<PhotoGallery images={images} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
