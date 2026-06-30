package com.library.di.repository;

import com.library.di.book.Book;

public class BookRepository {
    public Book getBook() {
        return new Book("Spring Core and Maven");
    }
}
