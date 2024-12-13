
"use client"
import Link from "next/link"
import { useRouter } from "next/navigation";



export default function Contact(){
    const route = useRouter(); 
    
    return(
        <div>
              <ul>
    <li><Link href="/">Home</Link></li>
    <li><Link href="/about">about</Link></li>
    <li><Link href="/contact">contact</Link></li>
    <li><Link href="/footer">footer</Link></li>
  </ul>
  <h3>conatct Page</h3>
  <button
                        onClick={() => route.push("/")}
                        className="px-4 py-2 bg-blue-500 text-white rounded"
                    >
                        Go to Home 
                    </button>
        </div>
        
    )
}