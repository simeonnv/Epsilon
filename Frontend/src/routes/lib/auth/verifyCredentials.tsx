

export function verifyCredentails(username:string, password:string): boolean[]
{

    let result = []
    result[0] = true
    result[1] = true

    if (username.length < 7 || username.length > 15)
    {
        console.log(username.length, "1")
        console.log(false, "1")
        result[0] = false
    }
        
    if (password.length < 7 || username.length > 20)
    {
        console.log(username.length, "2")
        console.log(false, "2")
        result[1] = false
    }
    return result
}