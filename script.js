let map;

// OpenWeatherMap APIキー
const WEATHER_API_KEY = "9288bc648348013f1b01dc60ce985a26";

async function initMap() {
  // 地図の初期化（札幌中心）
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 43.0618, lng: 141.3545 },
    zoom: 7,
  });

  // data.json を取得
  const response = await fetch("data.json");
  const towns = await response.json();

  for (const town of towns) {
    // 天気データを取得
    const weatherRes = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${town.lat}&lon=${town.lng}&appid=${WEATHER_API_KEY}&lang=ja&units=metric`
    );
    const weatherData = await weatherRes.json();

    // 天気アイコンURL
    const icon = weatherData.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    // 吹き出し内容
    const info = new google.maps.InfoWindow({
      content: `
        <div style="text-align:center;">
          <h3>${town.name}</h3>
          <img src="${town.img}" style="width:150px; height:auto; border-radius:8px;"><br>
          <p>${town.desc}</p>
          <a href="${town.url}" target="_blank">▶ 公式サイトを見る</a>
          <hr>
          <p><b>現在の天気：</b> ${weatherData.weather[0].description}</p>
          <img src="${iconUrl}" alt="天気アイコン" style="width:50px;height:50px;">
          <p>🌡 ${weatherData.main.temp.toFixed(1)}℃</p>
        </div>
      `,
    });

    // ピンを立てる
    const marker = new google.maps.Marker({
      position: { lat: town.lat, lng: town.lng },
      map: map,
      title: town.name,
    });

    // クリックで吹き出し表示
    marker.addListener("click", () => {
      info.open(map, marker);
    });
  }
}
