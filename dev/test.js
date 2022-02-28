const Blockchain = require ('./blockchain');

const bitcoin = new Blockchain();
bitcoin.createNewBlock('546','DF453GD4FGDGD4DFGD1G3','65FG465FD4G5DFG1548D');
bitcoin.createNewBlock('155','45DF4SD5F41S53FS53FFD','FDS5F4SD5FSD4F4SDF4D');
bitcoin.createNewBlock('546','FJGHGHF215321FG8G4F5G','DFG53G14DFG4D6GDF53G');
bitcoin.createNewBlock('546','14GDF65G4DFGD32GDFDF5','GNJH7RTF8GHADFFGDF8G');
bitcoin.getLastBlock();

console.log(bitcoin.getFun());