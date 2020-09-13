
import React,{ Component } from 'react'

export default class form extends Component{

    constructor(props)
{


    super(props);
    this.state = {
          name: "",
          lastname:"",
          mobile: "",
          email: "",
          department:"",
          editMobile:""


    }
    this.shivam=this.shivam.bind(this)
    this.sameer=this.sameer.bind(this)
}



shivam(e)

{ console.log(e.target.value);
    this.setState({[e.target.id]: e.target.value})}

sameer(e)
{
   
    e.preventDefault();
     alert("Your data is deleted successfully")
     console.log("form submitted");
        var xhr = new XMLHttpRequest();
        xhr.addEventListener('load', () => {console.log(xhr.responseText);})   
        
        xhr.open('POST',"http://localhost:9000/DeleteData");
        xhr.setRequestHeader("content-Type","application/json");
        var data = JSON.stringify({
        
            "editMobile":this.state.editMobile,

        })
        
         console.log("this is data",typeof data);
        xhr.send(data)
        
        console.log("handle submit has been called",this.state.email);

    
}


        render(){
             return(
                  <div>
                      <h2>DeleteData</h2>
                      <h3>enter the mobile no. which you want to delete</h3>

<form onSubmit={this.sameer}>
Mobile no. <input type="text" id="editMobile" onChange={this.shivam} />
 <input type="submit" id="submit"/>

</form>




        </div> )


            

        }}