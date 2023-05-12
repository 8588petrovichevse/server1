class UserController {
    async auth(req, res) {
        return res.json({message: 'is auth 123'})
    }
}

const userController = new UserController();
export { userController}