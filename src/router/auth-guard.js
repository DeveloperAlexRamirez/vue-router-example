const isAuthenticatedGuard = async (to, from, next) => {
  const random = Math.random() * 100;

  return new Promise(() => {
    if (random > 50) {
      next();
    } else {
      console.log('You cannnot enter');
      next(false);
    }
  });
};

export default isAuthenticatedGuard;
