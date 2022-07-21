import React from "react";
import { useQuery } from "@apollo/client/react";
import { GET_BLOGS_INFO } from "../../graphql/queries";

const Blogs = () => {
  const { loading, data, errors } = useQuery(GET_BLOGS_INFO);
  console.log(data);

  if (loading) return <h4>Loading...</h4>;
  if (errors) return <h4>Error ...</h4>;
  return <div>Blogs</div>;
};

export default Blogs;
