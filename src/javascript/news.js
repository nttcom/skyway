/**
 * Created by yusuke on 2016/12/15.
 */

var $ = require('jquery');

$(document).ready(function() {

    // 言語判定（英語ページの場合は英語の情報を取得するため）
    var href = window.location.href;
    var prefix = 'ja';
    if(href.match('\/en')){
        prefix = 'en-us';
    }

    // APIリクエスト
    // リクエスト条件：最大取得件数4件、作成日で降順ソート
    const announce = 'https://skyway-support.zendesk.com/api/v2/help_center/'+prefix+'/sections/207255008/articles.json?sort_by=created_at&sort_order=desc&per_page=4';
    const release = 'https://skyway-support.zendesk.com/api/v2/help_center/'+prefix+'/sections/207271007/articles.json?sort_by=created_at&sort_order=desc&per_page=4';
    const maintenance = 'https://skyway-support.zendesk.com/api/v2/help_center/'+prefix+'/sections/207271047/articles.json?sort_by=created_at&sort_order=desc&per_page=4';
    const failure = 'https://skyway-support.zendesk.com/api/v2/help_center/'+prefix+'/sections/207255108/articles.json?sort_by=created_at&sort_order=desc&per_page=4';

    $.ajax({
        url: announce,
        type: 'GET',
        dataType: 'json',
        async: 'true',
    }).done(function(data) {
        updateNews(data,'announce');
    }).fail(function(data) {
        console.log('xhr failed');
    });

    $.ajax({
        url: release,
        type: 'GET',
        dataType: 'json',
        async: 'true',
    }).done(function(data) {
        updateNews(data,'release');
    }).fail(function(data) {
        console.log('xhr failed');
    });

    $.ajax({
        url: maintenance,
        type: 'GET',
        dataType: 'json',
        async: 'true',
    }).done(function(data) {
        updateNews(data,'maintenance');
    }).fail(function(data) {
        console.log('xhr failed');
    });

    $.ajax({
        url: failure,
        type: 'GET',
        dataType: 'json',
        async: 'true',
    }).done(function(data) {
        updateNews(data,'failure');
    }).fail(function(data) {
        console.log('xhr failed');
    });

    // タブ切り替え
    $('#tab-menu li').on('click', function(){
        if($(this).not('active')){
            // タブメニュー
            $(this).addClass('active').siblings('li').removeClass('active');
            // タブの中身
            var index = $('#tab-menu li').index(this);
            switch (index){
                case 0:
                    $('#tab0').addClass('active').removeClass('inactive');
                    $('#tab1').addClass('inactive').removeClass('active');
                    $('#tab2').addClass('inactive').removeClass('active');
                    $('#tab3').addClass('inactive').removeClass('active');
                    break;
                case 1:
                    $('#tab0').addClass('inactive').removeClass('active');
                    $('#tab1').addClass('active').removeClass('inactive');
                    $('#tab2').addClass('inactive').removeClass('active');
                    $('#tab3').addClass('inactive').removeClass('active');
                    break;
                case 2:
                    $('#tab0').addClass('inactive').removeClass('active');
                    $('#tab1').addClass('inactive').removeClass('active');
                    $('#tab2').addClass('active').removeClass('inactive');
                    $('#tab3').addClass('inactive').removeClass('active');
                    break;
                case 3:
                    $('#tab0').addClass('inactive').removeClass('active');
                    $('#tab1').addClass('inactive').removeClass('active');
                    $('#tab2').addClass('inactive').removeClass('active');
                    $('#tab3').addClass('active').removeClass('inactive');
                    break;
            }

        }
    });

});

// 最新情報のDom生成
function updateNews(obj,id){
    var dom = '';
    for(var i = 0;i < obj.articles.length;i++){
        dom += '<div class="row mini-headline"><div class="col-sm-2"><div class="row"><div class="col-sm-10 col-sm-offset-1 mini-headline-date">'
            + obj.articles[i].body.substr(4,10)
            + '</div></div></div><div class="col-sm-10 mini-headline-text">'
            + obj.articles[i].body + '</div></div>'
    }
    $('#'+id).html(dom);
}