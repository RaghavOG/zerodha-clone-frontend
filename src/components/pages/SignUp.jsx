const SignUp = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center px-36 mx-auto ">
        <div className="flex my-16 mt-32 w-5/6  ">
          <div className="">
            <img src="landing.46a77378.png" className="" alt="" />
          </div>
          <div className=" flex flex-col items-start justify-center px-16 ml-16  border border-black">
            <h1 className="font-medium py-3 text-3xl ">Signup Now</h1>
            <p className="text-gray-500 text-sm">Or track your existing application.</p>
            <label
              htmlFor="mobile-number"
              className="block text-gray-700 text-sm font-bold mb-2 pt-3"
            >
              Mobile number
            </label>
            <input type="number" placeholder="+91"
              className="w-full px-3 py-2 border  border-gray-300 rounded-lg" name="" id="" />
            <p className="text-[.9rem] text-gray-400">You will receive an OTP on your number</p>
            <button className="w-32 bg-blue-600 mt-3 text-white py-2 rounded-lg hover:bg-blue-700" >Continue</button>
            <h6 className="text-blue-600 text-[.8rem] my-3" >Want to open an NRI Account?</h6>
          </div>
        </div>
        <div className="">
          <p className="text-[.8rem] text-gray-400 justify-center text-center">
            I authorise Zerodha to contact me even if my number is registered on
            DND. I authorise Zerodha to fetch my KYC information from the C-KYC
            registry with my PAN. Please visit{" "}
            <span className="text-blue-700 font-semibold"> this article</span>{" "}
            to know more.
          </p>
          <p className="text-[.8rem] text-gray-400 mb-16 justify-center text-center mt-3">
            If you are looking to open a HUF, Corporate, Partnership, or NRI
            account, you have to use the{" "}
            <span className="text-blue-700 font-semibold">offline forms</span>.
            For help,{" "}
            <span className="text-blue-700 font-semibold">click here</span>.
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
