import plophub from 'plophub'

module.exports = function (plop) {
    plophub(plop)
    // controller generator
    plop.setGenerator('controller', {
        description: 'application controller logic',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'controller name please'
        }],
        actions: [{
            type: 'add',
            path: 'src/{{name}}.js',
            templateFile: 'controller.hbs'
        }]
    });
};
