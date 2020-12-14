import React from 'react'
import Spin from './Spin'
import {Link} from 'react-router-dom'

function Docs({stories, loading}) {
   
        if(loading){
            return <Spin />
        }else{
            return (
                <div >
                    {
                        stories.map(story=>(
                            <div className="card m-2" key={story._id}>
                                <p className="my-1">{story.abstract}</p>
                                <Link to={`/Doc`} className="btn btn-dark">Open Doc</Link>
                               

                            </div>
                            
                        ))
    
                   
                    }
                    
                </div>
            );
        }
        
    
    
}

export default Docs
