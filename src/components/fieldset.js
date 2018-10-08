import React from 'react'

const Fieldset = ({ node }) => {
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