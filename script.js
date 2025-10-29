let map;

// ★ OpenWeatherMapのAPIキーをここに入れる
const WEATHER_API_KEY = "9288bc648348013f1b01dc60ce985a26";

function initMap() {
  // 北海道を中心に表示
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 43.5, lng: 142.5 },
    zoom: 7,
  });

  // JSONデータを読み込む
  fetch("data.json")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((place) => {
        const marker = new google.maps.Marker({
          position: { lat: place.lat, lng: place.lng },
          map: map,
          title: place.name,
        });

        // 天気データ取得
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${place.lat}&lon=${place.lng}&appid=${WEATHER_API_KEY}&units=metric&lang=ja`
        )
          .then((res) => res.json())
          .then((weather) => {
            const desc = weather.weather[0].description;
            const temp = weather.main.temp;
            const humidity = weather.main.humidity;
            const icon = weather.weather[0].icon;

            const info = new google.maps.InfoWindow({
              content: `
                <div class="info-window">
                  <h3>${place.name}</h3>
                  <img src="${place.img}" class="place-img"><br>
                  <img src="https://openweathermap.org/img/wn/${icon}@2x.png"
                       alt="天気" class="weather-icon"><br>
                  <p>${desc}（${temp}℃）<br>湿度：${humidity}%</p>
                  <a href="${place.url}" target="_blank">▶ 公式サイト</a>
                </div>
              `,
            });

            marker.addListener("click", () => {
              info.open(map, marker);
            });
          });
      });
    })
    .catch((err) => console.error("エラー:", err));
}
