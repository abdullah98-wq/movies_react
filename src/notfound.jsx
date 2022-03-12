import React, { Component } from 'react';
import NotFoundStyle from'./NotFound.module.css';

class NotFound extends Component {
    state = {  } 
    render() { 
        return (<section className='100-vh d-flex justify-content-center align-items-center'>
            <h1 className={`text-center ${NotFoundStyle.bigfont}`}>404 page</h1>
            
        </section>);
    }
}
 
export default NotFound;
    
