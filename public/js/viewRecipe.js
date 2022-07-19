const recipeHandler = async (event) => {
  event.preventDefault();

  const recipeEditId = event.target.getAttribute('data-id');

  if (recipeEditId) {
      // const recipeId = recipe.id;
      console.log('editing');

      // const response = await fetch(`/update-recipes/${recipeId}`)
      document.location.replace(`/update-recipes/${recipeEditId}`);
  }
};
  
document
  .querySelector('#submit')
  .addEventListener('click', recipeHandler);