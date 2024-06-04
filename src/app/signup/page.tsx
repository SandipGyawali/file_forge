"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SignUpType } from "@/interfaces/auth";
import Image from "next/image";
import appwriteService from "@/appwrite/config";
import { SignUpSchema } from "@/validation/schema";
import { toast } from "@/components/ui/use-toast";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpType>({
    resolver: zodResolver(SignUpSchema),
  });

  console.log(errors);
  const handleSignUp: SubmitHandler<SignUpType> = async (
    data
  ): Promise<void> => {
    console.log(data);
    // const data = await appwriteService.createUserAccount(parse.data);
    // const user = signup_state.username;
    // toast({
    //   title: "Hello",
    //   description: "Created successfully",
    // });
    // console.log(data);
  };

  return (
    <div className="flex min-h-full h-screen flex-col justify-center items-center px-6 py-12 lg:px-8">
      <Image
        className="mx-auto w-24 h-24"
        src="/logo.webp"
        alt="Your Company"
        width={80}
        height={80}
      />
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Signup to the Page
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit(handleSignUp)}>
          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Username
              </label>
            </div>
            <div className="mt-2">
              <Input
                id="username"
                type="text"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                {...register("username", { required: true })}
              />
              <span className="text-red-500 text-xs font-medium">
                {errors?.username ? errors?.username.message : ""}
              </span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <Input
                id="email"
                type="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                {...register("email", { required: true })}
              />
              <span className="text-red-500 text-xs font-medium">
                {errors?.email ? errors?.email.message : ""}
              </span>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
            </div>
            <div className="mt-2">
              <Input
                id="password"
                type="password"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                {...register("password", { required: true })}
              />
              <span className="text-red-500 text-xs font-medium">
                {errors?.password ? errors?.password?.message : ""}
              </span>
            </div>
          </div>

          <div>
            <Button type="submit" className="w-full">
              Sign Up
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
