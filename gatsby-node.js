const path = require("path")

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
