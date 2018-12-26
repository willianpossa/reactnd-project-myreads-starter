import React from 'react';
import PropTypes from 'prop-types';

class Book extends React.Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        authors: PropTypes.array.isRequired,
        image: PropTypes.string.isRequired
    };

    threatAuthors = (authors) => {
        if(authors) {
            return authors.join(', ');
        } else {
            return <p>Não informado</p>
        }
    }

    render() {
        let { name, authors, image } = this.props;

        return (
            <li>
                <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ 
                        width: 128, 
                        height: 193, 
                        backgroundImage: `url(${ image })` 
                    }}></div>
                    <div className="book-shelf-changer">
                    <select>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                    </div>
                </div>
                    <div className="book-title">{ name }</div>
                    <div className="book-authors">{ this.threatAuthors(authors) }</div>
                </div>
            </li>
        );
    }
}

export default Book;