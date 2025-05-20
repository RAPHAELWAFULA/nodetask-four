const generatePassword = require('generate-password');

function generateRandomPassword () {
    const password = generatePassword.generate({
        length:12,
        numbers:true,
        characters:true,
        uppercase:true,
        lowercase:true,
        strict:true
    });
    console.log('Generated Password:',password);
}

generateRandomPassword();