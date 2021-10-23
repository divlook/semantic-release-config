
const GITHUB_TOKEN = process.env.GITHUB_TOKEN
const config = {
    "plugins": [
        [
            "@semantic-release/commit-analyzer",
            {
                "releaseRules": [
                    {
                        "breaking": true,
                        "release": "major"
                    },
                    {
                        "revert": true,
                        "release": "patch"
                    },
                    {
                        "emoji": ":racehorse:",
                        "release": "patch"
                    },
                    {
                        "emoji": ":bug:",
                        "release": "patch"
                    },
                    {
                        "emoji": ":penguin:",
                        "release": "patch"
                    },
                    {
                        "emoji": ":apple:",
                        "release": "patch"
                    },
                    {
                        "emoji": ":checkered_flag:",
                        "release": "patch"
                    },
                    {
                        "tag": "BUGFIX",
                        "release": "patch"
                    },
                    {
                        "tag": "FEATURE",
                        "release": "minor"
                    },
                    {
                        "tag": "SECURITY",
                        "release": "patch"
                    },
                    {
                        "tag": "Breaking",
                        "release": "major"
                    },
                    {
                        "tag": "Fix",
                        "release": "patch"
                    },
                    {
                        "tag": "Update",
                        "release": "minor"
                    },
                    {
                        "tag": "New",
                        "release": "minor"
                    },
                    {
                        "component": "perf",
                        "release": "patch"
                    },
                    {
                        "component": "deps",
                        "release": "patch"
                    },
                    {
                        "type": "FEAT",
                        "release": "minor"
                    },
                    {
                        "type": "FIX",
                        "release": "patch"
                    },
                    {
                        "type": "build",
                        "release": "patch"
                    },
                    {
                        "type": "chore",
                        "release": false
                    },
                    {
                        "type": "ci",
                        "release": "patch"
                    },
                    {
                        "type": "docs",
                        "release": "patch"
                    },
                    {
                        "type": "feat",
                        "release": "minor"
                    },
                    {
                        "type": "fix",
                        "release": "patch"
                    },
                    {
                        "type": "perf",
                        "release": "patch"
                    },
                    {
                        "type": "refactor",
                        "release": "patch"
                    },
                    {
                        "type": "revert",
                        "release": "patch"
                    },
                    {
                        "type": "style",
                        "release": false
                    },
                    {
                        "type": "test",
                        "release": false
                    }
                ]
            }
        ],
        [
            "@semantic-release/release-notes-generator",
            {
                "preset": "conventionalcommits",
                "presetConfig": {
                    "types": [
                        {
                            "type": "build",
                            "hidden": false,
                            "section": "Build System"
                        },
                        {
                            "type": "chore",
                            "hidden": true
                        },
                        {
                            "type": "ci",
                            "hidden": false,
                            "section": "Continuous Integration"
                        },
                        {
                            "type": "docs",
                            "hidden": false,
                            "section": "Documentation"
                        },
                        {
                            "type": "feat",
                            "hidden": false,
                            "section": "Features"
                        },
                        {
                            "type": "fix",
                            "hidden": false,
                            "section": "Bug Fixes"
                        },
                        {
                            "type": "perf",
                            "hidden": false,
                            "section": "Performance Improvements"
                        },
                        {
                            "type": "refactor",
                            "hidden": false,
                            "section": "Code Refactoring"
                        },
                        {
                            "type": "revert",
                            "hidden": false,
                            "section": "Reverts"
                        },
                        {
                            "type": "style",
                            "hidden": true,
                            "section": "Styles"
                        },
                        {
                            "type": "test",
                            "hidden": true
                        }
                    ]
                }
            }
        ],
        "@semantic-release/changelog",
        [
            "@semantic-release/npm",
            {
                "npmPublish": false
            }
        ],
        "@semantic-release/git"
    ],
    "branches": "main",
    "ci": false
}

if (GITHUB_TOKEN) {
    config.plugins.push('@semantic-release/github')
}

module.exports = config
