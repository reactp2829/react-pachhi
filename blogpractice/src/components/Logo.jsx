import React,{useEffect, useSelect, useState} from 'react'
import { useSelector } from 'react-redux';

function Logo({width = '100px'}) {
  const [name,setName] = useState("");
  const userData = useSelector((state) => state.auth.userData);
  
  return (
    <div>Logo</div>
  )
}

export default Logo