let candidatesSkills = [
  {
    name: "Roger Gomez",
    experience: 4,
    skills: {
      frontend: ["vue"],
      backend: ["node", "express"],
      language: ["javascript"],
      database: ["postgresql"],
    },
  },
  {
    name: "Roland Richards",
    skills: {
      frontend: ["angular"],
      backend: ["node"],
      language: ["javascript"],
      database: ["mongodb"],
    },
  },
  {
    name: "Vanessa Fernandez",
    experience: 9,
    skills: {
      frontend: ["vue", "react"],
      backend: ["node", "express"],
      language: ["javascript", "python"],
      database: ["postgresql", "mssql"],
    },
  },
];

// let obj = Object.fromEntries(candidatesSkills);

let obj = {}
for(i=0; i < candidatesSkills.length; i++) {
    obj[i] = candidatesSkills[i]
}

console.log(obj)

let obj2 = {}
candidatesSkills.forEach((skill, index) => {
    const { skills } = skill;
    let List = []
    let skillsList = Object.values(skills)
    console.log("skillsList", skillsList)
    List = Object.entries(skills)
    console.log("List", List)
    // obj2[skill.name] = [(skill.skills.frontend).join(', '), (skill.skills.backend).join(', ')]
})

console.log("obj2", obj2)