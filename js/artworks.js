const artworks = [
  {
    title: "Happy Spirit",
    artist: "Rube Jamal",
    year: "2012",
    size: "91.25cm x 91.25cm",
    medium: "Acrylic on Canvas",
    price: "RM6,250.00",
    image: "img/happy-spirit.png",
    ratio: "square"
  },
  {
    title: "Radiant",
    artist: "Rube Jamal",
    year: "2025",
    size: "61cm x 61cm",
    medium: "Acrylic on Canvas",
    price: "RM2,500.00",
    image: "img/radiant.png",
    ratio: "square"
  },
  {
    title: "Feeling Good",
    artist: "Rube Jamal",
    year: "2014",
    size: "76.2cm x 76.2cm",
    medium: "Acrylic on Canvas",
    price: "RM5,000.00",
    image: "img/feeling-good.png",
    ratio: "square"
  },
  {
    title: "Outbreak",
    artist: "Rube Jamal",
    year: "2025",
    size: "61cm x 61cm",
    medium: "Acrylic on Canvas",
    price: "RM2,500.00",
    image: "img/outbreak.png",
    ratio: "square"
  },
  {
    title: "Disorganized",
    artist: "Rube Jamal",
    year: "2021",
    size: "61cm x 61cm",
    medium: "Acrylic on Canvas",
    price: "RM2,500.00",
    image: "img/disorganized.png",
    ratio: "square"
  },
  {
    title: "Movement Series No 29",
    artist: "Rube Jamal",
    year: "2014",
    size: "76.2cm x 76.2cm",
    medium: "Acrylic on Canvas",
    price: "RM5,000.00",
    image: "img/movement-series29.png",
    ratio: "square"
  },
  {
    title: "Agile",
    artist: "Rube Jamal",
    year: "2025",
    size: "61cm x 61cm",
    medium: "Acrylic on Canvas",
    price: "RM2,500.00",
    image: "img/agile.png",
    ratio: "square"
  },
  {
    title: "Destiny",
    artist: "Rube Jamal",
    year: "2015",
    size: "45.5cm x 45.5cm",
    medium: "Acrylic on Canvas",
    price: "RM1,000.00",
    image: "img/destiny.png",
    ratio: "square"
  },
  {
    title: "Excellence",
    artist: "Rube Jamal",
    year: "2026",
    size: "76cm x 76cm",
    medium: "Acrylic on Canvas",
    price: "RM5,000.00",
    image: "img/excellence.png",
    ratio: "square"
  },
  {
    title: "Splendid",
    artist: "Rube Jamal",
    year: "2026",
    size: "76cm x 76cm",
    medium: "Acrylic on Canvas",
    price: "RM5,000.00",
    image: "img/splendid.png",
    ratio: "square"
  },
  {
    title: "Cool",
    artist: "Rube Jamal",
    year: "2013",
    size: "91.25cm x 91.25cm",
    medium: "Acrylic on Canvas",
    price: "RM6,250.00",
    image: "img/cool.png",
    ratio: "square"
  },
  {
    title: "Outgrown",
    artist: "Rube Jamal",
    year: "2025",
    size: "45.5cm x 45.5cm",
    medium: "Acrylic on Canvas",
    price: "RM1,000.00",
    image: "img/outgrown.png",
    ratio: "square"
  },
  {
    title: "Cheerful",
    artist: "Rube Jamal",
    year: "2014",
    size: "45.5cm x 45.5cm",
    medium: "Acrylic on Canvas",
    price: "RM1,000.00",
    image: "img/cheerful.png",
    ratio: "square"
  },
  {
    title: "Dance Hour",
    artist: "Rube Jamal",
    year: "2012",
    size: "91.25cm x 91.25cm",
    medium: "Acrylic on Canvas",
    price: "RM6,250.00",
    image: "img/dance-hour.png",
    ratio: "square"
  },
  {
    title: "Happy Moments",
    artist: "Rube Jamal",
    year: "2012",
    size: "91.25cm x 91.25cm",
    medium: "Acrylic on Canvas",
    price: "RM6,250.00",
    image: "img/happy-moments.png",
    ratio: "square"
  },
  {
    title: "Glory Series 1",
    artist: "Rube Jamal",
    year: "2019",
    size: "45.5cm x 45.5cm",
    medium: "Acrylic on Canvas",
    price: "RM1,000.00",
    image: "img/glory-series1.png",
    ratio: "square"
  },
  {
    title: "Excitement",
    artist: "Rube Jamal",
    year: "2021",
    size: "76cm x 76cm",
    medium: "Acrylic on Canvas",
    price: "RM5,000.00",
    image: "img/excitement.png",
    ratio: "square"
  },
  {
    title: "Advance",
    artist: "Rube Jamal",
    year: "2015",
    size: "45.5cm x 45.5cm",
    medium: "Acrylic on Canvas",
    price: "RM1,000.00",
    image: "img/advance.png",
    ratio: "square"
  },
  {
    title: "Four Seasons: Spring",
    artist: "Rube Jamal",
    year: "2017",
    size: "45.5cm x 45.5cm",
    medium: "Acrylic on Canvas",
    price: "RM1,000.00",
    image: "img/four-seasons-spring.png",
    ratio: "square"
  },
  {
    title: "Four Seasons: Summer",
    artist: "Rube Jamal",
    year: "2017",
    size: "45.5cm x 45.5cm",
    medium: "Acrylic on Canvas",
    price: "RM1,000.00",
    image: "img/four-seasons-summer.png",
    ratio: "square"
  },
  {
    title: "Momentum 1",
    artist: "Rube Jamal",
    year: "2017",
    size: "30.5cm x 30.5cm",
    medium: "Acrylic on Canvas",
    price: "RM750.00",
    image: "img/momentum1.png",
    ratio: "square"
  },
  {
    title: "Momentum 2",
    artist: "Rube Jamal",
    year: "2017",
    size: "30.5cm x 30.5cm",
    medium: "Acrylic on Canvas",
    price: "RM750.00",
    image: "img/momentum2.png",
    ratio: "square"
  },
  {
    title: "Momentum 3",
    artist: "Rube Jamal",
    year: "2017",
    size: "30.5cm x 30.5cm",
    medium: "Acrylic on Canvas",
    price: "RM750.00",
    image: "img/momentum3.png",
    ratio: "square"
  },
  {
    title: "Momentum 4",
    artist: "Rube Jamal",
    year: "2017",
    size: "30.5cm x 30.5cm",
    medium: "Acrylic on Canvas",
    price: "RM750.00",
    image: "img/momentum4.png",
    ratio: "square"
  },
  {
    title: "Momentum 5",
    artist: "Rube Jamal",
    year: "2017",
    size: "30.5cm x 30.5cm",
    medium: "Acrylic on Canvas",
    price: "RM750.00",
    image: "img/momentum5.png",
    ratio: "square"
  },
  {
    title: "Momentum 6",
    artist: "Rube Jamal",
    year: "2017",
    size: "30.5cm x 30.5cm",
    medium: "Acrylic on Canvas",
    price: "RM750.00",
    image: "img/momentum6.png",
    ratio: "square"
  },
  {
    title: "Movement Series No 12",
    artist: "Rube Jamal",
    year: "2011",
    size: "91.25cm x 122cm",
    medium: "Acrylic on Canvas",
    price: "RM7,500.00",
    image: "img/movement-series12.png",
    ratio: "portrait"
  },
  {
    title: "Summer Heat",
    artist: "Rube Jamal",
    year: "2014",
    size: "91.25cm x 122cm",
    medium: "Acrylic on Canvas",
    price: "RM7,500.00",
    image: "img/summer-heat.png",
    ratio: "portrait"
  },
  {
    title: "Movement Series No 1",
    artist: "Rube Jamal",
    year: "2009",
    size: "91.25cm x 122cm",
    medium: "Acrylic on Canvas",
    price: "RM7,500.00",
    image: "img/movement-series1.png",
    ratio: "portrait"
  },
  {
    title: "The Invasion",
    artist: "Rube Jamal",
    year: "2013",
    size: "91.25cm x 122cm",
    medium: "Acrylic on Canvas",
    price: "RM7,500.00",
    image: "img/the-invasion.png",
    ratio: "portrait"
  },
  {
    title: "Movement Series No 5",
    artist: "Rube Jamal",
    year: "2010",
    size: "61cm x 91.25cm",
    medium: "Acrylic on Canvas",
    price: "RM4,250.00",
    image: "img/movement-series5.png",
    ratio: "portrait"
  },
  {
    title: "Movement Series No 8",
    artist: "Rube Jamal",
    year: "2010",
    size: "61cm x 91.25cm",
    medium: "Acrylic on Canvas",
    price: "RM4,250.00",
    image: "img/movement-series8.png",
    ratio: "portrait"
  },
  {
    title: "Movement Series No 24",
    artist: "Rube Jamal",
    year: "2014",
    size: "91.25cm x 61cm",
    medium: "Acrylic on Canvas",
    price: "RM4,250.00",
    image: "img/movement-series24.png",
    ratio: "landscape"
  }
];
