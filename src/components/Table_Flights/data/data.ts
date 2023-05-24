
interface IDataRaiseCityTarget {
    goGoCity: string;
    stopCity: string;
}

export interface IListOFStops {
    nameStop: string;
    time: string;
    date: string,
    map: string;
    id: string
}

interface IRegular {
    mon: boolean,
    tues: boolean,
    wed: boolean,
    thurs: boolean,
    fri: boolean,
    sat: boolean,
    sun: boolean
}



export type  IDataRaise = {
    id: string;
    _id: string;
    city: string;
    busNumber: string;
    busName: string;
    busImg: string;
    price: number;
    map: object;
    landingTime: string;
    dataOfLanding: string;
    status: string;
    cityTarget: IDataRaiseCityTarget;
    listOfStops: IListOFStops[];
    isRegular?: boolean;
    regular?: IRegular
}





// const dataRaises: IDataRaise[] = [{
//     _id: 1,
//     city: "Одеса",
//     busNumber: "BH7080BI",
//     busName: "Toyota",
//     busImg: "https://sc04.alicdn.com/kf/H706a0317bd284863bc4f36b4417eb8eea.jpg",
//     price: 1800,
//     phone: "+380984323434",
//     map: {},
//     landingTime: `08:30`,
//     dataOfLanding: "2023-04-20",
//     status: "active",
//     cityTarget: {
//         goGoCity: "Кишинів",
//         stopCity: "Бухарест"
//     },
//     listOfStops: [
//         {
//             _id: 1,
//             nameStop: "Зупинка Філатова",
//             time: "8:30",
//             map: {},
//             status: "active"
//         },
//         {
//             _id: 2,
//             nameStop: "Зупинка Філатова",
//             time: "9:30",
//             map: {},
//             status: "active"
//         },
//         {
//             _id: 3,
//             nameStop: "Зупинка Філатова",
//             time: "10:30",
//             map: {},
//             status: "active"
//         },
//         {
//             _id: 4,
//             nameStop: "Зупинка Філатова",
//             time: "11:30",
//             map: {},
//             status: "active"
//         },
//         {
//             _id: 5,
//             nameStop: "Зупинка Філатова",
//             time: "12:30",
//             map: {},
//             status: "active"
//         },
//         {
//             _id: 6,
//             nameStop: "Зупинка Філатова",
//             time: "13:30",
//             map: {},
//             status: "active"
//         },
//         {
//             _id: 7,
//             nameStop: "Зупинка Філатова",
//             time: "13:30",
//             map: {},
//             status: "active"
//         },
//         {
//             _id: 8,
//             nameStop: "Зупинка Філатова",
//             time: "13:30",
//             map: {},
//             status: "active"
//         },
//         {
//             _id: 9,
//             nameStop: "Зупинка Філатова",
//             time: "13:30",
//             map: {},
//             status: "active"
//         }
//     ]
// },
// {
//     _id: 2,
//     city: "Бухарест",
//     busNumber: "BH7080BI",
//     busName: "Toyota",
//     busImg: "https://i2.wp.com/3park.ru/wp-content/uploads/2018/10/P1010954-%D0%B2%D0%B5%D0%B1.jpg",
//     price: 1800,
//     phone: "+380984323434",
//     map: {},
//     landingTime: `08:30`,
//     dataOfLanding: "2023-04-20",
//     status: "paused",
//     cityTarget: {
//         goGoCity: "Кишинів",
//         stopCity: "Одеса"
//     },
//     listOfStops: [
//         {
//             _id: 1,
//             nameStop: "Зупинка Філатова",
//             time: "8:30",
//             map: {},
//             status: "active"
//         },
//         {
//             _id: 2,
//             nameStop: "Зупинка Філатова",
//             time: "9:30",
//             map: {},
//             status: "active"
//         },
//         {
//             _id: 3,
//             nameStop: "Зупинка Філатова",
//             time: "10:30",
//             map: {},
//             status: "active"
//         },
//         {
//             _id: 4,
//             nameStop: "Зупинка Філатова",
//             time: "11:30",
//             map: {},
//             status: "active"
//         },
//         {
//             _id: 5,
//             nameStop: "Зупинка Філатова",
//             time: "12:30",
//             map: {},
//             status: "active"
//         },
//         {
//             _id: 6,
//             nameStop: "Зупинка Філатова",
//             time: "13:30",
//             map: {},
//             status: "active"
//         }
//     ]
// },
// {
//     _id: 3,
//     city: "Одеса",
//     busNumber: "BH7080BI",
//     busName: "Toyota",
//     busImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3a7v9bDXYCKHwPnPYcfWNgeBWGNVwdGimGg&usqp=CAU",
//     price: 1800,
//     phone: "+380984323434",
//     map: {},
//     landingTime: `08:30`,
//     dataOfLanding: "2023-04-20",
//     status: "complete",
//     cityTarget: {
//         goGoCity: "Варшава",
//         stopCity: "Прага"
//     },
//     listOfStops: [
//         {
//             _id: 1,
//             nameStop: "Зупинка Філатова",
//             time: "8:30",
//             map: {},
//             status: "active"
//         },
//         {
//             _id: 2,
//             nameStop: "Зупинка Філатова",
//             time: "9:30",
//             map: {},
//             status: "active"
//         },
//         {
//             _id: 3,
//             nameStop: "Зупинка Філатова",
//             time: "10:30",
//             map: {},
//             status: "active"
//         },
//         {
//             _id: 4,
//             nameStop: "Зупинка Філатова",
//             time: "11:30",
//             map: {},
//             status: "active"
//         },
//         {
//             _id: 5,
//             nameStop: "Зупинка Філатова",
//             time: "12:30",
//             map: {},
//             status: "active"
//         },
//         {
//             _id: 6,
//             nameStop: "Зупинка Філатова",
//             time: "13:30",
//             map: {},
//             status: "active"
//         }
//     ]
// },
// {
//     _id: 4,
//     city: "Прага",
//     busNumber: "BH7080BI",
//     busName: "Toyota",
//     busImg: "data:image/jpeg;base64,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",
//     price: 1800,
//     phone: "+380984323434",
//     map: {},
//     landingTime: `08:30`,
//     dataOfLanding: "2023-04-20",
//     status: "active",
//     cityTarget: {
//         goGoCity: "Варшава",
//         stopCity: "Франція"
//     },
//     listOfStops: [
//         {
//             _id: 1,
//             nameStop: "Зупинка Філатова",
//             time: "8:30",
//             map: {},
//             status: "active"
//         },
//         {
//             _id: 2,
//             nameStop: "Зупинка Філатова",
//             time: "9:30",
//             map: {},
//             status: "active"
//         },
//         {
//             _id: 3,
//             nameStop: "Зупинка Філатова",
//             time: "10:30",
//             map: {},
//             status: "active"
//         },
//         {
//             _id: 4,
//             nameStop: "Зупинка Філатова",
//             time: "11:30",
//             map: {},
//             status: "active"
//         },
//         {
//             _id: 5,
//             nameStop: "Зупинка Філатова",
//             time: "12:30",
//             map: {},
//             status: "active"
//         },
//         {
//             _id: 6,
//             nameStop: "Зупинка Філатова",
//             time: "13:30",
//             map: {},
//             status: "active"
//         }
//     ]
// },
// {
//     _id: 5,
//     city: "Київ",
//     busNumber: "BH7080BI",
//     busName: "Toyota",
//     busImg: "https://i2.wp.com/3park.ru/wp-content/uploads/2018/10/P1010954-%D0%B2%D0%B5%D0%B1.jpg",
//     price: 1800,
//     phone: "+380984323434",
//     map: {},
//     landingTime: `08:30`,
//     dataOfLanding: "2023-04-20",
//     status: "active",
//     cityTarget: {
//         goGoCity: "Херсон",
//         stopCity: "Ялта"
//     },
//     listOfStops: [
//         {
//             _id: 1,
//             nameStop: "Зупинка Філатова",
//             time: "8:30",
//             map: {},
//             status: "active"
//         },
//         {
//             _id: 2,
//             nameStop: "Зупинка Філатова",
//             time: "9:30",
//             map: {},
//             status: "active"
//         },
//         {
//             _id: 3,
//             nameStop: "Зупинка Філатова",
//             time: "10:30",
//             map: {},
//             status: "active"
//         },
//         {
//             _id: 4,
//             nameStop: "Зупинка Філатова",
//             time: "11:30",
//             map: {},
//             status: "active"
//         },
//         {
//             _id: 5,
//             nameStop: "Зупинка Філатова",
//             time: "12:30",
//             map: {},
//             status: "active"
//         },
//         {
//             _id: 6,
//             nameStop: "Зупинка Філатова",
//             time: "13:30",
//             map: {},
//             status: "active"
//         }
//     ]
// },
// {
//     _id: 6,
//     city: "Одеса",
//     busNumber: "BH7080BI",
//     busName: "Toyota",
//     busImg: "https://sc04.alicdn.com/kf/H706a0317bd284863bc4f36b4417eb8eea.jpg",
//     price: 1800,
//     phone: "+380984323434",
//     map: {},
//     landingTime: `08:30`,
//     dataOfLanding: "2023-04-20",
//     status: "active",
//     cityTarget: {
//         goGoCity: "Бухарест",
//         stopCity: "Стамбул"
//     },
//     listOfStops: [
//         {
//             _id: 1,
//             nameStop: "Зупинка Філатова",
//             time: "8:30",
//             map: {},
//             status: "active"
//         },
//         {
//             _id: 2,
//             nameStop: "Зупинка Філатова",
//             time: "9:30",
//             map: {},
//             status: "active"
//         },
//         {
//             _id: 3,
//             nameStop: "Зупинка Філатова",
//             time: "10:30",
//             map: {},
//             status: "active"
//         },
//         {
//             _id: 4,
//             nameStop: "Зупинка Філатова",
//             time: "11:30",
//             map: {},
//             status: "active"
//         },
//         {
//             _id: 5,
//             nameStop: "Зупинка Філатова",
//             time: "12:30",
//             map: {},
//             status: "active"
//         },
//         {
//             _id: 6,
//             nameStop: "Зупинка Філатова",
//             time: "13:30",
//             map: {},
//             status: "active"
//         },
//         {
//             _id: 7,
//             nameStop: "Зупинка Філатова",
//             time: "13:30",
//             map: {},
//             status: "active"
//         },
//         {
//             _id: 8,
//             nameStop: "Зупинка Філатова",
//             time: "13:30",
//             map: {},
//             status: "active"
//         },
//         {
//             _id: 9,
//             nameStop: "Зупинка Філатова",
//             time: "13:30",
//             map: {},
//             status: "active"
//         }
//     ]
// }, {
//     _id: 7,
//     city: "Одеса",
//     busNumber: "BH7080BI",
//     busName: "Toyota",
//     busImg: "https://sc04.alicdn.com/kf/H706a0317bd284863bc4f36b4417eb8eea.jpg",
//     price: 1800,
//     phone: "+380984323434",
//     map: {},
//     landingTime: `08:30`,
//     dataOfLanding: "2023-04-20",
//     status: "active",
//     cityTarget: {
//         goGoCity: "Варшава",
//         stopCity: "Франція"
//     },
//     listOfStops: [
//         {
//             _id: 1,
//             nameStop: "Зупинка Філатова",
//             time: "8-30",
//             map: {},
//             status: "active"
//         },
//         {
//             _id: 2,
//             nameStop: "Зупинка Філатова",
//             time: "9-30",
//             map: {},
//             status: "active"
//         },
//         {
//             _id: 3,
//             nameStop: "Зупинка Філатова",
//             time: "10-30",
//             map: {},
//             status: "active"
//         },
//         {
//             _id: 4,
//             nameStop: "Зупинка Філатова",
//             time: "11-30",
//             map: {},
//             status: "active"
//         },
//         {
//             _id: 5,
//             nameStop: "Зупинка Філатова",
//             time: "12-30",
//             map: {},
//             status: "active"
//         },
//         {
//             _id: 6,
//             nameStop: "Зупинка Філатова",
//             time: "13-30",
//             map: {},
//             status: "active"
//         },
//         {
//             _id: 7,
//             nameStop: "Зупинка Філатова",
//             time: "13-30",
//             map: {},
//             status: "active"
//         },
//         {
//             _id: 8,
//             nameStop: "Зупинка Філатова",
//             time: "13-30",
//             map: {},
//             status: "active"
//         },
//         {
//             _id: 9,
//             nameStop: "Зупинка Філатова",
//             time: "13-30",
//             map: {},
//             status: "active"
//         }
//     ]
// },]

// export { dataRaises }