var movie = [
    {
        title: "The Incredibles",
        rating: 4.5,
        hasWatched: true
    },
    {
        title: "Zombieland II",
        rating: 4,
        hasWatched: false
    },
    {
        title: "The Conjuring",
        rating: 3.5,
        hasWatched: true
    },
    {
        title: "Hustler",
        rating: 4.5,
        hasWatched: false
    }
]

movie.forEach(element => {
    if (element.hasWatched){
        console.log(`You have watched "${element.title}" - ${element.rating} stars`)
    } else {
        console.log(`You have not seen "${element.title}" - ${element.rating} stars`)
    }
});
