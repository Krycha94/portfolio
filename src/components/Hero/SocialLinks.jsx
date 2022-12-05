import React from "react";
import { socialLinks } from "../../utils/social-links";

const SocialLinks = () => (
	<ul>
		{socialLinks.map((link) => (
			<li key={link.id}>
				<a target="_blank" href={link.address}>
					{link.icon}
				</a>
			</li>
		))}
	</ul>
);

export default SocialLinks;
