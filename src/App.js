import logo from './logo.svg';
import './App.css';
import Header from './conponents/Header';
import Slider from './conponents/Slider';
import Detail from './conponents/Detail';
import Products from './conponents/Products';
import Find from './conponents/Find';
import Client from './conponents/Client';
import Sign from './conponents/Sign';
import Info from './conponents/Info';
import Footer from './conponents/Footer';
function App() {
  return (
    <div className="App">
      <>
        <div className="hero_area">
          {/* header section strats */}
            <Header></Header>
          {/* end header section */}
          {/* slider section */}
            <Slider></Slider>
          {/* end slider section */}
        </div>
        {/* detail section */}
          <Detail></Detail>
        {/* end detail section */}
        {/* products section */}
          <Products></Products>
        {/* end products section */}
        {/* find section */}
          <Find></Find>
        {/* end find section */}
        {/* client section */}
        <Client></Client>
        {/* end client section */}
        {/* sign section */}
        <Sign></Sign>
        {/* end sign section */}
        {/* info section */}
        <Info></Info>
        {/* end info section */}
        {/* footer section */}
        <Footer></Footer>
        {/* footer section */}
      </>
    </div>
  );
}

export default App;
