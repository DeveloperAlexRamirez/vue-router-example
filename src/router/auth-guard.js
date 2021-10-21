const isAuthenticatedGuard = async (to, from, next) => {
  const random = Math.random() * 100;

  return new Promise(() => {
    if (random > 50) {
      console.log(random);
      next();
    } else {
      console.log('You cannnot enter');
      // next(false);
      next({ name: 'pokemon-home' });
    }
  });
};

export default isAuthenticatedGuard;
