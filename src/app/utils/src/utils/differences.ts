function angularDiff(pos1: string[],pos2:string[]):any {
    if (pos1[0] == pos2[0]){
       if (((pos1[1].charAt(1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9 )) == "N" || "S" || 'E' || "W") ===
            ((pos2[1].charAt(1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9 )) == "N" || "S" || 'E' || "W")
       ){        
             return Math.abs(
                parseInt(pos1[1].slice(0,pos1[1].indexOf("N" || "S" || 'E' || "W"))) - 
                parseInt(pos2[1].slice(0,pos2[1].indexOf("N" || "S" || 'E' || "W")))
            )
       } 
       return Math.abs(
        parseInt(pos1[1].slice(0,pos1[1].indexOf("N" || "S" || 'E' || "W"))) + 
        parseInt(pos2[1].slice(0,pos2[1].indexOf("N" || "S" || 'E' || "W")))
            )
    }

    if (pos1[1] == pos2[1]){
        if (((pos1[0].charAt(1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9 )) == "N" || "S" || 'E' || "W") ===
        ((pos2[0].charAt(1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9 )) == "N" || "S" || 'E' || "W")
   ){ 
                return Math.abs(
                    parseInt(pos1[0].slice(0,pos1[0].indexOf("N" || "S" || 'E' || "W"))) - 
                    parseInt(pos2[0].slice(0,pos2[0].indexOf("N" || "S" || 'E' || "W")))
                )
    } 
       return Math.abs(
        parseInt(pos1[0].slice(0,pos1[0].indexOf("N" || "S" || 'E' || "W"))) + 
        parseInt(pos2[0].slice(0,pos2[0].indexOf("N" || "S" || 'E' || "W")))
        )
    }

    return [ Math.abs(
    parseInt(pos1[0].slice(0,pos1[0].indexOf("N" || "S" || 'E' || "W"))) - 
    parseInt(pos2[0].slice(0,pos2[0].indexOf("N" || "S" || 'E' || "W")))
    ),
    Math.abs(
        parseInt(pos1[1].slice(0,pos1[1].indexOf("N" || "S" || 'E' || "W")))  - 
        parseInt(pos2[1].slice(0,pos2[1].indexOf("N" || "S" || 'E' || "W")))
    )
]
}

export default angularDiff