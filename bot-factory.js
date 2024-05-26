const { genName, mbSwap } = require('./_utils-fn');
const { token } = require('./secrets')

export default class {
    name = genName() || 'bot';
    token = token;

    constructor ({ name = '', token = ''}) {
        this.name = mbSwap(name, this.name);
        this.token = mbSwap(token, this.token);
    }

    init(){

    }

    start(){

    }

    stop(){

    }

    end(){
        
    }
}