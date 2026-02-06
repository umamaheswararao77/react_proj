import { useState } from "react";

function Counter() {

    var [color ,setcolor]= useState("red");
    var [count ,setcount]=useState(0);
    const [add, setAdd] = useState(['Example Task 1', 'Example Task 2']);
    

  return (
    <>
        <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="card shadow-lg p-4" style={{ width: "350px" }}>
        
        <h3 className="text-center mb-4 text-primary">
          Counter App
        </h3>

        <div className="text-center mb-3">
          <span className="display-4 fw-bold">{count}</span>
        </div>

        <div className="d-flex gap-2">
          <button className="btn btn-success w-100" onClick={()=>{setcount(prev =>prev+1)}}>
            Add
          </button>

          <button className="btn btn-danger w-100"onClick={()=>{setcount(prev =>prev-1)}}>
            Sub
          </button>

          <button className="btn btn-primary w-100"onClick={()=>{setcount(0)}}>
            Ac
          </button>
        </div>

      </div>
        </div>
        <div className="container vh-100 d-flex justify-content-center align-items-center">
            <div className="card shadow-lg p-4" style={{ width: "350px" }}>

                <h3 className="text-center mb-4"style={{color:color}}>
                color change
                </h3>

                <button className="btn btn-danger" onClick={()=>setcolor("red")}>red</button>
                <button className="btn btn-primary my-2" onClick={()=>setcolor("blue")}>blue</button>
                <button  className="btn btn-success" onClick={()=>setcolor("green")}>green</button>
                
            </div>
        </div>

        <div className="container vh-100 d-flex justify-content-center align-items-center mb-5">
            <div className="card shadow-lg p-4" style={{ width: "350px" }}>

                <h3 className="text-center mb-4"style={{color:color}}>
                To Do List
                </h3>
              <ul>
                {add.map((item, index)=>(
                  <li key={index}>{item}</li>
                ))}

              </ul>
              <button className="btn btn-primary w-100" onClick={() => setAdd([...add, `Tasks ${add.length + 1}`])}> Add Task</button>

            </div>
        </div> 
    </>
  );
}

export default Counter;


