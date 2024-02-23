import LogOutComponent from "@/components/LogoutButton";

export default function Protected() {
  return (
    <div className="flex flex-col gap-5 justify-center w-full h-screen items-center">
      <h3 className="text-2xl font-bold">This is protected page</h3>
      <div>
          <LogOutComponent/>
      </div>
    </div>
  );
}