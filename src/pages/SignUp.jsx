import { Link, useNavigate } from "react-router-dom";
import apiUtils from "../utils/apiUtils";
import { useState } from "react";

export default function SignUp() {
    const navigate = useNavigate()
  
    const [nameErr, setNameErr] = useState(null)
    const [emailErr, setEmailErr] = useState(null)
    const [passErr, setPassErr] = useState(null)

    const handleSignUp = async (e) => {
      e.preventDefault()
      const form = e.target
      const name = form.name.value
      const email = form.email.value
      const password = form.password.value

      try {
        const aNewUser = { name, email, password }
        const creatingUser = await apiUtils.post("sign-up", aNewUser)
        if(creatingUser?.user){
          form.reset();
          setNameErr("")
          setEmailErr("")
          setPassErr("")
          navigate("/", { replace: true })
        }
      } catch (error) {
        const errs = error.response.data.errors
        if (errs) {
          setNameErr(errs.name)
          setEmailErr(errs.email)
          setPassErr(errs.password)
        }
      }
    }

  return (
    <div className="flex items-center justify-center  min-h-[80vh] text-center ">
      <div className="add-book my-5 w-full ">
            <form onSubmit={handleSignUp}  className="w-full md:w-[80vw] lg:w-[50vw] mx-auto ">
              <div className="flex flex-col space-y5 mb-2 ">
                <div className="relative name">
                  <input
                    type="text"
                    name="name"
                    required
                    className="input-field peer"
                    placeholder=" "
                    />
                  <label
                      htmlFor="name"
                      className="input-label"
                    >
                      Name
                  </label>
                </div>
                <p className="err-msg">{nameErr}</p>
                <div className="relative email">
                  <input
                    type="text"
                    name="email"
                    required
                    className="input-field peer"
                    placeholder=" "
                    />
                  <label
                      htmlFor="email"
                      className="input-label"
                    >
                      Email
                  </label>
                </div>
                <p className="err-msg">{emailErr}</p>
                <div className="relative password">
                  <input
                      type="password"
                      name="password" required
                      className="input-field peer"
                      placeholder=" "
                  />
                  <label
                    htmlFor="password"
                    className="input-label"
                  >
                    Password
                  </label>
                </div>
                <p className="err-msg">{passErr}</p>
              </div>
              <input type="submit" value={"Sign Up"} className="btn" />
            </form>
              
            <button className="btn-2 mt-8 ">Continue with Google</button>
            <p className="text-sm mt-2 ">Already have an account? <Link to={"/sign-in"} className="font-semibold">Sign in</Link></p>
          </div>
    </div>
  )
}