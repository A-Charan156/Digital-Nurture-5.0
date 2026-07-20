import React from 'react';

const BookDetails = () => {
  const books = [
    { id: 1, title: 'Master React', pages: 670 },
    { id: 2, title: 'Deep Dive into Angular 11', pages: 800 },
    { id: 3, title: 'Mongo Essentials', pages: 450 }
  ];

  return (
    <div style={{ flex: 1, padding: '20px', textAlign: 'left', paddingLeft: '50px', borderLeft: '4px solid green', borderRight: '4px solid green' }}>
      <h2>Book Details</h2>
      {books.length > 0 && books.map(book => (
        <div key={book.id} style={{ marginBottom: '30px' }}>
          <h4 style={{ fontSize: '1.3em', marginBottom: '15px' }}>{book.title}</h4>
          <p style={{ fontWeight: 'bold', fontSize: '1em' }}>{book.pages}</p>
        </div>
      ))}
    </div>
  );
};

export default BookDetails;
