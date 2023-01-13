import angularDiff from "../utils/differences";
import { cosInDegree, sinInDegree } from "../utils/conversion";

 function distBtwTwoPlaces(pos1: Array<string>,pos2:Array<string>):number| Error | any  {
    if (!pos1 || !pos2) return new Error('Not Found')
    if ((pos1.length > 2 || pos1.length < 2) && (pos2.length > 2 || pos2.length < 2)) {
    return new Error('Invalid Input')
    }
    if (pos1[0]==" " && pos1[1] =="" && pos2[0]=="" && pos2[1]=="") {
        return new Error('Invalid Input')
    }

    let PI:number = 3.141592653589793;
  
    if (pos1[0] == pos2[0]){
             return (angularDiff(pos1,pos2)/ 360) * 2 * PI * 6371 *
              cosInDegree(parseInt(pos1[0].slice(0,pos1[0].indexOf("N" || "S" || 'E' || "W"))))
    }
        if (pos1[1] == pos2[1]){
            return( (angularDiff(pos1,pos2) * 2 * PI * 6371 ) / 360 )
        }

    return 2 * 6371 * (Math.asin(Math.sqrt(
        (sinInDegree((angularDiff(pos1,pos2)[0] / 2)))**2 + 
        cosInDegree(parseInt(pos1[0].slice(0,pos1[0].indexOf("N" || "S" || 'E' || "W")))) *
        cosInDegree(parseInt(pos2[0].slice(0,pos2[0].indexOf("N" || "S" || 'E' || "W")))) *
        (sinInDegree((angularDiff(pos1,pos2)[1] / 2)))**2 )
    ))

    }

export default distBtwTwoPlaces