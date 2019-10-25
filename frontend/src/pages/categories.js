import gql from 'graphql-tag';
import { withApollo } from '../lib/apollo';
import { useQuery } from '@apollo/react-hooks';
import Layout from '../components/Layout'

const Categories = () => {
  return (
    <Layout title="Categories">
      <h1>Categories</h1>
    </Layout>
  )
};

export default Categories;