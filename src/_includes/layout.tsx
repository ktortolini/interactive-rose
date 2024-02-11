export default ({ title, children }: Lume.Data, helpers: Lume.Helpers) => {
	return (
		<html>
			<head>
				<meta charSet='utf-8' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<title>{title}</title>
				<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css" />
				<link rel="stylesheet" href="/styles/fade.css" />
				<script src="https://cdn.jsdelivr.net/npm/p5@1.9.0/lib/p5.js" />
				<script defer src='/static/interactive-rose.js' />
			</head>
			<body>
				<main className="container">{children}</main>
			</body>
		</html>
	);
};
