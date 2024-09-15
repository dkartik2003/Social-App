import React, { useState } from 'react'; // Corrected useState import
import TextInput from '../components/TextInput';
import { useDispatch } from "react-redux";
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";
import { TbSocial } from "react-icons/tb";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "onChange",
  });

  const [errmsg, setErrMsg] = useState(""); // Corrected to errmsg
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="bg-bgColor w-full h-[100vh] flex items-center justify-center p-6">
      <div className="w-full md:w-2/3 h-fit lg:h-full 2xl:h-5/6 py-8 lg:py-0 flex bg-primary rounded-1x overflow-hidden shadow-xl">
      
        {/* LEFT */}
        <div className="w-full lg:w-1/2 h-full p-10 2xl:px-20 flex flex-col justify-center">
          <div className="w-full flex-go-2 items-center mb-6"></div>
          <p className="text-ascent-1 text-base font-semibold">Log in to your account</p>
          <span className="text-sm mt-2 text-ascent-2">Welcome back</span>
          
          <form className="py-8 flex flex-col gap-5">
            <TextInput
              name="email"
              placeholder="email@example.com"
              label="Email Address"
              type="email"
              register={register("email", { required: "Email Address is required" })}
              style="w-full rounded-full"
              labelStyle="ml-2"
              error={errors.email ? errors.email.message : ""}
            />
            <TextInput
              name="password"
              placeholder="password"
              label="Password"
              type="password"
              register={register("password", { required: "Password is required" })}
              style="w-full rounded-full"
              labelStyle="ml-2"
              error={errors.password ? errors.password.message : ""}
            />

            <Link to="/reset-password" className="text-sm text-right text-blue font-semibold">Forgot Password</Link>
            
            {
              errmsg?.message && (
                <span className={`text-sm ${errmsg?.status === "failed" ? "text-[#3f6494]" : "text-[#2ba150]"}`}>
                  {errmsg?.message}
                </span>
              )
            }
            {
              isSubmitting?<Loading/>:<CustomButton/>
            }
          </form>
        </div>
        
        {/* RIGHT */}
      </div>
    </div>
  );
};

export default Login;
