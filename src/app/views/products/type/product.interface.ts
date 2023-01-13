export interface IProducts{
    id:number,
    category:string,
    image:string,
    price:number,
    rating:IRate
    title: string,
    description:string
}
interface IRate{
    rate: number,
    count: number
}