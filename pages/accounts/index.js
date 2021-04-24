import Link from 'next/link';
import React from 'react'
import styles from '../../styles/Accounts.module.css'
export const getStaticProps = async ()=>{
  const res = await fetch('http://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props:{users:data}
  }
}
function Accounts({users}) {
    return (
        <div className={styles}>
          <h1>Accounts</h1> 
          <ul>
              {users.map((user)=>{
               return ( <div key={user.id}>
                 <Link href={'/accounts/' + user.id} key={user.id}>
                 <a className={styles.single}>
                    <h3>
                    {user.name}
                    </h3>
                    <p>{user.website}</p>
                    </a>
                    </Link>
                </div>
               )
              })}
            </ul> 
        </div>
    )
}

export default Accounts
