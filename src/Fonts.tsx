import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: "ProximaNova-Bold";
        src: local("ProximaNova-Bold"),
          url("./src/assets/ProximaNova-Bold.ttf") format("truetype");
      }
      
      @font-face {
          font-family: "ProximaNova-Light";
          src: local("ProximaNova-light"),
            url("./src/assets/ProximaNova-Light.eot") format("truetype");
      }
      
      @font-face {
          font-family: "ProximaNova-Regular";
          src: local("ProximaNova-Regular"),
            url("./src/assets/ProximaNova-Regular.eot") format("truetype");
      }
      
      @font-face {
          font-family: "ProximaNova-Semibold";
          src: local("ProximaNova-Semibold"),
            url("./src/assets/ProximaNova-Semibold.eot") format("truetype");
      }
      
      @font-face {
          font-family: "ProximaNova-Thin";
          src: local("ProximaNova-Thin"),
            url("./src/assets/ProximaNovaT-Thin.eot") format("truetype");
      }

      @font-face {
        font-family: Degular;
        font-style: normal;
        src: url('./src/assets/Degular-Bold.woff') format('woff');
        font-weight: 600;
      }      
    `}
  />
);

export default Fonts;
