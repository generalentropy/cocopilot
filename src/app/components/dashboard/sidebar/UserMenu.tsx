import {
  getKindeServerSession,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import { getInitials } from "@/app/utils/helpers";

export default async function UserMenu() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger className="focus:outline-none focus-visible:ring-transparent">
        <Avatar>
          <AvatarImage
            src={user.picture ?? "/default-avatar.png"}
            referrerPolicy="no-referrer"
          />
          <AvatarFallback delayMs={1000}>
            {getInitials(user?.given_name, user.family_name, user?.email)}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-2">
        <DropdownMenuLabel>Mon compte</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogoutLink>Se déconnecter</LogoutLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
