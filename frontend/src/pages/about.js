import gql from 'graphql-tag';
import { withApollo } from '../lib/apollo';
import { useQuery } from '@apollo/react-hooks';
import Layout from '../components/Layout'

const About = () => {
  return (
    <h1>About</h1>
  )
};

export default About;