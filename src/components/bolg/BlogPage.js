import React from 'react'
import { useQuery } from '@apollo/client';
import { useNavigate, useParams } from 'react-router-dom';

import { GET_POST_INFO } from '../../graphql/queries';
import Loader from '../shared/Loader';

const BlogPage = () => {

  const { slug } = useParams();
  const navigate = useNavigate();

  const { loading, data, errors } = useQuery(GET_POST_INFO, {
    variables: { slug },
  });


  if (loading) return <Loader />;
  if (errors) return <h3>Error...</h3>;

  
  return (
    <div>BlogPage</div>
  )
}

export default BlogPage