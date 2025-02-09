import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LoginPageProps {
  onBackClick?: () => void;
}

export default function LoginPage({ onBackClick }: LoginPageProps) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4">
      <div className="w-full max-w-[1122px] bg-white rounded-[32px] shadow-lg flex overflow-hidden">
        {/* Left side - Decorative Image */}
        <div className="w-1/2 p-20 flex items-center justify-center">
          <img
            src="https://storage.googleapis.com/tempo-public-images/figma-exports%2Fgithub%7C97143074-1739101450721-node-1%3A5-1739101448200.png"
            alt="Decorative abstract shapes"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Right side - Login Form */}
        <div className="w-1/2 flex flex-col justify-center px-16">
          <div className="w-full max-w-[400px]">
            {/* Back button */}
            <button
              onClick={onBackClick}
              className="flex items-center text-gray-500 hover:text-gray-900 mb-8 text-sm"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to website
            </button>

            {/* Login Form */}
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-medium text-gray-900 mb-1">
                  Welcome!
                </h1>
                <p className="text-sm text-gray-600">
                  Create a free account or{" "}
                  <span className="text-gray-900">log in</span> to get started
                  using SportWrench
                </p>
              </div>

              <form className="space-y-4">
                <div className="space-y-1">
                  <label
                    htmlFor="email"
                    className="block text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="chandler.blanks"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm"
                  />
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="password"
                    className="block text-sm text-gray-600"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm"
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    Forgot password?
                  </button>
                </div>

                <Button
                  className="w-full bg-black text-white hover:bg-gray-900 py-6"
                  type="submit"
                >
                  Log in
                </Button>

                <div className="relative my-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200" />
                  </div>
                  <div className="relative flex justify-center text-xs">
                    <span className="px-2 bg-white text-gray-500">or</span>
                  </div>
                </div>

                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 text-sm"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  Log in with Google
                </button>

                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 text-sm"
                >
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#1877F2"
                      d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                    />
                  </svg>
                  Log in with Facebook
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
