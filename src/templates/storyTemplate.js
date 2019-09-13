import React from 'react'
import { graphql } from 'gatsby'
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="story-container">
      <div className="story">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.story}</h2>
      </div>
    </div>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        name
        title
        story
        videoSourceURL
      }
    }
  }
`