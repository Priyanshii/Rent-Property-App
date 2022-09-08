import { House, Flat, Bungalows, Delhi, Mumbai, Bangalore } from "./constant";

const data = [
  {
    id: 1,
    location: Mumbai,
    price: 11000,
    available_from: "2022-09-15",
    property_type: Flat,
    favourite: false,
    image:
      "https://cdn.confident-group.com/wp-content/uploads/2021/08/26224309/oakwood_gallery_image.jpg",
  },
  {
    id: 2,
    location: Mumbai,
    price: 21000,
    available_from: "2022-10-15",
    property_type: Flat,
    favourite: false,
    image:
      "https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto,w_600/e_improve/e_sharpen:30/f_auto,q_auto/v1647507713/Website/CMS-Uploads/tsaq8dsnzukboan75air.jpg",
  },
  {
    id: 3,
    location: Mumbai,
    price: 27000,
    available_from: "2022-11-15",
    property_type: Flat,
    favourite: false,
    image:
      "https://img.staticmb.com/mbimages/project/Photo_h310_w462/2022/06/30/Project-Photo-36-Sharanya-Altura-Ahmedabad-5326989_576_1062_310_462.JPG",
  },
  {
    id: 4,
    location: Mumbai,
    price: 35000,
    available_from: "2022-09-25",
    property_type: Flat,
    favourite: false,
    image:
      "https://www.noelprojects.com/wp-content/uploads/2021/01/noel-octave-th.jpg",
  },
  {
    id: 5,
    location: Mumbai,
    price: 39000,
    available_from: "2022-10-15",
    property_type: Flat,
    favourite: false,
    image:
      "https://media.istockphoto.com/photos/europe-modern-complex-of-residential-buildings-picture-id1165384568?s=170667a",
  },
  {
    id: 6,
    location: Mumbai,
    price: 29000,
    available_from: "2022-09-15",
    property_type: House,
    favourite: false,
    image:
      "http://thehousedesignhub.com/wp-content/uploads/2021/06/55E-1024x682.jpg",
  },
  {
    id: 7,
    location: Mumbai,
    price: 35000,
    available_from: "2022-10-15",
    property_type: House,
    favourite: false,
    image:
      "https://oceanicvalley.com/wp-content/uploads/2019/02/RowHouses_artistrendition.jpg",
  },
  {
    id: 8,
    location: Mumbai,
    price: 39000,
    available_from: "2022-11-15",
    property_type: House,
    favourite: false,
    image:
      "https://www.archplanest.com/wp-content/uploads/2013/06/Small_House_Row_House_Plan_03.jpg",
  },
  {
    id: 9,
    location: Mumbai,
    price: 43000,
    available_from: "2022-09-25",
    property_type: House,
    favourite: false,
    image:
      "https://api.makemyhouse.com/public/Media/rimage/500/completed-project/1582980450_169.jpg?watermark=false",
  },
  {
    id: 10,
    location: Mumbai,
    price: 48000,
    available_from: "2022-10-25",
    property_type: House,
    favourite: false,
    image:
      "https://www.archplanest.com/wp-content/uploads/2020/05/Online-House-Plan-33.jpg",
  },
  {
    id: 11,
    location: Delhi,
    price: 9000,
    available_from: "2022-09-15",
    property_type: Flat,
    favourite: false,
    image:
      "https://cdn.confident-group.com/wp-content/uploads/2021/08/26224309/oakwood_gallery_image.jpg",
  },
  {
    id: 12,
    location: Delhi,
    price: 18000,
    available_from: "2022-10-15",
    property_type: Flat,
    favourite: false,
    image:
      "https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto,w_600/e_improve/e_sharpen:30/f_auto,q_auto/v1647507713/Website/CMS-Uploads/tsaq8dsnzukboan75air.jpg",
  },
  {
    id: 13,
    location: Delhi,
    price: 27000,
    available_from: "2022-11-15",
    property_type: Flat,
    favourite: false,
    image:
      "http://jkbhousing.com/jb-content/uploads/2022/03/jkb-nilaya-valasaravakkam.png",
  },
  {
    id: 14,
    location: Delhi,
    price: 29000,
    available_from: "2022-09-25",
    property_type: Flat,
    favourite: false,
    image:
      "https://media.istockphoto.com/photos/europe-modern-complex-of-residential-buildings-picture-id1165384568?s=170667a",
  },
  {
    id: 15,
    location: Delhi,
    price: 32000,
    available_from: "2022-10-25",
    property_type: Flat,
    favourite: false,
    image:
      "https://www.noelprojects.com/wp-content/uploads/2021/01/noel-octave-th.jpg",
  },
  {
    id: 16,
    location: Delhi,
    price: 19000,
    available_from: "2022-09-29",
    property_type: House,
    favourite: false,
    image:
      "https://www.archplanest.com/wp-content/uploads/2020/05/Online-House-Plan-33.jpg",
  },
  {
    id: 17,
    location: Delhi,
    price: 26000,
    available_from: "2022-10-29",
    property_type: House,
    favourite: false,
    image:
      "https://api.makemyhouse.com/public/Media/rimage/500/completed-project/1582980450_169.jpg?watermark=false",
  },
  {
    id: 18,
    location: Delhi,
    price: 28000,
    available_from: "2022-09-20",
    property_type: House,
    favourite: false,
    image:
      "https://www.archplanest.com/wp-content/uploads/2013/06/Small_House_Row_House_Plan_03.jpg",
  },
  {
    id: 19,
    location: Delhi,
    price: 31000,
    available_from: "2022-10-22",
    property_type: House,
    favourite: false,
    image:
      "https://oceanicvalley.com/wp-content/uploads/2019/02/RowHouses_artistrendition.jpg",
  },
  {
    id: 20,
    location: Delhi,
    price: 37000,
    available_from: "2022-09-17",
    property_type: Bungalows,
    favourite: false,
    image:
      "http://thehousedesignhub.com/wp-content/uploads/2021/06/55E-1024x682.jpg",
  },
  {
    id: 21,
    location: Delhi,
    price: 39000,
    available_from: "2022-09-20",
    property_type: Bungalows,
    favourite: false,
    image:
      "https://easemyhouse.com/wp-content/uploads/2022/06/30-60-house-plan.jpg",
  },
  {
    id: 22,
    location: Delhi,
    price: 41000,
    available_from: "2022-09-25",
    property_type: Bungalows,
    favourite: false,
    image:
      "https://www.e-architect.com/wp-content/uploads/2021/06/the-manjeri-residence-india-s160621-1.jpg",
  },
  {
    id: 23,
    location: Delhi,
    price: 45000,
    available_from: "2022-10-25",
    property_type: Bungalows,
    favourite: false,
    image:
      "https://content3.jdmagicbox.com/comp/gwalior/t1/9999px751.x751.151114184605.a4t1/catalogue/house-design-engineering-maharajpura-gwalior-architect-all-india-ruqq7w9gdh-250.jpg",
  },
  {
    id: 24,
    location: Delhi,
    price: 49000,
    available_from: "2022-10-15",
    property_type: Bungalows,
    favourite: false,
    image:
      "https://easemyhouse.com/wp-content/uploads/2022/06/row-house-plan.jpg",
  },
  {
    id: 25,
    location: Delhi,
    price: 36000,
    available_from: "2022-10-18",
    property_type: Flat,
    favourite: false,
    image:
      "https://img.staticmb.com/mbimages/project/Photo_h310_w462/2022/06/30/Project-Photo-36-Sharanya-Altura-Ahmedabad-5326989_576_1062_310_462.JPG",
  },
  {
    id: 26,
    location: Delhi,
    price: 42000,
    available_from: "2022-09-13",
    property_type: Flat,
    favourite: false,
    image:
      "https://img.staticmb.com/mbimages/project/Photo_h310_w462/2022/06/30/Project-Photo-36-Sharanya-Altura-Ahmedabad-5326989_576_1062_310_462.JPG",
  },
  {
    id: 27,
    location: Bangalore,
    price: 14000,
    available_from: "2022-09-19",
    property_type: Flat,
    favourite: false,
    image:
      "https://cdn.confident-group.com/wp-content/uploads/2021/08/26224309/oakwood_gallery_image.jpg",
  },
  {
    id: 28,
    location: Bangalore,
    price: 19000,
    available_from: "2022-09-25",
    property_type: Flat,
    favourite: false,
    image:
      "https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto,w_600/e_improve/e_sharpen:30/f_auto,q_auto/v1647507713/Website/CMS-Uploads/tsaq8dsnzukboan75air.jpg",
  },
  {
    id: 29,
    location: Bangalore,
    price: 27000,
    available_from: "2022-09-10",
    property_type: Flat,
    favourite: false,
    image:
      "http://jkbhousing.com/jb-content/uploads/2022/03/jkb-nilaya-valasaravakkam.png",
  },
  {
    id: 30,
    location: Bangalore,
    price: 29000,
    available_from: "2022-10-14",
    property_type: Flat,
    favourite: false,
    image:
      "https://media.istockphoto.com/photos/europe-modern-complex-of-residential-buildings-picture-id1165384568?s=170667a",
  },
  {
    id: 31,
    location: Bangalore,
    price: 32000,
    available_from: "2022-09-26",
    property_type: Flat,
    favourite: false,
    image:
      "https://img.staticmb.com/mbimages/project/Photo_h310_w462/2022/06/30/Project-Photo-36-Sharanya-Altura-Ahmedabad-5326989_576_1062_310_462.JPG",
  },
  {
    id: 32,
    location: Bangalore,
    price: 38000,
    available_from: "2022-10-6",
    property_type: Flat,
    favourite: false,
    image:
      "https://www.noelprojects.com/wp-content/uploads/2021/01/noel-octave-th.jpg",
  },
  {
    id: 33,
    location: Bangalore,
    price: 35000,
    available_from: "2022-09-15",
    property_type: House,
    favourite: false,
    image:
      "https://www.archplanest.com/wp-content/uploads/2020/05/Online-House-Plan-33.jpg",
  },
  {
    id: 34,
    location: Bangalore,
    price: 39000,
    available_from: "2022-09-25",
    property_type: House,
    favourite: false,
    image:
      "https://oceanicvalley.com/wp-content/uploads/2019/02/RowHouses_artistrendition.jpg",
  },
  {
    id: 35,
    location: Bangalore,
    price: 41000,
    available_from: "2022-09-30",
    property_type: House,
    favourite: false,
    image:
      "https://www.archplanest.com/wp-content/uploads/2013/06/Small_House_Row_House_Plan_03.jpg",
  },
  {
    id: 36,
    location: Bangalore,
    price: 43000,
    available_from: "2022-10-15",
    property_type: House,
    favourite: false,
    image:
      "http://thehousedesignhub.com/wp-content/uploads/2021/06/55E-1024x682.jpg",
  },
  {
    id: 37,
    location: Bangalore,
    price: 48000,
    available_from: "2022-09-15",
    property_type: Bungalows,
    favourite: false,
    image:
      "https://content3.jdmagicbox.com/comp/gwalior/t1/9999px751.x751.151114184605.a4t1/catalogue/house-design-engineering-maharajpura-gwalior-architect-all-india-ruqq7w9gdh-250.jpg",
  },
  {
    id: 38,
    location: Bangalore,
    price: 49000,
    available_from: "2022-09-29",
    property_type: Bungalows,
    favourite: false,
    image:
      "https://easemyhouse.com/wp-content/uploads/2022/06/row-house-plan.jpg",
  },
];

export { data };
