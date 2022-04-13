const { alias } = require('react-app-rewire-alias');

module.exports = function override(config, env) {
    alias({
        '@components': 'src/components',
        '@containers': 'src/containers',
        '@constants': 'src/constants',
        '@utils': 'src/utils',
        '@styles': 'src/styles',
        '@routes': 'src/routes',
        '@static': 'src/static/bg.jpg',
        '@store': 'src/store',
        '@pages': 'src/pages',
        '@modules': 'src/modules',
        '@assets': 'src/assets',

        


    })(config);

    return config;
}