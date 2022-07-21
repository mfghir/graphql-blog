import { gql, useQuery } from "@apollo/client";
import "./App.css";

const QUERY = gql`
  query {
    authors {name}
  }
`;

function App() {
  const { loading, data } = useQuery(QUERY);
  console.log(data)
  return <div className="App">hi</div>;
}

export default App;
