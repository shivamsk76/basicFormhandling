
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


    }
    this.shivam=this.shivam.bind(this)
    this.sameer=this.sameer.bind(this)
}



shivam(e)
{this.setState({[e.target.id]: e.target.value})}

sameer(e)
{
    e.preventDefault();
    if (this.state.name!=='') {console.log('ok');

    if (this.state.lastname!='') {console.log("ok");
    

if (this.state.mobile.length==10) {console.log('number verified');
let reg = /^([a-zA-Z0-9]+)@([a-z\.-]+)com$/;
if (reg.test(this.state.email)) {alert('Your Data has been added successfully');
    
}else{alert('please enter valid email')}
    
}else {if (this.state.mobile.length==" ") {alert('enter valid mobile.no')
    
} else  alert ('enter valid mobile No.')


}


    }else alert('please enter last name')

}else alert('please enter valid name')

        var xhr = new XMLHttpRequest();
        xhr.addEventListener('load', () => {console.log(xhr.responseText);})   
        
        xhr.open('POST',"http://localhost:9000/login");
        xhr.setRequestHeader("content-Type","application/json");
        xhr.send(JSON.stringify({
            "name":this.state.name,
            "lastname":this.state.lastname,
            "mobile":this.state.mobile,
            "email":this.state.email,
            "department":this.state.department
        })
        )
         console.log("data send");
        


    console.log("form submitted");
    
}  


        render  ()
        { return( <div>

<form onSubmit={this.sameer}>

First Name: <input type="text"  id="name"  onChange={this.shivam} /> <br /> <br />
 Last  Name:  <input type="text"  id = "lastname" onChange={this.shivam}/> <br /><br />
 Mobile no.: <input type="text"  id="mobile" onChange={this.shivam}/>  <br /><br />
 Email : <input type="text"id="email" onChange={this.shivam}/>
 <br /><br />
 Department: <input type="text" id= "department" onChange={this.shivam} /> <br /> <br />
 
<input type="submit"></input>

</form>




        </div> )


            

        }}