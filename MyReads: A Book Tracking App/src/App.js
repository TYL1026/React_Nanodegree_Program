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
    if (name.length > 0){
      BooksAPI.search(name)
      .then(result=> {
        if(result.hasOwnProperty('error')){
          const searchShelf={}
          this.setState({searchShelf})
          return
      }
      const searchShelf = result.map(book=>
        this.addShelf(book,this.state.book)
      )
      this.setState({searchShelf})
    })
    }else{
      const searchShelf={}
      this.setState({searchShelf})
    }
  }

  move = (bookid, shelf) =>{
    BooksAPI.update({id:bookid},shelf)
    .then(result=> {
      this.refreshBooks()
    })
  }


  addShelf = (searchShelf,book)=>{
    const result = book.find(shelf=>shelf.title === searchShelf.title)
    if(result === undefined){
      return {
        ...searchShelf,
        shelf: "None"
      }
    }
    return{
      ...searchShelf,
        shelf: result.shelf
    }
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
            <Header/>
            <Bookshelf books={this.state.book} move={this.move}/>
          </div>
        )}/>
        <Route exact path='/search' render={()=>(
          <div className="app">
            <SearchBar search={this.search}/>
            <SearchShelf books={this.state.searchShelf} move={this.move} shelfBook={this.state.book}/>
          </div>
        )}/>
      </div>
    )
  }
}

export default BooksApp
