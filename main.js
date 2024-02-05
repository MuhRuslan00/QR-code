// Часть запроса
const form = document.querySelector('#form');
const input = document.querySelector('#input');
const qrCodeWrapper = document.querySelector('#card-q');
// console.log(qrCodeWrapper);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    qrCodeWrapper.innerHTML = '';
    // console.log('Submit');
    // console.log(input.value);
    
    const api = 'https://api.qrserver.com/v1/create-qr-code/?size=160×160&data=';
    const request = api + input.value;
    console.log(request);

    const img = `<img src="${request}" alt="QR">`;
    qrCodeWrapper.classList.add('open');
    qrCodeWrapper.insertAdjacentHTML('beforeend', img);
});