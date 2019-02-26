# データをマップ化しよう！

## 説明
dataのcsvを入れ替えるだけで簡単にマップページが作成できます。   
leaflet1.3.1を使用しています。  
マップアイコンはleafletプラグインのLeaflet.awesome-markers plugin v2.0を使用しています。

## デモ
  https://codeformatsudo.github.io/busstop_otaki/
		

## 使い方
### 自分のアカウントでGithubにログインし、forkしてください。
* 自分のアカウントにコピーされます。

### 情報の掲載
* docsのdataフォルダにある各csvを編集します。
* github上でcsvを編集できますが、「raw」から生データをコピペしてcsvエディタなどで編集したほうが楽だと思います。   
csvの文字コードはutf-8、カンマ区切り、囲み文字なし、改行コード\LFです。  
エクセルでは編集しないでください。  
* 緯度経度は下記のサイトで調べられます。  
「ウェブ地図で緯度・経度を求める （Leaflet版）地理＠沼津高専」  
https://user.numazu-ct.ac.jp/~tsato/webmap/sphere/coordinates/advanced.html
* アイコン画像はFont Awesomeを使用しています。アイコン名をcsvのiconに入れてください。   
https://fontawesome.com/
* iconColorは次のどれかの色を指定してください。  
red, darkred, orange, green, darkgreen, blue, purple, darkpurple, cadetblue
* popupはhtmlになっています。タグを削除しないようにしてください。  
popupのソースだけ下記のオンラインHTMLエディタで修正すると楽だと思います。   
https://html5-editor.net/   
左にソースを貼り付けて、右で修正します。
* 修正したファイルはdataフォルダの「Upload files」でアップできます。


### GitHub Pagesでサイトを公開する
* SettingsのGitHub PagesのSouceでdocsフォルダを指定するとGithubページとして公開できます。


### コードの修正する場合
* 修正はresourceフォルダ内で作業してください。gulpでdocsに出力しています。