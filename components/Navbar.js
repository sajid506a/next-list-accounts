import React from 'react'
import Link from 'next/link';
function Navbar() {
    return (
        <nav>
            <div className="logo">
                <Link href="/"><a><img src="https://picsum.photos/50"></img></a></Link>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/accounts"><a>Account</a></Link>
        </nav>

    )
}

export default Navbar
