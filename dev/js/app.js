requirejs.config({
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
    },
    //Tells require that jquery is needed by bootstrap
    shim: {
        bootstrap: {
            deps: ['jquery']
        },
      },
});

// // Start the main app logic.
// requirejs(['jquery', 'canvas', 'app/sub'],
// function   ($,        canvas,   sub) {
//     //jQuery, canvas and the app/sub module are all
//     //loaded and can be used here now.
// });
