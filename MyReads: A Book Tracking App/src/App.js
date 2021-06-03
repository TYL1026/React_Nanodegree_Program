import React from 'react'
// import * as BooksAPI from './BooksAPI'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Header from './header.js'
import Bookshelf from './bookshelf.js'
import SearchBar from './searchBar.js'
import { Route } from 'react-router-dom'
class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    book:[],
    shelf:["wantToRead", "currentlyReading", "read"]
  }
  componentDidMount(){
    this.refreshBooks()
  }
  
  move = (bookid, shelf) =>{
    console.log({bookid,shelf})
    BooksAPI.update({id:bookid},shelf)
    .then(result=> {
      console.log(result)
      this.refreshBooks()
    })
  }
  refreshBooks(){
    BooksAPI.getAll()
    .then((book) => {
      this.setState({book})
    })
  }
  render() {
    return (
      <div>
        <Route exact path='/' render={()=>(
          <div className="app">
            {console.log(this.state.book)}
            <Header/>
            <Bookshelf books={this.state.book} move={this.move}/>
          </div>
        )}/>
        <Route exact path='/search' render={()=>(
          <div className="app">
            <SearchBar/>
          </div>
        )}/>
      </div>
    )
  }
}

export default BooksApp
