import Navbar from "./components/navbar";
import Home from "./components/home";

export default function App() {
  return (
    <div>
      <Navbar refObj={{current:null}} items={[]} active="home" onJump={()=>{}} />
      <Home />
    </div>
  );
}
