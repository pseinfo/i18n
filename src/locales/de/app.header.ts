import app_header from '../../declaration/namespaces/app.header';


export default ( {
  actions: {
    explore: 'Entdecken',
    search: 'Suchen',
    donate: 'Unterstützen',
    settings: 'Einstellungen'
  },
  search: {
    placeholder: 'Suche nach Elementen, Isotopen, Stoffverbindungen …'
  }
} ) as const satisfies app_header;
