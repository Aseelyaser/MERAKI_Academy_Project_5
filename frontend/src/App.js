import "./App.css";
import { Route, Routes,Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
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

import MaterialDonation from "./components/DashboardDoner/Material";
import MoneyDonationList from "./components/DashboardDoner/Money";

import "@stripe/stripe-js";





import DonationOrder from "./components/CreateDonation";

// import MyDonationList from "./components/DashboardDoner";

import Banner from './components/Banner/Banner'
import About from "./components/About/About";


import Material from "./components/CreateDonation/materrial";
import Money from "./components/CreateDonation/money";











import NavBar from "./components/Navbar/index";
import InterfaceHeader from './components/InterfaceHeader/InterfaceHeader'
import OurStory from "./components/OurStory/OurStory";

import NewSoct from "./components/Socket";
import NeedyMonyByUserId from "./components/NeedyByUserid/MonyCase";
// import AdminPanel from "./components/DashboardAdmin";
import Navigation from "./components/Navigation";
// import Sidebar from "./components/DashboardAdmin/Sidebar";



// import MyResponsivePie from './components/DashboardAdmin/pie'

import HomeCardCategory from "./components/CardCategory/Homecardcategory";
import AddNeedy2 from "./components/CreateCase/AddNeedy2";

import NavbarNew from "./components/Navbar/index";

import AdminPanel from "./components/DashboardAdmin";

// import MyResponsivePie1 from './components/DashboardAdmin/pie2'

// import MainDashboard from "./components/DashboardAdmin/MainDashboard";

import ApiPagination from "./components/ApiPganation";

import SlidCenter from "./components/Home";
// import Events from "./components/DashboardAdmin/Events";


import Checkout from "./components/payMent/Checkout";
import Success from "./components/payMent/Success";
import Cancel from "./components/payMent/Cancel";

import Video from "./components/Header/Video";
import OurImapct from "./components/OurImapct/OurImpact";
import OurValues from "./components/OurValues/OurValues";
import VideoNav from "./components/Header/VideoNav";



import Analytics from "./components/DashboardAdmin/Analytics";
import User from './components/DashboardAdmin/User'
import Maindashboard from "./components/DashboardAdmin/Maindash";
import Events from "./components/DashboardAdmin/Events";
import AddCampaign from "./components/DashboardAdmin/Campaign";
import NeedyCase from "./components/DashboardAdmin/NeedyCase";
import Donation from "./components/DashboardAdmin/Donation"
import ChatAdmin from "./components/DashboardAdmin/chat";









function App() {
  const {stateRole} = useSelector((state) => {
    return {
        stateRole: state.auth.stateRole,
    };
  });
  return (
   
  <div className="App">

 
{/* <SlidCenter/> */}
{/* <Navigation/> */}


     {/* {stateRole!='1'?<Navigation />:<Sidebar/>}  */}



<Routes>

{/* <Route path="/register" element={<Register/>}></Route>  */}

{/* <Route path="/login" element={<Login/>}></Route> */}
{/* {/*  */}


{/* <Route path="" element></Route>

<Route path="" element></Route> */}
 
 
 
 



<Route path="/AddNeedy/:id" element={<><Header/><NavbarNew/><AddNeedy/><Footer/></>}></Route>

<Route path="/categories" element={<AddCategory/>}></Route>
<Route path="/Showcategories" element={<><Header/><TheCategory/><Footer/></>}></Route>
<Route path="/dashboardneedy" element={<TheNeedy/>}></Route>
<Route path="/NeedyCaseById" element={<><Header/><NavbarNew/><NeedyByUserId/><Footer/></> }></Route>
<Route path="/NeedyCaseByCategory/:id" element={<NeedyByCategoy/>}></Route>
<Route path="/header" element={<Navbar/>}></Route>
<Route path="/register"element={<><Register/><Footer/></>}/>
<Route path="/login"element={<><Login/><Footer/></>}/>
<Route path="/home" element={<><VideoNav/><Video/><HomeCardCategory/><OurImapct/><OurValues/><Footer/></>}/>
<Route path="/Contact"element={<><Header/><Contact/><Footer/></>}/>
<Route path="/about"element={<><Header/><About/><Footer/></>}/>
<Route path="/ourTeam"element={<><Header/><OurTeam/><Banner/><Footer/></>}/>
<Route path="/FAQs"element={<><Header/><FAQs/><Footer/></>}/>
<Route path="AddNeedy2/:id"element={<><Header/><AddNeedy2/><Footer/></>}></Route>
<Route path="/ourStory"element={<><Header/><OurStory/><OurTeam/><Footer/></>}/>
<Route exact path="/" element={<Navigate replace to="/home" />}>
   </Route>




NeedyMonyByUserId
<Route path="/NeedyMonyByUserId"element={<><Header/><NavbarNew/><NeedyMonyByUserId/><Footer/></>}/>
<Route path="/NewSoct" element={<><Header/><NavbarNew/><NewSoct/><Footer/></>}  ></Route>
<Route path="/ApiPag" element={<><Header/><ApiPagination/><Footer/></>}  ></Route>
<Route path="/check" element={<><Header/><Checkout /><Footer/></>} />
 {/* 


 <Route path="" element={<Login/>}></Route>

 <Route path="" element={<Login/>}></Route>


// <Route path="" element={<Login/>}></Route> */} 





<Route path="/donate" element={<><Header/><DonationOrder/><Banner/><Footer/></>}/>
{/* <Route path="/mydonation" element={<><Header/><MyDonationList/><Footer/></>}></Route> */}
<Route path="/materialdonation/:id" element={<><Header/><Navigation/><Material/><Footer/></>}/>
<Route path="/monydonation/:id" element={<><Header/><Navigation/><Money/><Footer/></>}/>
<Route path="/mymonydonation" element={<><Header/> <Navigation/><MoneyDonationList/><Footer/></>}></Route>
<Route path="/mythingdonation" element={<><Header/><Navigation/>< MaterialDonation/><Footer/></>}></Route>

<Route path="/NewSoct" element={<><NewSoct/></>}  ></Route>

<Route path="/admin/dashboard" element={<AdminPanel/>}/>
 <Route path="/admin/users" element={<User/>}/>
 <Route path="/admin/needy_case" element={<NeedyCase/>}/>
 <Route path="/admin/donation_order" element={<Donation/>}/>
 <Route path="/admin/analytics" element={<Analytics/>}/>
 <Route path="/admin/events" element={<Events/>}/>
 <Route path="/admin/support" element={<AddCampaign/>}/>
 <Route path="/admin/chat" element={<ChatAdmin/>}/>





{/* 
 <Route path="" element={<Login/>}></Route>

<Route path="" element={<Login/>}></Route>


<Route path="" element></Route>  WALLA ROUTER */}

 {/* {
  stateRole=='1'?<> 
  

  
  </>:""
} */}
 
 
 <Route path="success" element={<><Header/><Success /><Footer/></>} />
          <Route path="cancel" element={<><Header/><Cancel /><Footer/></>} />

</Routes>

  </div>
);
}

export default App;
