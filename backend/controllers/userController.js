exports.getUser = (req, res, next) => {
  res.status(200).json({
    name: "cookie",
    level: {
      current: 63,
      max: 110000,
      value: 69840,
      estHour: 60,
    },
    progress: [
      {
        name: "Weapons",
        value: 134,
        max: 185,
      },
      {
        name: "Kits",
        value: 46,
        max: 64,
      },
      {
        name: "Vehicles",
        value: 77,
        max: 182,
      },
      {
        name: "Medals",
        value: 11,
        max: 54,
      },
      {
        name: "Assignments",
        value: 21,
        max: 110,
      },
      {
        name: "Dog tags",
        value: 357,
        max: 720,
      },
      {
        name: "Battlepacks",
      },
    ],
    stats: {
      winPercent: 44,
      scoreMin: 592,
      killsAvg: 0.6,
    },
    loadOuts: [
      {
        title: "Top Vehicle",
        name: "Main Battle tank",
        kills: 33,
        image: "https://i.ibb.co/f2HGvbb/soldier-tank-white.png",
      },
      {
        title: "Top Primary",
        name: "ACW-R",
        kills: 495,
        image: "https://i.ibb.co/n6NV2Qk/acw-white.png",
      },
      {
        title: "Top Class",
        name: "Enginner",
        score: 828514,
        image: "https://i.ibb.co/M78LyDp/engineer-white.png",
      },
      {
        title: "Top Side Arm",
        name: "m9",
        kills: 112,
        image: "https://i.ibb.co/bWCzhsX/m9-white.png",
      },
    ],
  });
};
