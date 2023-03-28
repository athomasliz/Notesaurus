// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

///** @type {import('@docusaurus/types').Config} */

const createConfig = async () => {
const mdxMermaid = await import('mdx-mermaid');
return    {
      title: 'Keep your notes',
      tagline: '',
      url: 'https://athomasliz.github.io',
      baseUrl: '/Notesaurus/',
      projectName: 'Notesaurus', // Usually your repo name.
      organizationName: 'athomasliz', // Usually your GitHub org/user name.
      onBrokenLinks: 'throw',
      onBrokenMarkdownLinks: 'warn',
      favicon: 'img/favicon.ico',
      themes: ['@docusaurus/theme-live-codeblock'],
      stylesheets: ['https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.woff2'],
      presets: [
        [
          'classic',
          ///** @type {import('@docusaurus/preset-classic').Options} */
          ({
            docs: {
              sidebarPath: require.resolve('./sidebars.js'),
              // Please change this to your repo.
              editUrl: 'https://github.com/athomasliz/Notesaurus/tree/main/',
              remarkPlugins: [[mdxMermaid.default, {
                theme: { light: 'neutral', dark: 'forest' }, 
                themeVariables: { lineColor: '#9CCC65'},
              }]],
            },
            blog: {
              blogSidebarCount: 50,
              showReadingTime: true,
              // Please change this to your repo.
              editUrl: 'https://github.com/athomasliz/Notesaurus/tree/main/',
            },
            theme: {
              customCss: require.resolve('./src/css/custom.css'),
            },
          }),
        ],
      ],

      themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
          tableOfContents: {
            minHeadingLevel: 2,
            maxHeadingLevel: 5,
          },
          navbar: {
            title: 'Notesaurus',
            logo: {
              alt: 'My Site Logo',
              src: 'img/logo.svg',
            },
            items: [
              {
                type: 'doc',
                docId: 'intro',
                position: 'left',
                label: 'Notes',
              },
              {to: '/blog', label: 'Book Review', position: 'left'},
              {
                href: 'https://github.com/athomasliz/Notesaurus',
                label: 'GitHub',
                position: 'right',
              },
            ],
          },
          footer: {
            style: 'dark',
            links: [
              /*
              {
                title: 'Docs',
                items: [
                  {
                    label: 'Notes',
                    to: '/docs/intro',
                  },
                ],
              },
              {
                title: 'Community',
                items: [
                  
                  {
                    label: 'Stack Overflow',
                    href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                  },
                  {
                    label: 'Discord',
                    href: 'https://discordapp.com/invite/docusaurus',
                  },
                  {
                    label: 'Twitter',
                    href: 'https://twitter.com/docusaurus',
                  },
                  
                ],
                
              },
              {
                title: 'More',
                items: [
                  {
                    label: 'Blog',
                    to: '/blog',
                  },
                  {
                    label: 'GitHub',
                    href: 'https://github.com/facebook/docusaurus',
                  },
                ],
              },
              */
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Notesaurus. Built with Docusaurus.`,
          },
          prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
            additionalLanguages: ['java', 'yaml'],
            magicComments: [
              // Remember to extend the default highlight class name as well!
              {
                className: 'theme-code-block-highlighted-line',
                line: 'highlight-next-line',
                block: {start: 'highlight-start', end: 'highlight-end'},
              },
              {
                className: 'code-block-error-line',
                line: 'This will error',
              },
            ],
          },
        }),
    };
}
module.exports = createConfig;