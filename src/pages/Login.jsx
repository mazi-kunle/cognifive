import React, { useState } from "react";
import { Shield, Menu, Lock } from "lucide-react";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle login/signup logic here
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm-1-10h2v2h-2v-2zm0 4h2v4h-2v-4z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-800">
                MedDoc <span className="text-teal-500">AI</span>
              </span>
            </div>

            {/* Desktop Menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-600 hover:text-gray-800">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="py-8 px-4 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Form */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10 order-2 lg:order-1">
              {/* Toggle Tabs */}
              <div className="flex mb-8 border-b border-gray-200">
                <button
                  onClick={() => setIsLogin(true)}
                  className={`flex-1 pb-3 text-center font-medium transition-all relative ${
                    isLogin
                      ? "text-teal-500 border-b-2 border-teal-500"
                      : "text-gray-500 hover:text-gray-700"
                  }`}>
                  Login
                </button>
                <button
                  onClick={() => setIsLogin(false)}
                  className={`flex-1 pb-3 text-center font-medium transition-all relative ${
                    !isLogin
                      ? "text-teal-500 border-b-2 border-teal-500"
                      : "text-gray-500 hover:text-gray-700"
                  }`}>
                  Sign Up
                </button>
              </div>

              {/* Form */}
              <div className="space-y-5">
                {/* Email Address */}
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition placeholder-gray-400"
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition placeholder-gray-400"
                  />
                </div>

                {/* Confirm Password (Sign Up Only) */}
                {!isLogin && (
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm Password"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition placeholder-gray-400 pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24">
                          {showPassword ? (
                            <>
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                              />
                            </>
                          ) : (
                            <>
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              />
                            </>
                          )}
                        </svg>
                      </button>
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  className="w-full bg-teal-500 text-white py-3.5 rounded-lg font-semibold hover:bg-teal-600 active:bg-teal-700 transition shadow-sm hover:shadow-md">
                  {isLogin ? "Login Securely" : "Create Account Securely"}
                </button>

                {/* Forgot Password */}
                <div className="text-center">
                  <button
                    type="button"
                    className="text-sm text-gray-500 hover:text-teal-500 transition">
                    Forgot Password?
                  </button>
                </div>

                {/* Social Login Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="button"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 active:bg-gray-100 transition">
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    <span className="hidden sm:inline">Continue with</span>{" "}
                    Google
                  </button>
                  <button
                    type="button"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 active:bg-gray-100 transition">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#00A4EF">
                      <path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zm12.6 0H12.6V0H24v11.4z" />
                    </svg>
                    <span className="hidden sm:inline">Continue with</span>{" "}
                    Microsoft
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side - Security Illustration */}
            <div className="flex flex-col items-center justify-center text-center order-1 lg:order-2 py-8 lg:py-0">
              {/* Security Shield Illustration */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 mb-6 lg:mb-8">
                {/* Circuit Lines */}
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 256 256">
                  {/* Top Lines */}
                  <line
                    x1="60"
                    y1="30"
                    x2="128"
                    y2="30"
                    stroke="#5EEAD4"
                    strokeWidth="2"
                  />
                  <circle cx="60" cy="30" r="4" fill="#5EEAD4" />
                  <line
                    x1="196"
                    y1="30"
                    x2="220"
                    y2="30"
                    stroke="#5EEAD4"
                    strokeWidth="2"
                  />
                  <circle cx="220" cy="30" r="4" fill="#5EEAD4" />

                  {/* Right Lines */}
                  <line
                    x1="230"
                    y1="80"
                    x2="230"
                    y2="110"
                    stroke="#5EEAD4"
                    strokeWidth="2"
                  />
                  <circle cx="230" cy="80" r="4" fill="#5EEAD4" />
                  <line
                    x1="230"
                    y1="150"
                    x2="230"
                    y2="180"
                    stroke="#5EEAD4"
                    strokeWidth="2"
                  />
                  <circle cx="230" cy="180" r="4" fill="#5EEAD4" />

                  {/* Bottom Lines */}
                  <line
                    x1="180"
                    y1="226"
                    x2="150"
                    y2="226"
                    stroke="#5EEAD4"
                    strokeWidth="2"
                  />
                  <circle cx="180" cy="226" r="4" fill="#5EEAD4" />
                  <line
                    x1="100"
                    y1="226"
                    x2="70"
                    y2="226"
                    stroke="#5EEAD4"
                    strokeWidth="2"
                  />
                  <circle cx="70" cy="226" r="4" fill="#5EEAD4" />

                  {/* Left Lines */}
                  <line
                    x1="26"
                    y1="180"
                    x2="26"
                    y2="150"
                    stroke="#5EEAD4"
                    strokeWidth="2"
                  />
                  <circle cx="26" cy="180" r="4" fill="#5EEAD4" />
                  <line
                    x1="26"
                    y1="100"
                    x2="26"
                    y2="70"
                    stroke="#5EEAD4"
                    strokeWidth="2"
                  />
                  <circle cx="26" cy="70" r="4" fill="#5EEAD4" />
                </svg>

                {/* Main Shield */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-32 h-36 sm:w-36 sm:h-40 lg:w-40 lg:h-44">
                    {/* Shield Background */}
                    <svg
                      viewBox="0 0 120 132"
                      fill="none"
                      className="w-full h-full">
                      <path
                        d="M60 0L0 22V66C0 102.45 26.4 136.29 60 144C93.6 136.29 120 102.45 120 66V22L60 0Z"
                        fill="#14B8A6"
                      />
                    </svg>

                    {/* Lock Icon */}
                    <div className="absolute inset-0 flex items-center justify-center pt-2">
                      <Lock
                        className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-white"
                        strokeWidth={2.5}
                      />
                    </div>

                    {/* Medical Cross on Shield */}
                    <div className="absolute top-4 right-4 sm:top-5 sm:right-5 w-6 h-6 sm:w-7 sm:h-7 bg-white rounded-md flex items-center justify-center">
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 text-teal-500"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 lg:mb-4 px-4">
                Your Health Data, Secured
              </h2>
              <p className="text-gray-600 text-base sm:text-lg px-4 max-w-md">
                Trusted by healthcare professionals worldwide
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
