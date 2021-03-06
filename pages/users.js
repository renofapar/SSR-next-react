import React, {useState, useEffect} from 'react'
import A from '../component/A'
import MainContainer from "../component/MainContainer";


const Users = ({users}) => {

 return (
     <MainContainer title={'users page'}>
      <h1>Users</h1>
         <ul className="users">
             {users.map(user => (
                 <li key={user.id}>
                     <A href={`/users/${user.id}`} text={user.name}/>
                 </li>

             ))}
         </ul>
     </MainContainer>
 )
}

export default Users

export async function getStaticProps(context) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()
    return {
        props: {
            users
        }
    }
}