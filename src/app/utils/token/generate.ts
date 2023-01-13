import {Token} from '../environment/environment'
export function generateDummyToken():string{
    let generateToken:string = "";
        for (let index = 0; index < 32; index++) {
            const generatedIndexes = Math.floor(Math.random()* Token.length);
            generateToken += Token[generatedIndexes]
        }
    return generateToken
}
