import gql from 'graphql-tag';
import { withApollo } from '../lib/apollo';
import { useQuery } from '@apollo/react-hooks';
import Layout from '../components/Layout'

const Index = () => {
  return (
    <h1>Hello world</h1>
  )
};

export default Index;