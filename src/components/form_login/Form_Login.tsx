"use client"
import styles from "./Form_Login.module.css"
import { ChangeEvent } from "react"
import { signIn } from "next-auth/react"
import { useSearchParams } from "next/navigation"

function Form_Login() {
    const searchParams = useSearchParams()
    const error = searchParams.get("error")
    const login = async (e: ChangeEvent) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget as HTMLFormElement)

        const data = {
            email: formData.get("email"),
            password: formData.get("password")
        }

        signIn("credentials", {
            ...data,
            callbackUrl: "/dashboard"
        })
    }
    return (
        <form className={styles.form} onSubmit={login}>
            <h2 className={styles.form__title}>API Play<span>cinix</span></h2>
            <div className={styles.form_container}>
                <input
                    type="email"
                    name="email"
                    id=""
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    name="password"
                    id=""
                    placeholder="Senha"
                    required
                />
                <button className="btn">Entrar</button>
                {error === "CredentialsSignin" && <p className={styles.error}>Erro no login</p>}
            </div>
        </form>
    )
}

export default Form_Login