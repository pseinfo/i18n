import app_header from '../../declarations/namespaces/app.header';


export default ( {
  actions: {
    explore: 'Explore',
    search: 'Search',
    donate: 'Support',
    settings: 'Settings'
  },
  search: {
    placeholder: 'Search elements, nuclides, compounds …'
  }
} ) as const satisfies app_header;
