import gql from 'graphql-tag';
import { withApollo } from '../lib/apollo';
import { useQuery } from '@apollo/react-hooks';
import Layout from '../components/Layout'

import '../css/categories/categories.scss';

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

  console.log(data)

  return (
    <>
      <h1>Categories</h1>
      <div className="flex flex-wrap categories">
      {data && data.collections.map(({ id, title, featuredImage }) => {
        return (
          <div className="flex align-center justify-center flex-column categories__item" key={id}>
            <h3 className="categories__item-title">{title}</h3>
            <img src={featuredImage} alt={title} className="categories__item-image" />
          </div>
        );
      })}
      </div>
    </>
  )
};

export const ALL_COLLECTIONS_QUERY = gql`
  query {
    collections {
      id
      title
      featuredImage
    }
  }
`

export default withApollo(Categories);