import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../model/user.model.js'

const createToken = (_id)=>{
  return jwt.sign({_id},process.env.JWTSECRATEKEY , { expiresIn : "10d"} )
}

//register user
const registerController = async(req , res )=>{
  const {userName , password}=req.body
  try {
    if (!(userName , password)) {
      return res.status(400).json("all fields are required")
    }

    const userNameAlreadyExists = await User.findOne({userName})
    if (userNameAlreadyExists) {
      return res.status(400).json("User Already exists with this Email Try Another")
    } 
    const encPassword = await bcrypt.hash(password, 10)

    const user = await User.create({
      userName,
      password: encPassword
    })
    const token = createToken(user._id)

    res.status(200).json( { token })

  } catch (error) {
    console.log(error)
    res.status(500).json("Something went wrong please try again later")
  }
}

// login user 
const loginController = async(req , res)=>{
  try {
    const {userName , password} = req.body
    if (!(userName , password)) {
      return res.status(400).json('all fields are required')
    }
    const user = await User.findOne({userName})
    if (!(user)) {
      return res.status(400).json('invalid userName')
    }
    const much = await bcrypt.compare(password , user.password)
    if (!(much)) {
      return res.status(400).json('incorrect password')
    }
    if ( user && much ) {
      const token = createToken(user._id)
      return res.status(200).json({token})
    }
  } catch (error) {
    console.log(error)
    res.status(500).json('something went wrong please try again')
  }

}

export {registerController , loginController}