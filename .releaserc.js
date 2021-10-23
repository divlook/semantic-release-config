const releaseRules = [
    {
        type: 'build',
        release: 'patch',
    },
    {
        type: 'ci',
        release: 'patch',
    },
    {
        type: 'chore',
        release: 'patch',
    },
    {
        type: 'docs',
        release: 'patch',
    },
    {
        type: 'refactor',
        release: 'patch',
    },
    {
        type: 'style',
        release: 'patch',
    },
    {
        type: 'test',
        release: 'patch',
    },
]

const pluginOption = {
    preset: 'angular',
    releaseRules,
}

module.exports = {
    plugins: [
        ['@semantic-release/commit-analyzer', pluginOption],
        ['@semantic-release/release-notes-generator', pluginOption],
        ['@semantic-release/changelog', pluginOption],
        [
            '@semantic-release/npm',
            {
                npmPublish: false,
            },
        ],
        '@semantic-release/git',
        // '@semantic-release/github',
    ],
    branches: 'main',
    ci: false,
}
