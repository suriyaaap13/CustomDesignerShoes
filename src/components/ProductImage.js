import React from 'react'

export default function ProductImage(props) {

    if(props.fb==true&&props.back==true){
        return (<img src={require('../shoes/shoe1.png')} style={{width: "40rem", height: "40rem"}} alt='Product Image'/>);
    }else if(props.fb==false&&props.back==true){
        return <img src={require('../shoes/shoe2.png')} style={{width: "40rem", height: "40rem"}} alt='Product Image'/>
    }else if(props.fb==true&&props.back==false){
        return <img src={require('../shoes/shoe3.png')} style={{width: "40rem", height: "40rem"}} alt='Product Image'/>
    }else{
        return <img src={require('../shoes/shoe4.png')} style={{width: "40rem", height: "40rem"}} alt='Product Image'/>
    }
  
}
