import React from 'react'
import Link from 'gatsby-link'

const Fieldset = ({ node }) => {

  console.log(node);
  return (
    <fieldset>
      <legend>{node.frontmatter.title}</legend>
      <div
        dangerouslySetInnerHTML={{ __html: node.html }}
      />
    </fieldset>
  )
}

export default Fieldset