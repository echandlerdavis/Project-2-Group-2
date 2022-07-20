const cardHandler = async (event) => {
    event.preventDefault();
    console.log('Im here');

    const id = event.target.getAttribute('data-id');
    const recipeEditId = event.target.getAttribute('data-edit-id');
    const cardRecipeId = event.target.getAttribute('data-card-id');
    console.log(event.target);
    console.log(cardRecipeId);

    if (id) {
        console.log('deleting');

        const response = await fetch(`api/recipes/${id}`, {
            method: 'DELETE',
        });
    
        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to delete project');
        }
    } else if (recipeEditId) {
        // const recipeId = recipe.id;
        console.log('editing');

        // const response = await fetch(`/update-recipes/${recipeId}`)
        document.location.replace(`/update-recipes/${recipeEditId}`);
    } else {
        console.log('viewing single recipe');

        document.location.replace(`/view-recipe/${cardRecipeId}`);
    }

};

document
  .querySelector('.project-list')
  .addEventListener('click', cardHandler);