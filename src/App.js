import React from 'react'
import './App.css';
import Review from './components/Review'

function App() {
  return (
    <div className="container">
      <div className="title">
        <h1>Reviews</h1>
        <div className="underline"></div>
      </div>
      <Review />
    </div>
  );
}

export default App;
