import CryptoJS from 'crypto-js';

export function encrypt(plaintext: any, key: any, iv: any) {
  const k = CryptoJS.enc.Utf8.parse(key);
  const i = CryptoJS.enc.Utf8.parse(iv);
  const bytes = CryptoJS.AES.encrypt(plaintext, k, {
    iv: i,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  return bytes.toString();
};

export function decrypt(cipherText: any, key: any, iv: any) {
  const k = CryptoJS.enc.Utf8.parse(key);
  const i = CryptoJS.enc.Utf8.parse(iv);
  const bytes = CryptoJS.AES.decrypt(cipherText, k, {
    iv: i,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  return bytes.toString(CryptoJS.enc.Utf8);
};
