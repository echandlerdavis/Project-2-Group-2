const recipeHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#recipe-name').value.trim();
    const ingredients = document.querySelector('#recipe-ingredients').value.trim();
    const instructions = document.querySelector('#recipe-instructions').value.trim();
  
    if (name && ingredients && instructions) {
      const response = await fetch(`/api/recipes`, {
        method: 'PUT',
        body: JSON.stringify({ name, ingredients, instructions }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        alert('Your recipe has been updated.')
        document.location.replace('/profile');

        // is '/newrecipe' correct?? this confuses me
      } else {
        alert('Failed to create project');
      }
    }
  };
  
  document
    .querySelector('.box')
    .addEventListener('submit', recipeHandler);