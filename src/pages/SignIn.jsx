import { Link } from "react-router-dom"

export default function SignIn() {

    const handleSignIn = (e) => {
        e.preventDefault()
    }

  return (
    <div className="flex items-center justify-center min-h-[80vh] text-center ">
      <div className="add-book my-5  ">
            <form onSubmit={handleSignIn} className="w-full border-2 md:w-[50vw] ">
              <div className="flex flex-col space-y-5 mb-2 ">
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
              <input type="submit" value={"Sign In"} className="btn" />
            </form>
              
            <button className="btn-2 mt-8 ">Continue with Google</button>
            <p className="text-sm mt-2 ">New in here? <Link to={"/sign-up"} className="font-semibold">Sign up</Link></p>
          </div>
    </div>
  )
}