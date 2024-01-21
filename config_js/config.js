/*
 * Secure plugin configuration
 * Copyright (c) 2018 Cybozu
 *
 * Licensed under the MIT License
 * https://opensource.org/license/mit/
 */
jQuery.noConflict();
(function($, PLUGIN_ID) {
    'use_strict';

    $('#check-plugin-submit').on('click', () => {
        const URL = 'https://zany-dollop-p57xrpr6pvv364g5-3000.app.github.dev/';//'ここにリクエスト先のURLを指定'
        // パスの指定
        const PATH = 'api/data';
        // HTMLのinputFieldのテキスト情報の取得
        const text = $('#inputText').val();
        // 保存したい情報をヘッダーに設定
        const pluginHeader = {
            'CUSTOM-REQUEST-HEADER': text
        };
        kintone.plugin.app.setProxyConfig(URL+PATH, 'POST', pluginHeader, {});
    });

    $('#check-plugin-cancel').on('click', () => {
        history.back();
    });
})(jQuery, kintone.$PLUGIN_ID);