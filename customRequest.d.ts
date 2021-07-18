declare namespace Express{
    interface Request {
        customerId: number,
        userId: number,
        userRole: Roles
    }
}