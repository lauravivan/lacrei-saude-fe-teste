"use client";

import dynamic from "next/dynamic";
import useSession from "@/hooks/useSession";
import { useScreenSize } from "@/hooks/useScreenSize";

const PopoverSignOut = dynamic(
  () => import("./popover-sign-out/PopoverSignOut"),
  {
    ssr: false,
  }
);

const PopoverSignIn = dynamic(() => import("./popover-sign-in/PopoverSignIn"), {
  ssr: false,
});

export default function Popover() {
  const { session } = useSession();
  const { isDesktop } = useScreenSize();

  return session.id ? (
    <PopoverSignOut
      photo={session.photo}
      username={session.username}
      isDesktop={isDesktop}
    />
  ) : (
    <PopoverSignIn />
  );
}
