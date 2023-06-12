import UserMenu from "components/UserForm/UserMenu";
import useAppStore from "store/useAppStore";
import AuthenticationForm from "./AuthenticationForm";

function UserForm() {
  const appStore = useAppStore();
  return (
    <>
      {appStore.userProfile ? (
        <UserMenu />
      ) : (
        <AuthenticationForm />
      )}
    </>
  );
}
export default UserForm;
