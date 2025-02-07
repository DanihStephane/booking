import { useMutation } from "@tanstack/react-query";
import { authApi } from "../api";
import { useAppSelector } from "@/store/store";

export const useResendOtp = () => {
  const { user } = useAppSelector((state) => state.register);

  if (!user) {
    throw new Error("User not found");
  }


  const resendOtp = async () => {
    await authApi.resendOtp(user.email);
  };


  return { resendOtp };
};
