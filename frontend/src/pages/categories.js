import gql from 'graphql-tag';
import { withApollo } from '../lib/apollo';
import { useQuery } from '@apollo/react-hooks';
import Layout from '../components/Layout'

const Categories = () => {
  const { loading, error, data } = useQuery(
    ALL_COLLECTIONS_QUERY,
    {
      // Setting this value to true will make the component rerender when
      // the "networkStatus" changes, so we are able to know if it is fetching
      // more data
      notifyOnNetworkStatusChange: false
    }
  )

  console.log({data})

  return (
    <Layout title="Categories">
      <h1>Categories</h1>
      <div className="categories">
      {data && data.collections.map(({ id, title }) => {
        return (
          <div className="categories__item" key={id}>
            <h3 className="categories__item-title">{title}</h3>
          </div>
        );
      })}
      </div>
    </Layout>
  )
};

export const ALL_COLLECTIONS_QUERY = gql`
  query {
    collections {
      id
      title
    }
  }
`

export default withApollo(Categories);