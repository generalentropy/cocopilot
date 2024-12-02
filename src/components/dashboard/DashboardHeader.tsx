import UserMenu from "./UserMenu";

export default function DashboardHeader() {
  return (
    <div className="col-start-2 col-end-3 row-start-1 row-end-2">
      <div className="flex h-full justify-between border border-red-500 px-3">
        <UserMenu />
      </div>
    </div>
  );
}
