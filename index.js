const hikeSpots = [
  {
    spotName: 'Crypt Lake Trail',
    image: 'photos/pic-CryptLakeTrail.jpeg',
    description: `Try this 18.8-km loop trail near Improvement District No. 4, Alberta. Generally considered a challenging route, it takes an average of 6 h 24 min to complete. This is a very popular area for birding, camping, and fishing, so you'll likely encounter other people while exploring. The best times to visit this trail are April through September. Dogs are welcome, but must be on a leash.`,
  },
  {
    spotName: 'Healy Pass',
    image: 'photos/pic-healy-pass.jpeg',
    description: `Experience this 17.9-km out-and-back trail near Banff, Alberta. Generally considered a challenging route, it takes an average of 6 h 13 min to complete. This is a very popular area for backpacking, birding, and camping, so you'll likely encounter other people while exploring. The best times to visit this trail are June through October.`,
  },
  {
    spotName: 'Johnston Canyon1',
    image: 'photos/pic-johnston-canyon1.jpeg',
    description: `Experience this 5.5-km out-and-back trail near Banff, Alberta. Generally considered a moderately challenging route, it takes an average of 1 h 55 min to complete. This is a very popular area for birding, hiking, and snowshoeing, so you'll likely encounter other people while exploring. The trail is open year-round and is beautiful to visit anytime.`,
  },
  {
    spotName: 'Johnston Canyon',
    image: 'photos/pic-johnston-canyon.jpeg',
    description: `Experience this 5.5-km out-and-back trail near Banff, Alberta. Generally considered a moderately challenging route, it takes an average of 1 h 55 min to complete. This is a very popular area for birding, hiking, and snowshoeing, so you'll likely encounter other people while exploring. The trail is open year-round and is beautiful to visit anytime.`,
  },
  {
    spotName: 'Lake Agnes',
    image: 'photos/pic-lake-agnes.jpeg',
    description: `Get to know this 7.4-km out-and-back trail near Lake Louise, Alberta. Generally considered a challenging route, it takes an average of 3 h 4 min to complete. This is a very popular area for birding, hiking, and running, so you'll likely encounter other people while exploring. The best times to visit this trail are June through October. Dogs are welcome, but must be on a leash.`,
  },
  {
    spotName: 'Mount Bourgeau',
    image: 'photos/pic-mount-bourgeau.jpeg',
    description: `Experience this 22.9-km out-and-back trail near Banff, Alberta. Generally considered a challenging route. This is a very popular area for hiking and snowshoeing, so you'll likely encounter other people while exploring. The best times to visit this trail are June through October.`,
  },
  {
    spotName: 'Sarrail Ridge',
    image: 'photos/pic-Sarrail-ridge.jpeg',
    description: `Head out on this 11.4-km out-and-back trail near Kananaskis Improvement, Alberta. Generally considered a challenging route. This is a very popular area for backpacking, camping, and hiking, so you'll likely encounter other people while exploring. The best times to visit this trail are June through October. Dogs are welcome, but must be on a leash.`,
  },
  {
    spotName: 'Tent Ridge',
    image: 'photos/pic-Tent-ridge.jpeg',
    description: `Get to know this 10.1-km loop trail near Dead Man's Flats, Alberta. Generally considered a challenging route. This is a very popular area for camping, hiking, and snowshoeing, so you'll likely encounter other people while exploring. The best times to visit this trail are June through October. Dogs are welcome, but must be on a leash.`,
  },
  {
    spotName: 'Tunnel Mountain Summit',
    image: 'photos/pic-tunnel-mountain-summit.jpeg',
    description: `Check out this 4.3-km out-and-back trail near Banff, Alberta. Generally considered a moderately challenging route, it takes an average of 1 h 40 min to complete. This is a very popular area for hiking and running, so you'll likely encounter other people while exploring. The trail is open year-round and is beautiful to visit anytime.`,
  },
  {
    spotName: 'Upper Grassi Lake',
    image: 'photos/pic-upper-grassi-lakes-trail.jpeg',
    description: `Get to know this 3.4-km out-and-back trail near Canmore, Alberta. Generally considered a moderately challenging route, it takes an average of 1 h 8 min to complete. This is a very popular area for birding, hiking, and running, so you'll likely encounter other people while exploring. The best times to visit this trail are April through October. Dogs are welcome, but must be on a leash.`,
  },
];

var title = document.getElementById('title');
var image = document.getElementById('image');
var description = document.getElementById('description');

var generateRandom = function () {
  var number = Math.floor(Math.random() * hikeSpots.length);
  title.innerText = `The best place you should go is "${hikeSpots[number].spotName}"`;
  description.innerText = hikeSpots[number].description;
  image.src = hikeSpots[number].image;
};

document.getElementById('clickme').addEventListener('click', generateRandom);
