import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import './SearchPage.css'
import {useStateValue } from '../StateProvider'
import useGoogleSearch from './useGoogleSearch'
import {Link} from "react-router-dom"
import Search from './Search'
import DescriptionIcon from '@material-ui/icons/Description'
import ImageIcon from '@material-ui/icons/Image'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import RoomIcon from '@material-ui/icons/Room'
import MoreVertIcon from '@material-ui/icons/MoreVert'



function SearchPage() {
    const [{term}, dispatch] =useStateValue()//pulling term or user input from the data layer and in next line we pass to google search api
    // live api call
    const {data}=useGoogleSearch(term)

    /*mock api call */
    //const data = response;
    console.log(data)
    return (
        <div className="SearchPage">
        <div className="searchPage-header">
        <Link to='/'><img className="search-logo"
                src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                    alt=""/>
                            </Link>
                            <div className="searchPage-body">
                                <Search hideButtons/>
                                <div className="searchPage-options">
                                    <div className="searchPage-optionLeft">
                                        <div className="searchPage-option">
                                            <SearchIcon/>
                                            <Link to ="all">All</Link>
                                        </div>
                                        <div className="searchPage-option">
                                            <DescriptionIcon/>
                                            <Link to="/news">News</Link>
                                        </div>
                                        <div className="searchPage-option">
                                            <ImageIcon/>
                                            <Link to="/images">Images</Link>
                                        </div>
                                        <div className="searchPage-option">
                                            <LocalOfferIcon/>
                                            <Link to="/shopping">Shopping</Link>
                                        </div>
                                        <div className="searchPage-option">
                                            <RoomIcon/>
                                            <Link to="/maps">Maps</Link>
                                        </div>
                                        <div className="searchPage-option">
                                            <MoreVertIcon/>
                                            <Link to="/more">More</Link>
                                        </div>                                    
                                    </div>
                                    <div className="searchPage-optionRight">
                                        <div className="searchPage-option">
                                            <Link to="/setting">Setting</Link>
                                        </div>
                                        <div className="searchPage-option">
                                            <Link to="/tools">Tools</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
            </div>
            {term && (
                 <div className="searchPage-results">
                <p className="searchPage-resultCount">
                About {data?.searchInformation.formattedTotalResults} results  ({data?.searchInformation.formattedSearchTime} seconds) for {term}
                </p>
                {data?.items.map(item=>(
            <div className="searchPage-result">
               <a href={item.link}>
                   {item.pagemap?.cse_image?.length >0 && item.pagemap?.cse_image[0]?.src&&(
                       <img
                       className="searchPage-resultImage" src={
                      
                        item.pagemap?.cse_image[0]?.src
                       }
                       alt=""
                       />
                   )
                   }
                       {item.displayLink}  
                   </a>
        
          <a className="searchPage-resultTitle" href={item.link}>
        <h2>{item.title}</h2>

    </a>

    <p className="searchPage-resultSnippet">{item.snippet}</p>



</div>

                ))}

                 </div>

            )}

           
            
        </div>
    )
}

export default SearchPage
