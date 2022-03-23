const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    
                { 
                    CEDULA: 'number', 
                    CODELEC: 'number', 
                    SEXO: 'number', 
                    FECHACADUC: 'number', 
                    JUNTA: 'number', 
                    NOMBRE: 'string',
                    PAPELLIDO: 'string',
                    SAPELLIDO: 'string',
                
                 },
                );

const User = mongoose.model('padron', userSchema);

module.exports = {
    User
}

