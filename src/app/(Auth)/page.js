
// "use client"
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { Card, CardContent, CardHeader } from "@/components/ui/card";
// import { Label } from "@/components/ui/label";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Button } from "@/components/ui/button";
// import { FromInput } from "@/components/reuseable/from-input";
// import Form from "@/components/reuseable/from";
// import Link from "next/link";
// import { authSchema } from "@/components/schema";
// import { useRouter } from "next/navigation";
// import Image from "next/image";

// export default function LoginPage() {
//   const router = useRouter()
//   const from = useForm({
//     resolver: zodResolver(authSchema),
//     defaultValues: {
//       email: "",
//       password: "",
//     },
//   });

//   const handleSubmit = async (values) => {
//     console.log(values)
//     if (values) {
//       router.push("/admin")
//     }
//   };


//   return (
//     <div className="min-h-screen  flex items-center justify-center p-4">
 
//         <Card className="w-full bg-[#636363]/0.5 max-w-lg py-20">
//           <CardHeader className="space-y-2 text-center pb-4">
//             <h1 className="text-2xl font-semibold text-black">Log in to your account</h1>
//             <p className="text-sm text-gray-600">
//               Please enter your email and password to continue
//             </p>
//           </CardHeader>

//           <CardContent>
//             <Form className="space-y-4" from={from} onSubmit={handleSubmit}>
//               <FromInput
//                 className="bg-[#636363]/0.5 border"
//                 label="Email"
//                 stylelabel="text-[#636363]"
//                 name="email"
//                 placeholder="Enter your Email"
//               />
//               <FromInput
//                 className="bg-[#636363]/0.5 border"
//                 eye={true}
//                 stylelabel="text-[#636363]"
//                 label="Password"
//                 name="password"
//                 placeholder="Enter your Password"
//                 type="password"
//               />

//               <div className="flex items-center justify-between">
//                 <div className="flex items-center space-x-2">
//                   <Checkbox className="border-primary" id="remember" />
//                   <Label htmlFor="remember" className="text-sm text-gray-600 cursor-pointer">
//                     Remember Password
//                   </Label>
//                 </div>
//                 <Link href="/forgot-password">
//                   <h1 className="text-primary font-medium text-xs">Forgot Password?</h1>
//                 </Link>
//               </div>

//               <div className="flex justify-center">
//                 <Button variant={"main"} className="rounded-sm bg-primary text-[#fff]"> Sign in</Button>
//               </div>
//             </Form>
//           </CardContent>
//         </Card>

//     </div>
//   );
// }



"use client"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { FromInput } from "@/components/reuseable/from-input";
import Form from "@/components/reuseable/from";
import Link from "next/link";
import { authSchema } from "@/components/schema";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();

  const from = useForm({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = async (values) => {
    console.log(values);
    if (values) {
      router.push("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full bg-[#636363]/0.5 max-w-lg py-10 px-4">
        <CardHeader className="space-y-4 text-center pb-4">
          {/* Logo Image */}
          <div className="flex justify-center">
            <Image
               src="/logo1.png"
              alt="photo"
              width={100}
              height={100}
              className="w-[120px] object-cover"
            />
          </div>

          <h1 className="text-2xl font-semibold text-black">Log in to your account</h1>
          <p className="text-sm text-gray-600">
            Please enter your email and password to continue
          </p>
        </CardHeader>

        <CardContent>
          <Form className="space-y-4" from={from} onSubmit={handleSubmit}>
            <FromInput
              className=" border"
              label="Email"
              stylelabel="text-[#636363]"
              name="email"
              placeholder="Enter your Email"
            />
            <FromInput
              className=" border"
              eye={true}
              stylelabel="text-[#636363]"
              label="Password"
              name="password"
              placeholder="Enter your Password"
              type="password"
            />

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox className="border-primary" id="remember" />
                <Label htmlFor="remember" className="text-sm text-gray-600 cursor-pointer">
                  Remember Password
                </Label>
              </div>
              <Link href="/forgot-password">
                <h1 className="text-primary font-medium text-xs">Forgot Password?</h1>
              </Link>
            </div>

            <div className="flex justify-center">
              <Button variant="main" className="rounded-sm bg-primary text-white">
                Sign in
              </Button>
            </div>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
