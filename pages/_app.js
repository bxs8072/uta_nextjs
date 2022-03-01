import Head from 'next/head'
import { useRouter } from 'next/router'
import { Fragment, useEffect, useState } from 'react'
import useWindowDimensions from '../api/useWindowDimensions'
import NavBar from '../components/NavBar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [userInfo, setUser] = useState({ token: false, userData: null })

  useEffect(() => {
    const token = localStorage.getItem("token") || false
    const userData = localStorage.getItem("userData") || null

    if (token && userData) {
      setUser({
        token, userData: JSON.parse(userData)
      })
    }
  }, [])

  const login = (token, userData) => {
    setUser({ token, userData })
    localStorage.setItem("token", token)
    localStorage.setItem("userData", userData)
  }

  const logout = () => {
    setUser({ token: false, userData: null })
    localStorage.removeItem("token")
    localStorage.removeItem("userData")
    router.push("/")
  }


  return (

    <Fragment>
      <Head>
        <title>MavORGS</title>
        <link rel="icon" href="" />
      </Head>
      <NavBar logout={logout} userData={userInfo.userData} />

      <div className='dynamic-daya' style={{ minHeight: "calc(100vh - 200px" }}>
        <Component login={login} token={userInfo.token} logout={logout} userData={userInfo.userData} dimension={useWindowDimensions()} {...pageProps} />
      </div>

    </Fragment>
  )
}

export default MyApp
