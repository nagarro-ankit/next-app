import Image from "next/image";
import { getUsers } from "../lib/api";
import UserCard from "../components/UserCard";
import PageBreadcrumb from "../components/PageBreadcrumb";

export default async function Home() {
  const users = await getUsers();

  return (
    <>
      <PageBreadcrumb page_name="Users List" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {users.map((user : any) => (
          <UserCard key={user?.id} user={user} />
        ))}
      </div>
    </>
  );
}
