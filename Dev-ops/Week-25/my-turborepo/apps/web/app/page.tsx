import styles from "./page.module.css";
import { client } from "@repo/db/client"


export default async function Home() {
  const user = await client.user.findFirst();
  return (
    <div>
      hi there new <br/>
      {user?.username} <br/>
      {user?.password}
    </div>
  );
}
