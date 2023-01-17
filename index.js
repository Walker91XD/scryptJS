const { decryptText, encryptText } = require('./cipher');
(async () => {
   const [, , text] = process.argv;
   const SALT = '(SD*FUDGFD*CKVJDfdlskfjds89ay(*DYF^Sodisfdsfudifao;d';
   const PASSWORD = 'megakurs';
   const { encrypted, iv } = await encryptText(text, PASSWORD, SALT);
   const decrypted = await decryptText(encrypted, PASSWORD, SALT, iv);
   console.log(`encrypted: ${encrypted}\niv: ${iv}\n\ndecrypted: ${decrypted}`);
})();
