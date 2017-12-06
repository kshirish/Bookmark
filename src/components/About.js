import React from 'react';

import { Container, Row, Col } from 'reactstrap';  

const About = () => (
	<div>
		<Container>			
			<Row>
				<Col sm="12" md={{ size: 8, offset: 2 }}>
					<p>Pocket was founded in 2007 by Nate Weiner to help people save interesting articles, videos and more from the web for later enjoyment. Once saved to Pocket, the list of content is visible on any device — phone, tablet or computer. It can be viewed while waiting in line, on the couch, during commutes or travel — even offline.</p>
					<p>The world's leading save-for-later service currently has more than 22 million registered users and is integrated into more than 1500 apps including Flipboard, Twitter and Zite. It is available for major devices and platforms including iPad, iPhone, Android, Mac, Kindle Fire, Kobo, Google Chrome, Safari, Firefox, Opera and Windows.</p>
					<p>Follow us on <a target="_blank" href="//twitter.com">Twitter</a> or <a target="_blank" href="//facebook.com">Facebook</a> for the latest news.</p>
				</Col>
			</Row>	
		</Container>			        
	</div>
);

export default About;
