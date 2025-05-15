$('#forgot-password').hide();
$('#login').css('transform', 'translateY(35px)');

const password = '030310';
const email = 'lkd.lucas@gmail.com';


function login() {
    const inPass = $('#password').val().trim();
    const inEmail = $('#e-mail').val().trim();

    if (inEmail === '') {
        $('#e-mail-input span').css('display', 'inline').text('*campo obrigatório vazio').hide().fadeIn();
    } else if (inEmail !== email) {
        $('#e-mail-input span').css('display', 'inline').text('*e-mail não encontrado').hide().fadeIn();
    } else {
        $('#e-mail-input span').hide();
        if (inPass === '') {
            $('#password-input span').css('display', 'inline').text('*campo obrigatório vazio').hide().fadeIn();
        } else if (inPass !== password) {
            $('#forgot-password').show();
            $('#password-input span').css('display', 'inline').text('*senha incorreta').hide().fadeIn();
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