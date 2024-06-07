"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/validation/schema";
import { LoginType } from "@/interfaces/auth";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { Icon } from "@iconify/react";

function Login() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>({
    resolver: zodResolver(LoginSchema),
  });

  const handleLogin: SubmitHandler<LoginType> = async (data): Promise<void> => {
    try {
      signIn("google");
      // router.push("/dashboard");
    } catch (err: any) {
      toast({
        title: "Opps, Error!",
        description: err?.message,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex min-h-full h-screen flex-col justify-center items-center px-6 py-12 lg:px-8">
      <Image
        className="mx-auto w-24 h-24 h-10 w-auto"
        src="/logo.webp"
        alt="Your Company"
        width={80}
        height={80}
        priority
      />
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          SignIn to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        {/* <form className="space-y-6" onSubmit={handleSubmit(handleLogin)}>
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
                {errors?.email ? errors?.email?.message : ""}
              </span>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-xs hover:underline active:underline
                                  active:text-red-400 cursor-pointer"
                >
                  Forgot password?
                </a>
              </div>
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
              Sign in
            </Button>
          </div>
        </form> */}

        <p className="mt-2 text-center text-sm text-gray-500">
          Not a member?
          <a
            href="/signup"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Sign Up
          </a>
        </p>
        <div className="flex gap-2 my-6 font-semibold text-gray-400 items-center justify-center">
          <div className="horizontal-line h-[2px] w-full bg-gray-300" />
          Or
          <div className="horizontal-line h-[2px] w-full bg-gray-300" />
        </div>

        <div className="oauth-button-wrapper flex flex-col gap-2">
          <Button
            type="submit"
            className="w-full flex items-center justify-center gap-2"
            onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
          >
            Sign in with google
            <Icon icon="logos:google-icon" fontSize={18} />
          </Button>
          <Button
            type="submit"
            className="w-full flex items-center justify-center gap-2"
            onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
          >
            Sign in with Github
            <Icon icon="mdi:github" fontSize={20} />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
