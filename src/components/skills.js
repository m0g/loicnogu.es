import React from 'react'

const Skills = ({ size, node }) => (
  <fieldset>
    <legend><span role="img" aria-label="trophy">🏆</span> Skills</legend>
    <div id="marquee" style={{ width: `${size.width - 37}px` }}>
      <span 
        className="first"
        dangerouslySetInnerHTML={{ __html: node.html }}
      ></span>
    </div>
  </fieldset>
)

export default Skills
