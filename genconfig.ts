import * as path from 'path'
import * as fs from 'fs'

const rules = require('@semantic-release/commit-analyzer/lib/default-release-rules')

type CommitType =
    | 'build'
    | 'chore'
    | 'ci'
    | 'docs'
    | 'feat'
    | 'fix'
    | 'perf'
    | 'refactor'
    | 'revert'
    | 'style'
    | 'test'

type ReleaseType = 'major' | 'minor' | 'patch' | false

interface ChangelogType {
    type: CommitType
    hidden: boolean
    section?: string
}

interface ReleaseRules {
    type?: CommitType
    release: ReleaseType
    breaking?: boolean
    revert?: boolean
    emoji?: string
    tag?: string
    component?: string
}

const releaseRules = uniqueMerge<ReleaseRules>('type', [
    ...rules,
    {
        type: 'build',
        release: 'patch',
    },
    {
        type: 'chore',
        release: false,
    },
    {
        type: 'ci',
        release: 'patch',
    },
    {
        type: 'docs',
        release: 'patch',
    },
    {
        type: 'feat',
        release: 'minor',
    },
    {
        type: 'fix',
        release: 'patch',
    },
    {
        type: 'perf',
        release: 'patch',
    },
    {
        type: 'refactor',
        release: 'patch',
    },
    {
        type: 'revert',
        release: 'patch',
    },
    {
        type: 'style',
        release: false,
    },
    {
        type: 'test',
        release: false,
    },
])

const sectionByType: Record<CommitType, string | undefined> = {
    build: 'Build System',
    chore: undefined,
    ci: 'Continuous Integration',
    docs: 'Documentation',
    feat: 'Features',
    fix: 'Bug Fixes',
    perf: 'Performance Improvements',
    refactor: 'Code Refactoring',
    revert: 'Reverts',
    style: 'Styles',
    test: undefined,
}

const changelogTypes = Object.entries(sectionByType)
    .filter(([type]) => !!type)
    .map(([type, section]) => {
        const release = releaseRules
            .filter((rule) => rule?.type === type)
            .some((rule) => !!rule.release)

        return {
            type,
            hidden: !release,
            section,
        } as ChangelogType
    })

const filePath = path.resolve(__dirname, 'release.config.js')

const fileData = `
const GITHUB_TOKEN = process.env.GITHUB_TOKEN
const config = ${JSON.stringify(getConfig(), null, 4)}

if (GITHUB_TOKEN) {
    config.plugins.push('@semantic-release/github')
}

module.exports = config
`

fs.writeFileSync(filePath, fileData)

function getConfig() {
    return {
        plugins: [
            [
                '@semantic-release/commit-analyzer',
                {
                    releaseRules,
                },
            ],
            [
                '@semantic-release/release-notes-generator',
                {
                    preset: 'conventionalcommits',
                    presetConfig: {
                        types: changelogTypes,
                    },
                },
            ],
            '@semantic-release/changelog',
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
}

function uniqueMerge<T>(key: string, ...arrs: T[][]) {
    const before = Array<T>().concat(...arrs)
    const next = Array<T>()

    before.forEach((row) => {
        const id = row[key]

        if (id) {
            const index = next.findIndex((nextRow) => nextRow[key] === id)

            if (index !== -1) {
                next.splice(index, 1)
            }
        }

        next.push(row)
    })

    return next
}
