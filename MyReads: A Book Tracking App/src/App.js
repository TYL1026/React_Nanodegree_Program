import React from 'react'
// import * as BooksAPI from './BooksAPI'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Header from './header.js'
import Bookshelf from './bookshelf.js'
import SearchBar from './searchBar.js'
import SearchShelf from './searchShelf.js'
import { Route } from 'react-router-dom'
class BooksApp extends React.Component {
  state = {
    book:[],
    shelf:["wantToRead", "currentlyReading", "read"],
    searchShelf:[]
  }
  componentDidMount(){
    this.refreshBooks()
  }
  search = (name) =>{
    BooksAPI.search(name)
    .then(searchShelf=> {
      console.log(SearchShelf)
      this.setState({searchShelf})
    })
  
  }
  move = (bookid, shelf) =>{
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
            <SearchBar search={this.search}/>
            <SearchShelf books={this.state.searchShelf}/>
          </div>
        )}/>
      </div>
    )
  }
}

export default BooksApp
