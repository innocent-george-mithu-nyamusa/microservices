import { Router, Request, Response } from 'express';
import { UserRouter } from './users/routes/user.router';

const router: Router = Router();

router.use('/users', UserRouter);

router.get('/', async (req: Request, res: Response) => {
  res.send(`V0`);
});
// psql -h postgres.cqt4grwbnkvx.us-east-1.rds.amazonaws.com -U udagramdev postgres

export const IndexRouter: Router = router;
