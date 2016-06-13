# jstools
Javascript Tools Training


# NPM

NPM is the package manager used by Node.js applications - you can find a ton of modules here, so you don't have to reinvent the wheel. It is like Maven for Java or Composer for PHP.
```npm init```
Dependencies
```npm install --save```
Dev Dependencies
```npm install --save-dev```

When you are building web applications, you may need to minify your JavaScript files, concatenating CSS files and so on. The modules that will do it will be only ran during the building of the assets, so the running application doesn't need them.

# BOWER

Add bowerrc
```bower init (cmd only?)```
```bower install PACKAGE --save```


# REQUIRE JS

```requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'js/',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        jquery: '../bower_components/jquery/dist/jquery.min',
        bootstrap: '../bower_components/bootstrap/dist/js/bootstrap.min'
    }
});
```
```
<script data-main="js/app.js" src="bower_components/requirejs/require.js"></script>
or
<script src="bower_components/requirejs/require.js"></script>
<script src="js/app.js"></script>

then
	  requirejs(['jquery', 'bootstrap', 'sample']);
```

AMD approach for require: http://javascriptplayground.com/blog/2012/07/requirejs-amd-tutorial-introduction/
