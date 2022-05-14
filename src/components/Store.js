import React,{useState} from 'react'
import Filter from './Filter';
import Product from './Product';
import Cart from './Cart';
import Design from './Design';

export default function Store() {
  const [ tab, setTab ] = useState(true);
  function ChangeTab(){
    setTab(!tab);
  }
  if(tab){
    return (
      <>
        <div className='row px-4 mw-100'>
            <Filter/>
            <Product tab={ChangeTab} />
            <Cart/>
        </div>
      </>
    )
  }else{
    return (
      <>
        <div className='row px-4 mw-100'>
            <Design tab={ChangeTab} />
            <Cart/>
        </div>
      </>
    )
  }
  
}
