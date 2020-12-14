import React, { Component} from 'react'
import { Link } from 'react-router-dom'

export class Doc extends Component {

    state={
        defaultmarks:['dolor sit', 'illum', 'autem'],
        
        
        newMarks:""

       
    };

    // componentDidMount(){
    //     this.getMarks();
    // }

    getMarks=(e)=>{
        console.log(e.target.id);
        //const marks=e.target.elements.mark;
        
       const newMarks=e.target.id.value;
        this.setState({defaultmarks:[...this.state.defaultmarks,newMarks]});
    }
    render() {
        return (
            <div className="container">
                <div className="card grid-2 py-2">
                <div>
                        <p id="para" value={this.state.newMarks} 
                        onMouseDown={this.getMarks} >Lorem ipsum<mark> dolor sit</mark> amet consectetur adipisicing elit. Laudantium &nbsp;
                        <mark>illum</mark> ipsam at iure deserunt soluta, voluptas ad <mark>autem</mark> perferendis cupiditate.
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
