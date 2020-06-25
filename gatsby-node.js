/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")

//this was used to create slugs internally with node but now we do this with contentful so we don't need it anymore
// module.exports.onCreateNode = ({ node, actions }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === "MarkdownRemark") {
//     const slug = path.basename(node.fileAbsolutePath, ".md")
//     createNodeField({
//       node,
//       name: "slug",
//       value: slug,
//     })
//     console.log("@@@@@@@@@@@@@@@@@@", slug)
//     //console.log(JSON.stringify(node, undefined, 4))
//   }
// }

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const eventTemplate = path.resolve("./src/templates/details.js")
  const res = await graphql(`
    query {
      allContentfulMonthlyEventPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  res.data.allContentfulMonthlyEventPost.edges.forEach(edge => {
    createPage({
      component: eventTemplate,
      path: `/events/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}

//using a cms reduced the amount of code here
