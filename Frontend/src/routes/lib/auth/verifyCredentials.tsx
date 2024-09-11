

export function verifyCredentails(username:string, password:string): boolean[]
{

    let result = []
    result[0] = true
    result[1] = true

    if (username.length < 7 || username.length > 15)
        result[0] = false
    if (password.length < 7 || username.length > 20)
        result[1] = false
    return result
}