'use client'
import { useState } from "react"

export default function Home() {

  const [users, setUsers] = useState<any>([])

  const BASE_URL = process?.env?.NEXT_PUBLIC_API_URL

  const handleClick = () => {
    fetch(`${BASE_URL}/admin/users`)
      .then(res => res?.json())
      .then(data => setUsers(data?.users))
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1>Welcome to Manoranjan!</h1>
      <p>Explore our collection of movies and shows.</p>

      <button className="bg-[indianred] text-white rounded py-2 px-4" onClick={handleClick}>Test API call</button>

      <ul>
        {
          users && users?.map((user: any) => <li key={user?._id}>{user?.name}</li>)
        }
      </ul>
    </main>
  );
}
