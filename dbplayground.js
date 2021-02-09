// access to database
const db = require('./models')

// firstName: DataTypes.STRING,
// lastName: DataTypes.STRING,
// age: DataTypes.INTEGER,
// email: DataTypes.STRING

// lets make some users
// db.user.create({
//     firstName: 'Aron',
//     lastName: 'Hernandez',
//     age: 29,
//     email: 'code@vim.org'
// })
// .then(newUser=> {
//     // make a pet associated with this user
//     // createASSOCIATEDMODELNAME()
//     // because we made an association, we get access to
//     // newUser.createBook({ title: 'The Hobbit'})
//     newUser.createPet({
//         name: 'Samson',
//         species: 'Dog'
//     })
//     .then(newAnimal=> {
//         console.log(newAnimal)
//     })
// })

// db.user.findOne({ where: {id: 2}})
// .then(user=> {
//     // another built in method getTABLEPLURAL()
//     // this will get all pets associated with that user
//     user.getPets()
//     .then(allPets=> {
//         console.log(allPets[0].name)
//     })
// })
// // db.pet.create({
// //     name: 'Samson',
// //     species: 'Dog',
// //     userId: 2 
// // })

// db.pet.findOrCreate({
//     where: {
//       name: "Silly May",
//       species: "Mini Aussie",
//       userId: 2
//     }
//   }).then(function([pet, created]) {
//     // Second, get a reference to a toy.
//     db.toy.findOrCreate({
//       where: {type: "stinky bear", color: "brown"}
//     }).then(function([toy, created]) {
//       // Finally, use the "addModel" method to attach one model to another model.
//       pet.addToy(toy).then(function(relationInfo) {
//         console.log(toy.type, "added to", pet.name);
//       });
//     });
//   });

db.pet.findOrCreate({
    where: { name: "Silly May", species: "Mini Aussie" }
}).then(function ([pet, created]) {
    pet.getUser().then(function (user) {
        // Check if their are any pets associated with this toy

        // findOrCreate a Pet and add it to the toy
        db.user.findOrCreate({
            where: {
                firstName: "Jessica",
                // species: "Toy Aussie"
            }
        }).then(function ([user, created]) {
            pet.addUser(user).then(function (relationInfo) {
                console.log(user.firstName)
            })
        });
        // end of if statement
    });
});

