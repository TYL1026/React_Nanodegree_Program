import React ,{Component} from 'react'
import PropTypes ,{array,func} from 'prop-types'
class searchShelf extends Component{
    render(){
        return(
            <div className="search-books-results">
                {this.props.books.isArray()?(
                    <ol className="books-grid">
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {this.props.books.map(book => 
                            <li key={book.id}>
                                <div className="book">
                                    <div className="book-top">
                                        <div className="book-cover" style={{width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})`}}></div>
                                            <div className="book-shelf-changer">
                                            <select onChange={(event)=>this.handleShelfChange(event,book.id)}>
                                                <option value="move" disabled>Move to...</option>
                                                <option value="none">None</option>
                                                <option value="currentlyReading">Currently Reading</option>
                                                <option value="wantToRead">Want to Read</option>
                                                <option value="read">Read</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="book-title">{book.title}</div>
                                    <div className="book-authors">{book.authors}</div>
                                </div>
                            </li>
                                
                            )}
                        </ol>
                    </div>
                </ol>
                ):(
                    <div></div>
                ) }

            </div>
        )
    }
}
export default searchShelf