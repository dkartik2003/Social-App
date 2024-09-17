import React, { useState } from "react";
import { TextInput } from "../components"; // Ensure this path is correct
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { BsShare } from "react-icons/bs";
import { AiOutlineInteraction } from "react-icons/ai";
import { ImConnection } from "react-icons/im"; // Correct import from react-icons/im
import Loading from "../components/Loading"; // Ensure this path is correct
import CustomButton from "../components/CustomButton"; // Ensure this path is correct
import BgImg from "../assets/img.jpeg"; // Ensure this path is correct

const Register = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = async (data) => {};
  const [errmsg, setErrMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="bg-bgColor w-full h-[100vh] flex items-center justify-center p-6">
      <div className="w-full md:w-2/3 h-fit lg:h-full 2xl:h-5/6 py-8 lg:py-0 flex flex-row-reverse bg-primary rounded-1x overflow-hidden shadow-xl">
        {/* LEFT SECTION */}
        <div className="w-full lg:w-1/2 h-full p-10 2xl:px-20 flex flex-col justify-center mb-5">
        <div className="w-full flex-go-2 items-center mb-6"></div>
          <p className="text-ascent-1 text-base font-semibold mt-8">
            Create Account
          </p>
          <form
            className="py-8 flex flex-col gap-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="w-full flex flex-col lg:flex-row gap-1 md:gap-2">
              <TextInput
                name="firstName"
                label="First Name"
                placeholder="First Name"
                type="text"
                styles="w-full"
                register={register("firstName", {
                  required: "First Name is required!",
                })}
                error={errors.firstName ? errors.firstName?.message : ""}
              />
              <TextInput
                label="Last Name"
                placeholder="Last Name"
                type="lastName"
                styles="w-full"
                register={register("lastName", {
                  required: "Last Name is required!",
                })}
                error={errors.lastName ? errors.lastName?.message : ""}
              />
            </div>

            <TextInput
              name="email"
              placeholder="email@example.com"
              label="Email Address"
              type="email"
              register={register("email", {
                required: "Email Address is required",
              })}
              style="w-full"
              error={errors.email ? errors.email.message : ""}
            />
            {/* Password and Confirm Password Fields */}
            <div className="w-full flex flex-col lg:flex-row gap-1 md:gap-2">
              <TextInput
                name="password"
                placeholder="password"
                label="Password"
                type="password"
                register={register("password", {
                  required: "Password is required",
                })}
                style="w-full"
                error={errors.password ? errors.password.message : ""}
              />
              <TextInput
                name="cPassword"
                placeholder="Confirm Password"
                label="Confirm Password"
                type="password"
                register={register("cPassword", {
                  required: "Confirm Password is required",
                  validate: (value) => {
                    const { password } = getValues();
                    return password === value || "Passwords do not match";
                  },
                })}
                style="w-full"
                error={errors.cPassword ? errors.cPassword.message : ""}
              />
            </div>

          

            {/* Error message */}
            {errmsg?.message && (
              <span
                className={`text-sm ${
                  errmsg?.status === "failed"
                    ? "text-[#3f6494]"
                    : "text-[#2ba150]"
                }`}
              >
                {errmsg?.message}
              </span>
            )}

            {/* Submit Button */}
            {isSubmitting ? (
              <Loading />
            ) : (
              <CustomButton
                type="submit"
                containerStyles="inline-flex justify-center rounded-md bg-blue px-8 py-3 text-sm font-medium text-white outline-none mb-5px"
                title='Create Account'
              />
            )}
          </form>

          {/* Sign-up Link */}
          <p className="text-ascent-2 text-sm text-center mt-0">
            Already has an account?{" "}
            <Link
              to="/register"
              className="text-[#065ad8] font-semibold ml-2 cursor-pointer"
            >
           Login
            </Link>
          </p>
        </div>

        {/* RIGHT SECTION */}
        <div className="hidden w-1/2 h-full lg:flex flex-col items-center justify-center bg-blue">
          <div className="relative w-full flex items-center justify-center">
            <img
              src={BgImg}
              alt="Bg Image"
              className="w-48 2xl:h-64 h-48 2xl:h-64 rounded-full object-cover"
            />

            {/* Share Button */}
            <div className="absolute flex items-center justify-center gap-1 bg-white right-4 top-[40%] py-2 px-5 rounded-full shadow-md">
              <BsShare size={14} />
              <span className="text-xs font-medium">Share</span>
            </div>

            {/* Connect Button */}
            <div className="absolute flex items-center justify-center gap-1 bg-white left-4 top-[30%] py-2 px-5 rounded-full shadow-md">
              <ImConnection size={14} />
              <span className="text-xs font-medium">Connect</span>
            </div>

            {/* Interact Button */}
            <div className="absolute flex items-center justify-center gap-1 bg-white left-4 bottom-[30%] py-2 px-5 rounded-full shadow-md">
              <AiOutlineInteraction size={14} />
              <span className="text-xs font-medium">Interact</span>
            </div>
          </div>
         {/* Sign-up Link */}
<div className="text-ascent-2 text-sm text-center mt-4 ml-24"> {/* Added margin-top for uplift */}
  Don't you have an account?
  <Link
    to="/register"
    className="text-[#065ad8] font-semibold ml-2 cursor-pointer"
  >
    Create Account
  </Link>
</div>

        </div>
      </div>
    </div>
  );
};

export default Register;
