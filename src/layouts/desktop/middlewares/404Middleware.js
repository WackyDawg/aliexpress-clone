const path = require("path");

module.exports = function () {
  return function (req, res, next) {
    if (req) {
      const url = req.originalUrl;
      const pageName = path.basename(url, path.extname(url));

      if (url === "/") {
        // Handle the default URL (root path)
        // You can customize this as needed
        // For example, you can render a specific homepage.
        // res.render("home");
        // Or you can redirect to a specific URL.
        // res.redirect("/home");
        // Replace the above two lines as per your site's requirements.
        next(); // Continue to the next middleware or route handler
      } else if (!url.includes("/p/error/")) {
        const isWordOnly = /^[a-zA-Z]+$/.test(pageName);
        if (isWordOnly) {
          res.redirect("/404.html");
        } else {
          // Redirect to the new URL
          res.redirect(`/p/error/${pageName}.html`);
        }
      } else {
        res.status(404).render("shared/p/errors/404", { pageTitle: pageName });
      }
    } else {
      next();
    }
  };
};    
