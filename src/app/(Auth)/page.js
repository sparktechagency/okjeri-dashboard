"use client"

import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router=useRouter()


  const handleSubmit = async (values) => {
    console.log(values)
    if(values){
      router.push("/dashboard")
    }
  };
//  asd asdf  
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
   
   <h1 onClick={handleSubmit}>Login page</h1>
    </div>
  );
}