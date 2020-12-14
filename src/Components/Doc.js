import React, { Component} from 'react'
import { Link } from 'react-router-dom'

export class Doc extends Component {

    state={
        defaultmarks:['dolor sit', 'illum', 'autem'],
        
        
        
       

       
    };

    // componentDidMount(){
    //     this.getMarks();
    // }

    getMarks=(e)=>{
        console.log(e);
        //const marks=e.target.elements.mark;
        
       const newMarks=e.target.childNodes[0].data;
        
   
        this.setState({defaultmarks:[...this.state.defaultmarks,newMarks]});
    }
    render() {
        return (
            <div className="container">
                <div className="card grid-2 py-2">
                <div>
                        <p id="para" value={this.state.newMarks} 
                        onMouseUp={this.getMarks} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium &nbsp;
                        illum ipsam at iure deserunt soluta, voluptas ad autem perferendis cupiditate.
                        </p> 
                        <Link to={`/`} className="btn btn-dark" 
                                        style={{marginLeft:"150px", marginTop:"10px"}}>Back Home</Link>
                </div>
               
                     <div className="card">
                         <h3 className="my-1">Current Annotation&nbsp;<span>Select from para to add new annotation</span></h3>
                        {
                            this.state.defaultmarks.map(mark=>(
                                <li>{mark}</li>
                                
                                    
                            ))
            

                           
                        }
                      
                       
                        
                     </div>
                    
                </div>
            </div>
            
            
           
           
        )
    }
}

export default Doc
