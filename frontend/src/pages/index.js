import gql from 'graphql-tag';
import { withApollo } from '../lib/apollo';
import { useQuery } from '@apollo/react-hooks';
import Layout from '../components/Layout'

const Index = () => {
  const { loading, error, data } = useQuery(
    ALL_ITEMS_QUERY,
    {
      // Setting this value to true will make the component rerender when
      // the "networkStatus" changes, so we are able to know if it is fetching
      // more data
      notifyOnNetworkStatusChange: true
    }
  )

  return (
    <Layout title="Home">
      <h1>Hello world</h1>
    </Layout>
  )
};

export const ALL_ITEMS_QUERY = gql`
  query {
    items {
      id
      name
      price
      imageUrl
    }
  }
`

export default withApollo(Index);