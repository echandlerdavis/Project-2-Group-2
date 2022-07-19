const delButtonHandler = async (event) => {
    event.preventDefault();
    console.log('Im here');

    const id = event.target.getAttribute('data-id');
    console.log(id);

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
    }

    const recipeEditId = event.target.getAttribute('data-edit-id');

    if (recipeEditId) {
        // const recipeId = recipe.id;
        console.log('editing');

        // const response = await fetch(`/update-recipes/${recipeId}`)
        document.location.replace(`/update-recipes/${recipeEditId}`);
    }

};

document
  .querySelector('.project-list')
  .addEventListener('click', delButtonHandler);