# 🌦 地域×情報マップ（Urahoro × Kamoenai）


!アプリのスクリーンショット](https://github.com/MEI-OKU/map_app/blob/main/screenshot.png?raw=true&v=2)

地域の情報を地図と天気で見やすくまとめたWebアプリです。
---

## 🗾 概要
北海道の地域情報と現在の天気を地図上で可視化するWebアプリです。  
Google Maps APIとOpenWeatherMap APIを連携し、  
各地域の位置・画像・天気アイコンを吹き出しで直感的に確認できます。

現在は「浦幌町」と「神恵内村」をマッピングし、  
それぞれの魅力をシンプルに可視化しています。

---

## 🧩 使用技術
- **HTML / CSS / JavaScript**
- **Google Maps JavaScript API**
- **OpenWeatherMap API**

---

## 🗺️ 主な機能
- Googleマップ上に「浦幌町」「神恵内村」のピンを表示  
- 各地域の現在の天気と天気アイコンをリアルタイム表示  
- ピンをクリックすると吹き出しで地域情報を表示（画像＋天気）  
- スマホ・PCどちらでも見やすいレスポンシブUI  

---

## 💻 開発の背景
地方創生や移住支援に関心があり、  
「地図を通して地域の魅力と生活情報をわかりやすく見せたい」  
という想いから開発しました。  

天気情報を重ねることで、「その地域の“今”」を感じられる構成を目指しています。

---

## 🚀 今後の展望
- JSONによる地域データの自動管理化  
- 地域ごとのリンク・支援制度・施設情報の追加  
- 天気予報や気温推移の可視化  
- React / Next.js への拡張  

---

## 🪄 デモサイト
🔗 **GitHub Pages 公開中**  
👉 [https://mei-oku.github.io/map_app/](https://mei-oku.github.io/map_app/)

---

map_app/
├── index.html
├── style.css
├── script.js
├── data.json
├── urahoro.jpg
└── kamoenai.jpg

---

## 🧠 学んだこと
- Google Maps API と OpenWeatherMap API の連携実装  
- fetch関数を使った非同期データ取得  
- InfoWindowのHTMLカスタム（画像＋テキスト＋天気）  
- GitHub Pages によるWeb公開手順  

---

## ✨ 作者
**谷口 輝（MEI-OKU）**  
- GitHub: [@MEI-OKU](https://github.com/MEI-OKU)  
- 興味分野: 地方創生・移住支援・Web開発・サテライトオフィス  
