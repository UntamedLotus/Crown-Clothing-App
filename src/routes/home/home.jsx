import Directory from "../../components/category-item/directory/directory";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div>
      <Outlet />
      <Directory />
    </div>
  );
}

export default Home;
