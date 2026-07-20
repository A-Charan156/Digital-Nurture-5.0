import React from 'react';
import CourseDetails from './components/CourseDetails';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import './App.css';

function App() {
  return (
    <div className="App" style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      marginTop: '80px',
      maxWidth: '1200px',
      margin: '80px auto'
    }}>
      <CourseDetails />
      <BookDetails />
      <BlogDetails />
    </div>
  );
}

export default App;
