import distBtwTwoPlaces from "./maths_package/distBtwTwoPlaces";

 class MathsModule {
     
    /**
     * Returns the approximated distance between two places on the earth map in kilometer(km).
     * @param arr An array containing latitude and longitude values e.g ["30N","40W"] or ["-45N,30W"].
     * @param arr1 An array containing latitude and longitude values e.g ["40E", "30S"].
     */
   distBtwTwoPlaces(arr:Array<string>,arr1:Array<string>):number | Error | any {
    return parseInt(distBtwTwoPlaces(arr,arr1))
   }
    
}

export default MathsModule;



