import styles from "../../styles/components/Projects.module.scss";
import projectImage from "../../assets/project-1.png";

const dummyProjects = [
	{
		id: 1,
		image: "projectImage",
		title: "E-commerce",
		technologies: ["React", "Redux", "Firebase", "Sass"],
		urlLive: "#",
		urlCode: "#",
	},
	{
		id: 2,
		image: "projectImage",
		title: "E-commerce",
		technologies: ["React", "Redux", "Firebase", "Sass"],
		urlLive: "#",
		urlCode: "#",
	},
	{
		id: 3,
		image: "projectImage",
		title: "E-commerce",
		technologies: ["React", "Redux", "Firebase", "Sass"],
		urlLive: "#",
		urlCode: "#",
	},
	{
		id: 4,
		image: "projectImage",
		title: "E-commerce",
		technologies: ["React", "Redux", "Firebase", "Sass"],
		urlLive: "#",
		urlCode: "#",
	},
	{
		id: 5,
		image: "projectImage",
		title: "E-commerce",
		technologies: ["React", "Redux", "Firebase", "Sass"],
		urlLive: "#",
		urlCode: "#",
	},
	{
		id: 6,
		image: "projectImage",
		title: "E-commerce",
		technologies: ["React", "Redux", "Firebase", "Sass"],
		urlLive: "#",
		urlCode: "#",
	},
];

const Projects = () => {
	return (
		<section id="projects" className={styles.projects}>
			<h3>My Projects</h3>
			<ul className={styles.projects__grid}>
				{dummyProjects.map((project) => (
					<li className={styles.projects__card} key={project.id}>
						{/* image */}
						<div className={styles.projects__image}>
							<img src={projectImage} alt={project.title} />
							<div className={styles.projects__links}>
								<div className={styles.projects__linksCenter}>
									<a href="">LIVE</a>
									<a href="">CODE</a>
								</div>
							</div>
						</div>
						{/* info */}
						<div className={styles.projects__info}>
							<h4>{project.title}</h4>
							<div className={styles.projects__technologies}>
								{project.technologies.map((technology, index) => (
									<span key={index}>{technology}</span>
								))}
							</div>
						</div>
					</li>
				))}
			</ul>
		</section>
	);
};

export default Projects;
