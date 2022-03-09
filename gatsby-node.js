const slugify = require('slugify');
const path = require('path')
exports.createPages = async({graphql,actions})=>{
const {createPage} = actions
// Create tags pages dynamically
const result = await graphql(`query getRecipes {
  allContentfulRecipe {
    nodes {
      content {
        tags
      }
    }
  }
}`)
result.data.allContentfulRecipe.nodes.forEach(recipe=>{
    recipe.content.tags.forEach(tag=>{
        const slug = slugify(tag,{lower:true})
        createPage({
            path: `/tags/${slug}`,
            component: path.resolve('src/templates/tag-template.js'),
            context:{
                tag: tag,
            },
        })
    })
})
}