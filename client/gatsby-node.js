const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const postTemplate = path.resolve(`src/templates/post.js`)
  return graphql(
    `
      query AllPosts {
        keystone {
          allPosts {
            id
            slug
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }
    result.data.keystone.allPosts.forEach(({ id, slug }) => {
      createPage({
        path: `/post/${slug}`,
        component: postTemplate,
        context: {
          id,
          slug,
        },
      })
    })
  })
}
