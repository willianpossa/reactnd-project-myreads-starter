import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalBook extends React.Component {

    state = {
        opened: false
    }

    openModal = () => {
        this.setState({
            opened: true
        })
    }
    
    closeModal = () => {
        this.props.closeModalInfo();

        this.setState({
            opened: false
        })
    }

    componentDidUpdate(prevProps) {
        if(prevProps.statusModal !== this.props.statusModal) {
            if(prevProps.statusModal) {
                this.closeModal();
            } else {
                this.openModal();
            }
        }
    }
    
    formatURL = (type, query) => {
        return `https://www.google.com/search?source=lnms&tbm=bks&sa=X&ved=0ahUKEwig-JPKt8jfAhVDiZAKHeIhBJgQ_AUIFCgB&cshid=1546203179511000&biw=1853&bih=950&q=${type}:${query}`;
    }
    
        
    render() {
        let { opened } = this.state;
        let { book } = this.props;

        return (
            <div>
                <Modal isOpen={ opened } toggle={ this.closeModal } className="modal-info-book">
                    <ModalHeader>{ book.title }</ModalHeader>
                    <ModalBody>
                        <div className="book-info-core">
                            <div className="book-image" style={{ 
                                width: 128, 
                                height: 193, 
                                backgroundImage: `url(${ book.imageLinks ? book.imageLinks.thumbnail : '' })` 
                            }}></div>
                            <div className="book-core">
                                <span className="authors">{ book.authors 
                                    ? book.authors.map(author => (
                                        <a rel="noopener noreferrer" target="_blank" href={ this.formatURL('inauthor', author) }>{ author }</a>
                                    ))
                                    : 'Não informado' }</span>
                                <span>{ book.publisher }, { book.publishedDate } - 
                                <span className="categories">{ book.categories 
                                    ? book.categories.map(category => (
                                        <a rel="noopener noreferrer" target="_blank" href={ this.formatURL('subject', category) }>{ category }</a>
                                    ))
                                    : 'Sem categorias' 
                                }</span> - { book.pageCount } pages</span>
                                <span>Average Rating: { book.averageRating } Stars ({ book.ratingsCount } ratings)</span>
                            </div>
                        </div>
                        <div className="book-info">
                            <h2>Synopsis</h2>
                            <span className="description">{ book.description }</span>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <a rel="noopener noreferrer" target="_blank" href={ book.infoLink } className="btn btn-primary">See More Info</a>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default ModalBook;