# SkyWay Renewal Project

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
$ bundle install --path vendor/bundle
```
3. Install npm, and then install all necessary packages:
```sh
$ sudo npm install
```

Make sure node and npm 


#### Run

1. run gulp (Individual gulp tasks are kept in gulp/tasks/)
```
$ gulp
```
2. access [http://localhost:3000/](http://localhost:3000/).

## File and Folder Structures

| file / directory  | content                                                       |
|:------------------|:--------------------------------------------------------------|
| _includes/        | include files                                                 |
| _layouts/         | template files                                                |
| _sites/           | built files for local Web server. aren't pushed to GitHub.    |
| build/            | output files from gulp                                        |
| docs/             | documentation files                                           |
| en/               | __HTML files in English__                                     |
| gulp/             | gulp scripts                                                  |
| images/           | __images__                                                    |
| news/             | contains news posts                                           |
| node_modules/     |                                                               |
| src/compass/      | __sass and css files__                                        |
| src/javascript/   | __scripts__                                                   |
| unused/           | HTML files which haven't been optimized for Jekyll            |
| vendor/           |                                                               |
|-------------------|---------------------------------------------------------------|
| .gitignore        |                                                               |
| _config.yml       | config of Jekyll                                              |
| favicon.ico       | favicon                                                       |
| Gemfile           |                                                               |
| Gemfile.lock      |                                                               |
| gulpfule.js       | gulp build file (Reads contents of 'gulp' folder)             |
| README.md         |                                                               |
| robots.txt        |                                                               |
| *.html            | __HTML files in Japanese__                                    |

## Reference

- [Using Jekyll with GitHub Pages by GitHub](https://help.github.com/articles/using-jekyll-with-pages/)
- [Jekyll](http://jekyllrb.com)
- [Liquid](https://docs.shopify.com/themes/liquid-documentation/basics) … Template engine of Jekyll
