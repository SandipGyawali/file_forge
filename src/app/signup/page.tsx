"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SignUpType } from "@/interfaces/auth";
import Image from "next/image";
import { FormEvent, useState } from "react";
import appwriteService from "@/appwrite/config";
import { signUpSchema } from "@/validation/schema";
import { toast } from "@/components/ui/use-toast";

function SignUp() {
  const [signup_state, setSignUpState] = useState<SignUpType>({
    email: "",
    password: "",
    username: "",
  });

  async function handleSignUp(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const parse = signUpSchema.safeParse(signup_state);

    if (!parse.success) {
      console.log(parse.error.message);
      return;
    }

    const data = await appwriteService.createUserAccount(parse.data);
    const user = signup_state.username;
    setSignUpState({
      email: "",
      password: "",
      username: "",
    });
    toast({
      title: "Hello",
      description: "Created successfully",
    });
    console.log(data);
  }

  return (
    <div className="flex min-h-full h-screen flex-col justify-center items-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image
          className="mx-auto h-10 w-auto"
          src="next.svg"
          alt="Your Company"
          width="30"
          height="30"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Signup to the Page
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSignUp}>
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <Input
                id="email"
                name="email"
                type="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={signup_state.email}
                onChange={(e) => {
                  setSignUpState((props) => {
                    return {
                      ...props,
                      email: e.target.value,
                    };
                  });
                }}
              />
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
                name="password"
                type="password"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={signup_state.password}
                onChange={(e) => {
                  setSignUpState((props) => {
                    return {
                      ...props,
                      password: e.target.value,
                    };
                  });
                }}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Username
              </label>
            </div>
            <div className="mt-2">
              <Input
                id="confirm_password"
                name="confirm_password"
                type="password"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={signup_state.username}
                onChange={(e) => {
                  setSignUpState((props) => {
                    return {
                      ...props,
                      username: e.target.value,
                    };
                  });
                }}
              />
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
