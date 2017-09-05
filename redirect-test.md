---
layout: responsive
lang: jp
title: リダイレクトのテスト
---

# リダイレクトのテスト

| lang | title | url | (noredirect) | new_url |
|:-----|:------|:----|:-------------|:--------|
{% for page in site.pages %}{% assign new_url = site.new_url | append: page.new_url %}{% assign new_url_strings = new_url | split: '#' %}{% capture migration_url %}{{ new_url_strings[0] }}?origin=skyway{% if new_url_strings[1] %}#{{ new_url_strings[1] }}{% endif %}{% endcapture %}| {{ page.lang }} | {{ page.title }} | [{{ page.url }}]({{ page.url | prepend: site.homedir[page.lang] }})  | [click]({{ page.url | prepend: site.homedir[page.lang] | append: '?noredirect' }}) | [{{ page.new_url }}]({{ migration_url }}) |
{% endfor %}

<style>
table {
}
th {
    color: #000;
    font-weight: bold;
}
th, td {
    border-collapse: collapse;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    padding: 2px 4px;
}
</style>