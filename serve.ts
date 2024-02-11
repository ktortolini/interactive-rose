import Server from 'lume/core/server.ts';

const server = new Server({
	port: 8000,
	root: `${Deno.cwd()}/public`,
});

server.start();

console.log('\u{2764}\u{FE0F} thank you for viewing...');
