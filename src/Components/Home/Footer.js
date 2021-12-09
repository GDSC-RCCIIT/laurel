import React from 'react'

const foot = {
    position: "absolute",
    width: "975px",
    height: "305px",
    left: "0px",
    top: "650px",
    background: "url(.png)"
  }

export const Footer = () => {
    return (
        <div>
          <div>
            <img style={foot} src="/images/google-crowdsource 1.jpg" alt="" />
          </div>
         
        </div>
    )
}
