import React from "react"

function ContactMe() {
    return (
        <div className="contactMe">
            <h1>If you ever have a problem, contact me!</h1>

            
            <div id="container contact_cards">
                
                <a  href="https://discord.gg/S3AKGTwvfr"><img src='./images/soma_discord.png' alt="Discord"/></a>
                <a  href="https://twitter.com/SomaRigel"><img src='./images/soma_twitter.png' alt="Twitter"/></a>
                <a  href="https://www.youtube.com/c/SomaCh/about"><img src='./images/soma_youtube.png' alt="Youtube"/></a>
                <a  href="https://www.twitch.tv/somarigel"><img src='./images/soma_twitch.png' alt="Twitch"/></a>
            </div>
            <br/><br/><br/>
        </div>
        
    )
}

export default ContactMe