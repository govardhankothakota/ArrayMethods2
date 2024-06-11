import logo from "./logo.svg";
import "./App.css";

function App() {
  let topTollywoodActors = [
    "Chiranjeevi","Pawan Kalyan","Mahesh Babu","Prabhas","Jr. NTR","Allu Arjun","Ram Charan",
    "Vijay Deverakonda","Nani","Nagarjuna Akkineni","BalaKrishna","RaviTeja","Venkatesh",
  ];
  let topBollywoodActors = [
    "ShahRukh Khan","Salman Khan","Aamir Khan","Akshay Kumar","Ranbir Kapoor","Hrithik Roshan",
    "Ajay Devgn","Ranveer Singh","Shahid Kapoor","Amitabh Bachchan",
  ];
  let topKollywoodActors = [
    "Rajinikanth","Kamal Haasan","Vijay","Vijay Sethupati","Ajith Kumar","Suriya","Vijay Sethupati",
    "Dhanush","Vikram","Vijay Sethupati","Karthi","Vijay Sethupati","Sivakarthikeyan","Jayam Ravi",
  ];
  let topSandalwoodActors = [
    "Yash","Puneeth Rajkumar","Sudeep","Darshan","Rishab Shetty","Rakshit Shetty",
    "Shiva Rajkumar","Upendra","Ganesh","Dhananjay",
  ];
  let topMollywoodActors = [
    "Mohanlal","Mammootty","Dulquer Salmaan","Prithviraj Sukumaran","Fahadh Faasil","Nivin Pauly",
    "Tovino Thomas","Jayasurya","Asif Ali","Gopi Suresh",
  ];

  return (
    <div className="App">
      <h2>Indian Top Actros </h2>
      <div>
        <button onClick = {()=>{ 
           console.log(topBollywoodActors.at(7))
           console.log(topBollywoodActors.indexOf("Shahid Kapoor"))
          console.log(topBollywoodActors.indexOf("Ranbir Kapoor"))
          console.log(topBollywoodActors.indexOf("Sushanth singh Rajput"))
          console.log(topBollywoodActors.indexOf("ayushmann khurrana"))
           }}>IndexOf</button>
           <button onClick={()=>{
           console.log(topKollywoodActors.lastIndexOf("Vijay Sethupati"))
           }}>LastIndexOf</button>
           <button onClick={()=>{
           console.log(topSandalwoodActors.includes("Puneeth Rajkumar"))
           console.log(topSandalwoodActors.includes("RajKumar"))
           console.log(topSandalwoodActors.includes("Vishnuvardhan"))
           }}>Includes</button>
           <button onClick={()=>{ 
            console.log(topMollywoodActors)
            topMollywoodActors.fill("Actor",4,8)
            console.log(topMollywoodActors)
               }}>Fill</button>
           <button onClick={()=>{ 
            let actors = "Indian Top Actors"
            console.log(Array.from(actors))
               }}>From</button>
           <button onClick={()=>{  
            console.log(Array.isArray(["TollywoodActors"]))
            console.log(Array.isArray("BollywoodActors"))

              }}>IsArray</button>
           <button onClick={()=>{  
            console.log(topSandalwoodActors)
            topSandalwoodActors.reverse();
            console.log(topSandalwoodActors)
              }}>Reverse</button>
           <button onClick={()=>{ 
            topTollywoodActors.forEach((ele,i)=>{
              console.log(`${i}=> ${ele}`)
            })
               }}>ForEach</button>
      </div>
    </div>
  );
}

export default App;
