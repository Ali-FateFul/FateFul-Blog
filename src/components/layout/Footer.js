import { Typography } from "@mui/material";
import React from "react";

function Footer() {
	return (
		<footer>
			<Typography
				component='p'
				variant='p'
				bgcolor='#f7f7f7'
				color='primary'
				padding='10px'
				text-align='center'
				mt={10}>
				پروژه وبلاگ با GraphQL | FateFul
			</Typography>
		</footer>
	);
}

export default Footer;
