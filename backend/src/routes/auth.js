import jws from 'jsonwebtoken';
import { hash, compare } from 'bcrypt'
import { getData, writeData } from '../utils/products.js';
import { v4 as idGenerator } from 'uuid'
import { Router } from 'express';

const authRouter = Router()



authRouter.post("/signup", async (req, res, next) => {
    let userData = req.body;
    let errors = [];
    if (!userData || !userData.email || !userData.password || !userData.rePassword) {
        errors.push("All fields are required")
    }
    if (userData.password !== userData.rePassword) {
        errors.push("Passwords does not match!")
    }

    if (errors.length > 0) {
        res.status(422).json({ errors })
    }

    try {
        let user = await createUser(userData);
        let token = await createToken(user)
        res.status(201).json({ message: "user,created", user, token })
    } catch (error) {
        res.status(500).json({ message: error.message || "unable to register" })
    }

})

authRouter.post("/login", async (req, res, next) => {
    console.log("POST LOGIN")
    let body = req.body;
    let errors = [];
    if (!body) {
        errors.push("Please enter Email and Passowrd!")
    }
    if (!body.email || body.email.length === 0) {
        errors.push("Please enter Email")
    }
    if (!body.password || body.passowrd === 0) {
        errors.push("Please enter password!")
    }

    if (errors.length > 0) {
        res.status(422).json({ errors })
    }

    try {
        let users = await getUsers();
        let existingUser = users.find((user) => user.email === body.email);
        if (!existingUser) {
            res.status(401).json({ message: "Email or password is incorrect" })
        }
        let passMatch = await compare(body.password, existingUser.password);

        if (!passMatch) {
            res.status(422).json({ errors: ["Email or Password incorrect!"] })
        }
        let token = await createToken(existingUser)
        res.status(200).json({ message: "successfully logged in", token, existingUser })

    } catch (error) {
        res.status(500).json({ message: error.message || "Unable to log in" })
    }


})


export default authRouter;


let passKey = "myPassKey";



async function createToken(user) {
    let token = jws.sign(user, passKey)
    return token
}

async function createUser(userData) {
    try {
        let data = await getData();
        let users = data.users
        console.log(users)
        let userExists = users.find((user) => user.email === userData.email)
        if (userExists) {
            throw new Error("The email is already registered!")
        }

        let hashedPw = await hash(userData.password, 12)

        let newUser = {
            email: userData.email,
            password: hashedPw
        }
        let id = idGenerator();
        users.push({ id, ...newUser })

        await writeData(data)
        return { id, ...newUser }
    } catch (error) {
        throw new Error(error.message || "Unable to register!")
    }
}

async function getUsers() {

    let data = await getData();
    let users = data.users;
    return users

}