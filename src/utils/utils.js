const setupTags = recipes=>{
    const newTags = {};
    recipes.forEach(recipe => {
        recipe?.content.tags.forEach(tag=>{
            if(newTags[tag]){
                newTags[tag] +=1
            }else{
                newTags[tag] = 1;
            }
        })
    });
const out = Object.entries(newTags)
out.filter((a,b)=>{
    const [firstTag] = a;
    const [secondTag] = b;

    return firstTag.localeCompare(secondTag);
})



    return out
}
export default setupTags