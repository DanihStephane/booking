import { useDispatch } from "react-redux";
import { LoginPayload } from "../types/loginTypes";
import { useAppSelector } from "@/store/store";
import { loginUseCase } from "../useCases/loginUseCase";

export const useLogin = () => {
  const dispatch = useDispatch();

  const { isLoading, error, isAuthenticated, user } = useAppSelector(
    (state) => state.login
  );

  const login = async (data: LoginPayload): Promise<void> => {
    await loginUseCase(data, dispatch);
  };

  return { isLoading, error, isAuthenticated, user, login };
};
