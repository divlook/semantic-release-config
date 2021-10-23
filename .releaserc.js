module.exports = {
    plugins: [
        [
            '@semantic-release/commit-analyzer',
            {
                preset: 'angular',
                releaseRules: [
                    {
                        type: 'docs',
                        release: 'patch',
                    },
                    {
                        type: 'refactor',
                        release: 'patch',
                    },
                ],
            },
        ],
        '@semantic-release/release-notes-generator',
        [
            '@semantic-release/changelog',
            {
                preset: 'angular',
            },
        ],
        // '@semantic-release/github',
        [
            '@semantic-release/npm',
            {
                npmPublish: false,
            },
        ],
        '@semantic-release/git',
    ],
    branches: 'main',
    ci: false,
}
