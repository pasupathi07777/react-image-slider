
import './App.css';

import Slider from './components/Slider';




function App() {
  let url='https://picsum.photos/v2/list'
  return (
    <div className="App flex items-center sm:h-[100vh]">
      <Slider url={url} page={"1"} limit={"10"}/>
     
    
    </div>
  );
}

export default App;
