const recipeHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#recipe-title').value.trim();
  const ingredients = document.querySelector('#recipe-ingredients').value.trim();
  const instructions = document.querySelector('#recipe-instructions').value.trim();

  if (title && ingredients && instructions) {
    const response = await fetch(`/api/recipes`, {
      method: 'POST',
      body: JSON.stringify({ title, ingredients, instructions }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/newrecipe');
    } else {
      alert('Failed to create project');
    }
  }
};

document
  .querySelector('.box')
  .addEventListener('submit', recipeHandler);