import gql from 'graphql-tag';
import { withApollo } from '../lib/apollo';
import { useQuery } from '@apollo/react-hooks';
import Layout from '../components/Layout'

import '../css/products/products.scss';

const Products = () => {
  const { loading, error, data } = useQuery(
    ALL_ITEMS_QUERY,
    {
      // Setting this value to true will make the component rerender when
      // the "networkStatus" changes, so we are able to know if it is fetching
      // more data
      notifyOnNetworkStatusChange: false
    }
  )

  return (
    <>
      <h1>Products</h1>
      <div className="flex flex-wrap products">
      {data && data.items.map(({ id, name, price, imageUrl }) => {
        return (
          <div className="flex align-center justify-center flex-column products__item" key={id}>
            <h3 className="products__item-title">{name}</h3>
            <img src={imageUrl} alt={name} className="products__item-image" />
            <span className="products__item-price">{price}</span>
          </div>
        );
      })}
      </div>
    </>
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

export default withApollo(Products);