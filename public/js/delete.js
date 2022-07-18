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

};

document
  .querySelector('.project-list')
  .addEventListener('click', delButtonHandler);