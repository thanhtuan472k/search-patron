export interface User {
    id: string
    name: string
    email: string
    avatar: string
    password: string
    createdAt: string
}

export interface IUser {
    _id: string
    first_name: string
    last_name: string
    email: string
    password: string
    avatar: string
    date: string
    __v: number
}

export interface Token {
    token: string
    refreshToken: string
}

export interface ILoginBody {
    email: string
    password: string
}