const express = require('express');
const app = express();
const port = 3000;

// getTopcandidates?skills=['angular','vue']
// getTopcandidates/skills/angular
app.get("/getTopcandidates/skills/:skill", (req, res) => {
    console.log(req.params.skill)
    res.send(req.params.skill)
})

app.listen(port, () => {
    console.log(`Running on ${port}`)
})

// let candidatesSkills = [
//   {
//     name: "Roger Gomez",
//     experience: 4,
//     skills: {
//       frontend: ["vue"],
//       backend: ["node", "express"],
//       language: ["javascript"],
//       database: ["postgresql"],
//     },
//   },
//   {
//     name: "Roland Richards",
//     skills: {
//       frontend: ["angular"],
//       backend: ["node"],
//       language: ["javascript"],
//       database: ["mongodb"],
//     },
//   },
//   {
//     name: "Vanessa Fernandez",
//     experience: 9,
//     skills: {
//       frontend: ["vue", "react"],
//       backend: ["node", "express"],
//       language: ["javascript", "python"],
//       database: ["postgresql", "mssql"],
//     },
//   },
// ];

// /**
// //  * getTopCandidates(['vue', 'node', 'javascript', 'postgresql'])
//  */

// let newObj = { 
//     vanessa: ["angular", "node"], 
//     roland: ["angular"] 
// };

// let myObject = new Object.assign()
// console.log("myObject", myObject)

// let candidatesDetails = {};
// function getTopCandidates() {
  
//     candidatesSkills.forEach((candidatesSkill) => {
//         candidatesDetails[candidatesSkill.name] = candidatesSkill.skills

//     // if (candidatesSkill.skills.frontend.includes("vue")) {
//     //     console.log("candidatesSkill", candidatesSkill)
//     //     return candidatesSkill;
//     // }
//   });
// }

// console.log(getTopCandidates());
