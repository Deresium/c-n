declare namespace Express{
    interface Request {
        userId: number,
        userRole: Roles
    }
}