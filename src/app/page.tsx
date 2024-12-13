'use client'


import { useRouter } from "next/navigation";
import Link from "next/link";



export default function Home() {
 const route =  useRouter()
  return (
  
<div>
  <ul>
    <li><Link href="/">Home</Link></li>
    <li><Link href="/about">about</Link></li>
    <li><Link href="/contact">contact</Link></li>
    <li><Link href="/footer">footer</Link></li>
  </ul>
  <h1>Hello Hamza</h1>
  <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"  onClick={() => route.push("/about")}>Go to About Page</button>
  <br/><br/>
  <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"  onClick={() => route.push("/contact")}>Go to Contact Page</button>
  <br/><br/>
  <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"  onClick={() => route.push("/footer")}>Go to Footer Page</button>
  <br/><br/>
  <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"  onClick={() => route.push("/navbar")}>Go to Navbar Page</button>
  <br/><br/>
 

</div>
  );
}
