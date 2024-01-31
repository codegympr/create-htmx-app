import 'htmx.org';
import '../styles/main.css';

document.addEventListener('htmx:load', () => {
    const modal = document.getElementById('modal-container') as HTMLElement;
    
    const closeButton = modal?.querySelector('.close-button') as HTMLElement;
        

    closeButton?.addEventListener('click', () => {
        modal.style.display = 'none';
    });
});
