import Greeting from "./components/Greeting";

function App() {

  return (
    <div>
      <h1>Greeting App</h1>

      <Greeting name="Talal" timeOfDay="morning" bgColor="lightblue"/>
      <Greeting name="Ali" timeOfDay="afternoon" bgColor="lightgreen"/>
      <Greeting name="Sara" timeOfDay="evening" bgColor="lightpink"/>

    </div>
  );

}

export default App;