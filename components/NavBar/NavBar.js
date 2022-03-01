import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"


const navItems = [
    { title: "Home", goto: "/" },
    { title: "Events", goto: "/events" },
    { title: "Organizations", goto: "/organizations" },
    { title: "News", goto: "/news" },
    { title: "Forms", goto: "/forms" },
]

const NavBar = ({ userData, logout }) => {
    const router = useRouter()

    const Login = () => {
        return (<li className={router.asPath == "/login" ? "active" : ""}>
            <Link href="/login">
                <a>Login</a>
            </Link>
        </li>)
    }

    const Register = () => {
        return (<li className={router.asPath == "/register" ? "active" : ""} >
            <Link href="/register">
                <a>Register</a>
            </Link>
        </li >)
    }

    const Logout = ({ logout }) => {
        return (<li onClick={() => { logout() }}>
            <a>Logout</a>
        </li>)
    }
    return (
        <nav>
            <div class="nav-wrapper">
                <a href="/" class="brand-logo">MavORGS</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    {navItems.map((item, index) =>
                        <li className={router.asPath == item.goto ? "active" : ""}>
                            <Link key={index} href={item.goto} >
                                <a>{item.title}</a>
                            </Link>
                        </li>
                    )}
                    {!userData ? <Login /> : <Logout logout={logout} />}
                    {!userData ? <Register /> : null}


                </ul>
            </div>
        </nav>
    )
}


export default NavBar