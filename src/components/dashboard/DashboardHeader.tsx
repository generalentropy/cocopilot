import Image from "next/image";
import UserMenu from "./UserMenu";

export default function DashboardHeader() {
  return (
    <div className="col-start-2 col-end-3 row-start-1 row-end-2">
      <div className="flex h-full justify-between border border-red-500">
        <div className="flex items-center">
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
    </div>
  );
}
