# 残タスク / azami-portfolio-v2

最終確認: 2026-06-01（コンテンツ執筆セッション更新）

---

## 🔴 必須（公開前にやる）

### 0. ヒーロー画像のキャプション・コメントを自分の言葉に直す
- 現状: ヒーロー写真に付いているキャプションやコメントが自動生成のテキスト
- やること: 実際の写真に合わせて自分の言葉で書き直す
- ファイル: 該当するページのコンポーネント内のテキスト部分



### 1. Work詳細ページのコンテンツ執筆 ✅（公開7件）
- 完了: bar-anohito, shigoto-bar, pdm-days-2025, haidozo, nanashi, matsudo-cm-award, science-art-matsudo
- 非表示（後回し）: agile-pbl-2022, agile-pbl-2023（`published: false`）
- 削除（nanashiに統合）: enpit-award（`published: false`）

### 2. Contactフォームの送信実装
- 現状: `handleSubmit` が `setSent(true)` するだけで実際には何も送られない
- やること: Formspree / Resend / Netlify Forms など選んで実装
- ファイル: `app/contact/page.js`
- おすすめ: Formspree（APIキー不要、無料枠あり）

### 3. デプロイ
- 現状: ローカルのみ、本番URLなし
- やること: Vercel にデプロイ（`vercel --prod`）
- ドメイン: `azami.works` を使うなら Vercel側でDNS設定

---

## 🟡 あったほうがいい

### 4. ページごとのOGP / メタデータ
- 現状: `layout.js` にグローバル title/description のみ
- やること: `app/work/[id]/page.js` に `generateMetadata` を実装（title = work.title、og:image = work.image）
- 参考: `export async function generateMetadata({ params }) { ... }`

### 5. Workコンテンツ執筆後のMarkdownレンダリング実装
- 現状: `lib/data.js` の `getWorkBySlug` はbodyを返していない（`matter(raw)` の `content` を捨てている）
- やること: `matter(raw)` の `content` も返す → `unified` / `react-markdown` でHTMLに変換してレンダリング
- ※ タスク1と連動

---

## 🟢 任意 / 将来

### 6. Photoページの写真管理
- 現状: `app/photo/page.js` に写真URLがハードコード（8枚）
- やること: Cloudinaryのフォルダから自動取得、または `content/photos.json` で管理
- 優先度: 低（枚数が増えたときに対応でOK）

### 7. note詳細ページ（内部ページ化）
- 現状: note記事はすべて外部リンク（note.com）
- やること（任意）: 記事本文をmarkdownで管理して内部ページとして見せる
- 優先度: 低（外部リンクのままでも十分機能する）

---

## ✅ 完了済み（参考）
- Home（Hero / Philosophy / Works / Marquee / Category peek）
- Work一覧ページ
- Work詳細ページのUI（ヘッダー・サイドバー・ナビゲーション）
- Noteページ（OG画像取得付き）
- Aboutページ
- Contactページ（UIのみ）
- Photoページ（ギャラリー + ライトボックス + キーボード操作）
- ナビゲーション（デスクトップ + モバイルハンバーガー）
- レスポンシブCSS（860pxブレークポイント）
- コンテンツファイル（works: 10件, notes: 25件）
