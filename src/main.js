import Vue from 'vue';
import app from './app.vue';
import {router} from './routes';
import directive from './directive';

router.start(app, '#vue-app');
