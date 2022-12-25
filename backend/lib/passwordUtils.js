const bcrypt = require('bcrypt');

const genPassword=async(password)=>{
    const hash = await bcrypt.hash(password,10);
    return hash;
}

const validPassword = async(password,hash)=>{
    return await bcrypt.compare(password,hash);
}

module.exports = {validPassword:validPassword,genPassword:genPassword};