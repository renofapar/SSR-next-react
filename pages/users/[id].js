import {useRouter} from "next/router";
import MainContainer from "../../component/MainContainer";

export default function id({user}) {
    const router = useRouter()
    return (
        <MainContainer title={user.name}>
            <h1>user {router.query.id}</h1>
            <div>Name user - <strong>{user.name}</strong></div>
        </MainContainer>

    )
}

export async function getServerSideProps({params}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await response.json()
    return {
        props: {user}
    }
}