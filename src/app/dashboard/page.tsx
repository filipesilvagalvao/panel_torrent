import { redirect } from "next/navigation"
import styles from "./Dashboard.module.css"
import { getServerSession } from "next-auth"

async function page() {
    const session = await getServerSession()

    if (!session) {
        redirect("/")
    }
    return (
        <main>
            <h1>Bem vindo ao dashboard {session?.user?.name}!</h1>
        </main>
    )
}

export default page