
import React,{ Component } from 'react'

export default class form extends Component{

    constructor(props)
{


    super(props);
    this.state = {
        mobileNo: "",
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
        var xhr = new XMLHttpRequest();
        
           
        
        xhr.open('POST',"http://localhost:9000/ShowData");
        xhr.setRequestHeader("content-Type","application/json");
        xhr.addEventListener('load', () => {
            console.log("result ="+xhr.responseText);
            var result = JSON.parse(xhr.responseText)
            this.setState({
                name : result.name,
                lastname: result.lastname,
                mobile: result.mobile,
                email: result.email,
                department: result.department,
            })
        })
        

        var data = JSON.stringify({
            "mobileNo":this.state.mobileNo
        });
        

         console.log("data= ",data);
        xhr.send(data)
    console.log("data send");
}
        render() {
                return(
                     <div>
                         <h4>ShowData</h4>
                          

                         <form onSubmit={this.sameer}>
                         mobile no:<input type="text" id="mobileNo" onChange={this.shivam} />
                         <input type="submit" id="submit1" />
                         </form>
                         <h5>
                             <table border="1" cellPadding="20px" classname="table1">
                                 <tr>
                                     <td>
                                         <h3>Name</h3>
                                     </td>
                                     <td>
                                         <h3>Lastname</h3>
                                     </td>
                                     <td>
                                         <h3>Mobile</h3>
                                     </td>
                                     <td>
                                         <h3>Email</h3>
                                     </td>
                                     <td>
                                         <h3>Department</h3>
                                     </td>


                                 </tr>
                                 <tr>
                                 <td> {this.state.name} </td>
                                 <td>{this.state.lastname}</td>
                                 <td>{this.state.mobile} </td>
                                 <td>{this.state.email} </td>
                                 <td>{this.state.department} </td>
                                 </tr>
                             </table>
                         </h5>




        </div> )


            

        }}