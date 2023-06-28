import lume from "lume/mod.ts";

const site = lume({
 src: "./src"
});

site.copy("images");
site.copy("styles");
site.copy("js");
site.data("layout", "layout.njk", "/");

export default site;