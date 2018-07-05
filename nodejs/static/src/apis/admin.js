import { Post } from './base'

export const Test = () => {
    console.log("before.....")
    Post("http://localhost:8000/login", {test: 'test'}, result => {
        console.log(result)
    }, falure => {
        console.log(falure)
    }, loading => {

    })

}
