import { User } from '../../models';
import { withCatch } from '../../../utils';

function hydrateUser(req, _, next) {
  const { session } = req;
  if (!session.user) {
    return next();
  }

  const { user } = session;
  const currentUser = await withCatch(User.findById(user.id, '-password'));
  // set the current User model instance on req object
  req.user = currentUser;
  return next();
}

export default hydrateUser;
