$('a.imdb').css('display', 'none');
$('#logout').hide();
let isProfileMenuOpened = true;

$('td').click(function (event) {
    if ($(event.target).is('a.sm')) {
        return;
    }

    const imdb = window.open($(this).find('a.imdb').prop('href'), "_blank");
    if (imdb) {
        imdb.focus();
    } else {
        alert('A Página foi Bloqueada pelo Navegador');
    }
});

$('#profile').on('click', function () {
    isProfileMenuOpened = isProfileMenuOpened ? false : true;
    if (isProfileMenuOpened) {
        $('#logout').fadeOut();
    } else {
        $('#logout').fadeIn();
    }
});


$('#logout').on('click', () => window.location.assign('index.html'));
