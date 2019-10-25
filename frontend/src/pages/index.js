import gql from 'graphql-tag';
import { withApollo } from '../lib/apollo';
import { useQuery } from '@apollo/react-hooks';

const Index = () => {
  const { loading, error, data } = useQuery(
    ALL_ITEMS_QUERY,
    {
      variables: allPostsQueryVars,
      // Setting this value to true will make the component rerender when
      // the "networkStatus" changes, so we are able to know if it is fetching
      // more data
      notifyOnNetworkStatusChange: true
    }
  )
  console.log({loading})
  console.log({error})
  console.log({data})
  return (
    <h1>Hello world</h1>
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

export const allPostsQueryVars = {
  skip: 0,
  first: 10,
}

export default withApollo(Index);