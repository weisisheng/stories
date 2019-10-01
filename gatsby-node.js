const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `stories` })
    console.log(slug)

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___position] }) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const stories = result.data.allMarkdownRemark.edges

  stories.forEach(({ node }, index) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/storyTemplate.js`),
      context: {
        prev:
          index === 0
            ? stories[stories.length - 1].node
            : stories[index - 1].node,
        next:
          index === stories.length - 1
            ? stories[0].node
            : stories[index + 1].node,
        slug: node.fields.slug,
      },
    })
    createPage({
      path: `${node.fields.slug}video`,
      component: path.resolve(`./src/templates/videoTemplate.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}
