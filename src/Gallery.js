import React from 'react';
import Posting from './Posting';


function Gallery(props){
    return(
        <div className='gallery'>
            {props.postings.map((data, i) => {
                return(
                    <Posting posting={data} key={i} />
                )
            })}
        </div>
    )
}


export default Gallery