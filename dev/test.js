// const Blockchain = require('./blockchain');

// const bitcoin = new Blockchain();
// bitcoin.createNewBlock('234', 'DF453GD4FGDGD4DFGD1G3', '65FG465FD4G5DFG1548D');
// bitcoin.createNewBlock('553', 'BFERG7F6T438YFB4IUFGB4', '74TF8UGERUFGERIUFHERI');
// bitcoin.createNewTransaction('435', 'AHSAN534TK34JBT3', 'TANVIR74UGYFBHJRV');
// bitcoin.createNewBlock('54345', '487Y3TG3UIGHREGHROI', 'VNHIRTY74798TY4903W');
// console.log(bitcoin);

const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();

const previousBlockHash = 'XNEGR67TG34FUERFGH87FG';
const currentBlockData = [
    {
        amount: 101,
        sender: 'BFERYUGR634GVREIUBF',
        recipient: 'VBERG74GF34BGG43'
    },
    {
        amount: 64,
        sender: '4TYBEGRIRENKGNERG',
        recipient: 'YHGRIUBEFG9R8I34'
    },
    {
        amount: 54,
        sender: '4YTGHIROIEGJRFTTG',
        recipient: 'YHG4ITB4IGBGREGH'
    }
];

console.log(bitcoin.proofOfWork(previousBlockHash, currentBlockData));