import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

function HireMe() {
  return (
    <div className="hireme">
      <h2 className="hireme-title">Hire me!</h2>
      <p className="p-hireme">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
        ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
        molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero
        eros et accumsan et iusto odio dignissim qui blandit praesent luptatum
        zzril delenit augue duis dolore te feugait nulla facilisi.
      </p>

      <p className="p-hireme">
        Has maiorum habemus detraxit at. Timeam fabulas splendide et his.
        Facilisi aliquando sea ad, vel ne consetetur adversarium. Integre
        admodum et his, nominavi urbanitas et per, alii reprehendunt et qui. His
        ei meis legere nostro, eu kasd fabellas definiebas mei, in sea augue
        iriure.
      </p>
      <h3>Next Section</h3>
      <p className="p-hireme">
        Has maiorum habemus detraxit at. Timeam fabulas splendide et his.
        Facilisi aliquando sea ad, vel ne consetetur adversarium. Integre
        admodum et his, nominavi urbanitas et per, alii reprehendunt et qui. His
        ei meis legere nostro, eu kasd fabellas definiebas mei, in sea augue
        iriure.
      </p>
      <p className="p-hireme">
        Has maiorum habemus detraxit at. Timeam fabulas splendide et his.
        Facilisi aliquando sea ad, vel ne consetetur adversarium. Integre
        admodum et his, nominavi urbanitas et per, alii reprehendunt et qui. His
        ei meis legere nostro, eu kasd fabellas definiebas mei, in sea augue
        iriure.
      </p>
      <div>
        <a
          target="blank"
          href="https://drive.google.com/file/d/1Emk6F4hfo3yCnxkuWPdObW7bjdi7gq6f/view?usp=sharing"
          className="btn-main-cv"
          download
        >
          <img
            src="https://img.icons8.com/ios/50/000000/open-resume.png"
            alt="donwload icon"
          />
        </a>
      </div>
    </div>
  );
}

export default HireMe;
