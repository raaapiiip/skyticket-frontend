import Cookies from "js-cookie";
import axiosInstance from "../api/axiosInstance";

const Login = async (data) => {
  try {
    const response = await axiosInstance.post("/api/v1/auth/login", data);

    if (response.data.token) {
      Cookies.set("token", response.data.token, { expires: 7 });
      return {
        status: "Success",
        message: response.data.message,
        token: response.data.token,
      };
    } else {
      return {
        status: "Error",
        message: response.data.message,
      };
    }
  } catch (error) {
    const errorMessage = error.response?.data?.message || "Terjadi kesalahan";
    return {
      status: "Error",
      message: errorMessage,
    };
  }
};

const Logout = async () => {
  try {
    await axiosInstance.post("/api/v1/auth/logout");

    Cookies.remove("token");
    return {
      status: "Success",
      message: "Logout berhasil",
    };
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || "Terjadi kesalahan saat logout";
    return {
      status: "Error",
      message: errorMessage,
    };
  }
};

const requestResetPassword = async (email) => {
  try {
    const response = await axiosInstance.post("/api/v1/auth/forget-password", {
      email,
    });
    console.log("Response sukses:", response.data);

    return {
      status: "Success",
      message: response.data.message,
    };
  } catch (error) {
    console.error("Error Response:", error.response);

    const errorMessage = error.response?.data?.message || "Terjadi kesalahan";
    return {
      status: "Error",
      message: errorMessage,
    };
  }
};



const verifyOtp = async (otp) => {
  try {
    const response = await axiosInstance.post("/api/v1/auth/verify-otp", {
      otp,
    });
    return {
      status: "Success",
      message: response.data.message,
    };
  } catch (error) {
    const errorMessage = error.response?.data?.message || "Terjadi kesalahan";
    return {
      status: "Error",
      message: errorMessage,
    };
  }
};

const resetPassword = async (data) => {
  try {
    const response = await axiosInstance.post(
      "/api/v1/auth/reset-password",
      data,
    );
    return {
      status: "Success",
      message: response.data.message,
    };
  } catch (error) {
    const errorMessage = error.response?.data?.message || "Gagal reset password";
    return {
      status: "Error",
      message: errorMessage,
    };
  }
};

export const resendOtp = async (email) => {
  try {
    const response = await axiosInstance.post("/api/v1/auth/resend-otp", {
      email,
    });
    return response.data.message;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Terjadi kesalahan.");
  }
};


export { Login, Logout, requestResetPassword, verifyOtp, resetPassword,  };
