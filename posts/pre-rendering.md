---
title: "【2022年最新】Visual Studio Codeのおすすめ拡張機能"
date: "2020-01-01"
---

どんな現場でも最低限入れておく！というものを選びました。

### [1.Japanese Language Pack](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-ja)<br>
英語が第一言語の人以外は推奨、最近はVScodeをインストールすると推奨してくることも

### [2.Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)<br>
英語のスペルミスを波線で教えてくれます。自分で作成した変数名にも反応してしまうので注意(無視でOK)

### [3.LiveServer](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

HTMLファイルを開いて右クリック⇒**Open with LiveServer**または ショートカットキー押したまま、Mac:option(**⌥**)押したままL→Oでデフォルトブラウザに表示してくれる

### [4.Path Autocomplete]("https://marketplace.visualstudio.com/items?itemName=ionutvmi.path-autocomplete)
<!-- /wp:heading -->

ファイルパス補完候補を表示

### 補足：Bracket Pair Colorizer2について

括弧記号を色付けしてくれるとても便利な拡張機能でしたが、[公式ページ](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2)にも記載の通り、VScodeの標準機能に搭載されました。

>This project started on 3 Dec 2016. Now 5 years later, it has become a native feature in VSCode.<br>This extension has seen wilder success then I could over ever dreamed of, with over 10M+ downloads.<br>I'm glad so many people found it useful, however it no longer has a purpose entering 2022 so development will no longer continue.<br>https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2

以下の手順で設定しましょう。

1.左上のCode⇒基本設定⇒設定<br>
または⌘+,(Mac)Ctrl+,(Windows)

<figure class="wp-block-image size-full"><img src="https://healthy-programmer.com/wp-content/uploads/2022/04/スクリーンショット-2022-04-11-20.38.02.png" alt="" class="wp-image-84"/></figure>

2.右上の設定(JSON)をクリック

<figure class="wp-block-image size-full"><img src="https://healthy-programmer.com/wp-content/uploads/2022/04/スクリーンショット-2022-04-11-20.38.27.png" alt="" class="wp-image-85"/></figure>

以下のコードをコピーして貼り付け

```bash
        "editor.bracketPairColorization.enabled": true,
        "editor.guides.bracketPairs":"active"
```

<figure class="wp-block-image size-full"><img src="https://healthy-programmer.com/wp-content/uploads/2022/04/スクリーンショット-2022-04-11-20.50.17-1.png" alt="" class="wp-image-87"/></figure>

4.VScodeを一度終了し、再度起動します。<br>下記画像のように **{ }** の数が増えてくるとどの **{** と **}** がペアなのかわかりにくくなりますが、この設定をしておくことで **{ }** が片方無い！ということも防げるので時短になります。

<figure class="wp-block-image size-full"><img src="https://healthy-programmer.com/wp-content/uploads/2022/04/スクリーンショット-2022-04-11-21.25.54.jpg" alt="" class="wp-image-96"/></figure>
