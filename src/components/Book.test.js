import React from 'react';
import { shallow } from '../enzyme';

import Book from './Book';

describe('Book tests', () => {
    it('renders book item', () => {
        const book = {
            title: "Artificial Intelligence",
            subtitle: "A Modern Approach",
            authors: [
                "Stuart Jonathan Russell",
                "Peter Norvig"
            ],
            publisher: "Prentice Hall",
            publishedDate: "2010",
            description: "Artificial intelligence: A Modern Approach, 3e,is ideal for one or two-semester, undergraduate or graduate-level courses in Artificial Intelligence. It is also a valuable resource for computer professionals, linguists, and cognitive scientists interested in artificial intelligence. The revision of this best-selling text offers the most comprehensive, up-to-date introduction to the theory and practice of artificial intelligence.",
            industryIdentifiers: [
                {
                    type: "ISBN_13",
                    identifier: "9780136042594"
                },
                {
                    type: "ISBN_10",
                    identifier: "0136042597"
                }
            ],
            readingModes: {
                text: false,
                image: false
            },
            pageCount: 1132,
            printType: "BOOK",
            categories: [
                "Computers"
            ],
            averageRating: 4.5,
            ratingsCount: 10,
            maturityRating: "NOT_MATURE",
            allowAnonLogging: false,
            contentVersion: "preview-1.0.0",
            imageLinks: {
                smallThumbnail: "http://books.google.com/books/content?id=8jZBksh-bUMC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                thumbnail: "http://books.google.com/books/content?id=8jZBksh-bUMC&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            },
            language: "en",
            previewLink: "http://books.google.com/books?id=8jZBksh-bUMC&q=artificial+intelligence&dq=artificial+intelligence&hl=&cd=1&source=gbs_api",
            infoLink: "http://books.google.com/books?id=8jZBksh-bUMC&dq=artificial+intelligence&hl=&source=gbs_api",
            canonicalVolumeLink: "https://books.google.com/books/about/Artificial_Intelligence.html?hl=&id=8jZBksh-bUMC",
            id: "8jZBksh-bUMC"
        };

        const wrapper = shallow(<Book book={ book } />);

        expect(wrapper.find('.book-cover')).toBeDefined();
    });

    it('renders book author correctly', () => {
        const book = {
            title: "Artificial Intelligence",
            subtitle: "A Modern Approach",
            authors: [
                "Stuart Jonathan Russell",
                "Peter Norvig"
            ],
            publisher: "Prentice Hall",
            publishedDate: "2010",
            description: "Artificial intelligence: A Modern Approach, 3e,is ideal for one or two-semester, undergraduate or graduate-level courses in Artificial Intelligence. It is also a valuable resource for computer professionals, linguists, and cognitive scientists interested in artificial intelligence. The revision of this best-selling text offers the most comprehensive, up-to-date introduction to the theory and practice of artificial intelligence.",
            industryIdentifiers: [
                {
                    type: "ISBN_13",
                    identifier: "9780136042594"
                },
                {
                    type: "ISBN_10",
                    identifier: "0136042597"
                }
            ],
            readingModes: {
                text: false,
                image: false
            },
            pageCount: 1132,
            printType: "BOOK",
            categories: [
                "Computers"
            ],
            averageRating: 4.5,
            ratingsCount: 10,
            maturityRating: "NOT_MATURE",
            allowAnonLogging: false,
            contentVersion: "preview-1.0.0",
            imageLinks: {
                smallThumbnail: "http://books.google.com/books/content?id=8jZBksh-bUMC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                thumbnail: "http://books.google.com/books/content?id=8jZBksh-bUMC&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            },
            language: "en",
            previewLink: "http://books.google.com/books?id=8jZBksh-bUMC&q=artificial+intelligence&dq=artificial+intelligence&hl=&cd=1&source=gbs_api",
            infoLink: "http://books.google.com/books?id=8jZBksh-bUMC&dq=artificial+intelligence&hl=&source=gbs_api",
            canonicalVolumeLink: "https://books.google.com/books/about/Artificial_Intelligence.html?hl=&id=8jZBksh-bUMC",
            id: "8jZBksh-bUMC"
        };

        const wrapper = shallow(<Book book={ book } />);

        expect(wrapper.contains(<div className='book-authors'>Stuart Jonathan Russell, Peter Norvig</div>)).toBeTruthy();
    });

    it('render category book', () => {
        const book = {
            title: "Artificial Intelligence",
            subtitle: "A Modern Approach",
            authors: [
                "Stuart Jonathan Russell",
                "Peter Norvig"
            ],
            publisher: "Prentice Hall",
            publishedDate: "2010",
            description: "Artificial intelligence: A Modern Approach, 3e,is ideal for one or two-semester, undergraduate or graduate-level courses in Artificial Intelligence. It is also a valuable resource for computer professionals, linguists, and cognitive scientists interested in artificial intelligence. The revision of this best-selling text offers the most comprehensive, up-to-date introduction to the theory and practice of artificial intelligence.",
            industryIdentifiers: [
                {
                    type: "ISBN_13",
                    identifier: "9780136042594"
                },
                {
                    type: "ISBN_10",
                    identifier: "0136042597"
                }
            ],
            readingModes: {
                text: false,
                image: false
            },
            pageCount: 1132,
            printType: "BOOK",
            categories: [
                "Computers"
            ],
            averageRating: 4.5,
            ratingsCount: 10,
            maturityRating: "NOT_MATURE",
            allowAnonLogging: false,
            contentVersion: "preview-1.0.0",
            imageLinks: {
                smallThumbnail: "http://books.google.com/books/content?id=8jZBksh-bUMC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                thumbnail: "http://books.google.com/books/content?id=8jZBksh-bUMC&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            },
            language: "en",
            previewLink: "http://books.google.com/books?id=8jZBksh-bUMC&q=artificial+intelligence&dq=artificial+intelligence&hl=&cd=1&source=gbs_api",
            infoLink: "http://books.google.com/books?id=8jZBksh-bUMC&dq=artificial+intelligence&hl=&source=gbs_api",
            canonicalVolumeLink: "https://books.google.com/books/about/Artificial_Intelligence.html?hl=&id=8jZBksh-bUMC",
            id: "8jZBksh-bUMC"
        };

        const wrapper = shallow(<Book book={ book } />);

        expect(wrapper.find('.book-title').text()).toEqual('Artificial Intelligence');
    });
})