let findTheOldest = function (array) {
    const oldest = array.sort(function (a, b) {
        if ('yearOfDeath' in a == false && 'yearOfDeath' in b == false) {
            const last = ((new Date()).getFullYear()) - a.yearOfBirth;
            const next = ((new Date()).getFullYear()) - b.yearOfBirth;
            return last > next ? -1 : 1;
        } else if ('yearOfDeath' in a == false) {
            const last = ((new Date()).getFullYear()) - a.yearOfBirth;
            const next = b.yearOfDeath - b.yearOfBirth;
            return last > next ? -1 : 1;
        } else if ('yearOfDeath' in b == false) {
            const last = a.yearOfDeath - a.yearOfBirth;
            const next = ((new Date()).getFullYear()) - b.yearOfBirth;
            return last > next ? -1 : 1;
        } else {
            const last = a.yearOfDeath - a.yearOfBirth;
            const next = b.yearOfDeath - b.yearOfBirth;
            return last > next ? -1 : 1;
        }
    });
    return oldest[0];
}

module.exports = findTheOldest
