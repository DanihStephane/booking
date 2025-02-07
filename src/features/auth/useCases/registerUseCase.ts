import {AppDispatch} from "@/store/store";
import {
    registerStart,
    registerFailure,
    registerSuccess,
} from "@/store/slices/auth/registerSlice";
import {RegisterPayload, RegisterErrorCode} from "../types/authTypes";
import {registerService} from "../services/registerService";

export const registerUseCase = async (
    payload: RegisterPayload,
    dispatch: AppDispatch
) => {
    dispatch(registerStart());

    const response = await registerService.register(payload);
    if (
        !response.success &&
        response.error?.code === RegisterErrorCode.EMAIL_EXISTS
    ) {
        dispatch(registerFailure(response.error));
        return;
    }

    if (
        !response.success &&
        response.error?.code === RegisterErrorCode.SERVER_ERROR
    ) {
        dispatch(registerFailure(response.error));
        return;
    }

    if (response.success && response.data) {
        dispatch(registerSuccess(response.data));
    }
};
