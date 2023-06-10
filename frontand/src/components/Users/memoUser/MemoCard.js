import React from 'react'
import './memoCard.css'

const MemoCard = () => {
  return (
    <div>
    <br/>
    <div className="container">
  <div className="wrapper">
    <div className="banner-image"> </div>
    <h1> Toyota Supra</h1>
    <p>La Toyota Supra (ou "トヨタスープラ" en japonais) est une voiture de grand tourisme produite par le constructeur automobile japonais Toyota,
     de 1979 jusqu'en 2002, puis à partir de 2019. La voiture a connu quatre générations successives et une cinquième plus tardivement,
      communément appelées MK1, MK2, MK3, MK4 et MK5 (MK étant l'abréviation de mark). <br />
      <h2> Price: $43,290 </h2>
      </p>
  
  <div className="button-wrapper">
    <button className="btn outline">DETAILS</button>
    <button className="btn fill">BUY NOW</button>
  </div>
</div>
</div>
<br/>


    <div className="container">
  <div className="wrapper">
    <div className="banner-image"> 
    <img className='cars'  src ="https://catalogue.automobile.tn/big/2022/10/46831.png?t=1"/>
    </div>
<br/>
    <h1> Range rover evoque </h1>
    <br/>
    <p>
    L'Evoque est une automobile de type SUV compact produite de 2010 à 2018 par le constructeur 
    de véhicules tout-terrain britannique Land Rover,
     Il s'agit du petit-frère du Range Rover,
      Il est remplacé par une seconde génération présentée le 22 novembre 2018 à Londres.2.  <br />
    <h2>Price:$46,175  </h2>
    </p>
  
  <div className="button-wrapper">
    <button className="btn outline">DETAILS</button>
    <button className="btn fill">BUY NOW</button>
  </div>
</div>
</div>
<br/>
<div className="container">
  <div className="wrapper">
    <div className="banner-image"> </div>
    <h1> Toyota Supra</h1>
    <p>
      Lorem ipsum dolor sit amet, <br />
      consectetur adipiscing elit.
    </p>
  
  <div className="button-wrapper">
    <button className="btn outline">DETAILS</button>
    <button className="btn fill">BUY NOW</button>
  </div>
</div>
</div>










    
    
    
    </div>
  )
}

export default MemoCard