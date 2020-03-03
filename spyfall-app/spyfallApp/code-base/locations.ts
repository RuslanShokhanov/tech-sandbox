import { MissionLocation } from "./interfaces";


export const generateLocation = () => {
    var keys = Object.keys(locations);
    return locations[keys[(keys.length * Math.random()) << 0]];
};

export const locations: MissionLocation = {
    football: { name: 'Футбольный матч', image: require('./images/football-game.jpg') },
    boardGame: {
        name: 'Настольные игры',
        image: require('./images/board-games.jpg')
    },
    store: { name: 'Магазин', image: require('./images/store.jpeg') },
    spaceStation: {
        name: 'Космическая станция',
        image: require('./images/space-station.jpg')
    },
    carousel: {
        name: 'Парк аттракционов',
        image: require('./images/amusement-park.jpg')
    },
    train: { name: 'Поезд', image: require('./images/train.jpg') },
    schoolBus: {
        name: 'Школьный автобус',
        image: require('./images/school-bus.jpg')
    },
    theatre: { name: 'Театр', image: require('./images/theatre.jpg') },
    squad: { name: 'Партизанский отряд', image: require('./images/squad.jpeg') },
    clinic: { name: 'Больница', image: require('./images/clinic.jpg') },
    taxi: { name: 'Такси', image: require('./images/taxi.jpg') },
    revolution: { name: 'Революция', image: require('./images/revolution.jpg') },
    submarine: { name: 'Подводная лодка', image: require('./images/submarine.jpg') },
    constructionSite: { name: 'Стройка', image: require('./images/construction-site.jpg') },
    mall: { name: 'Мельница', image: require('./images/mall.jpg') },
    hippodrome: { name: 'Ипподром', image: require('./images/hippodrome.jpg') },
    shootingGallery: { name: 'Тир', image: require('./images/shooting-gallery.jpg') },
    casino: { name: 'Казино', image: require('./images/casino.jpg') },
    race: { name: 'Автогонки', image: require('./images/race.jpg') },
    skiResort: {
        name: 'Горнолыжный курорт',
        image: require('./images/ski-resort.jpg')
    },
    filming: { name: 'Киностудия', image: require('./images/film-studio.jpg') },
    queue: { name: 'Очередь', image: require('./images/queue.jpg') },
    beach: { name: 'Пляж', image: require('./images/beach.jpg') },
    bowling: { name: 'Боулинг', image: require('./images/bowling.jpg') },
    plane: { name: 'Самолет', image: require('./images/airplane.jpg') }
    // библиотека
    // стоматолог
    // зоопарк
    // ветклиника
};
