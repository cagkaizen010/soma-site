import React from "react"
import Carousel from 'react-bootstrap/Carousel'

import 'bootstrap/dist/css/bootstrap.min.css';



function Slideshow() {
    return (
        <div >          

          <Carousel>
            <Carousel.Item>
              <img
                src="./images/soma.png"
                alt="First slide"
                
              /><br/>
              <img
                id="filler"
                src="./images/soma.png"
                alt="First slide"

              />
              <Carousel.Caption className="caption">
              
                <h1>Soma Rigel</h1>
                <h4>Age: 21,000 years old</h4>
                <h4>Birthday: 8/3</h4>
                <h4>Species: Yatagarasu</h4>
                <h4>Job: Amaterasu's Acolyte in the Surface World. Hell's Flame regulator (Formerly)</h4>
                <h4>Likes:
                  <li>Forging guns and other weapons.</li>
                  <li>Learning about technology and other advancements.</li>
                  <li>Vtubing</li>
                  <li>Learning new hobbies</li>
                </h4>
                <h4>Dislikes:
                  <li>Crowded Areas</li>
                  <li>Things not going according to plan.</li>
                  <li>The dark void.</li>
                  <li>Conflict between people.</li>
                  <li>Anyone that threatens his friends.</li>
                  <li>Horror games.</li>
                </h4>
                <br/><br/>
                <h4>Live2D Illustrator: <a href="https://twitter.com/B12ett3">@B12ett3</a></h4>
                <h4>Live2D Rigger: <a href="https://twitter.com/Yannapii">@Yannapii</a></h4>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <h1>Divine Weapons</h1>
                <h4>When he was in Hell, Soma forged countless divine guns. However, all of them fell flat as those guns are unnamed and disposable. <br/>Eventually he did it, Soma created his first Sacred Divine Weapon, which requires a name. <br/>How many named weapons will he build in his journey on the Surface? </h4>
                
              <img
                src="./images/soma_gun.png"
                alt="Second slide"
              /><br/>
              <img
                id="filler"
                src="./images/soma_gun.png"
                alt="Second slide"
              />

              <Carousel.Caption className="divineWeaponsCaption">
                <h1>Solus</h1>
                <ul><h3><b>Weapon Type: </b>High impact, anti deity Sniper Rifle.</h3></ul>
                <h4>Solus is Soma's first Sacred Divine Weapon (SDW in short).  Solus is capable of functioning both as a human anti materiel sniper rifle but it can also charge enough energy to pierce other Deities. 
                  It may be unwise to use a higher level of charge or consequences from The Council may occur...</h4><br/>
                <h4><b>Other Sacred Divine Weapons will be revealed soon. . .
                  Follow the Webnovel on this website to learn more!</b></h4>
              </Carousel.Caption>
            </Carousel.Item>
            
          </Carousel>

        
        </div>
    )
}

export default Slideshow;