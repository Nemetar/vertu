export interface UserRegisterDTO {
    username: string
    email: string
    password: string
}

export interface RegisteredUser {
    id: string
    username: string
    email: string
    createdAt: Date
}
