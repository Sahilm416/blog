import { checkResetPasswordToken } from "redshield/actions/forgotPassword";
import ResetPassPage from "redshield/components/ResetPassPage";

const ResetPassword = async ({ params }: { params: { token: string } }) => {
  const res = await checkResetPasswordToken({ token: params.token });
  return (
    <div className="w-full flex justify-center mt-[100px]">
      <ResetPassPage data={res} />
    </div>
  );
};
export default ResetPassword;