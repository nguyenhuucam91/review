import * as Yup from 'yup'

const userSchema = Yup.object({
    username: Yup.string().required("Username ko được để trắng").max(10),
    password: Yup.string().required("Password ko được để trắng")
})

export default userSchema