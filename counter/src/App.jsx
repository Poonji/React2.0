
function App() {

  let  [counter,setCounter]= useState(15)
  //let counter=15 
  const addValue=()=>{
    //counter=counter+1
    setCounter(counter+1)
   // console.log("clicked",counter);
  }

  const removeValue=()=>{
    setCounter(counter-1)
  }
  return (
    <>
    </>
  )
}

export default App
