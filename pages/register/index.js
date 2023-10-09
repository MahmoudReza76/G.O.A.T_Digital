"use Client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { notify } from "../../components/toastify";
import { validate } from "../../components/validate";
import "react-toastify/dist/ReactToastify.css";
import { signIn } from "next-auth/react";
import Loader from "../../components/loader";
const SignUpInfo = () => {
  const [showSignup, setShowSignup] = useState(false);

  const handleToggle = () => {
    setShowSignup(!showSignup);
  };
  const [isLoadingItem, setIsLoadingItem] = useState(false);

  const handleItemClick = () => {
    setIsLoadingItem(true);

    setTimeout(() => {
      setIsLoadingItem(false);
    }, 8000);
  };
  const router = useRouter();
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    referalCode: "",
    isAccepted: false,
  });

  // signup user section
  async function registerUser(e) {
    e.preventDefault();
    const response = await fetch(`/api/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const userInfo = await response.json();

    if (response.ok) {
      notify(userInfo.message, "success");
      router.push("/register");
    } else {
      notify(userInfo.error, "error");
    }
  }

  async function handlerSign(e) {
    e.preventDefault();

    if ((!data.email || !data.password) && Object.keys(errors).length) {
      notify("Fill all fields");

      setTouch({
        email: true,
        password: true,
        confirmPassword: true,
        isAccepted: false,
      });
      return;
    }

    switch (true) {
      case data.password !== data.confirmPassword:
        notify("Passwords do not match");
        setSubmitButtonDisabled(false);
        break;
      case !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email):
        notify("Email incorrect");
        setSubmitButtonDisabled(false);
        break;
      case data.isAccepted !== true:
        notify("Please accept our regulations");
        setSubmitButtonDisabled(false);
        break;
      default:
        registerUser(e);
    }
  }

  // login user section

  const loginUser = async (e) => {
    e.preventDefault();
    const response = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (response?.error) {
      notify("Email or password is not correct!", "error");
    } else {
      notify("Login successful", "success");
      router.push("/");
    }
  };
  const emailRef = useRef();
  const passwordRef = useRef();

  const [errors, setErrors] = useState({});
  const [touch, setTouch] = useState({});

  useEffect(() => {
    setErrors(validate(data, "signup"));
  }, [data, touch]);

  const changeHandler = (event) => {
    if (event.target.name === "isAccepted") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };

  const focusHandler = (event) => {
    setTouch({ ...touch, [event.target.name]: true });
  };

  return (
    <div className="w-full h-auto  flex justify-center items-center flex-col py-4  bg-gradient-to-b from-[#0cc0df] to-transparent">
      {showSignup ? (
        <form
          onSubmit={handlerSign}
          className="w-full max-w-[20rem] p-4 border-2 border-[#0cc0df] rounded-2xl shadow-xl bg-[#00000069] flex flex-col gap-2"
        >
          <h1 className="w-full text-center text-[1.2rem] font-bold text-slate-50">
            Signup
          </h1>
          <div className="w-full h-[15vh]  flex flex-col justify-center items-start ">
            <label className="text-[0.8rem] font-bold text-slate-50">
              Email
            </label>
            <input
              className="w-2/3 h-[5vh] rounded-md px-2 text-[.6rem] focus:outline-red-50"
              required
              ref={emailRef}
              id="email"
              type="email"
              name="email"
              value={data.email}
              onChange={changeHandler}
              onFocus={focusHandler}
            />
            {errors.email && touch.email && (
              <span className="text-[0.6rem] text-red-500 font-bold">
                {errors.email}
              </span>
            )}
          </div>
          <div className="w-full h-[15vh] flex flex-col justify-center items-start">
            <label className="text-[0.8rem] font-bold text-slate-50 ">
              Password
            </label>
            <input
              className="w-2/3 h-[5vh] rounded-md px-2 text-[.6rem] focus:outline-red-50"
              required
              ref={passwordRef}
              id="password"
              type="password"
              name="password"
              value={data.password}
              onChange={changeHandler}
              onFocus={focusHandler}
            />
            {errors.password && touch.password && (
              <span className="text-[0.6rem] text-red-500 font-bold">
                {errors.password}
              </span>
            )}
          </div>
          <div className="w-full h-[15vh] flex flex-col justify-center items-start">
            <label className="text-[0.8rem] font-bold text-slate-50">
              Confirm Password
            </label>
            <input
              className="w-2/3 h-[5vh] rounded-md px-2 text-[.6rem] focus:outline-red-50"
              type="password"
              name="confirmPassword"
              value={data.confirmPassword}
              onChange={changeHandler}
              onFocus={focusHandler}
            />
            {errors.confirmPassword && touch.confirmPassword && (
              <span className="text-[0.6rem] text-red-500 font-bold">
                {errors.confirmPassword}
              </span>
            )}
          </div>
          <div className="w-full h-[15vh] flex flex-col justify-center items-start">
            <label className="text-[0.8rem] font-bold text-slate-50">
              Referal Code
            </label>
            <input
              className="w-2/3 h-[5vh] rounded-md px-2 text-[.6rem] focus:outline-red-50"
              type="text"
              name="referalCode"
              value={data.referalCode}
              onChange={changeHandler}
              onFocus={focusHandler}
            />
          </div>
          <div>
            <div className="flex justify-start gap-2 items-center flex-row">
              <label className="text-[0.8rem] font-bold text-slate-50">
                I accepted terms of privacy policy
              </label>
              <input
                className="h-[2vh] rounded-md px-5  focus:outline-red-50"
                type="checkbox"
                name="isAccepted"
                value={data.isAccepted}
                onChange={changeHandler}
                onFocus={focusHandler}
              />
            </div>
            {errors.isAccepted && touch.isAccepted && (
              <span className="text-[0.6rem] text-red-500 font-bold">
                {errors.isAccepted}
              </span>
            )}
          </div>
          <div className=" w-full  flex justify-center items-center flex-col">
            <button
              onClick={handleItemClick}
              type="submit"
              disabled={submitButtonDisabled}
              className="w-[7rem] bg-[#0cc0df] hover:bg-[#0cbfdf9a]  text-slate-50 rounded-lg shadow-md text-[0.8rem] font-bold"
            >
              Signup
            </button>
            <div className="w-full text-slate-100 flex justify-center flex-row gap-1 text-[0.65rem] font-bold">
              <h1>Do you have an account?</h1>
              <button onClick={handleToggle}>
                <h1 className="hover:text-slate-300">Login</h1>
              </button>
            </div>
          </div>
        </form>
      ) : (
        <form
          onSubmit={loginUser}
          className="w-full max-w-[20rem] p-4 border-2 border-[#0cc0df] rounded-2xl shadow-xl bg-[#00000069] flex flex-col gap-2"
        >
          <h1 className="w-full text-center text-[1.2rem] font-bold text-slate-50">
            Login
          </h1>
          <div className="w-full h-[15vh]  flex flex-col justify-center items-start ">
            <label className="text-[0.8rem] font-bold text-slate-50">
              Email
            </label>
            <input
              className="w-2/3 h-[5vh] rounded-md px-2 text-[.6rem] focus:outline-red-50"
              required
              ref={emailRef}
              id="email"
              type="email"
              name="email"
              value={data.email}
              onChange={changeHandler}
              onFocus={focusHandler}
            />
            {errors.email && touch.email && (
              <span className="text-[0.6rem] text-red-500 font-bold">
                {errors.email}
              </span>
            )}
          </div>
          <div className="w-full h-[15vh] flex flex-col justify-center items-start">
            <label className="text-[0.8rem] font-bold text-slate-50 ">
              Password
            </label>
            <input
              className="w-2/3 h-[5vh] rounded-md px-2 text-[.6rem] focus:outline-red-50"
              required
              ref={passwordRef}
              id="password"
              type="password"
              name="password"
              value={data.password}
              onChange={changeHandler}
              onFocus={focusHandler}
            />
            {errors.password && touch.password && (
              <span className="text-[0.6rem] text-red-500 font-bold">
                {errors.password}
              </span>
            )}
          </div>
          <div className=" w-full  flex justify-center items-center flex-col">
            <button
              onClick={handleItemClick}
              type="submit"
              disabled={submitButtonDisabled}
              className="w-[7rem] bg-[#0cc0df] hover:bg-[#0cbfdf9a]  text-slate-50 rounded-lg shadow-md text-[0.8rem] font-bold"
            >
              Login
            </button>
            <div className="w-full text-slate-100 flex justify-center flex-row gap-1 text-[0.65rem] font-bold">
              <h1>Not registered yet?</h1>
              <button onClick={handleToggle}>
                <h1 className="hover:text-slate-300">Signup</h1>
              </button>
            </div>
          </div>
        </form>
      )}
      <div>
        {isLoadingItem && (
          <div className="fixed inset-0 flex justify-center items-center backdrop-blur-lg bg-opacity-80 text-white text-xl font-bold">
            <Loader />
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUpInfo;
