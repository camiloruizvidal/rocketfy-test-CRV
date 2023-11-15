import { CanActivateFn, Router } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
  if (false) {
    const router: Router = new Router();
    router.navigate(['/login']);
    return false;
  }
  return true;
};
