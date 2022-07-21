import React from 'react'
import { GET_AUTHORS_INFO } from '../../graphql/queries';
import { useQuery } from "@apollo/client";

const Authors = () => {
    const { loading, data, errors } = useQuery(GET_AUTHORS_INFO);

    
  if (loading) return <h3>Loading ...</h3>

  if (errors) return <h3>Error...</h3>;

  console.log(data)
  return (
    <div>Authors</div>
  )
}

export default Authors