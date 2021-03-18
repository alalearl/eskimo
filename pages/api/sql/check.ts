import { checkDatabase } from '../../../libs/init-helper';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  let init;
  try {
    init = await checkDatabase();
  } catch (error) {
    return res.status(403).json({ message: 'no database founded.' });
  }
  res.status(200).json(init);
};
