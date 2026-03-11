function Greeting(props) {

  let message = "";

  if(props.timeOfDay === "morning"){
    message = "Good Morning";
  }
  else if(props.timeOfDay === "afternoon"){
    message = "Good Afternoon";
  }
  else if(props.timeOfDay === "evening"){
    message = "Good Evening";
  }
  else{
    message = "Hello";
  }

  return(
    <div style={{backgroundColor: props.bgColor, padding:"10px", margin:"10px"}}>
      <h2>{message}, {props.name}!</h2>
    </div>
  );
}

export default Greeting;