//helpers for providing password protection and other authentication details
import crypto from 'crypto';

const SECRET = 'SURBHI-REST-API'
export const random = () =>  crypto.randomBytes(128).toString('base64');
export const authentication = (salt : string , password : string) =>{
      return crypto.createHmac('sha256',[salt,password].join('/')).update(SECRET).digest('hex');
}