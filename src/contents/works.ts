export const Works = {
    'Barba Azul': [
        '1.png',
        '2.png',
        '3.png',
    ],
    'Cachinhos Dourados': [
        '0.png',
        '1.png',
        '2.png',
        '3.png',
    ],
}

export const Root = '../../public/';

export const getDir = ( key: string ) => {
    return key.toLowerCase().replace(' ', '-');
}