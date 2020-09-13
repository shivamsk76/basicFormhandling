
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
{this.setState({[e.target.id]: e.target.value})}

sameer(e)
{
    e.preventDefault();
     alert("Your data is Edited successfully")
     console.log("form submitted");
        var xhr = new XMLHttpRequest();
        xhr.addEventListener('load', () => {console.log(xhr.responseText);})   
        
        xhr.open('POST',"http://localhost:9000/EditData");
        xhr.setRequestHeader("content-Type","application/json");
        var data = JSON.stringify({
            "name":this.state.name,
            "lastname":this.state.lastname,
            "mobile":this.state.mobile,
            "email":this.state.email,
            "department":this.state.department,
            "editMobile":this.state.editMobile
        })
        
         console.log("this is data",typeof data);
        xhr.send(data)
        console.log("handle submit has been called",this.state.email);


    
let reg = /^([a-zA-Z0-9]+)@([a-z\.-]+)com$/;
if (reg.test(this.state.email)) {
    
}else{alert('please enter valid email')}
    
}
fetchStudentData(e){
    e.preventDefault()
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:9000/ShowData');
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.addEventListener('load', () => {
        console.log(xhr.responseText);
        console.log("result = "+xhr.responseText);
       var result = JSON.parse(xhr.responseText);
        console.log("this the result = "+ result.Name)
        console.log("this the result = "+ result.Roll_No)
        
        this.setState({
            name:result.name,
            lastname:result.lastname,
            mobile: result.mobile,
            email: result.email,
            department:result.department,
            
            
            
        })
        //console.log(xhr.responseText.Name.value);
    })
}


        render(){
             return(
                  <div>
                      <h4>Enter the mobile number of data to be edited</h4>
                      <form onSubmit={this.fetchStudentData}>
                      Edit mobile no:<input type="text" id= "editMobile" onChange={this.shivam} />
                      <input type="text" ></input>
                      </form>

<form onSubmit={this.sameer}>

    
First Name: <input type="text"  id="name" value={this.state.name} onChange={this.shivam} /> <br /> <br />
 Last  Name:  <input type="text"  id = "lastname" value={this.state.lastname} onChange={this.shivam}/> <br /><br />
 Mobile no.: <input type="text"id="mobile"value={this.state.mobile} onChange={this.shivam}/>  <br /><br />
 Email : <input type="text"id="email"value={this.state.email} onChange={this.shivam}/>
 <br /><br />
 Department: <input type="text" id= "department"value={this.state.department} onChange={this.shivam} /> <br /> <br />
 
 <input type="submit"></input>

</form>




        </div> )


            

        }}