// import Example from "./Example";
import Card from "./components/Card";
import "./index.css";

function App() {
  return (
    <>
      <h2 className="text-center text-2xl mt-3">Create react app using vite</h2>
      <Card
        username="Dave"
        post="Product Designer"
        image="https://images.unsplash.com/photo-1712346226699-e415ad57e22f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8"
      />
    </>
  );
}

export default App;
