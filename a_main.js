for (let i = 1000; i >= 0; i -= 2) {
    console.log(i);
}

for (let i = 0; i <= 10000; i++) {
    if (i === 2500) {
        alert("A quarter of the way there!");
    } else if (i === 5000) {
        alert("Halfway there!")
    } else if (i === 10000) {
        alert("The loop is done!");
    }
}

const shows = ["The Good Place", "Avatar: The Last Airbender", "Never Have I Ever", "XO Kitty", "Total Drama"];

for (let i = 0; i < shows.length; i++) {
    console.log("My #" + (i + 1) + " favorite tv show is " + shows[i] + ".");
}