import React, { useState } from "react"

const SignUpForm = ({ setToken }) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)

  async function handleSubmit(event) {
    event.preventDefault()
    const response = await fetch(
      "https://fsa-jwt-practice.herokuapp.com/signup"
    )
    const result = await response.json()
    setToken(result.token)
    console.log(result)
    console.log("Hello 👋")
  }

  return (
    <>
      <h2>Sign Up</h2>
      {error && <p>{error}</p>}

      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input value={username} onChange={e => setUsername(e.target.value)} />
        </label>

        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </>
  )
}

export default SignUpForm
