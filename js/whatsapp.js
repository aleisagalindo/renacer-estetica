function isMobile() {
    if (sessionStorage.desktop)
        return false;
    else if (localStorage.mobile)
        return true;
    var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
    for (var i in mobile)
        if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
    return false;
}

const formulario = document.querySelector('#formulario');
const buttonSubmit = document.querySelector('#submit');
const urlDesktop = 'https://web.whatsapp.com/';
const urlMobile = 'whatsapp://';
const telefono = '5493813464117';

formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    buttonSubmit.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>'
    buttonSubmit.disabled = true
    setTimeout(() => {
        let nombre = document.querySelector('#nombre').value
        let numero = document.querySelector('#numero').value
        let zonas = document.querySelector('#zonas').value
        let pago = document.querySelector('#pago').value
        let mensaje = 'send?phone=' + telefono + '&text=*_Formulario Renacer Estética Tuc_*%0A*¿Cuál es tu nombre?*%0A' + nombre + '%0A*¿Cuál es tu número de celular?*%0A' + numero + '%0A*¿Cúales zonas deseas realizarte?*%0A' + zonas + '%0A*¿Cómo abonarás el tratamiento?*%0A' + pago + ''
        // Operador Ternario
        isMobile() ? window.open(urlMobile + mensaje, '_blank') :  window.open(urlDesktop + mensaje, '_blank');
        // if(isMobile()) {
        //     window.open(urlMobile + mensaje, '_blank')
        // }else{
        //     window.open(urlDesktop + mensaje, '_blank')
        // }
        buttonSubmit.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar WhatsApp'
        buttonSubmit.disabled = false
    }, 3000);
});

