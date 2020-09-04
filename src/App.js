import Header from "./Components/Header.js";
import Filters from "./Components/Filters.js";
import hotelsData from "./data.js";
import HotelsCard from "./Components/HotelsCard.js";

class App extends React.Component{
  render(){
    return(
      <div>
        <Header />
        <Filters />
        {hotelsData.map((dataH) =>(
          <HotelsCard {...dataH} />
        ))}
      </div>
    );
  }
}

export default App;
