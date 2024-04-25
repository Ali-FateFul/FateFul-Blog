import { gql } from "@apollo/client";

const GET_BLOGS_INFO = gql`
	query {
		posts {
			author {
				... on Author {
					name
					avatar {
						url
					}
				}
			}
			slug
			title
			id
			coverPhoto {
				url
			}
		}
	}
`;

const GET_AUTHORS_INFO = gql`
	query {
		authors {
			id
			name
			slug
			avatar {
				url
			}
		}
	}
`;

export { GET_BLOGS_INFO, GET_AUTHORS_INFO };
