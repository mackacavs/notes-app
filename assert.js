let assert = {
    isTrue: function(assertionToCheck, expected) {
        if(!assertionToCheck) {
            document.getElementById('test_errors').insertAdjacentHTML('beforeend', `We expected ${expected} - Failed test <br /> <br />`)
        } 
    }
}
