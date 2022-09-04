export default function getData(path){


    // let datad = []
    async function fetchData(){
        const response = await fetch("http://localhost:1337/api/"+path)
        const data = await response.json()
        return data    
    }


    const data = fetchData().then(data=>data)

    return data
    

    

    
}
