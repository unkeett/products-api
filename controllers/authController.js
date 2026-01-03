import validator from 'validator'

export async function registerUser(req,res){
    let { name ,username ,email ,password } = req.body

    if(!name || !email || !username || !password){
        res.status(404).json({error:'all fields are required'})
    }

    name = name.trim()
    username = username.trim()
    email = email.trim()
    password = password.trim()

      if (!/^[a-zA-Z0-9_-]{1,20}$/.test(username)){
       return res.status(400).json({error:'Formatting error'})
      }

      if (!validator.isEmail(email)){
        return res.status(400).json({error:'Email format is not correct'})
      }

        console.log(req.body)
}