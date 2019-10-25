import gql from 'graphql-tag';
import { withApollo } from '../lib/apollo';
import { useQuery } from '@apollo/react-hooks';
import Layout from '../components/Layout'

const Products = () => {
  return (
    <Layout title="Products">
      <h1>Products</h1>
    </Layout>
  )
};

export default Products;