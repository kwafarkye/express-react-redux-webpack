import Express from 'express';

import * as Promise from 'bluebird';

const router = Express.Router();

router.get('/stuff', (req, res) => {
  return res.json({ hello: 'world' });
});

export default router;
