function ButtonContainer({counter, setCounter}) {

  function decrement(){
    setCounter(prevCount=> prevCount.slice(0,-2)) 
    }
  
    function increment(){
    setCounter(prevCount => prevCount + "🍅")
    }
    
  return (
    <div className='buttons-container'>
      <div className='button' onClick={decrement}>
        -
      </div>
      <div className='button' onClick={increment}>
        +
      </div>
    </div>
  );
}

export default ButtonContainer;
