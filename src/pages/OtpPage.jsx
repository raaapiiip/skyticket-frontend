import React from "react";
import OtpForm from "../components/Fragments/Form/OtpForm";
import Navbar from "../components/Fragments/Navbar/Navbar";
import { Link } from "react-router-dom";
import { verifyOtp } from "../services/auth.service";
const OtpPage = () => {
  const handleOtpSubmit = async (otp) => {
    alert(`Kode OTP yang dimasukkan: ${otp}`);
    try {
      const response = await verifyOtp(otp);
      alert(response.message || "OTP berhasil diverifikasi.");
      window.location.href = "/reset-password?token=" + response.token;
    } catch (error) {
      alert(error);
    }
  };

  const handleResendOtp = async () => {
    try {
      const message = await resendOtp(email);
      alert(message || "Kode OTP telah dikirim ulang.");
    } catch (error) {
      alert(error.message || "Terjadi kesalahan.");
    }
  };
  

  return (
    <>
      <Navbar showSearchBar={false} showLoginButton={false} />
      <div className="flex flex-col items-center justify-center px-4">
        <div className="mb-4 mt-10 flex w-full max-w-md items-center gap-4">
          <Link to="/register" className="">
            <img
              alt="Arrow Left Icon"
              src="/src/assets/icons/arrow-left.svg"
              className="w-auto"
            />
          </Link>
          <h1 className="flex-grow text-2xl font-bold text-black">
            Masukkan OTP
          </h1>
        </div>
        <OtpForm
          email="j*****@gmail.com"
          onSubmit={handleOtpSubmit}
          onResendOtp={handleResendOtp}
        />
      </div>
    </>
  );
};

export default OtpPage;
