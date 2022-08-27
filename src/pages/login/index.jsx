import { useNavigate } from "@solidjs/router"
import { createSignal } from "solid-js"

import { TextInput } from "../../components/TextInput"
import { postLogin } from "../../user/httpAdapter"

const [email, setEmail] = createSignal("")
const [password, setPassword] = createSignal("")

export const Login = () => {
  const navigate = useNavigate()

  const submit = async () => {
    const { error } = await postLogin(email(), password())

    if (error) {
      window.alert("Incorrect email or password.")
      return
    }

    navigate("/")
  }

  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-pink-50">
      <h1 className="pb-6 text-pink-600 text-4xl">Rumours</h1>
      <div className="w-full max-w-md shadow-lg rounded-lg p-8 text-center bg-white">
        <h2 className="text-3xl text-pink-600 mb-8">Login</h2>
        <form className="flex flex-col items-start space-y-4">
          <label className="w-full flex justify-between items-center">
            Email
            <TextInput
              placeholder="email@example.com"
              value={email()}
              setValue={setEmail}
              className="w-2/3"
            />
          </label>
          <label className="w-full flex justify-between items-center">
            Password
            <TextInput
              value={password()}
              setValue={setPassword}
              placeholder="pasword"
              className="w-2/3"
              type="password"
            />
          </label>
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault()
              submit()
            }}
            className="w-full bg-pink-500 rounded-lg p-2 
            text-white font-bold border border-pink-500
            hover:bg-white
            hover:text-black
            "
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}
