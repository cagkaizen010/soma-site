import React from "react"

function Webnovel() {
    return (
        <div className="webnovel">
            <h1>Domain : Weaponmaster (WN)</h1>
            <h4>After being replaced by a thermostat out of all things, Soma moved to the Surface World
                to live among humans and learn about them (University) while fulfilling missions assigned by
                his boss, Amaterasu. After a turn of events, Soma discovers that VTubing can be a source of faith,
                what Gods need to Ascend the ranks. Now the young God is juggling his university life to learn
                about humans, a defender of the world and a streamer. Will he be able to do all of that? Who knows. . .</h4> <br/>
            
            <h2 className="volumes">Volume 1</h2>
                <li className="volumes"><a href="./webnovels/Volume1_Chapter1.pdf">Chapter 1</a></li>
                <li className="volumes"><a href="./webnovels/Volume1_Chapter2.pdf">Chapter 2</a></li>
                <li className="volumes"><a href="./webnovels/Volume1_Chapter3.pdf">Chapter 3</a></li>
                <li className="volumes">Chapter 4 coming soon!</li>
            
            <br/>
            <img
                // className="d-block w-100"
                // id="filler"
                src="./images/background_old.png"
                alt="soma"

              />
        </div>
        
    );
}

export default Webnovel