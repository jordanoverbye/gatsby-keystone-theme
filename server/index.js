const { Keystone } = require('@keystone-alpha/keystone')
const { MongooseAdapter } = require('@keystone-alpha/adapter-mongoose')
const { Content, Text } = require('@keystone-alpha/fields')
const { GraphQLApp } = require('@keystone-alpha/app-graphql')
const { AdminUIApp } = require('@keystone-alpha/app-admin-ui')

const keystone = new Keystone({
  name: 'gatsby-keystone',
  adapter: new MongooseAdapter()
})

keystone.createList('Post', {
  schemaDoc: 'Blog Posts',
  fields: {
    title: { type: Text },
    slug: { type: Text },
    body: { type: Content }
  }
})

keystone.createList('Global', {
  schemaDoc: 'Global Settings',
  fields: {
    siteTitle: { type: Text },
    siteDescription: { type: Text }
  }
})

module.exports = {
  keystone,
  apps: [new GraphQLApp(), new AdminUIApp({ enableDefaultRoute: true })]
}
