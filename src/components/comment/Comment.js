import { useQuery } from "@apollo/client";
import { GET_POST_COMMENT } from "../../graphql/queries";
import { Avatar, Box, Grid, Typography } from "@mui/material";

function Comment({ slug }) {
	const { loading, data } = useQuery(GET_POST_COMMENT, {
		variables: { slug },
	});

	if (loading) return null;

	return (
		<Grid
			container
			sx={{
				boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
				borderRadius: 4,
				py: 1,
				mt: 8,
			}}>
			<Grid
				item
				xs={12}
				m={2}>
				<Typography
					component='p'
					variant='h6'
					fontWeight={700}
					color='primary'>
					کامنت ها
				</Typography>
				{data.post.comments.map((item) => (
					<Grid
						item
						xs={12}
						key={item.id}
						m={2}
						p={2}
						border='1px silver solid'
						borderRadius={1}>
						<Box
							component='div'
							display='flex'
							align='center'
							mb={3}>
							<Avatar>{item.name[0]}</Avatar>
							<Typography
								component='span'
								variant='p'
								fontWeight={700}
								mr={1}>
								{item.name}
							</Typography>
						</Box>
						<Typography
							component='p'
							variant='p'>
							{item.text}
						</Typography>
					</Grid>
				))}
			</Grid>
		</Grid>
	);
}

export default Comment;
