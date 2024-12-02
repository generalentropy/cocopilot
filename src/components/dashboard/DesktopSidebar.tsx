import Image from "next/image";

export default function DesktopSidebar() {
  return (
    <div className="col-start-1 col-end-2 row-start-1 row-end-3 bg-gray-800">
      <div className="flex justify-center py-4">
        <Image
          src="cocopilot-logo.svg"
          alt="cocopilot logo"
          width={34}
          height={34}
        />
        <span className="ml-2 text-2xl font-extrabold text-white">
          cocopilot
        </span>
      </div>
    </div>
  );
}
