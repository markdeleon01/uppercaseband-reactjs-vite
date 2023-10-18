const getDiscography = async function() {
    const response = await fetch(
        'https://my-json-server.typicode.com/markdeleon01/uppercaseband-reactjs/discography'
    )
    const resData = await response.json()
    return resData
}

export const fetchDiscography = getDiscography
