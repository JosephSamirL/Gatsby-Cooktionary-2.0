
const path = require('path')
exports.createPages = async({graphql,actions})=>{
const {createPage} = actions
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
    recipe.content.tags.forEach(item=>{
        createPage({
            path: `/${item}`,
            component: path.resolve('src/templates/tag-template.js'),
            context:{
                tag: item,
            },
        })
    })
})
}