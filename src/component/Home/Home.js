import React from 'react'
import Logo from '../../../src/AH.jpg'
import Cards from '../Cards/Cards'
import './Home.css'



export default function Home() {
  return (
      <div>
    <nav >
  <div className="logo">
    <a className="navbar-brand" href="/">
      <img src={Logo} alt="logo" className='logoImg'/>
    </a>
  </div>
</nav>
<div className=''>
<h1 className='header'>Airlines</h1>
< Cards />
</div>


</div>
  )
}
