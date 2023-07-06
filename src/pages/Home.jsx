import React,{useState,useEffect} from 'react'
import './styles/home.css'
import axios from 'axios'
import {BiSearch,BiHeart} from "react-icons/bi"
import MovieCard from '../components/MovieCard'
import ReactPaginate from 'react-paginate'
import { useNavigate } from 'react-router-dom'


export default function Home({navigation}) {

  const navigate = useNavigate()

  const [query,setQuery] = useState()
  const [movies,setMovies] = useState([])
  const [pageNumber,setPageNumber] = useState(0)

  const moviesPerPage = 10
  const pagesVisited = pageNumber * moviesPerPage
  const pageCount = Math.ceil(movies.length / moviesPerPage)


  const displayMovies = movies
  .slice(pagesVisited,pagesVisited + moviesPerPage)
  .map(item=>{
    return(
      <MovieCard key={item.id} id={item.id} home={true} title={item.title} release_date={item.release_date} overview={item.overview} rating={item.vote_average} poster_path={item.poster_path} backdrop_path={item.backdrop_path} />
    )
  })

  const changePage = ({selected})=>{
    setPageNumber(selected)
  }

  // Fetch data from api sorted by popularity of movies

  const fetchData = ()=>{
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&sort_by=popularity.desc`).then((response)=>{
      console.log(response.data)
      setMovies(response.data.results)
    }).catch((err)=>{
      console.log(err)
    })
  }
  
  // Fetch list of movies with a given query by user

  const fetchDataWithQuery=()=>{
    if(query.length >=3){
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}`).then((response)=>{
        console.log(response.data.results)
        if(response.data.results.length>0) setMovies(response.data.results)
      }).catch((err)=>{
        console.log(err)
      })
    }else{
      console.log("query length should be more than 3")
    }
    
  }
  useEffect(()=>{
    fetchData()
  },[])

  return (
    <>
        {/* Searchbar and favourites button */}
        <div className='home-search-container'>
            <input className='home-search-input' onChange={(e)=>setQuery(e.target.value)} type='text' placeholder='Search movies' />
            <button className='home-search-btn' onClick={(e)=>fetchDataWithQuery()}>
              <BiSearch size={18}/>
            </button>
            <button className='home-mylist-btn' onClick={()=>navigate('/favourites')}>             
                <BiHeart size={18} color='red' />
              <p style={{color:'#fff',marginLeft:'5px'}}>Favourites</p>
            </button>      
        </div>
        {/* Grid layout */}
        <div className='home-movie-container'>
            {displayMovies}
        </div>
        {/* pagination */}
        <ReactPaginate
             previousLabel={"Previous"}
             nextLabel={"Next"}
             pageCount={pageCount}
             onPageChange={changePage}
             containerClassName={"pagination-container"}
             previousLinkClassName={"pervious-btn"}
             nextLinkClassName={"next-btn"}
             disabledClassName={"pagination-disabled"}
             activeClassName={"pagination-active"}
            />
        
    </>
  )
}
