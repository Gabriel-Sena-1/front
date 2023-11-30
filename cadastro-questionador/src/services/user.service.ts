import { createUserDTO } from "./create-user.dto";

export function createUser (data: createUserDTO) {
    fetch('http://localhost:4000/api/user/', { method: 'POST', body: JSON.stringify(data), headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    } })
}

export async function allUser (data: createUserDTO) {
    const response = await fetch('http://localhost:4000/api/user/', { method: 'GET'})
    const users = await response.json()
    return users
}