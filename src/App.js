import "./App.css"
import { BrowserRouter as Router} from 'react-router-dom';
import MyRoutes from "./utils/MyRoutes";

function App() {
  console.log("Here");
  return (
    <Router>
      <MyRoutes />
    </Router>
  );
}

export default App;
