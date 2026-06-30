package com.library.service;

import com.library.repository.BookRepository;

public class BookService {
    private BookRepository bookRepository;

    public void setLibraryRepository(BookRepository libraryRepository) {
        this.bookRepository = libraryRepository;
    }

    public void showBooks() {
        System.out.println("LibraryService: Requesting list of books from repository...");
        bookRepository.fetchBooks();
    }
}

