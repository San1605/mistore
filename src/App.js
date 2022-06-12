import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Prenavbar from './components/Prenavbar';
import Slider from './components/Slider.js'
import data from "./data/data.json"
import Offer from './components/Offers.js'
import Heading from './components/Heading.js'
import StarProducts from './components/Starproducts.jsx'
import HotAccesoriesMenu from './components/HotAccesoriesMenu.jsx'
import HotAccessories from './components/HotAccesories.jsx'
import ProductReviews from "./components/ProductReviews.js"
 import Videos from "./components/Videos.jsx"
 import Banner from "./components/Banner.jsx"
 import Footer from "./components/Footer.jsx"
 import NavOptions from "./components/NavOptions.jsx"

function App() {
  return (
    <div className="App">
      <Router>
             <Prenavbar/>
            
             <Navbar/>
             <NavOptions miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}/>
          
             <Slider start={data.banner.start}/>
             <Offer offer={data.offer}/>
             <Heading text="star product"/>
             <StarProducts starproduct={data.starProduct}/>
             <HotAccesoriesMenu/>
             <Routes>
 
             <Route exact path='/music'  element={  <HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />   }/>
             <Route exact path='/smartDevice'  element={  <HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />   }/>
             <Route exact path='/home'  element={  <HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />   }/>
             <Route exact path='/lifestyle'  element={  <HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle} />   }/>
             <Route exact path='/mobileAccessories'  element={  <HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />   }/>

   
               </Routes>
               <Heading text="Product Reviews"/>
               <ProductReviews productReviews={data.productReviews}/>
               <Heading text="Videos"/>
               <Videos videos={data.videos} />
               <Heading text="IN THE PRESS"/>
               <Banner banner={data.banner}/>
             
       <Footer footer={data.footer} />
             </Router>
    </div>
  );
}

export default App;


