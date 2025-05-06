// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'MuranoDocs',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/Murano-Bot' },
				{ icon: 'discord', label: 'Discord', href: 'https://discord.gg/' },
				{ icon: 'blueSky', label: 'BlueSky', href: 'https://bsky.app/profile/yamainu.xyz' },
			],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
