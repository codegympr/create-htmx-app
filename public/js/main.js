document.addEventListener('htmx:load', () => {
    const modal = document.getElementById('modal-container');
    
    const closeButton = modal?.querySelector('.close-button');
        

    closeButton?.addEventListener('click', () => {
        modal.style.display = 'none';
    });
});
