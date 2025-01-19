import React from 'react'
import {Box,Stack} from "@chakra-ui/react";
import Card from './Card';
import axios from "axios";



const Home = () => {

    const checkoutHandler=async(amount)=>{
       const {data:{order}} = await axios.post("http://localhost:4000/api/checkout",{
        amount
       })
       
       const options = {
          key: "YOUR_KEY_ID",
          amount: order.amount,
          currency: "INR",
          name: "Acme Corp", 
          description: "Test Transaction",
          image: "https://example.com/your_logo",
          order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
          callback_url: "http://localhost:4000/api/paymentverification",
          prefill: { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
              name: "Gaurav Kumar", //your customer's name
              email: "gaurav.kumar@example.com",
              contact: "9000090000" //Provide the customer's phone number for better conversion rates 
          },
          notes: {
              address: "Razorpay Corporate Office"
          },
          theme: {
              color: "#3399cc"
          }
        };
        var rzp1 = new window.Razorpay(options);
        document.getElementById('rzp-button1').onclick = function(e){
            rzp1.open();
            e.preventDefault();
        }
    }




  return (
    
    <Box>
        <Stack h="100vh"  alignItems="Center" justifyContent="center" direction={["column" ,"row"]}>
            <Card amount={10000} img="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/PDP-Highlight-Surface-Laptop-Go-2-Ice-Blue:VP2-859x540" checkoutHandler={checkoutHandler}/>
            <Card amount={10000} img="https://arcticfox.com/cdn/shop/files/RedMousecopy2.png?v=1720679632&width=823" checkoutHandler={checkoutHandler}/>
        </Stack>
    </Box>
  )
}

export default Home