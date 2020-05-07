// next.config.js
const withCSS = require('@zeit/next-css')
const { weeklyData } = require('./content/weekly')

const weeklyPages = {}
const ignorePages = ['/weekly/[pid]']
for (const w of weeklyData) {
    weeklyPages[`/weekly/${w.id}`] = { page: '/weekly/[pid]', query: { pid: `${w.id}` } }
}

module.exports = withCSS({
    exportPathMap: async function(
        defaultPathMap,
    ) {
        const pages = {
            ...defaultPathMap,
            ...weeklyPages,
        }

        for (const p of ignorePages) {
            delete pages[p]
        }

        return pages
    },
    webpack (config, options) {
        config.module.rules.push({
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            use: {
                loader: 'url-loader',
                options: {
                limit: 100000
                }
            }
        })
        return config
    }
})
