import Tooltip from "components/Tooltip";
import { LOCAL_STORAGE_KEYS } from "constants/token";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { userLogin } from "services/auth";

interface LoginForm {
  email: string;
  password: string;
}

export default function LoginPage() {
  let router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const { t } = useTranslation();

  const handleSubmitForm = async (data: LoginForm) => {
    userLogin(data.email, data.password)
      .then((response: any) => {
        localStorage.setItem(LOCAL_STORAGE_KEYS.token, response.access_token);
        localStorage.setItem(LOCAL_STORAGE_KEYS.userId, response.userData.id);
        toast.success(
          `Chào mừng ${response.userData.name || "Client"}`
        );
        router.replace("/online-course");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Đăng nhập thất bại");
      });
  };

  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="col-span-1">
          <div className="p-10">
            <div className="mx-auto max-w-[400px]">
              <div className="text-center">
                <h1 className="text-4xl font-semibold text-blue">
                  {t("auth_login")}
                </h1>
                <p className="mt-2 text-sm text-[#5D7888]">
                  {t("auth_login_to_continue")}
                </p>
              </div>
              <div className="mt-8">
                <button
                  type="button"
                  className="relative w-full rounded-md border px-4 py-2 font-semibold text-[#5D7888] transition-all hover:border-primary"
                >
                  <span className="absolute left-4 top-1/2 inline-block -translate-y-1/2">
                    <Image
                      src="/images/icons/icon_google.svg"
                      width={24}
                      alt="Google logo"
                      height={24}
                      className="h-6 w-6 max-w-full"
                    />
                  </span>
                  <span>{t("auth_login_with_google")}</span>
                </button>
                <div className="mt-10 flex items-center text-[#A6B2BF]">
                  <hr className="flex-1 border-[#A6B2BF]" />
                  <p className="px-4 uppercase">{t("text_or")}</p>
                  <hr className="flex-1 border-[#A6B2BF]" />
                </div>
                <form
                  onSubmit={handleSubmit(handleSubmitForm)}
                  className="mt-8"
                  autoComplete="off"
                  method="POST"
                >
                  <div className="mb-5">
                    <label
                      className="mb-1 inline-block text-xs font-medium text-[#5D7888]"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      {...register("email", {
                        required: {
                          value: true,
                          message: t("auth_email_not_empty"),
                        },
                      })}
                      id="email"
                      type="text"
                      className="w-full rounded-lg border px-4 py-2 outline-none ring-0 transition-all focus:border-primary focus:outline-none focus:ring-0"
                      placeholder="youremail@gmail.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs italic text-red-600">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div className="mb-5">
                    <label
                      className="mb-1 inline-block text-xs font-medium text-[#5D7888]"
                      htmlFor="password"
                    >
                      {t("auth_password")}
                    </label>
                    <div className="relative">
                      <input
                        {...register("password", {
                          required: {
                            value: true,
                            message: t("auth_password_not_empty"),
                          },
                        })}
                        id="password"
                        type={isShowPassword ? "text" : "password"}
                        className="w-full rounded-lg border px-4 py-2 outline-none ring-0 transition-all focus:border-primary focus:outline-none focus:ring-0"
                        placeholder="********"
                      />

                      <button
                        onMouseDown={() => setIsShowPassword(true)}
                        onMouseUp={() => setIsShowPassword(false)}
                        type="button"
                        className={`absolute right-3 top-1/2 -translate-y-1/2 ${
                          isShowPassword ? "text-primary" : "text-blue"
                        }`}
                      >
                        <Tooltip
                          position="top"
                          title={t("auth_press_to_show_password")}
                        >
                          <i className="bi bi-eye-fill"></i>
                        </Tooltip>
                      </button>
                    </div>
                    {errors.password && (
                      <p className="mt-1 text-xs italic text-red-600">
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                  <div className="mb-5">
                    <button
                      type="submit"
                      className="w-full   rounded border-primary bg-primary px-4 py-2 font-semibold text-white transition-all hover:bg-primary/80"
                    >
                      {t("auth_login")}
                    </button>
                  </div>
                </form>
                <p className="text-center text-[#5D7888]">
                  {t("auth_not_account")}?{" "}
                  <Link
                    href="/sign-up"
                    className="font-semibold text-blue transition-all hover:text-primary"
                  >
                    {t("auth_signup")}
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <Image
            loading="lazy"
            width={800}
            height={800}
            src="/images/auth/girl_login_image.svg"
            alt="Girl is learning"
            className="h-auto w-full max-w-full"
          />
        </div>
      </div>
    </div>
  );
}
