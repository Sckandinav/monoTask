ymaps.ready(init);

function init() {
  var map = new ymaps.Map('map', {
    center: [47.79475896492693, 70.26898146623769],
    zoom: 5,
  });
  const msk = new ymaps.Placemark(
    [55.725290568987774, 37.65455599999992],
    {
      balloonContentHeader: 'Москва',
      balloonContentBody: 'ул Дербеневская, д. 1, стр. 1, подъезд 44, офис 6',
      balloonContentFooter: 'Режим работы: c 10:00 до 18:00',
    },
    {
      iconLayout: 'default#image',
      iconImageHref: './images/icons/geotag.svg',
      iconImageSize: [36, 40],
      iconImageOffset: [-10, -10],
    },
  );
  const vlg = new ymaps.Placemark(
    [48.500644573895386, 44.57983050000001],
    {
      balloonContentHeader: 'Волгоград',
      balloonContentBody: 'ул. Командира Рудь, 14А',
      balloonContentFooter: 'Режим работы: c 08:00 до 17:00',
    },
    {
      iconLayout: 'default#image',
      iconImageHref: './images/icons/geotag.svg',
      iconImageSize: [36, 40],
      iconImageOffset: [-10, -10],
    },
  );
  const krd = new ymaps.Placemark(
    [45.04088457458379, 38.9830025],
    {
      balloonContentHeader: 'Краснодар',
      balloonContentBody: 'ул. Митрофана Седина, 176',
      balloonContentFooter: 'Режим работы: c 08:00 до 17:00',
    },
    {
      iconLayout: 'default#image',
      iconImageHref: './images/icons/geotag.svg',
      iconImageSize: [36, 40],
      iconImageOffset: [-10, -10],
    },
  );
  const srt = new ymaps.Placemark(
    [51.586542572358674, 45.96639799999997],
    {
      balloonContentHeader: 'Саратов',
      balloonContentBody: 'пр-т Строителей, 1',
      balloonContentFooter: 'Режим работы: c 10:00 до 18:00',
    },
    {
      iconLayout: 'default#image',
      iconImageHref: './images/icons/geotag.svg',
      iconImageSize: [36, 40],
      iconImageOffset: [-10, -10],
    },
  );
  const vrn = new ymaps.Placemark(
    [51.6714385722938, 39.20326949999999],
    {
      balloonContentHeader: 'Воронеж',
      balloonContentBody: 'ул. Комиссаржевской, 10',
      balloonContentFooter: 'Режим работы: c 10:00 до 18:00',
    },
    {
      iconLayout: 'default#image',
      iconImageHref: './images/icons/geotag.svg',
      iconImageSize: [36, 40],
      iconImageOffset: [-10, -10],
    },
  );

  const erv = new ymaps.Placemark(
    [40.219923073746195, 44.57038899999996],
    {
      balloonContentHeader: 'Ереван',
      balloonContentBody: 'Район Аван 4, 2',
      balloonContentFooter: 'Режим работы: c 10:00 до 18:00',
    },
    {
      iconLayout: 'default#image',
      iconImageHref: './images/icons/geotag.svg',
      iconImageSize: [36, 40],
      iconImageOffset: [-10, -10],
    },
  );

  const nsb = new ymaps.Placemark(
    [55.02308756967556, 82.97561299999995],
    {
      balloonContentHeader: 'Новосибирск',
      balloonContentBody: 'ул. Никитина 116, к.3',
      balloonContentFooter: 'Режим работы: c 10:00 до 18:00',
    },
    {
      iconLayout: 'default#image',
      iconImageHref: './images/icons/geotag.svg',
      iconImageSize: [36, 40],
      iconImageOffset: [-10, -10],
    },
  );

  map.controls.remove('geolocationControl');
  map.controls.remove('searchControl');
  map.controls.remove('trafficControl');
  map.controls.remove('typeSelector');
  map.controls.remove('fullscreenControl');
  map.controls.remove('zoomControl');
  map.controls.remove('rulerControl');
  map.behaviors.disable(['scrollZoom']);

  map.geoObjects.add(msk).add(vlg).add(krd).add(srt).add(vrn).add(erv).add(nsb);
}

export default init;
