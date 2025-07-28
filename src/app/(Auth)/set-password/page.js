"use client"
import Form from "@/components/reuseable/from";
import { FromInput } from "@/components/reuseable/from-input";
import { updateSchema } from "@/components/schema";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";



export default function SetPassword() {
    const from = useForm({
        resolver: zodResolver(updateSchema),
        defaultValues: {
            new_password: "",
            confirm_password: "",
        },
    });

    const handleSubmit = async (values) => {
        console.log("Login form:", values);
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

                    <h1 className="text-2xl font-semibold text-black">Set a new password</h1>
                    <p className="text-sm text-gray-600 max-w-xs mx-auto font-normal">Create a new password. Ensure it differs from
                        previous ones for security</p>
                </CardHeader>
                <CardContent>
                    <Form className="space-y-4" from={from} onSubmit={handleSubmit}>
                        <FromInput
                            className="bg-[#636363]/0.5 border"
                            eye={true}
                            stylelabel="text-[#636363]"
                            label="New Password"
                            name="new_password"
                            placeholder="Enter New Password"
                            type="password"
                        />
                        <FromInput
                            className="bg-[#636363]/0.5 border"
                            eye={true}
                            stylelabel="text-[#636363]"
                            label="Confirm Password"
                            name="confirm_password"
                            placeholder="Enter Confirm Password"
                            type="password"
                        />


                        <div className="flex justify-center">
                            <Button variant={"main"} className="rounded-sm bg-primary text-[#ffff]">Update Password</Button>
                        </div>
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
}