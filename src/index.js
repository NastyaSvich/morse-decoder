const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {

let itog = "";
  const array = [];
  let lett;

 if (expr.length == 0){return "Введите сообщение!";}
 else{
  for(let i = 0; i < expr.length; i += 10){
    const razd = expr.slice(i, i + 10);
    array.push(razd);
  }

  for(let j = 0; j < array.length; j++){
    lett = array[j];
    lett = lett.replace(/10/gi, '.');
    lett = lett.replace(/00/gi, '');
    lett = lett.replace(/11/gi, '-');

    itog += MORSE_TABLE[lett] || " "
  }

  return itog;
}
}
module.exports = {
    decode
}
