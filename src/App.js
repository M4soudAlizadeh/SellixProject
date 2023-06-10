import { Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Login from "./pages/Login";
import Test from "./pages/Test";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <MainPage />
      </Route>
      <Route path="/Login" exact>
        <Login />
      </Route>
      <Route path="/Test" exact>
        <Test />
      </Route>
    </Switch>
  );
};
// export async function getStaticProps() {
//   const resTitle = await fetch("https://jsonplaceholder.typicode.com/users/1");
//   const dataTitle = await resTitle.json();
//   const resDes = await fetch("https://jsonplaceholder.typicode.com/comments/1");
//   const dataDes = await resDes.json();
//   const resPhoto = await fetch("https://jsonplaceholder.typicode.com/photos/1");
//   const dataPhoto = await resPhoto.json();
//   console.log(dataTitle);
//   return {
//     props: {
//       Data: {
//         Title: dataTitle.name,
//         UserName: dataTitle.username,
//         Des: dataDes.body,
//         Photo: dataPhoto.url,
//         UserIcon: dataPhoto.thumbnailUrl,
//       },
//     },
//     revalidate: 10,
//   };
// }
export default App;
