const email = localStorage.getItem('loggedEmail') || 'Unknown';
$('#profile p').text(email);