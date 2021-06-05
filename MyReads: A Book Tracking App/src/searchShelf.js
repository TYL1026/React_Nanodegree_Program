import React ,{Component} from 'react'
import{func} from 'prop-types'

class searchShelf extends Component{
    handleShelfChange(event,bookid){
        this.props.move(bookid,event.target.value)
    }
    render(){
        return(
            <div>
                {Array.isArray(this.props.books)?(
                    <div className="search-books-results">
                    <ol className="books-grid">
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {this.props.books.map(book => 
                                <li key={book.id}>
                                    <div className="book">
                                        <div className="book-top">
                                            <div>
                                                {book.hasOwnProperty('imageLinks')?(
                                                    book.hasOwnProperty('smallThumbnail')?(
                                                        <div className="book-cover" style={{width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})`}}></div>
                                                    ):(
                                                        <div className="book-cover" style={{width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail })`}}></div>
                                                        )
                                                    ):(
                                                    <div className="book-cover" style={{width: 128, height: 193, backgroundImage: `url()`}}></div>
                                                    )
                                                }
                                            </div>
                                                <div className="book-shelf-changer">
                                                <select value={book.shelf} onChange={(event)=>this.handleShelfChange(event,book.id)}>
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
                </div>
                ):(
                <div className="search-books-results">
                    {console.log(Array.isArray(this.props.searchShelf))}
                    
                </div>
                )
                }

            </div>
            
        )
    }
}
searchShelf.propTypes={
    move: func.isRequired
}
export default searchShelf