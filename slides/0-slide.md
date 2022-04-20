<!-- classes: title -->

import { YouTube } from '../src/youtube'
import { Sanko } from '../src/sanko'
import { LinkImage } from '../src/link-image'

<!-- ![](https://saruwakakun.com/sango/wp-content/uploads/2020/04/demo-04-1000x579.png) -->

# SANGO WEBINAR

2022.4.20

---


## steelydylan



<!-- block-start: grid -->

<!-- block-start: column -->

![](https://avatars.githubusercontent.com/u/2508691?v=4)

- SANGO 現開発者
- Blog Friends https://blog-friends.com/
- 息子 8ヶ月
- 趣味 ゲーム（スマブラ


<div style={{ display: 'flex' }}>
<a href="https://twitter.com/steelydylan" className="twitter-btn" style={{ marginRight: '20px' }}>@steelydylan</a>

<a href="https://twitter.com/sangowp" className="twitter-btn">@sangowp</a>
</div>

<!-- block-end: column -->

<!-- block-start: column -->

去年2021年の1月よりSANGOの開発を引き継いで行っています。

<Sanko 
  url="https://saruwakakun.com/sango/sango-team"
  title="SANGOの運営チームについて"
  subtitle="SANGOカスタマイズガイド"
/>

<!-- block-end: column -->

<!-- block-end: grid -->

---

## ご案内

- チャット欄は参加者と発表者がコミュニケーションをするためにご活用ください
- セッションに関する質問はチャット欄にご記入ください
- ハッシュタグは**#sangowp**です
- 発表スライドは後で公開します


---


## この勉強会の目的

<!-- block-start: grid -->

<!-- block-start: column -->

SANGO Gutenbergでトップページなどをカスタマイズできるようになる

今回は少しマニアックな内容ですが前回の勉強会を踏まえてより**スタイリッシュ**にトップページをカスタマイズする方法をご紹介します


<!-- block-end -->

<!-- block-start: column -->

![](/assets/top.png)

<!-- block-end -->

<!-- block-end -->

---

## 今日のアジェンダ

| 時刻          | 内容                                                       | 発表者       | 
| ------------- | ---------------------------------------------------------- | ------------ | 
| 20:00 ~ 20:10              | オープニング                                               |              | 
| 20:10 ~ 20:30 | 有志による SANGOを使ったカスタマイズのLT（ライトニングトーク）           |<img src="https://pbs.twimg.com/profile_images/1508355760467550213/Sp0FFNLs_x96.jpg" style={{ width: '40px', height: '40px', verticalAlign: 'middle', borderRadius: '50%' }} /> <img src="https://pbs.twimg.com/profile_images/1491083569506439170/nS-zy5Pl_x96.jpg" style={{ width: '40px', height: '40px', verticalAlign: 'middle', borderRadius: '50%' }} />  | 
| 20:30 ~ 21:00 | トップページ構築のリアルタイムレクチャー                               | <img src="https://pbs.twimg.com/profile_images/818482682904518656/ACNavHHW_x96.jpg" style={{ width: '40px', height: '40px', verticalAlign: 'middle', borderRadius: '50%' }} /> | 
| 21:00 ~ 21:20 | SANGO Landで追加されたブロックの紹介                              | <img src="https://pbs.twimg.com/profile_images/818482682904518656/ACNavHHW_x96.jpg" style={{ width: '40px', height: '40px', verticalAlign: 'middle', borderRadius: '50%' }} /> | 
| 21:20 ~ 21:30 | SANGOの今後の展望について                              | <img src="https://pbs.twimg.com/profile_images/818482682904518656/ACNavHHW_x96.jpg" style={{ width: '40px', height: '40px', verticalAlign: 'middle', borderRadius: '50%' }} /> | 
| 21:30 ~ 22:00 | 質問への回答やフリートーク           | <img src="https://pbs.twimg.com/profile_images/818482682904518656/ACNavHHW_x96.jpg" style={{ width: '40px', height: '40px', verticalAlign: 'middle', borderRadius: '50%' }} /> | 

---

## ライトニングトーク

- <img src="https://pbs.twimg.com/profile_images/1508355760467550213/Sp0FFNLs_x96.jpg" style={{ width: '100px', height: '100px', verticalAlign: 'middle', borderRadius: '50%' }} /> @haroharo72
- <img src="https://pbs.twimg.com/profile_images/1491083569506439170/nS-zy5Pl_x96.jpg" style={{ width: '100px', height: '100px', verticalAlign: 'middle', borderRadius: '50%' }} /> @nr880622

---

<!-- classes: title -->
<!-- background: '/assets/section.jpeg' -->


# SANGO WEBINAR

トップページカスタマイズ

---


## デザインの王道を知ろう

変にオリジナリティを出す必要はなく、デザインの王道を知ることが大事！

- 繰り返す
- 統一する
- グループ化する

---

## 繰り返す

同じ表現を繰り返す

![](/assets/repeat.png)

---

## 統一する

- 角まる具合や
- 色合いなど

<Sanko
  url="https://saruwakakun.com/design/gallery/palette"
  title="配色パターン見本40選：ベストな色の組み合わせ確認ツール"
  subtitle="サルワカ | サルでも分かる図解説明マガジン"
/>

---

## グループ化する

- 関連する要素同士をまとめましょう
- 同じグループに属する要素同士の距離感に気をつけよう

![](/assets/group.png)

---

## LPを美しくデザインするための王道のブロック達

- ヒーローブロック
- フル背景ブロック
- ボックスメニューブロック
- タブブロック
- 記事一覧ブロック
- スライダーブロック

---

## まずは固定ページを作成


以下の設定をお忘れなく！


![](/assets/setting.png)

- コンテンツ上下の余白を0に
- シェアボタンを非表示に
- コンテンツ最大幅を設定

---

## 最初のブロックとしてヒーローブロックを利用

- 「フルサイズ」にするのがお勧め！
- 動画を使うこともできます！
- SANGO Landにもおしゃれなヒーローブロックあります！
- 高さが大きくなりすぎないように

---

## 最初のブロックとしてヒーローブロックを利用

以下のようなCSSを固定ページに設定すると、headerとヒーローブロックを重ねられます。

```css
.header {
  background-color: transparent;
  margin-bottom: -62px;
  box-shadow: none;
}
```

---

## フル背景ブロック

- セクションごとにフル背景を設置して色分けしよう
- ただし、背景色の違いはさり気無く
- よく使う色は「カスタムカラーを設定しておくと便利」
- 外部マージンを0にしておく

### 今回使う色

```css
#F4F4F4
```

---

## ボックスメニューブロック

- タイトルは隠す
- 3 ~ 4 カラム表示くらいがいいかも
- SANGO Landにおすすめのブロックあります

---

## タブブロック

- 新着記事と人気記事のタブ切り替えなどに使える
- カテゴリーごとにタブで区切るのもあり

---

## 記事一覧ブロック

- 3 ~ 4カラムくらいがいいかも
- 1番最新の記事を大きく見せてるカスタマイズもあり
- オフセットを使えば、最初の記事を大きく表示して、残りを普通に表示するカスタマイズもできます

---


## スライダー


### スライダーブロック
- 高さを%指定するのがお勧め！


### 記事一覧ブロックのスライダー
- 記事をピックアップしてスライダーにすることもできます

---

## セクションを繰り返し設置する

見出しブロック、背景ブロック、記事一覧を使ってセクションを繰り返し作っていきましょう！

- まずは無難にカテゴリーごとにセクションを区切っていくのがおすすめ

---

## 新着記事一覧ページも作っておこう

トップページは固定ページで表示しつつ新着記事一覧ページも作る方法が以下の記事に記載されています。


<Sanko 
  url="https://saruwakakun.com/sango/sango-gutenberg-lp"
  title="HTML/CSS不要！固定ページを使って1カラムのサイト型トップページを作る方法"
  subtitle="SANGOカスタマイズガイド"
/>

新着記事一覧ページを作ったら先程の固定ページからリンクを繋げましょう！

---

<!-- classes: title -->
<!-- background: '/assets/section.jpeg' -->


# SANGO WEBINAR

SANGO Landで追加されたおすすめのブロック紹介

---

## SANGO Landで追加されたおすすめのブロックの紹介	

<LinkImage 
  image="https://hyxxczxhdmycasgpcviq.supabase.in/storage/v1/object/public/block-images/0.44923557324489694.png"
  url="https://www.sangoland.app/blocks/box/ff028970-0082-4b67-b5f4-1b7fb91a776b"
  text="のじはたさん作！メリットデメリットを表示するボックス！"
/>


---

## SANGO Landで追加されたおすすめのブロックの紹介	

<LinkImage 
  image="https://hyxxczxhdmycasgpcviq.supabase.in/storage/v1/object/public/block-images/0.9114245886202432.png"
  url="https://www.sangoland.app/blocks/gallery/527545db-dcbd-4940-a07e-ba8260733552"
  text="トップページなどのピックアップコンテンツに最適！"
/>


---

<!-- classes: sango-pr -->



## SANGO Landで追加されたおすすめのブロックの紹介	

<LinkImage 
  image="https://hyxxczxhdmycasgpcviq.supabase.in/storage/v1/object/public/block-images/sidemenu-sango-pr.png"
  url="https://www.sangoland.app/blocks/box/ff028970-0082-4b67-b5f4-1b7fb91a776b"
  text="サイドメニューのCTAに最適！"
/>


---

## SANGO Landで追加されたおすすめのブロック紹介


<LinkImage 
  image="https://hyxxczxhdmycasgpcviq.supabase.in/storage/v1/object/public/block-images/sidemenu.png"
  url="https://www.sangoland.app/blocks/sidemenu/95913bf1-80eb-4069-9377-ce6c44feccc0"
  text="サイドメニューのカスタマイズが一瞬で終わります！"
/>

---

## SANGO Landで追加されたおすすめのブロックの紹介	

<LinkImage 
  image="https://hyxxczxhdmycasgpcviq.supabase.in/storage/v1/object/public/block-images/0.35917515597979.png"
  url="https://www.sangoland.app/blocks/posts/08f7685b-8091-4fcb-b442-002a6bf49669"
  text="記事一覧を3カラム表示。box-shadowが今風に表示されます"
/>


---

## SANGO Landで追加されたおすすめブロックの紹介

<LinkImage 
  image="https://hyxxczxhdmycasgpcviq.supabase.in/storage/v1/object/public/block-images/0.11691476599750583.png"
  url="https://www.sangoland.app/blocks/posts/2c627c47-0dec-4c45-ba80-f32e32ab23b9"
  text="はろさん作！最初の記事が大きく表示されます！"
/>


---

## SANGO Landで追加されたおすすめのブロック紹介

<LinkImage 
  image="https://hyxxczxhdmycasgpcviq.supabase.in/storage/v1/object/public/block-images/0.8700812201399075.png"
  url="https://www.sangoland.app/users/nojihata/662d6fc4-9e2e-43e9-b18b-020a7a92a6ff"
  text="のじはたさん作！関連記事を表示！"
/>

---

## SANGO LandとSANGO Gutenbergを連携する方法

<YouTube
  id="TFIAB04PcU8"
/>

---

## SANGO Landにオリジナルブロックを投稿する方法

<Sanko
  url="https://saruwakakun.com/sango/sango-land-contribute"
  title="SANGO Landにブロックを投稿する方法とメリットについて"
  subtitle="SANGO カスタマイズガイド"
/>

---

## SANGOの今後の展望について

- SANGOとSANGO Gutenbergを合体（SANGO Gutenbergプラグイン不要に
- SANGO Gutenbergプラグインは最新機能を試したい場合に利用するプラグインに
- コンテンツブロックにリンククリックの計測機能を検討
- ABテストブロックの追加検討
- 商品比較表などをSANGO Landに用意

---

<!-- classes: title -->
<!-- background: '/assets/section.jpeg' -->


# SANGO WEBINAR

質問コーナー

---

<!-- classes: title -->
<!-- background: '/assets/section.jpeg' -->



# SANGO WEBINAR

ご静聴ありがとうございました！
