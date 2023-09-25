import './App.css';
import {useState} from 'react'
import {Formik} from "formik";
import userSchema from "./userSchema";

// Object destructuring
// const {name, age} = property

const App = () => {
    const [counter, setCounter] = useState(1)

    const [user, setUser] = useState({
        name: 'camnh',
        age: 33
    })

  const handleAdd = () => {
        setCounter(counter + 1); //value type.
  }

  const handleUpdateUser = () => {
        const copiedUser = {...user}
      copiedUser.name = "congnv"
      setUser(copiedUser)
  }

  return (
      <>
            <p>{counter}</p>
            <button onClick={handleAdd}>Add</button>

          <h2>User information</h2>
          <p>Username: {user.name}</p>
          <p>Age: {user.age}</p>

          {/* Cập nhật thông tin user: camnh -> congnv */}
          <button onClick={handleUpdateUser}>Update user</button>

            {/* Formik */}
          <h2>Formik</h2>

          {/* Form: Username / password */}

          {/* TODO: Log username và password lên alert, sử dụng JSON.stringify() */}
          <Formik
              initialValues={{
                  username: '',
                  password: ''
              }}
              onSubmit={(values, formState) => {
                  alert(JSON.stringify(values));
                  formState.resetForm()
              }}
              validationSchema={userSchema}
          >
              {({values, errors, handleSubmit, handleBlur, handleChange}) => {
                 return (
                     <>
                         <div id="username">
                             <label htmlFor="username">Username</label>
                             <input name="username" onChange={handleChange} onBlur={handleBlur} value={values.username}/>
                             {errors.username && <p>{errors.username}</p>}
                         </div>


                         <div id="password">
                             <label htmlFor="password">Password</label>
                             <input name="password" type="password" onChange={handleChange} onBlur={handleBlur} value={values.password}/>
                             {errors.password && <p>{errors.password}</p>}
                         </div>

                         <button onClick={handleSubmit}>Login</button>
                     </>
                 )
              }}
          </Formik>
      </>
  );
}

<>

    <div id="username">
        <label htmlFor="username">Username</label>
        <input name="username" />
    </div>

    {/* Password */}
    <div id="password">
        <label htmlFor="password">Password</label>
        <input name="password" type="password"/>
    </div>

    <button>Login</button>
</>



export default App;
