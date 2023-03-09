const InteractionEvents33 = () => {
    function handleClick () {
        alert("Button was clicked.");
    }
    function handleChange (event) {
        console.log(event.target.value);
    }
    return (
      <div>
        <button onClick = {handleClick}>The button that show magic!</button>
        <input type="text" onChange={handleChange} />
      </div>
    );
  };
  
  export default InteractionEvents33;