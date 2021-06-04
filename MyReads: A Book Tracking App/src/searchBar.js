import React ,{Component} from 'react'
import PropTypes ,{array,func} from 'prop-types'
import {Link} from 'react-router-dom'
class searchBar extends Component{
    render(){
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" onChange={(e) => this.props.search(e.target.value)}/>
                        
                    </div>
                </div>
            </div>
        )
    }
}
export default searchBar