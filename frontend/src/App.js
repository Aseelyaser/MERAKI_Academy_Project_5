import "./App.css";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import CreateCase from './components/CreateCase'
import AddCategory from "./components/Category/addCategoy";
import TheCategory from "./components/Category/showCategory";
import TheNeedy from "./components/DashboardNeedy";
import NeedyByUserId from "./components/NeedyByUserid";
import NeedyByCategoy from "./components/DashboardNeedy/GetNeedyByCategoryId";
import AddNeedy from "./components/CreateCase";
import Header from "./components/Header/header"
import Navbar from './components/Header/navbar'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import CardCategory from './components/CardCategory/CardCategory'
import OurTeam from './components/OurTeam/OurTeam'
import FAQs from './components/FAQs/FAQs'









import DonationOrder from "./components/CreateDonation";
import MyDonationList from "./components/DashboardDoner";

import Banner from './components/Banner/Banner'
import About from "./components/About/About";


import Material from "./components/CreateDonation/materrial";
import Money from "./components/CreateDonation/money";











import NavBar from "./components/Navbar/index";
import InterfaceHeader from './components/InterfaceHeader/InterfaceHeader'
import Services from './components/Services/Services'
import OurStory from "./components/OurStory/OurStory";

import NewSoct from "./components/Socket";
import NeedyMonyByUserId from "./components/NeedyByUserid/MonyCase";

import HomeCardCategory from "./components/CardCategory/Homecardcategory";
import AddNeedy2 from "./components/CreateCase/AddNeedy2";

import NavbarNew from "./components/Navbar/index";












function App() {
  return <div className="App">
  
   


<Routes>

{/* <Route path="/register" element={<Register/>}></Route> */}


{/* <Route path="/login" element={<Login/>}></Route> */}


<Route path="" element></Route>

<Route path="" element></Route>
 
 
 
 



<Route path="/AddNeedy/:id" element={<><Header/><NavbarNew/><AddNeedy/><Footer/></>}></Route>

<Route path="/categories" element={<AddCategory/>}></Route>
<Route path="/Showcategories" element={<><Header/><TheCategory/><Footer/></>}></Route>
<Route path="/dashboardneedy" element={<TheNeedy/>}></Route>
<Route path="/NeedyCaseById" element={<><Header/><NavbarNew/><NeedyByUserId/><Footer/></> }></Route>
<Route path="/NeedyCaseByCategory/:id" element={<NeedyByCategoy/>}></Route>
<Route path="/header" element={<Navbar/>}></Route>
<Route path="/register"element={<><Register/><Footer/></>}/>
<Route path="/login"element={<><Login/><Footer/></>}/>
<Route path="/home" element={<><Header/><InterfaceHeader/><HomeCardCategory/><Banner/><Footer/></>}/>
<Route path="/Contact"element={<><Header/><Contact/><Footer/></>}/>
<Route path="/about"element={<><Header/><About/><Footer/></>}/>
<Route path="/ourTeam"element={<><Header/><OurTeam/><Banner/><Services/><Footer/></>}/>
<Route path="/FAQs"element={<><Header/><FAQs/><Footer/></>}/>
<Route path="AddNeedy2/:id"element={<><Header/><AddNeedy2/><Footer/></>}></Route>
<Route path="/ourStory"element={<><Header/><OurStory/><OurTeam/><Banner/><Footer/></>}/>



NeedyMonyByUserId
<Route path="/NeedyMonyByUserId"element={<><Header/><NavbarNew/><NeedyMonyByUserId/><Footer/></>}/>
<Route path="/NewSoct" element={<><Header/><NewSoct/></>}  ></Route>



 {/* 
 <Route path="/" element={<NewSoct/>}  ></Route>

 <Route path="" element={<Login/>}></Route>

 <Route path="" element={<Login/>}></Route>


// <Route path="" element={<Login/>}></Route> */} 





<Route path="/donate" element={<><Header/><InterfaceHeader/><DonationOrder/><Banner/><OurTeam/><Services/><Footer/></>}/>
<Route path="/mydonation" element={<><Header/><MyDonationList/><Footer/></>}></Route>
<Route path="/materialdonation/:id" element={<><Header/><Material/><Footer/></>}/>
<Route path="/monydonation/:id" element={<><Header/><Money/><Footer/></>}/>

{/* 
 <Route path="" element={<Login/>}></Route>

<Route path="" element={<Login/>}></Route>


<Route path="" element></Route>  WALLA ROUTER */}

</Routes>


  </div>;
}

export default App;
