import React from "react";

import { useQuery } from "@apollo/client";
import { GET_AUTHORS_INFO } from "../../graphql/queries";
import { Avatar, Divider, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Authors() {
	const { loading, data, error } = useQuery(GET_AUTHORS_INFO);
	if (loading) return <h3>Loading...</h3>;

	if (error) return <h3>Error...</h3>;

	const { authors } = data;

	return (
		<Grid
			container
			sx={{
				boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
				borderRadius: 4,
			}}>
			{authors.map((author, index) => (
				<React.Fragment key={author.id}>
					<Grid
						item
						xs={12}
						padding={2}>
						<Link
							to={`/authors/${author.slug}`}
							style={{
								display: "flex",
								alignItems: "center",
								textDecoration: "none",
							}}>
							<Avatar
								src={author.avatar.url}
								sx={{ margin: 2 }}
							/>
							<Typography
								component='p'
								variant='p'
								color='text.secondary'>
								{author.name}
							</Typography>
						</Link>
					</Grid>
					<Grid
						item
						xs={12}>
						{index !== authors.length - 1 && <Divider variant='middle' />}
					</Grid>
				</React.Fragment>
			))}
		</Grid>
	);
}

export default Authors;
