import React ,{Component} from 'react'
import PropTypes from 'prop-types'
class bookshelf extends Component{
    state = {
        name: ['Currently Reading','Want To Read','Read'],
        current:[],
        want:[],
        read:[]
    }
    render(){
        return(
        <div>
            <ol>
                {this.state.name && this.state.name.map((name) => 
                    <div className="bookshelf">
                    <h2 className="bookshelf-title">{name}</h2>
                    <li className="books-grid">
                    {this.props.books && this.props.books.filter(book =>  book.shelf.toLowerCase() === name.toLowerCase().replace(/ /g,'')).map(book => 
                        <li key={book.id}>
                            <div className="book">
                                <div className="book-top">
                                    <div className="book-cover" style={{backgroundImage: `url(${book.url})`}}></div>
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
                                <div className="book-title">{book.title}</div>
                                <div className="book-authors">{book.authors}</div>
                            </div>
                        </li>)
                    }
                  
                    {/* <li>
                        <div className="book">
                            <div className="book-top">
                                <div className="book-cover" style={{backgroundImage: ""}}></div>
                                <div className="book-shelf-changer">
                                </div>
                            </div>
                        </div>
                    </li>
                    */}
                    </li>
                    </div>)
                }
            </ol>
        </div>
        )
    }

}
bookshelf.PropTypes={
    books: PropTypes.array.isRequired,
    move: PropTypes.func.isRequired
}
export default bookshelf