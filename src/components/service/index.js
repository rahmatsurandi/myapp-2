import axios from 'axios'
const RootPath = "http://localhost:3001"

const Get = (path) => {
    const promise = new Promise((resolve, reject) => {
        axios.get(`${RootPath}/${path}`)
            .then((res) => {
                resolve(res.data)

            }).catch((err) => {
                reject(err)
            })

    })
    return promise;
}
const getNewsBlog = () => Get('posts?_sort=id&_order=asc');

const API = {
    getNewsBlog
}
export default API;