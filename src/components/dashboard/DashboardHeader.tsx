import Image from "next/image";
import UserMenu from "./UserMenu";

export default function DashboardHeader() {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center gap-1">
        <Image
          src="cocopilot-logo.svg"
          alt="cocopilot logo"
          width={25}
          height={25}
        />
        <span className="select-none text-xl font-black">Cocopilot</span>
      </div>
      <UserMenu />
    </div>
  );
}
