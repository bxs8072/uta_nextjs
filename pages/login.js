import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { Button, Card, Progress } from "reactstrap"
import { execLogin } from "../api/apis"

function Login({ login, dimension }) {
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)
    const router = useRouter()

    const onLogin = async (values) => {
        setLoading(true)
        try {
            const res = await execLogin(values)
            console.log(res)
            login(res.token, JSON.stringify(res.data))
            setLoading(false)
            router.push("/")

        } catch (error) {
            if (error) {
                setError(error.data)
                setLoading(false)
            }
        }
    }

    return (
        <div class="center-align">
            <Card style={{ marginInline: dimension.width * 0.35, padding: 20 }}>
                <div class="row center-align">
                    <h3 class="center-align" style={{ padding: "20px" }}>Login</h3>
                    <form class="col s12" >
                        <div class="row">
                            <div class="input-field col s12">
                                <input id="email" type="email" class="validate" onChange={(e) => { setEmail(e.target.value) }} />
                                <label for="email">Email</label>
                            </div>
                        </div>

                        <div class="row">
                            <div class="input-field col s12">
                                <input id="password" type="password" class="validate" onChange={(e) => { setPassword(e.target.value) }} />
                                <label for="password">Password</label>
                            </div>

                            <span class="red-text">{error ? error : ""}</span>
                        </div>

                        {loading ? <Progress barStyle={{ borderRadius: 100 }} /> : <Button style={{ marginBottom: "30px" }} onClick={() => {
                            onLogin({ email, password })
                        }}>Login</Button>}
                    </form>
                    <Link href="/register">
                        <a>Don't have an account? Sign up!</a>
                    </Link>

                </div>

            </Card >
        </div>
    )
}

export default Login