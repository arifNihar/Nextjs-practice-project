import "./App.css";
import PartitionComponent from "./PartitionComponent";

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <PartitionComponent direction="column" totalPartitionnum={1} />
    </div>
  );
}

export default App;
