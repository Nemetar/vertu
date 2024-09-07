export interface UserLoginDTO {
    username: string
    password: string
}

export interface LoginResponse {
    token: string
    userId: string
    expiresIn: number
}

export interface AuthenticatedUser {
    id: string
    username: string
    email: string
}
