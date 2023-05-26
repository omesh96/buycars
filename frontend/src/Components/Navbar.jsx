// https://s3.amazonaws.com/logosnap/logos/2023/May/small-8377-646e15b98974b.png

import React from 'react'
import  "../Css/Navbar.css";
import {Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Image, Input, Spacer, useDisclosure} from "@chakra-ui/react"
import {Link,useNavigate} from "react-router-dom"

import { PhoneIcon, AddIcon, WarningIcon,HamburgerIcon} from '@chakra-ui/icons'
import { useDispatch,useSelector } from 'react-redux';
import { Store } from '../Redux/Store';
import { setModalOpen } from '../Redux/action';

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const allState=useSelector((Store)=>Store)
  console.log("allState",allState)


  const loginStatus=()=>{
    const token=localStorage.getItem("Buycartoken")
    let userName=JSON.parse(localStorage.getItem("user"))
    let name;
   if(userName){
     name=userName.name
    name= name.replace(/['"]+/g, '');
   }
    if(allState.loginReducer.loginStatus || token){
        console.log("allState2",allState)
    return [
      <>
       <Link to="/"> <li>Home</li></Link>
      
       <Link style={{marginLeft:"20px"}} to="/sellyourcar"> <li>Sell Your Car </li></Link>
       <Link style={{marginLeft:"20px"}} to="/yourpost"> <li>Your Post </li></Link>
       <Link to={""}> 
       <button 
        onClick={()=>dispatch(setModalOpen(true))}
       className='primaryBtn'>Log out</button>
        <button  className='primaryBtn' disabled>{name}</button>
       
       
       </Link>
      </>
    ]
    } else{
     return [
       <>
        <Link to="/signup">   <li >Signup</li> </Link>
              {/*  anchor tag ka use krne se webswite refresh ho jati hai */}
              <Link to="/signin"> <li>SignIn</li></Link>
             
       </>
     ]
    }
     }

     const loginStatusMobile=()=>{
        const token=localStorage.getItem("Buycartoken")
     if(allState.loginReducer.loginStatus || token){
     return [
       <>
         <Link to="/"> <li><span class="material-symbols-outlined">
    home
    </span></li></Link>
    
    <Link to="/sellyourcar"> <li><span class="material-symbols-outlined">
    add_box
    </span></li></Link>
    
        <Link to="/yourpost"> <li><span class="material-symbols-outlined">
    account_circle
    </span></li></Link>
    
      
    
       
        <Link to={""}> 
        <li 
        // onClick={()=>setModalOpen(true)}
         className='primaryBtn'><span class="material-symbols-outlined">
logout
</span></li>
        </Link>
       </>
     ]
     } else{
      return [
        <>
         <Link to="/signup">   <li >Signup</li> </Link>
               {/*  anchor tag ka use krne se webswite refresh ho jati hai */}
               <Link to="/signin"> <li>SignIn</li></Link>
              
        </>
      ]
     }
       }
  return (

    <>
    <div className='navbar'>
        <img id='insta-logo' src="https://s3.amazonaws.com/logosnap/logos/2023/May/small-8377-646e15b98974b.png" alt="logo" onClick={()=>navigate("/")} style={{cursor:"pointer",width:"5%"}}  />

        <ul className='nav-menu'>
        {loginStatus()}
        </ul>
        <ul className='nav-mobile'>
        {loginStatusMobile()}
        </ul>
    </div>

   {/* <div className='drawer'>
  
  <Box className='drawer-btn'>
  <Button ref={btnRef} colorScheme='transparent' onClick={onOpen} >
   <HamburgerIcon style={{ color:"black",height:"60px",width:"30px"}} />
    </Button>
  </Box>
     <Box className='drawer-logo'>
     <Image src="https://images.indianexpress.com/2021/01/myntra.png" alt="logo" s/>
    
     </Box>
         
         <Box id='drawer-flex'>
         <Box className={"flex"} >
    < >
    <Image src="https://cdn.icon-icons.com/icons2/2406/PNG/512/user_account_icon_145918.png" alt="acntlogo" 
     style={{height:"25px"}}
    />
   
    </>
   </Box>

   <Spacer />

<Box className={"flex"} >
 < >
 <Image src="https://w7.pngwing.com/pngs/978/882/png-transparent-wishlist-save-save-for-later-shopping-ecommerce-favorite-add-to-wishlist-ecommerce-online-shopping-icon-thumbnail.png" alt="acntlogo" 
  style={{height:"25px"}}
 />
 <Spacer />

 </>
</Box>

<Spacer />

<Box className={"flex"} >
 < >
 <Image src="https://w7.pngwing.com/pngs/833/426/png-transparent-shopping-cart-icon-shopping-cart-black-design-trade-thumbnail.png" alt="acntlogo" 
  style={{height:"25px"}}
 />
 <Spacer />

 </>
</Box>
         </Box>



       <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <Box >
  <Image src='https://i0.wp.com/fashionmostwanted.com/wp-content/uploads/2022/02/0c3b9-myntra-logo.jpeg?fit=1200%2C706&ssl=1' alt='Dan Abramov'  />
</Box>

          <DrawerBody>
            <Input placeholder='Type here...' />
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
   </div> */}

   </>
  )
}

export default Navbar

