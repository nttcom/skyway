# SkyWay Renewal Project

- [Staging Repository (This)](https://github.com/nttcom-webcore/skyway-renewal)
- [Staging Site](http://nttcom-webcore.github.io/skyway-renewal/)

## IMPORTANT NOTICE

- Don't use master branch. Please use gh-pages branch instead.

## How to run in localhost

#### Setup

1. install “Bundler” with Gem.
```sh
$ cd ~/GitHub/nttcom-webcore/skyway-renewal/
$ sudo gem install bundler
```
2. install “github-pages” with Bundler.
```sh
$ bundle install
```

#### Run

1. run Jekyll.
```
$ bundle exec jekyll serve
```
2. access [http://localhost:4000/](http://localhost:4000/).

## File and Folder Structures

| file / directory  | content                                                       |
|:------------------|:--------------------------------------------------------------|
| .tmp/styles/      | _unknown_                                                     |
| _includes/        | include files                                                 |
| _layouts/         | template files                                                |
| _sites/           | built files for local Web server. aren't pushed to GitHub.    |
| app/              | HTML files which haven't been optimized to Jekyll             |
| bower_components/ |                                                               |
| dist/styles/      | _unknown_                                                     |
| elements/         |                                                               |
| en/               | __HTML files in English__                                     |
| images/           | __images__                                                    |
| scripts/          | __scripts__                                                   |
| styles/           | __css files__                                                 |
| .gitignore        |                                                               |
| Gemfile           |                                                               |
| LICENSE.md        |                                                               |
| README.md         |                                                               |
| _config.yml       | config of Jekyll                                              |
| bower.json        | config of Bower                                               |
| *.html            | __HTML files in Japanese__                                    |
| favicon.ico       | favicon                                                       |
| manifest.json     | _should delete_                                               |
| robots.txt        |                                                               |

## Reference

- [Using Jekyll with GitHub Pages by GitHub](https://help.github.com/articles/using-jekyll-with-pages/)
- [Jekyll](http://jekyllrb.com)
- [Liquid](https://docs.shopify.com/themes/liquid-documentation/basics) … Template engine of Jekyll
