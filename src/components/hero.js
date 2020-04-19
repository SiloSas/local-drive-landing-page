import React from "react"
import PropTypes from "prop-types"

import Button from "../components/button"
import headerImage from "../images/header.png"
import MockupContent from "./image"
import mockupFrame from "../images/mockup-frame.png"

const Header = ({ siteTitle }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      padding: "4rem 1rem",
    }}
  >
    <div
      style={{
        backgroundImage: `url(${headerImage})`,
        position: "absolute",
        top: 0,
        zIndex: -5,
        height: "100vh",
        width: "100vw",
        opacity: 0.5,
      }}
    />
    <h1 style={{ textAlign: "center" }}>Local drive</h1>
    <p style={{ textAlign: "center", maxWidth: 440, background: "#ffffffd1" }}>
      Que vous teniez un stand sur un marché ou un commerce de proximité, offrez un service de drive à vos clients en quelques clics.
    </p>
    <Button href={'https://seller.local-drive.shop/signIn'}>Je commence mon essai gratuit</Button>
    <div style={{ margin: 60, position: "relative" }}>
      {/*<div style={{ clipPath: "inset(2% 5% round 2% 5%)" }}>*/}
          <iframe src="https://drive.google.com/file/d/1wdIOeTX9XV-AifXQa71SmQWG6TZ0_Acs/preview" width="800" height="480"></iframe>
      {/*</div>*/}
      {/*<div*/}
        {/*style={{*/}
          {/*position: "absolute",*/}
          {/*width: "250px",*/}
          {/*top: 0,*/}
        {/*}}*/}
      {/*>*/}
        {/*<img*/}
          {/*src={mockupFrame}*/}
          {/*alt="outlines of shapes and confetti in the background "*/}
        {/*/>*/}
      {/*</div>*/}
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
