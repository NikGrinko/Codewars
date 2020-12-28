function cakes(recipe, available) {
    let important = false;
    let match = 0;
    let countRecipe = 0;
    let countCakes = 0;
    for (let recipeKey of Object.keys(recipe)) {
        countRecipe++
        if (available[recipeKey]) {
            match++
        }
    }
    if (countRecipe <= match) {
        let b = 5
        for (let recipeKey of Object.keys(recipe)) {
            let a = available[recipeKey] / recipe[recipeKey]
            if (a < b) b = a
        }
        return Math.floor(b);
    }
    return 0;
}