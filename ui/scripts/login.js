function authenticate() {
    if ((document.getElementById('id_field')).value.localeCompare('admin') == 0 && (document.getElementById('pass_field')).value.localeCompare('admin') == 0) {
        window.location.replace('./netbanking.html');
    }
    else {
        // @TODO REDIRECT PAGE TO ACCESS DENIED PAGE(KRISHAN)
        window.alert('Wrong username and password');
    }
}