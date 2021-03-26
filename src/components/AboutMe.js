import React from "react";
import Me from "../images/model.jpg"
import BlueDemon from "../images/me.jpg"
import {Media} from "react-bootstrap";



const AboutMe = () => {
    return (

      <div class="about-me container-fluid">
        <div class="row">
          <div class="col-xl">
          <Media>
            <img
              width={250}
              height={230}
              className=" image-me mr-3"
              src={Me}
              alt="Generic placeholder"
            />
            <Media.Body>
              <h3 className="aboutme-title">About me</h3>
              <p>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                Donec lacinia congue felis in faucibus.
              </p>
                <br/>
              <Media>
                <img
                  width={200}
                  height={160}
                  className="mr-3"
                  src={BlueDemon}
                  alt="Generic placeholder"
                />
                <Media.Body>
                  <h5>Media Heading</h5>
                  <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in
                    vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
                    vulputate fringilla. Donec lacinia congue felis in faucibus.
                  </p>
                </Media.Body>
              </Media>
            </Media.Body>
          </Media>


            </div>
          </div>
        </div>
        
        /*<div className="about-me container-fluid">
            <div className="Title container-sm">
                <h1>About Me</h1>
            </div>  
            <img src={Me} width="300" height="150" className=""></img>
            <div>
            </div>
        </div>*/
     )
}

export default AboutMe;
