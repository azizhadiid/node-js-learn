import chalk from 'chalk';
import validator from 'validator';

console.log(validator.isEmail('aziz@gamil.com'));
console.log(validator.isMobilePhone('08123456789', 'id-ID'));
console.log(chalk.white.bgYellow('Hello world!'));

const pesan= chalk`Lorem ipsum dolor sit amet {bgBlack.red consectetur adipisicing} elit. Eos, nostrum.`;
console.log(pesan);
