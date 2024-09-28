# Hinode Module - HubSpot

<!-- Tagline -->
<p align="center">
    <b>A Hugo module to add Hubspot to your Hinode site (work in progress)</b>
    <br />
</p>

<!-- Badges -->
<p align="center">
    <a href="https://gohugo.io" alt="Hugo website">
        <img src="https://img.shields.io/badge/generator-hugo-brightgreen">
    </a>
    <a href="https://gethinode.com" alt="Hinode theme">
        <img src="https://img.shields.io/badge/theme-hinode-blue">
    </a>
    <a href="https://github.com/gethinode/mod-hubspot/commits/main" alt="Last commit">
        <img src="https://img.shields.io/github/last-commit/gethinode/mod-hubspot.svg">
    </a>
    <a href="https://github.com/gethinode/mod-hubspot/issues" alt="Issues">
        <img src="https://img.shields.io/github/issues/gethinode/mod-hubspot.svg">
    </a>
    <a href="https://github.com/gethinode/mod-hubspot/pulls" alt="Pulls">
        <img src="https://img.shields.io/github/issues-pr-raw/gethinode/mod-hubspot.svg">
    </a>
    <a href="https://github.com/gethinode/mod-hubspot/blob/main/LICENSE" alt="License">
        <img src="https://img.shields.io/github/license/gethinode/mod-hubspot">
    </a>
</p>

## About

![Logo](https://raw.githubusercontent.com/gethinode/hinode/main/static/img/logo.png)

Hinode is a clean blog theme for [Hugo][hugo], an open-source static site generator. Hinode is available as a [template][repository_template], and a [main theme][repository]. This repository maintains a Hugo module to embed [HubSpot][hubspot] forms within a Hinode site. Visit the Hinode documentation site for [installation instructions][hinode_docs].

## Contributing

This module uses [semantic-release][semantic-release] to automate the release of new versions. The package uses `husky` and `commitlint` to ensure commit messages adhere to the [Conventional Commits][conventionalcommits] specification. You can run `npx git-cz` from the terminal to help prepare the commit message.

## Configuration

This module supports the following parameters (see the section `params.modules` in `config.toml`):

| Setting                   | Default | Description |
|---------------------------|---------|-------------|
| portal                    |         | The portal ID of the HubSpot account where you created the form. This is used to retrieve the form definition. |
| region                    |         | The region of the portal where the form was created. This is used to retrieve the form definition. |

## Content Security Policy

HubSpot forms require several directives to be added to your Content Security Policy. See the [policy requirements][hubspot_csp] for more details. The following directives are required to enable correct form handling:

| Policy            | Value                                                            |
|-------------------|------------------------------------------------------------------|
| script-src        | 'self' *.hsforms.net *.hs-scripts.com *.google.com *.gstatic.com |
| connect-src       | 'self' *.hsforms.com *.hubspot.com |
| frame-src         | 'self' *.google.com |
| frame-ancestors   | 'self' *.google.com |
| img-src           | 'self' data: *.hsforms.net *.hsforms.com |

<!-- MARKDOWN LINKS -->
[hugo]: https://gohugo.io
[hinode_docs]: https://gethinode.com
[hubspot]: https://hubspot.com
[hubspot_csp]: https://knowledge.hubspot.com/domains-and-urls/ssl-and-domain-security-in-hubspot#content-security-policy
[repository]: https://github.com/gethinode/hinode.git
[repository_template]: https://github.com/gethinode/template.git
[conventionalcommits]: https://www.conventionalcommits.org
[husky]: https://typicode.github.io/husky/
[semantic-release]: https://semantic-release.gitbook.io/
