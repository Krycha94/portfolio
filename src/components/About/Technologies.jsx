import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "../../styles/components/Technologies.scss";

import {
	logoHtml,
	logoCss,
	logoFirebase,
	logoJS,
	logoJest,
	logoReact,
	logoRedux,
	logoSass,
	logoTS,
	logoTailwind,
} from "../../assets";

const Technologies = () => {
	const handleDragStart = (e) => e.preventDefault();

	const items = [
		<a href="">
			<img src={logoHtml} onDragStart={handleDragStart} role="presentation" />
		</a>,
		<a href="">
			<img src={logoCss} onDragStart={handleDragStart} role="presentation" />
		</a>,
		<a href="">
			<img src={logoSass} onDragStart={handleDragStart} role="presentation" />
		</a>,
		<a href="">
			<img
				src={logoTailwind}
				onDragStart={handleDragStart}
				role="presentation"
			/>
		</a>,
		<a href="">
			<img src={logoJS} onDragStart={handleDragStart} role="presentation" />
		</a>,
		<a href="">
			<img src={logoTS} onDragStart={handleDragStart} role="presentation" />
		</a>,
		<a href="">
			<img src={logoReact} onDragStart={handleDragStart} role="presentation" />
		</a>,
		<a href="">
			<img src={logoRedux} onDragStart={handleDragStart} role="presentation" />
		</a>,
		<a href="">
			<img src={logoJest} onDragStart={handleDragStart} role="presentation" />
		</a>,
		<a href="">
			<img
				src={logoFirebase}
				onDragStart={handleDragStart}
				role="presentation"
			/>
		</a>,
	];

	const responsive = {
		0: { items: 3 },
		768: { items: 4 },
		976: { items: 6 },
		1440: { items: 7 },
	};

	return (
		<>
			<AliceCarousel
				mouseTracking
				items={items}
				responsive={responsive}
				autoPlay
				autoPlayInterval={1000}
				animationDuration={800}
				touchTracking={false}
				disableDotsControls
				disableButtonsControls
				infinite
			/>
		</>
	);
};

export default Technologies;
