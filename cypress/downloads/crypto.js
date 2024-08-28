import blowfishScript from './blowfish'
const encode = function (value, key) {
  try {
    return blowfishScript.Blowfish.encrypt(value, key , { cipherMode: 0, outputType: 0 })
  } catch (e) {
    return null
  }
}
 
const decode = function (value, key) {
  try {
    return blowfishScript.Blowfish.decrypt(value, key, { cipherMode: 0, outputType: 0 })
  } catch (e) {
    return null
  }
}
 
export default {
  encode,
  decode
}