import { CreateUserDTO } from "../dtos/create-user.dto";

export function createUser (data: CreateUserDTO) {
    fetch('http://localhost:4000/api/user/', { method: 'POST', body: JSON.stringify(data), headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    } })
}

export async function allUser () {
    const response = await fetch('http://localhost:4000/api/user/', { method: 'GET'})
    const users = await response.json()
    return users
}
