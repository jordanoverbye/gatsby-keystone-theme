import React from "react"

const PostTemplate = props => {
  const post = props.data.keystone.Post
  return (
    <div>
      <span>{post.id}</span>
      <span>{post.slug}</span>
      <h1>{post.title}</h1>
    </div>
  )
}

export default PostTemplate

export const pageQuery = graphql`
  query BlogPostById($id: ID!) {
    keystone {
      Post(where: { id: $id }) {
        id
        slug
        title
      }
    }
  }
`
