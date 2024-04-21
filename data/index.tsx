export const data = {
	name: "Gurshan Jhinger",
	role: "Software Developer",
	role_short: "Full Stack",
	current: "Fresh Prep",
	current_link: "https://www.freshprep.ca",
	email: "gurshanjhinger22@gmail.com",
	github: "https://www.github.com/jhinger",
	linkedin: "https://www.linkedin.com/in/gurshan-jhinger/",
	nav: [
		{
			name: "work",
			link: "",
		},
		{
			name: "resume",
			link: `${process.env.BASE_URL}/resume.pdf`,
		},
	],
	introduction: [
		{
			text: (
				<p>
					Hey - I&apos;m Gurshan, a Software Developer passionate about creating
					satisfying web experiences.
				</p>
			),
		},
		{
			text: (
				<p>
					I graduated from <b>Simon Fraser University</b> in December 2023 with
					a Bachelors of Science in Computer Science and 16 months of internship
					experience.
				</p>
			),
		},
		{
			text: (
				<p>
					Since then, I&apos;ve been a part of the team at <b>Fresh Prep</b>{" "}
					developing sustainable solutions to everyday food challenges - you can
					read about some of the cool things we&apos;ve been working on{" "}
					<a href="https://blog.freshprep.ca/2023/04/04/plastic-waste-is-just-poor-taste/">
						<b>here.</b>
					</a>
				</p>
			),
		},
		{
			text: (
				<p>
					Outside of work, you can find me trying (and failing) to get into
					YCombinator, or being the worlds least-competitive competitive
					programmer :]
				</p>
			),
		},
	],
	experience: [
		{
			name: "Fresh Prep",
			position: "Full Stack Developer",
			duration: "April 2024 - Current",
			image: `${process.env.BASE_URL}/freshprep-bg.jpg`,
			url: "https://www.freshprep.ca",
			sizes: "2553x1228",
		},
		{
			name: "Fresh Prep",
			position: "Full Stack Developer Intern",
			duration: "Sept 2023 - April 2024",
			image: `${process.env.BASE_URL}/freshprep-bg2.png`,
			url: "https://www.freshprep.ca",
			sizes: "1000x500",
		},
		{
			name: "Later",
			position: "Frontend Developer Intern",
			duration: "Sept 2022 - Dec 2022",
			image: `${process.env.BASE_URL}/later-bg.png`,
			url: "https://www.later.com",
			sizes: "1800x1200",
		},
		{
			name: "PixlWorks Productions",
			position: "Software Developer Intern",
			duration: "Jan 2022 - April 2022",
			image: `${process.env.BASE_URL}/pixlworks-bg.jpg`,
			url: "https://www.pixlworks.com",
			sizes: "2000x1333",
		},
	],
	spotify: {
		url: "https://open.spotify.com/track/6dquCx5KAW5jCgGgoTlghL",
		preview_url:
			"https://p.scdn.co/mp3-preview/d0d405e0518ba690d30cb1870b4bacb4997c6536?cid=ff73a8a24f874120886561652c2ad2cc",
		image: "https://i.scdn.co/image/ab67616d0000b273fc03b97c30ce11e30e65e389",
		name: "Every Second",
		artist: "Mina Okabe",
		played_at: "2024-04-20T03:08:18.106Z",
	},
} as const;
