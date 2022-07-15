const recipeHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#recipe-title').value.trim();
    const ingredients = document.querySelector('#recipe-ingredients').value.trim();
    const instructions = document.querySelector('#recipe-instructions').value.trim();
  
    if (title && ingredients && instructions) {
      const response = await fetch(`/api/recipes`, {
        method: 'PUT',
        body: JSON.stringify({ title, ingredients, instructions }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        alert('Your recipe has been updated.')
        document.location.replace('/update-recipe');

        // is '/newrecipe' correct?? this confuses me
      } else {
        alert('Failed to create project');
      }
    }
  };
  
  document
    .querySelector('.box')
    .addEventListener('submit', recipeHandler);