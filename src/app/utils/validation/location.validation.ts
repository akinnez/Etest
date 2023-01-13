import distBtwTwoPlaces from '../src/maths_package/distBtwTwoPlaces';

export interface position {
  longitude: number;
  latitude: number;
}

export function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(usePosition)
  }
}

function usePosition(position:any){
let obj =  {
    latitude: position.coords.latitude,
    longitude: position.coords.longitude,
  };
  sessionStorage.setItem('location',JSON.stringify(obj))
}

export function validateDistance(dist:any):boolean{
    let distance = Number(dist)
    if (distance > 50) return false;
    return true
}