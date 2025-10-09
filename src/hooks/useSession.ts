import { useState } from "react";

export default function useSession() {
  const [session, setSession] = useState<Session>({
    id: "fsgjs343sdfs",
    username: "Usuário",
    photo: "",
  });

  return {
    session,
    handleSession: (session: Session) => setSession(session),
  };
}
