"use client"
import Form from "@/components/reuseable/from";
import { FromInput } from "@/components/reuseable/from-input";
import { emailSchema } from "@/components/schema";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";




export default function ForgotPassword() {
  const router = useRouter()
  const from = useForm({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: ""
    },
  });

  const handleSubmit = async (values) => {
    console.log("Login form:", values);
    router.push("/otp-verification")
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full bg-[#636363]/0.5 max-w-lg py-20">
        <CardHeader className="space-y-2 text-center pb-4">
          <div className="flex justify-center">
            <Image
              src="/logo1.png"
              alt="photo"
              width={100}
              height={100}
              className="w-[120px]  object-cover"
            />
          </div>

          <h1 className="text-2xl font-semibold text-black">Forgot password ?</h1>
        </CardHeader>
        <CardContent>
          <Form className="space-y-4" from={from} onSubmit={handleSubmit}>
            <FromInput
              className="bg-[#636363]/0.5 border"
              label="Email"
              stylelabel="text-[#636363]"
              name="email"
              placeholder="Enter your Email"
            />

            <div className="flex justify-center">
              <Button variant={"main"} className="rounded-sm bg-primary text-[#ffff]"> Send Code</Button>
            </div>

          </Form>
        </CardContent>
      </Card>
    </div>
  );
}