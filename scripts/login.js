//style applications
$('#forgot-password').hide();
$('#login').css('transform', 'translateY(35px)');

//password and email
const password = '';
const email = '';

//selector constants
const emailField = '#email-input';
const passwordField = '#password-input';
const emailInput = '#e-mail';
const passwordInput = '#password';

//utility functions
const wrong = selector => $(selector).removeClass('default right').addClass('wrong');
const right = selector => $(selector).removeClass('default wrong').addClass('right');
const error = (selector, message) => $(selector + ' span').css('display', 'inline').text('*' + message).hide().fadeIn();

//main function
function login() {
    const inPass = $(passwordInput).val().trim();
    const inEmail = $(emailInput).val().trim();

    if (password === '' && email === '') {
        window.location.assign('main-page.html');
    } else if (inEmail === '') {
        error(emailField, 'campo obrigatório vazio');
        wrong(emailInput);
    } else if (inEmail !== email) {
        error(emailField, 'e-mail não encontrado');
        wrong(emailInput);
    } else {
        $(emailField + ' span').hide();
        right(emailInput);
        if (inPass === '') {
            error(passwordField, 'campo obrigatório vazio');
            wrong(passwordInput);
        } else if (inPass !== password) {
            $('#forgot-password').show();
            error(passwordField, 'senha incorreta');
            wrong(passwordInput);
        } else {
            right(passwordInput);
            window.location.assign('main-page.html');
        }
    }
}

//event listeners
$('form').on('submit', function (event) {
    event.preventDefault();
    login();
});

$('#show-password').on('click', function () {
    const field = $(passwordInput);
    const fieldType = field.prop('type') === 'password' ? 'text' : 'password';
    field.prop('type', fieldType);
});