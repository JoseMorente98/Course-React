import { heroes } from "../data/heroes"

export const getHeroesByName = (name = '') => {

    if (name == '') {
        return [];
    }
    let heroesArr = [];

    heroes.forEach(hero => {
        if (hero.superhero.toLowerCase().includes(name.toLowerCase())) {
            heroesArr.push(hero);
        }
    });

    return heroesArr;
}