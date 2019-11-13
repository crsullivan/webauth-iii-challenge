module.exports = {
    validateUser
}

function validateUser(user) {
    let errors = [];
    if(!user.username || user.username.length < 2) {
        errors.push('You must include a username with at least 2 characters')
    } 
    if(!user.password || user.password.length < 6) {
        errors.push('You must include a password with at least 6 characters')
    } 
    return {
        isSuccessful: errors.length > 0 ? false : true,
        errors
    };
}