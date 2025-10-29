let map;

async function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 43.0618, lng: 141.3545 },
    zoom: 7,
  });

  // data.json を取得
  const response = await fetch("data.json");
  const towns = await response.json();

  towns.forEach((town) => {
    const marker = new google.maps.Marker({
      position: { lat: town.lat, lng: town.lng },
      map: map,
      title: town.name,
    });

    const info = new google.maps.InfoWindow({
      content: `
        <div style="text-align:center;">
          <h3>${town.name}</h3>
          <img src="${town.img}" style="width:150px; height:auto; border-radius:8px;"><br>
          <p>${town.desc}</p>
          <a href="${town.url}" target="_blank">▶ 公式サイトを見る</a>
        </div>
      `,
    });

    marker.addListener("click", () => {
      info.open(map, marker);
    });
  });
}
