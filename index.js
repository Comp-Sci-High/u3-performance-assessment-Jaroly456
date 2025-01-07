// Good luck!

const express = require('express');
const { networkInterfaces } = require('os');
const app = express()

let volleyball = {
    position: [
        {
          name: "Setter",
          description: "The playmaker responsible for setting the ball for attackers."
        },
        {
          name: "Outside Hitter",
          description: "The primary attacker who scores points from the front and back row."
        },
        {
          name: "Middle Blocker",
          description: "Specializes in blocking and quick middle attacks near the net."
        },
        {
          name: "Opposite Hitter",
          description: "A versatile attacker positioned opposite the setter, aiding in both offense and defense."
        },
        {
        name: "Libero",
          description: "A defensive specialist who excels in passing and digging."
        },
        {
          name: "Defensive Specialist",
          description: "Focused on defense and controlling the ball during crucial plays."
        }
      ],
    japanTeams: [
        { name: "Voreas Hokkaido", 
          playerCount: "16", 
          headCoach: "Klein Edo" 
        },
        { name: "Tokyo Great Bears", 
          playerCount: "17", 
          headCoach: "Vourinen Kasper" 
        },
        { name: "VC Nagano Tridents", 
          playerCount: "20", 
          headCoach: "Shinji Kawamura" 
        },
        { name: "Toray Arrows Shizuoka", 
          playerCount: "18", 
          headCoach: "Yuta Abe" 
        },
        { name: "Jtekt Stings Aichi", 
          playerCount: "17", 
          headCoach: "Michal Gogol" 
        },
        { name: "Wolfdogs Nagoya", 
          playerCount: "16", 
          headCoach: "Baldovin Valrio" 
        },
        { name: "Osaka Blueteon", 
          playerCount: "15", 
          headCoach: "Tillie Laurent" 
        },
        { name: "Suntory Sunbirds Osaka", 
          playerCount: "19", 
          headCoach: "Lecat Olivier" 
        },
        { name: "Nippon Steel Sakai Blazers", 
          playerCount: "16", 
          headCoach: "Kitajima Takeshi" 
        },
        { name: "Hiroshima Thunders", 
          playerCount: "21", 
          headCoach: "Carlos Javier Weber" 
        }
    ]
}

app.use((req, res, next) => {
    console.log(req.method + "/" + req.url)
    next()
})

app.get("/", (req, res, next) => {
    res.status(200).send("<h2>Welcome to the Japan SV.Leauge volleyball API</h2>")
})

app.get("/docs", (req, res, next) => {
  res.status(200).send("All available routes are /api/volleyball/positions, /api/volleyball/positions/:idNum, /api/volleyball/teams, /api/volleyball/teams/id")
})

app.get("/api/volleyball/teams", (req, res, next) => {
  res.status(200).json(volleyball.japanTeams)
})

app.get("/api/volleyball/teams/:id", (req, res, next) => {
  const id = req.params.id
  res.status(200).json(volleyball.japanTeams[id])
})

app.get("/api/volleyball/positions", (req, res, next) => {
  res.status(200).json(volleyball.position)
})

app.get("/api/volleyball/positions/:idNum", (req, res, next) => {
  const idNum = req.params.idNum
  res.status(200).json(volleyball.position[idNum])
})

app.use((req, res, next) => {
  res.status(404).send("404 NOT FOUND")
})

app.listen(3000, () => {
    console.log("Server running")
})
