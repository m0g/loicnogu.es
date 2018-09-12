import React from 'react'
import Link from 'gatsby-link'

const Skillz = ({ size, node }) => (
  <fieldset>
    <legend>🏆 Skillz</legend>
    <div id="marquee" style={{ width: `${size.width - 37}px` }}>
      <span 
        className="first"
        dangerouslySetInnerHTML={{ __html: node.html }}
      ></span>
    </div>
  </fieldset>
)

export default Skillz
