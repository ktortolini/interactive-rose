import lume from 'lume/mod.ts';
import jsx from 'lume/plugins/jsx_preact.ts';

const site = lume({
	src: './src',
	dest: './public',
	emptyDest: true,
	server: {
		port: 8000,
		open: true,
	}
});

site.copy('/styles/');
site.copy('/static/');

site.use(jsx());

export default site;
