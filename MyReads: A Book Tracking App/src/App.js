import React from 'react'
// import * as BooksAPI from './BooksAPI'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Header from './header.js'
import Bookshelf from './bookshelf.js'
class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
  }
  componentDidMount(){
    BooksAPI.getAll()
    .then((book) => this.setState({book}))
  }
  render() {
    return (
      <div className="app">
        {console.log(this.state.book)}
        <Header/>
        <ul>
          {this.state.book && this.state.book.map((book) => <li key={book.id}>{book.title}</li>)}
        </ul>
        <Bookshelf books={this.state.book}/>
      </div>
    )
  }
}

export default BooksApp
