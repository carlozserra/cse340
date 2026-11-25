
// Test route for 500 errors
const test500Error = (req, res, next) => {
    const err = new Error('This is a test error');
    err.status = 500;
    next(err);
};

export { test500Error };
