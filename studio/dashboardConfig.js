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
                  buildHookId: '5cd322425f43bfd359eb3f53',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-j7ooh9tp',
                  apiId: 'cc9e99bf-588c-4dc5-999f-ab422339ba29'
                },
                {
                  buildHookId: '5cd322434c16dd9e69038725',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-exdqw8b1',
                  apiId: '305c08b8-c28e-4771-afff-f03e92eab183'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/magnushi/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-exdqw8b1.netlify.com', category: 'apps'}
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
