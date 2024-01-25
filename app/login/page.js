'use client'

import { useFormState } from "react-dom"
import { login } from "./action"

export default function Page() {
    const initState = {
        message: ''
    }
    const [state, formAction] = useFormState(login, initState)
    return (
        <form action={formAction}>
            <div>
                Email : <input type="text" name="email"></input>
            </div>
            <div>
                Password : <input type="password" name="password"></input>
            </div>
            <div>
                Message : {state.message}
            </div>
            <button>Login</button>
        </form>
    )
}