/* eslint-disable @typescript-eslint/no-unused-vars */
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { Button } from "antd";

const Login = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      userId: "a-002",
      password: "admin123",
    },
  });

  const [loginUser, { data, error }] = useLoginMutation();

  const onSubmit = (userData: { userId: any; password: any }) => {
    const userInfo = {
      id: userData.userId,
      password: userData.password,
    };
    // loginUser(userInfo);
    console.log("userInfo", userInfo);
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
