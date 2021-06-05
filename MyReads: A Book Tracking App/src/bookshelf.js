import React ,{Component} from 'react'
import  {array,func} from 'prop-types'
import {Link} from 'react-router-dom'
class bookshelf extends Component{
    state = {
        name: ['Currently Reading','Want To Read','Read'],
    }
    handleShelfChange(event,bookid){
        this.props.move(bookid,event.target.value)
    }
    render(){
        return(
        <div>
            <ol>
                {this.state.name && this.state.name.map((name,index) => 
                    <div className="bookshelf" key= {index} >
                    <h2 className="bookshelf-title">{name}</h2>
                    <div className="books-grid">
                    {this.props.books && this.props.books.filter(book =>  book.shelf.toLowerCase() === name.toLowerCase().replace(/ /g,'')).map(book => 
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
                        </li>)
                    }
                    </div>
                    </div>)
                }
            </ol>
            
            <Link className="open-search" to='/search'>Add a book</Link>
        </div>
        )
    }

}
bookshelf.propTypes={
    books: array.isRequired,
    move: func.isRequired
}
export default bookshelf