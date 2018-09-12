import React from 'react'
import Link from 'gatsby-link'

const Information = ({ node }) => {

  console.log(node);
  return (
    <fieldset>
      <legend>📝 {node.frontmatter.title}</legend>
      <div
        dangerouslySetInnerHTML={{ __html: node.html }}
      />
    </fieldset>
  )
}

export default Information