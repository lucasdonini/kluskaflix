$('#forgot-password').hide();
$('#login').css('transform', 'translateY(35px)');

const password = '030310';
const email = 'lkd.lucas@gmail.com';


function login() {
    const inPass = $('#password').val().trim();
    const inEmail = $('#e-mail').val().trim();

    if (inEmail === '') {
        alert('Campo de e-mail está Vazio');
    } else if (inEmail !== email) {
        alert('e-mail não encontrado');
    } else {
        if (inPass === '') {
            alert('campo de senha está vazio');
        } else if (inPass !== password) {
            $('#forgot-password').show();
            alert('senha incorreta');
        } else {
            window.location.assign('main-page.html');
        }
    }
}

$('form').on('submit', function (e) {
    e.preventDefault();
    login();
});

$('#show-password').on('click', function () {
    const field = $('#password');
    const fieldType = field.prop('type') === 'password' ? 'text' : 'password';
    field.prop('type', fieldType);
});