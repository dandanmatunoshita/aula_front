import Link from 'next/link'

export default function Login(){
    return(
        <>
            <h1>Login</h1>
            <span>Bem vindo a Login</span>
            <input type="text" />
            <Link href="/">Voltar</Link>

        </>
    )
}