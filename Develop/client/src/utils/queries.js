import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      books {
        title
        authors
      }
    }
  }
`;

export const QUERY_BOOKS = gql`
  query getBooks {
    book {
      title
      author
    }
  }
`;
