
import {useState} from 'react';

function Home({name,age})
{
    const [data,setData]=useState("");

    let p;
    return(
        <div>
      
      <h1>Person name is {name} and age is {age} </h1>
      <button onClick={function (){
        alert("hello world");
      }}>Click</button>
      <br></br>
      <input onChange={function(e){
        setData(e.target.value);
        console.log(e);
        p=e.target.value;
      }}></input>
      <h1>{data}</h1>
      <br></br>
      <br></br>
        <div style={{display:'flex',gap:'30px'}}>
            

            <div>
            <img style={{width:'300px', height:'300px'}}src="https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <p style={{marginLeft:'100px'}}>Sierra Nevada</p>
            </div>
     
            <div>
            <img style={{width:'300px', height:'300px'}}src="https://images.unsplash.com/photo-1527489377706-5bf97e608852?q=80&w=959&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <p style={{marginLeft:'100px'}}>Yoho National Park</p>
            </div>
            <div>
            <img style={{width:'300px', height:'300px'}}src="https://images.unsplash.com/photo-1434394354979-a235cd36269d?q=80&w=851&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <p style={{marginLeft:'40px'}}>Mountain range in northeastern Italy</p>
            </div>
        </div>
        </div>

    )

}

export default Home;