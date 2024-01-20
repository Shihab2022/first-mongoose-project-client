/* eslint-disable @typescript-eslint/no-unused-vars */
import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { Button } from "antd";
import { verifyToken } from "../utils/verifyToken";
import { useAppDispatch } from "../redux/hooks";
import { TUser, setUser } from "../redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHUFrom from "../components/from/PHUFrom";

const Login = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      userId: "2030010001",
      password: "@shihab@",
    },
  });
  const navigate = useNavigate();

  const [loginUser] = useLoginMutation();

  const onSubmit = async (userData: FieldValues) => {
    console.log("userData", userData);
    // const toastId = toast.loading("Logging in ");
    // try {
    //   const userInfo = {
    //     id: userData.userId,
    //     password: userData.password,
    //   };
    //   const res = await loginUser(userInfo).unwrap();
    //   if (res.success) {
    //     const token = res.data.accessToken;
    //     const user = verifyToken(token) as TUser;
    //     dispatch(setUser({ user, token }));
    //     toast.success("Logged in", { id: toastId, duration: 2000 });
    //     navigate(`/${user.role}/dashboard`);
    //   }
    // } catch (e) {
    //   toast.success("Something wrong", { id: toastId, duration: 2000 });
    // }
  };

  return (
    <>
      <PHUFrom onSubmit={onSubmit}>
        <div>
          <label htmlFor="id">Id :</label>
          <input type="text" id="id" {...register("userId")} />
        </div>
        <div>
          <label htmlFor="password">Id :</label>
          <input type="text" id="password" {...register("password")} />
        </div>
        <Button htmlType="submit">Login</Button>
      </PHUFrom>
    </>
  );
};

export default Login;
