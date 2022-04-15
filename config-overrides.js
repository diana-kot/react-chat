const { alias } = require('react-app-rewire-alias');

module.exports = function override(config, env) {
    alias({
        '@components': 'src/components',
        '@containers': 'src/containers',
        '@utils': 'src/utils',
        '@styles': 'src/styles',
        '@pages': 'src/pages',
        '@modules': 'src/modules',
        '@assets': 'src/assets',
        '@redux': 'src/redux',
        '@containers': 'src/containers',
        
    })(config);

    return config;
}