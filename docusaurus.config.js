const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

const createConfig = async () => {
return    {
      title: 'Keep your notes',
      tagline: '',
      url: 'https://athomasliz.github.io',
      baseUrl: '/Notesaurus/',
      projectName: 'Notesaurus',
      organizationName: 'athomasliz',
      onBrokenLinks: 'throw',
      onBrokenMarkdownLinks: 'warn',
      favicon: 'img/favicon.ico',
      markdown: {
        mermaid: true,
      },
      themes: ['@docusaurus/theme-live-codeblock','@docusaurus/theme-mermaid'],
      stylesheets: ['https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.woff2'],
      presets: [
        [
          'classic',
          ({
            docs: {
              sidebarPath: require.resolve('./sidebars.js'),
              editUrl: 'https://github.com/athomasliz/Notesaurus/tree/main/',
            },
            blog: {
              blogSidebarCount: 50,
              showReadingTime: true,
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
          mermaid: {
            //theme: {light: 'default', dark: 'default'},
            options: {
              fontSize: 12,
              personFontSize: 12,
            },
          },
          prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
            additionalLanguages: ['java', 'yaml', 'bash'],
            magicComments: [
              // Remember to extend the default highlight class name as well!
              {
                className: 'theme-code-block-highlighted-line',
                line: 'highlight-next-line',
                block: {start: 'highlight-start', end: 'highlight-end'},
              },
              {
                className: 'theme-code-block-highlighted-line',
                line: 'Highlight next line',
              },
              {
                className: 'code-block-error-line',
                line: 'This will error',
                block: {start: 'error-start', end: 'error-end'},
              },
            ],
          },
        }),
    };
}
module.exports = createConfig;