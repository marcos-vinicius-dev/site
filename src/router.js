import Vue from 'vue';
import Router from 'vue-router';
import home from './views/home/home.vue';
import root from './views/root.vue';

const locale = require('browser-locale')();

console.log(locale);
Vue.use(Router);

// Lazy load everything but home page!
const contactUs = () => import('./views/contact-us/contact-us.vue');
const aboutUs = () => import('./views/about-us/about-us.vue');


const browserLang = (locale || 'pt-BR').substring(0, 2);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '*',
            redirect: `/${browserLang}/home`
        },
        {
            path: '/inicio',
            redirect: `/${browserLang}/sobre`
        },
        {
            path: '/home',
            redirect: `/${browserLang}/home`
        },
        {
            path: '/contato',
            redirect: `/${browserLang}/contato`
        },
        {
            path: '/:locale',
            component: root,
            children: [
                {
                    path: 'home',
                    name: 'home',
                    component: home,
                    meta: {
                        title: 'Home | Marcos Vinicius'
                    }
                },
                {
                    path: 'about-us',
                    name: 'about-us',
                    component: aboutUs,
                    meta: {
                        title: 'Sobre | Marcos Vinicius'
                    }
                },
                {
                    path: 'contact-us',
                    name: 'contact-us',
                    component: contactUs,
                    meta: {
                        title: 'Contato | Marcos Vinicius'
                    }
                },
                {
                    path: '*',
                    redirect: `/${browserLang}/home`
                }
            ]
        }
    ],
    scrollBehavior() {
        return {
            x: 0,
            y: 0
        }
    }
});

export default router;
