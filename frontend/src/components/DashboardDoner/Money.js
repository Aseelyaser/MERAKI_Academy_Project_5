import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useEffect,useState } from "react";
import { setDonationOrder,deleteDonationOrder, updatDonationOrder,setMaterialDonation} from "../../redux/reducers/doner";
import axios from "axios";
 import './moneyDoner.css'
 //===============================================================
const MoneyDonationList = () => {
  const dispatch = useDispatch();
  // const { donation } = useSelector((state) => {
  //   return {
  //     donation: state.donation.donation,
  //   };
  // });
  const {token} = useSelector((state) => {
    return {
      token: state.auth.token,
    };
  });
    const [Message, setMessage] = useState("");
    const [moneyDonation, setmoneyDonation] = useState([])
       //===============================================================
       const getmydonation = async () => {
        try {
          const result = await axios.get("http://localhost:5000/dontes/myDonition", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          if (result.data.success) {
          dispatch(setDonationOrder(result.data.result));
            setMessage("");
          } else throw Error;
        } catch (error) {
          if (error.response && error.response.data)  {
            return setMessage(error.response.data.message);
          }
          setMessage("Error happened while Get Data, please try again");
        }
      };
       //==================================================================
    const getmyMoneyonation = async () => {
      try {
        const result = await axios.get("http://localhost:5000/dontes/myDonition/money", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (result.data.success) {
          setmoneyDonation(result.data.cases)
          setMessage("");
        } else throw Error;
      } catch (error) {
        if (error.response && error.response.data)  {
          return setMessage(error.response.data.message);
        }
        setMessage("Error happened while Get Data, please try again");
      }
    };
        //===============================================================
 const handeldeleted = async (id) => {
  try {
    const result = await axios.delete(`http://localhost:5000/dontes/${id}`)
    if (result.data.success) {
    // dispatch(deleteDonationOrder(id));
    const Monydonation = moneyDonation.filter((elem) => {
      return elem.id != id;
    });
   setmoneyDonation(Monydonation);
      setMessage("");
    } else throw Error;
  } catch (error) {
    if (error.response && error.response.data)  {
      return setMessage(error.response.data.message);
    }
    setMessage("Error happened while Get Data, please try again");
  }
};
   //===============================================================
    useEffect(() => {
      getmydonation()
      getmyMoneyonation();
          }, [])
            
    
//===============================================================
//------------------start return desigin-------------------------
return (
  <div className="donate_order_summery" >
    <h1>Your Donation List</h1>
    <div className='map_list'>
    {moneyDonation &&
     moneyDonation.map((donate, i) => {
        return (
          <div class="donateOrder_item">
            <p><span>Description</span><span>{donate.description}</span></p>
            <hr></hr>
            <p><span>Donate Amout</span> <span>${donate.amount}</span></p>
            <hr></hr>
<p><span> </span> <span><button onClick={()=>{handeldeleted(donate.id)}}  ><i class="bi bi-trash-fill"></i></button></span></p>
          </div>
        );
      })}
      </div>
  </div>
)
//------------------start return desigin-------------------------
  return (
    <>
    <div>Donation</div>
    
    {moneyDonation &&
     moneyDonation.map((donate, i) => {
        return (
          <div>
            <p>Donation Category:{donate.title}</p>
          <p> Description: {donate.description}</p>
          <p>Amount donation:{donate.amount}</p>
          <button onClick={()=>{handeldeleted(donate.id)}}> Remove from my list</button>
          </div>
        );
      })}
      </>
  )
}

export default MoneyDonationList


// return (
//   <div  className="case_order_summery">
//     <h1>YOUR MONEY ORDER</h1>
//  {mony&&mony.map((element, i) => {
//    return (
//      <div className="maiDivMonyTow">
//           <div class="order_item">
//           <p><span>{element.description}</span></p>
// <p><span>Amout</span> <span>${element.amount}</span></p>
// <hr></hr>
// <p><span>Rest</span> <span>${element.rest}</span></p>
// <hr></hr>
// <p><span>Donate Amout</span> <span>${element.donation_amount}</span></p>
// <hr></hr>
// <p><span> status</span> <span>{element.statusdonation}</span></p>
// <hr></hr>
// <p><span> </span> <span><button onClick={()=>{deleteCase(element.id)}}  ><i class="bi bi-trash-fill"></i></button></span></p>

// </div>
// <div className="divImageMonynew   plus"><img src="./assets/images/pic5.png" ></img></div>
      
//      </div>
     
//    );
//  })}
// </div>
// );