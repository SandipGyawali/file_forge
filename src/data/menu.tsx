import { HomeIcon, Files, Trash, Star, UserRound } from "lucide-react";
import { ReactElement } from "react";

interface OBJ {
  id: number;
  name: string;
  icon: ReactElement;
  route: string;
}

const list: Array<OBJ> = [
  {
    id: 1,
    name: "Home",
    icon: <HomeIcon />,
    route: "/",
  },
  {
    id: 2,
    name: "My Files",
    icon: <Files />,
    route: "/files",
  },
  {
    id: 3,
    name: "Favorites",
    icon: <Star />,
    route: "/favorites",
  },
  {
    id: 4,
    name: "Trash",
    icon: <Trash />,
    route: "/trash",
  },
  {
    id: 5,
    name: "Profile",
    icon: <UserRound />,
    route: "/profile",
  },
];

export { list };
