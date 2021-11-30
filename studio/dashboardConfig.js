export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61a6a0fda62a4b29158e8717',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-7ud7p23f',
                  apiId: '936f16c6-3817-4068-bb43-8e0576d4f727'
                },
                {
                  buildHookId: '61a6a0fde31ba22792e46031',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-9cuas8mi',
                  apiId: '4c0ef66f-8df1-4e22-b5e8-5c4900014903'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cowenld/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-9cuas8mi.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
