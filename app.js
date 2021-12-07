import Animal  from './Game/animal.js';
import Game from './Game/index.js';

const animals = [
    new Animal('Jacaré','./Medias/Songs/jacare.mp3'),
    new Animal('Teju','./Medias/Songs/teju.mp3'),
    new Animal('Gato Morisco','./Medias/Songs/gato-morisco.mp3'),
    new Animal('Jaguatirica', ''),
    new Animal('Gato do mato','./Medias/Songs/gato-selvagem.mp3'),
    new Animal('Suçurana', ''),
    new Animal('Guaxinim','./Medias/Songs/guaxinim.mp3'),
    new Animal('Preguiça', './Medias/Songs/preguica.mp3'),
    new Animal('Urso de óculos','./Medias/Songs/urso-de-oculos.mp3'),
    new Animal('Coruja','./Medias/Songs/coruja.mp3'),
    new Animal('Socozinho','./Medias/Songs/socozinho.mp3'),
    new Animal('Furão','./Medias/Songs/furao.mp3'),
    new Animal('Irara', './Medias/Songs/irara.mp3'),
    new Animal('Iguana','./Medias/Songs/iguana.mp3'),
    new Animal('Jobóia','./Medias/Songs/jiboia.mp3'),
    new Animal('Tartaruga','./Medias/Songs/tartaruga.mp3'),
    new Animal('Tatu Bola','./Medias/Songs/tatu.mp3')
]

new Game(animals).startGame();