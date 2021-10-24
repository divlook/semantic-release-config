# README

[semantic-release](https://github.com/semantic-release/semantic-release) shareable configuration for me

## Plugins

이 shareable configuration은 다음 플러그인들을 사용합니다.

-   [@semantic-release/commit-analyzer](https://github.com/semantic-release/commit-analyzer)
-   [@semantic-release/release-notes-generator](https://github.com/semantic-release/release-notes-generator)
-   [@semantic-release/changelog](https://github.com/semantic-release/changelog)
-   [@semantic-release/npm](https://github.com/semantic-release/npm)
-   [@semantic-release/git](https://github.com/semantic-release/git)

### Plugins for GitHub

`process.env.GITHUB_TOKEN`이 감지되면 다음 플러그인이 활성화됩니다.

-   [@semantic-release/github](https://github.com/semantic-release/github)

### Plugins for GitLab

`process.env.GITLAB_TOKEN`이 감지되면 다음 플러그인이 활성화됩니다.

-   [@semantic-release/gitlab](https://github.com/semantic-release/gitlab)

## Setup

```bash
npm install semantic-release @semantic-release/changelog @semantic-release/git

# use gitlab
npm install @semantic-release/gitlab
```

## Usage

create `.releaserc.yml`

```yml
extends: ./dist/release.config.js
branches: main
```

## References

-   [@jedmao/semantic-release-npm-github-config](https://github.com/jedmao/semantic-release-npm-github-config)
