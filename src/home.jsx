import React, { Component } from 'react'
class Home extends Component {
    state = {  } 
    render() {
      console.log(this.props) 
       let {trendingMovie,trendingTv}=this.props;
       console.log(trendingMovie)
               return (
             <>
             
             <div className="row py-5">
                 <div className="col-md-4 py-3">
                     <div className="brdr w-25 mb-3"></div>
                     <h3>
                        TRENDING <br /> MOVIES TO WATCH RIGHT NOW
                     </h3>
                     <div className="brdr w-100 mb-3"></div>
                 </div>
                {trendingMovie.slice(0,10).map((movie)=>
                   <div className="col-md-2">
                     <div className="movie">
                       <img src={'https://image.tmdb.org/t/p/w500/'+movie.poster_path}  className="w-100" alt="" />
                        <h2 className='py-2'>{movie.title}</h2>
                        <div className="vote position-absolute">{movie.vote_average}</div>

                     </div>
                   </div>
                    )}

             </div>
             <div className="row py-5">
                 <div className="col-md-4 py-3">
                     <div className="brdr w-25 mb-3"></div>
                     <h3>
                        TRENDING <br /> MOVIES TO WATCH RIGHT NOW
                     </h3>
                     <div className="brdr w-100 mb-3"></div>
                 </div>
                {trendingTv.slice(0,10).map((tv)=>
                   <div className="col-md-2">
                     <div className="movie">
                       <img src={'https://image.tmdb.org/t/p/w500/'+tv.poster_path}  className="w-100" alt="" />
                        <h2 className='py-2'>{tv.title}</h2>
                        <div className="vote position-absolute">{tv.vote_average}</div>
                     </div>
                   </div>
                    )}

             </div>
             </>
            );
    }
}
 
export default Home;