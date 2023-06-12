import Link from "next/link";
import { useTranslation } from "react-i18next";
const AuthenticationForm = () => {
  const { t } = useTranslation();
  return (
    <div className="flex gap-4">
      <Link
        href="/auth"
        className="inline-block rounded-lg border border-solid border-[#E8EAEDB8] px-6 py-2 text-sm"
      >
        Log in
      </Link>
      <button
        type="button"
        onClick={() => {
          alert(t("header_not_support_this_person"));
        }}
        className="inline-block rounded-lg border border-solid border-primary bg-primary px-6 py-2 text-sm text-white"
      >
        Sign up
      </button>
    </div>
  );
};

export default AuthenticationForm;
