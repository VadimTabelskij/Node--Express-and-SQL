import { CarsModel } from './types';

export const cars: CarsModel[] = [
  {
    id: 1,
    brands: 'Mercedes Benz',
    location: {
      country: 'Germany',
      city: 'Wolfsburg',
    },
    images: [
      'https://hips.hearstapps.com/hmg-prod/images/21c0550-001-1630936200.jpg',
      'https://thumbs.dreamstime.com/b/oldtimer-mercedes-benz-vntage-gold-colored-leiden-holland-vintage-old-retro-black-white-148224797.jpg',
      'https://w0.peakpx.com/wallpaper/830/836/HD-wallpaper-mercedes-benz-600-retro-cars-1966-cars-luxury-cars-german-cars-mercedes-benz.jpg',
    ],
    style: 'Old school',
  },
  {
    id: 2,
    brands: 'Ferrari',
    location: {
      country: 'Italy',
      city: 'Modena',
    },
    images: [
      'https://carconfigurator.ferrari.com/assets/cars/portofinom/packages/default/car-ferrari-portofino-m_splash.jpg',
      'https://avatars.dzeninfra.ru/get-zen_doc/62191/pub_5ad759e0581669e0006bb6a9_5ad75aca0422b428662afba3/scale_1200',
      'https://image.cnbcfm.com/api/v1/image/105940475-1559232349684190164-car-ferrari-sf90-stradale.jpg?v=1559232362&w=1600&h=900',
    ],
    style: 'Expensive',
  },
  {
    id: 3,
    brands: 'Range Rover',
    location: {
      country: 'United Kingdom',
      city: 'London',
    },
    images: [
      'https://www.drivespark.com/img/1200x60x675/2022/05/2022-land-rover-range-rover-sport-front-view-shot-1652243072.jpg',
      'https://thumbor.forbes.com/thumbor/fit-in/960x/filters:format(jpg)/https://www.forbes.com/wheels/wp-content/uploads/2021/10/2022_new_Range-_Rover-1.png',
      'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/rrs195mydynamic13021912.jpg?itok=WI_HeFWO',
    ],
    style: 'Suv',
  },
  {
    id: 4,
    brands: 'Audi',
    location: {
      country: 'Germany',
      city: 'Vorsprung',
    },
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Audi_A7_Sportback_Genf_2018.jpg/1200px-Audi_A7_Sportback_Genf_2018.jpg',
      'https://www.allcarz.ru/wp-content/uploads/2017/08/foto-kc-a8-d3_01.jpg',
      'https://www.audi.lt/content/dam/nemo/models/a4/a4-limousine/my-2021/1920x1080-inline-media-gallery/1920x1080_AA4_L_191002.jpg',
    ],
    style: 'Sedan',
  },
  {
    id: 5,
    brands: 'BMW',
    location: {
      country: 'Germany',
      city: 'Munich',
    },
    images: [
      'https://s.auto.drom.ru/i24267/pubs/4/87393/3804616.jpeg',
      'https://www.krasta-auto.lt/wp-content/uploads/2021/04/BMW-M-009.jpg',
      'https://www.bmw.lt/content/dam/bmw/common/topics/fascination-bmw/bmw-m-individual/bmw-m-individual-relaunch-sp-desktop.jpg',
    ],
    style: 'Sedan',
  },
  {
    id: 6,
    brands: 'Lamborghini',
    location: {
      country: 'Italy',
      city: "Sant'Agata Bolognese",
    },
    images: [
      'https://media.ed.edmunds-media.com/lamborghini/aventador/2022/oem/2022_lamborghini_aventador_convertible_ultimae-roadster_fq_oem_1_1600.jpg',
      'https://www.courtage-expertise-auto.fr/wp-content/uploads/2022/11/Lamborghini-Aventador_LP700-4-2012-1600-02-653x400.jpg',
      'https://www.alainclass.com/wp-content/uploads/2022/04/2015-Lamborghini-Aventador-Roadster-GREEN-3955-5.jpg',
    ],
    style: 'Sport Car',
  },
  {
    id: 7,
    brands: 'Lamborghini Suv',
    location: {
      country: 'Italy',
      city: "Sant'Agata Bolognese",
    },
    images: [
      'https://s1.15min.lt/images/photos/2020/07/01/original/lamborghini-urus-5efc6e7377084.jpg',
      'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/urus/2022/08_19_urus_perf/s/gate_urus_s2_m.jpg',
      'https://pugachev.miami/wp-content/uploads/2019/03/urus3-1030x824.jpg',
    ],
    style: 'Sport Car Suv',
  },
  {
    id: 8,
    brands: 'Lada',
    location: {
      country: 'Russian',
      city: 'Moskov',
    },
    images: [
      'https://baltic.gamblingzion.com/uploads/2015/11/Wikiniva13a.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl-0d5irBmf-2EHf8YWblLVf21PsFIdzg-ZtMvtL2LTk3rFpC_oiYTI9i1Imi-JaQMo_Q&usqp=CAU',
      'https://www.major-lada.ru/images/gallery/gallery_model_content_preview_img/gallery_model_content_preview_img_dizain_vesta_sedan_1.jpg',
    ],
    style: 'Sedan',
  },
  {
    id: 9,
    brands: 'Porsche',
    location: {
      country: 'Germany',
      city: 'Stuttgart',
    },
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIJbR41XcWyrKBe8ObYy1AHd8xRk4YVlTsdGoQxYiladiRvMiodcl02Enytxbzg8EgArw&usqp=CAU',
      'https://cdn.motor1.com/images/mgl/Kbbj1A/s1/porsche-tequipment-roof-tent.jpg',
      'https://cdn.shopify.com/s/files/1/0255/8659/7968/t/2/assets/Enorm-Gallery49825-69de9f-04cee01affbc40e487c79d6f9d2cee86-mv2-d-5184-3888-s-4-2.jpg?v=1576084961&width=1024',
    ],
    style: 'Sport Car',
  },
  {
    id: 10,
    brands: 'Toyota',
    location: {
      country: 'Japan',
      city: 'Tahara',
    },
    images: [
      'https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Supra/9574/1673950511987/front-left-side-47.jpg',
      'https://celes.club/uploads/posts/2022-06/1655331806_20-celes-club-p-toiota-supra-forsazh-mashini-krasivo-foto-23.jpg',
      'https://www.diariomotor.com/imagenes/2022/04/toyota-gr-supra-cambio-manual-2022-06-626a41f138e8a.jpg',
    ],
    style: 'Sport Car',
  },
  {
    id: 11,
    brands: 'Rolls Royce',
    location: {
      country: 'United Kingdom',
      city: 'Goodwood',
    },
    images: [
      'https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/phantom-series-ii-discover/page-properties/Phantom-II-Discover-Hero-Single-Twin-Card.jpg',
      'https://www.rollsroyceprague.cz/UserFiles/Image/1652767584rolls-royce-phantom-extended-seriesII-2-.jpg',
      'https://cdn.motor1.com/images/mgl/2Np0Zn/s1/2023-rolls-royce-spectre.jpg',
    ],
    style: 'Expensive',
  },
  {
    id: 12,
    brands: 'Ford',
    location: {
      country: 'California',
      city: 'Los Angeles',
    },
    images: [
      'https://hips.hearstapps.com/hmg-prod/images/2022-ford-mustang-shelby-gt500-02-1636734552.jpg',
      'https://www.motortrend.com/uploads/2023/01/2023-Ford-Mustang-Mach-1-6M-42.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR58HppXXPZahpmo8R60bdNJ0LoWi3moRd8hY7LLt7SrdlytOmaKtB07kP_-QKtM0PltuM&usqp=CAU',
    ],
    style: 'Sport Car',
  },
];
