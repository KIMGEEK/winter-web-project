const player = {
    name: "nico",
    sayhello: function(otherPersonsName) {
        console.log('helo! ' + otherPersonsName + " nice to meet you");
    },
};

console.log(player.name);
player.sayhello("lynn");
player.sayhello("nico");