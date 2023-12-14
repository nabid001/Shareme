import { createUser } from "@/sanity/actions/user.action";
import { UserButton, currentUser } from "@clerk/nextjs";

export default async function Home() {
  const user = await currentUser();

  const email = user.emailAddresses[0].emailAddress;
  const { username, id, imageUrl } = user;

  await createUser({ username, id, imageUrl, email });

  return (
    <main>
      <h1 className="">Hello World</h1>
      <UserButton />
    </main>
  );
}
