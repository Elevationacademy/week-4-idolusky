const validator = require('validator')

// console.log(validator.isEmail("shoobert@dylan"))

// console.log(validator.isMobilePhone("786-329-9958", 'en-US'));

let blacklist = ["!", "?", ".", "@", "~", ",", "'"]

let text = "I'M SO EXCITED!!!~!"
// console.log(validator.blacklist(text, blacklist))


// exercise 2

const faker = require('faker')

const makeHuman = function (number) {
    for (let h = 0; h < number; h++) {
        console.log(faker.fake("{{name.firstName}},{{image.avatar}},{{company.companyName}}"))
    }
}
makeHuman(2)