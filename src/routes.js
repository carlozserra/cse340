import Express from 'express';

import {showOrganizationsPage} from './controllers/organizations.js';
import {showProjectsPage} from './controllers/projects.js';
import {showCategoriesPage} from './controllers/categories.js';
import {showHomePage} from './controllers/index.js';
import { test500Error } from './controllers/errors.js';

const router = Express.Router();

router.get('/', showHomePage);
router.get('/organizations', showOrganizationsPage);
router.get('/projects', showProjectsPage);
router.get('/categories', showCategoriesPage);

//error handling route for testing 500 errors
router.get('/test-error', test500Error);

export default router;