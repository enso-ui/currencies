import routeImporter from '@enso-ui/ui/src/modules/importers/routeImporter';

const routes = routeImporter.fromGlob(import.meta.glob('./currencies/*.js', { eager: true }));
const RouterView = () => import('@enso-ui/ui/src/bulma/pages/Router.vue');

export default {
    path: 'currencies',
    component: RouterView,
    meta: {
        breadcrumb: 'currencies',
        route: 'administration.currencies.index',
    },
    children: routes,
};
