/* eslint-disable @typescript-eslint/no-unused-vars */
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { Button } from "antd";
import { verifyToken } from "../utils/verifyToken";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";

const Login = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      userId: "2030010001",
      password: "@shihab@",
    },
  });

  const [loginUser, { error }] = useLoginMutation();

  const onSubmit = async (userData: { userId: any; password: any }) => {
    const userInfo = {
      id: userData.userId,
      password: userData.password,
    };
    const res = await loginUser(userInfo).unwrap();
    if (res.success) {
      const token = res.data.accessToken;
      const user = verifyToken(token);
      dispatch(setUser({ user, token }));
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="id">Id :</label>
          <input type="text" id="id" {...register("userId")} />
        </div>
        <div>
          <label htmlFor="password">Id :</label>
          <input type="text" id="password" {...register("password")} />
        </div>
        <Button htmlType="submit">Login</Button>
      </form>
    </>
  );
};

export default Login;
