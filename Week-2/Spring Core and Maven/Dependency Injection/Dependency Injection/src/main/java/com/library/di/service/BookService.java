package com.library.di.service;

import com.library.di.repository.BookRepository; 
import com.library.di.book.Book; 

public class BookService {

    private BookRepository bookRepository;

    // Setter for Dependency Injection
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void printBookTitle() {
        Book book = bookRepository.getBook();
        System.out.println("Book title: " + book.getTitle());
    }
}
