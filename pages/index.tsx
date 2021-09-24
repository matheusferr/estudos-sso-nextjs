import { useSession, signIn, signOut } from "next-auth/client";

const Home = () => {
  const [session] = useSession();

  if (session)
    return (
      <>
        Signed in as {session?.user?.email} <br />
        <button type="button" onClick={() => signOut()}>
          Sign out
        </button>
      </>
    );

  return (
    <>
      Not signed in <br />
      <button type="button" onClick={() => signIn()}>
        Sign in
      </button>
    </>
  );
};

export default Home;
