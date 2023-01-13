
export function degToRad(val:number):number | Error | any {
    if(!val) return new Error("Not Found")
    if(isNaN(val)) return new Error("Not a Number")
    return val * (3.141592653589793/180)
}

export function sinInDegree(val:number):number| Error | any{
    return Math.sin(degToRad(val))
}

export function cosInDegree(val:number):number| Error | any {
    return Math.cos(degToRad(val))
}
