/*
 * Secure plugin customize
 * Copyright (c) 2018 Cybozu
 *
 * Licensed under the MIT License
 * https://opensource.org/license/mit/
 */
(function(PLUGIN_ID) {
    'use_strict';

    kintone.events.on('app.record.index.show', (event) => {
        const URL='https://zany-dollop-p57xrpr6pvv364g5-3000.app.github.dev/';
        // パスの指定
        const PATH = 'api/data';
        // 保存したい情報をヘッダーに設定
        const desktopHeader = {
            DESKTOP_HEADER: 'tutorial20240121'
        };
        // サーバ側にリクエストを送信
        kintone.plugin.app.proxy(PLUGIN_ID, URL + PAHT, 'POST', desktopHeader, {}, (body, status,headers) => {
            console.log(status, body, headers);
        }, (error) => {
            console.log(error);
        });
        return event;
    })(kintone.$PLUGIN_ID);
})