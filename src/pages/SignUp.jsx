import { Link } from "react-router-dom";
import apiUtils from "../utils/apiUtils";

export default function SignUp() {
    const handleSignUp = async (e) => {
      e.preventDefault()
      const form = e.target
      const name = form.name.value
      const email = form.email.value
      const password = form.password.value

      try {
        const aNewUser = { name, email, password }
        const creatingUser = await apiUtils.post("sign-up", aNewUser)
        console.log(creatingUser)
        if(creatingUser?.user){
        form.reset();
        }
      } catch (error) {
        console.log("error is: ", error)
      }
    }

  return (
    <div className="flex items-center justify-center min-h-[80vh] text-center ">
      <div className="add-book my-5  ">
            <form onSubmit={handleSignUp}  className="w-full border-2 md:w-[50vw] ">
              <div className="flex flex-col space-y-5 mb-2 ">
                <div className="relative">
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
                <div className="relative">
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
                <div className="relative">
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
              </div>
              <input type="submit" value={"Sign Up"} className="btn" />
            </form>
              
            <button className="btn-2 mt-8 ">Continue with Google</button>
            <p className="text-sm mt-2 ">Already have an account? <Link to={"/sign-in"} className="font-semibold">Sign in</Link></p>
          </div>
    </div>
  )
}