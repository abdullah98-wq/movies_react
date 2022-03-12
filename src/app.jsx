
import axios from 'axios';
import React, { Component } from 'react';
import { Routes ,Route,Navigate,Link} from 'react-router-dom';
import Home from './home';
import Movies from'./movies';
import Tv from'./tv';
import NotFound from './notfound';
import Navbar from './navbar'
import Register from'./register';
import Login from'./login'

class App extends Component{
    state={
        movie:[],
        tv:[]
    }

    getTrending= async (mediaType)=>{
        let {data}= await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=5ac8d39167942ddee9d6807a64787744`);
        this.setState({[mediaType]:data.results})
       //console.log(response.data)
    }
    componentDidMount(){
        this.getTrending('movie')
        this.getTrending('tv')

    }
    render(){
        let {movie,tv}=this.state;
        

        return(
             <>
                 
                <Navbar></Navbar>

            <div className="container">
           <Routes>
            <Route exact path="/home" element={<Home  trendingMovie={movie} trendingTv={tv}/>}/>
            <Route path='/movies' element={<Movies/>}/>
            <Route path='/tv' element={<Tv/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/notfound' element={<NotFound/>}/>
            <Route path='/' element={ <Navigate from="/" to="/home"></Navigate>}/>
            <Route path='*' element={<Navigate to="/notfound"/>}></Route>
            </Routes>
                

        </div>
        </>
        );
    }

}
export default App;

/*<Route path='/movie' Component={Movie}/>
            <Route path='/tv' Component={Tv}/>
            <Route pathname='/notfound' Component={NotFound}/>
             <Home trendingMovie={movie} trendingTv={tv}/>

            <Navigate from="/" to="/Home"/> */