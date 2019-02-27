# データをマップ化しよう！

## 説明
dataのcsvを入れ替えるだけで簡単にマップページが作成できます。   
leaflet1.3.1を使用しています。  
マップアイコンはleafletプラグインのLeaflet.awesome-markers plugin v2.0を使用しています。

## デモ
  https://codeformatsudo.github.io/busstop_otaki/
		

## 使い方
* 自分のアカウントでGithubにログインし、このリポジトリのmasterをforkしてください。
* 自分のアカウントにコピーされます。

### 基本情報の編集
* docsのdataフォルダにあるinitialSetting.csvを編集します。
* github上で編集できます。
* データをダウンロードして編集する場合はcsvエディタを使用してください。   
* Excelでは編集しないでください。

### アイコンデータの編集
* docsのdataフォルダにあるdata.csvを編集します。
* github上でcsvを編集できますが、「raw」から生データをコピペしてcsvエディタなどで編集したほうが楽だと思います。   
csvの文字コードはutf-8、カンマ区切り、囲み文字なし、改行コード\LFです。  
* Excelでは編集しないでください。  
* 緯度経度は下記のサイトで調べられます。  
「ウェブ地図で緯度・経度を求める （Leaflet版）地理＠沼津高専」  
https://user.numazu-ct.ac.jp/~tsato/webmap/sphere/coordinates/advanced.html
* アイコン画像はFont Awesomeを使用しています。アイコン名をcsvのiconに入れてください。   
https://fontawesome.com/
* iconColorは次のどれかの色を指定してください。  
red, blue, green, purple, orange, darkred, lightred, beige, darkblue, darkgreen, cadetblue, darkpurple, white, pink, lightblue, lightgreen, gray, black, lightgray
* popupはhtmlになっています。タグを削除しないようにしてください。  
popupのソースだけ下記のオンラインHTMLエディタで修正すると楽だと思います。   
https://html5-editor.net/   
左にソースを貼り付けて、右で修正します。
* 修正したファイルはdataフォルダの「Upload files」でアップできます。

### 写真アイコンデータの編集
* docsのdataフォルダにあるphotoData.csvを編集します。
* 写真アイコンが必要ない場合はphotoData.csvを削除してください。
* 使用する写真は幅300pxほどに編集して、common/img/photoフォルダに入れてください。
* 編集方法はアイコンデータの編集と同様ですが、アイコンの指定方法等が異なります。
* iconの`common/img/photo/○○○.jpg`の○○○.jpgを用意した写真ファイル名にしてください。
* popupの`<img src="common/img/photo/○○○.jpg">`のjpg名も変更してください。
* `<a href="`と`" target="_blank" rel="noopener noreferrer">`の間にリンクしたいURLを入れてください。   
* タグを消さないようにしてください。
* オンラインHTMLエディタでは画像は表示されませんが、リンク挿入機能を使うとタグを消す心配がなくなります。


### GitHub Pagesでサイトを公開する
* SettingsのGitHub PagesのSouceでdocsフォルダを指定するとGithubページとして公開できます。


### ライセンス
Leaflet.AwesomeMarkersとcolored markersはMITライセンスの下でライセンスされています   
http://opensource.org/licenses/mit-license.html.
Font Awesome: http://fortawesome.github.io/Font-Awesome/license/