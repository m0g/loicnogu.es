import React from 'react'

const Skillz = ({ size, node }) => (
  <fieldset>
    <legend><span role="img" aria-label="trophy">🏆</span> Skillz</legend>
    <div id="marquee" style={{ width: `${size.width - 37}px` }}>
      <span 
        className="first"
        dangerouslySetInnerHTML={{ __html: node.html }}
      ></span>
    </div>
  </fieldset>
)

export default Skillz
