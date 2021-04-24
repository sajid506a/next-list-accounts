import React, { useEffect } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';

function NotFound() {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push("/");
        }, 3000);
        return () => {
            console.log("use effect ran")
        }
    }, [])
    return (
        <div className="not-found">
            <h1>404 Not Found</h1>
            <p>Page not found</p>
            <p>go back to <Link href="/"><a>Home</a></Link></p>
        </div>
    )
}

export default NotFound
