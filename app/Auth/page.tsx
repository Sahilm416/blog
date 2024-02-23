import { getProject } from "redshield/actions/auth";
import AuthPage from "redshield/Auth";

const Auth = async () => {
  const res = await getProject();
  return (
    <div className="w-full flex justify-center mt-[100px]">
       <AuthPage project={res} />
    </div>
  );
};
export default Auth;