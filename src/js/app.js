let main;
let modalPost;
let addPost;
let btnShowPost;
let btnCancelPost;

//Funciones
window.addEventListener('load', async () => {
    main = document.querySelector('#main');
    modalPost = document.getElementById('modal-post-section');
    addPost = document.getElementById('btn-upload-post');
    btnShowPost = document.getElementById('btn-post-submit');
    btnCancelPost = document.getElementById('btn-post-cancel');
    addPost.addEventListener('click', ShowPostModal);
    addPost.addEventListener('click', ClosePostModal);

    if ('serviceWorker' in navigator) {
       const response = await navigator.serviceWorker.register('sw.js');
        if (response) {
            console.log("Servicio worker registro");
        }
    }


});
let deferredInstallPrompt = null;

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  document.getElementById('btn-install-app').addEventListener('click', () => {
    deferredInstallPrompt.prompt();
    deferredInstallPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('El usuario aceptó la instalación de la aplicación');
      } else {
        console.log('El usuario rechazó la instalación de la aplicación');
      }
    });
  });
});
const ShowPostModal = () => {
    main.style.display = 'none';
    modalPost.style.display = 'block';

    setTimeout(() => {
        modalPost.style.transform = 'translateY(0)'; 1
    }, 1);
}

const ClosePostModal = () => {
    main.style.display = 'block';
    modalPost.style.transform = 'translateY(100vh)';

}