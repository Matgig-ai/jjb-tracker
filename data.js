// Base de données des techniques JJB - Ceinture Marron
// Pour modifier : éditer ce fichier et commit sur GitHub

const techniquesData = [
  // MOUNT (7 techniques)
  {
    "category": "Mount",
    "technique": "Armbar from mount",
    "variants": "S-mount, jambe lourde, angle de hanche",
    "keyPoints": [
      "Maintenir le poids vers l'avant sur la poitrine",
      "Contrôler le bras en pinçant les genoux",
      "Pivoter la hanche à 90 degrés",
      "Jambes serrées, hanches hautes"
    ],
    "situations": [
      "Adversaire défend un collar choke",
      "Adversaire pousse sur votre hanche",
      "Transition depuis S-mount"
    ],
    "chains": [
      "Armbar → Triangle (si bras échappe)",
      "Armbar → Mounted triangle → Armbar",
      "Cross-collar → Armbar (défense du bras)"
    ]
  },
  {
    "category": "Mount",
    "technique": "Americana",
    "variants": "Contrôle du bras, poids du corps",
    "keyPoints": [
      "Isoler le bras à 90 degrés",
      "Poids du corps sur l'épaule adverse",
      "Contrôler le poignet avec les deux mains",
      "Rotation lente et progressive"
    ],
    "situations": [
      "Adversaire cadre avec les bras",
      "Adversaire essaye de pousser votre tête",
      "Transition depuis high mount"
    ],
    "chains": [
      "Americana → Cross-collar choke",
      "Americana → Mount to back transition",
      "Kimura grip → Americana switch"
    ]
  },
  {
    "category": "Mount",
    "technique": "Cross-collar choke",
    "variants": "Main profonde, coude au sol",
    "keyPoints": [
      "Première main profonde dans le col",
      "Deuxième main croise par-dessus",
      "Coudes au sol pour la pression",
      "Expansion de la poitrine"
    ],
    "situations": [
      "Adversaire garde les bras bas",
      "Position haute du mount stable",
      "Setup depuis gift wrap"
    ],
    "chains": [
      "Cross-collar → Armbar (défense)",
      "Failed cross-collar → Ezekiel",
      "Cross-collar → S-mount → Armbar"
    ]
  },
  {
    "category": "Mount",
    "technique": "Mounted triangle",
    "variants": "Transition vers triangle, jambe libre",
    "keyPoints": [
      "Capturer le bras et la tête ensemble",
      "Jambe par-dessus l'épaule",
      "Angle sur le côté obligatoire",
      "Serrer avec la jambe sur la nuque"
    ],
    "situations": [
      "Armbar défendu mais bras exposé",
      "Adversaire se met sur le côté",
      "Transition depuis high mount"
    ],
    "chains": [
      "Armbar → Mounted triangle",
      "Mounted triangle → Armbar (switch)",
      "S-mount → Mounted triangle"
    ]
  },
  {
    "category": "Mount",
    "technique": "Ezekiel choke",
    "variants": "Bras intérieur, col du gi",
    "keyPoints": [
      "Manche du gi dans la main",
      "Bras passe sous le cou",
      "Main libre attrape votre manche",
      "Expansion du torse pour serrer"
    ],
    "situations": [
      "Adversaire garde les coudes serrés",
      "Défense passive en mount",
      "Opportunité depuis high mount"
    ],
    "chains": [
      "Failed collar choke → Ezekiel",
      "Ezekiel → Take the back (si roule)",
      "Ezekiel → Armbar (défense du bras)"
    ]
  },
  {
    "category": "Mount",
    "technique": "Escape: Upa",
    "variants": "Pont explosif, blocage coude",
    "keyPoints": [
      "Pieds à plat, près des fesses",
      "Bloquer le bras et la jambe d'un côté",
      "Pont explosif avec hanches hautes",
      "Rouler dans la direction bloquée"
    ],
    "situations": [
      "Adversaire haut mount stable",
      "Poids mal réparti de l'adversaire",
      "Timing lors d'une attaque haute"
    ],
    "chains": [
      "Upa → Guard recovery",
      "Failed upa → Elbow escape",
      "Upa → Sweep to mount"
    ]
  },
  {
    "category": "Mount",
    "technique": "Escape: Elbow escape",
    "variants": "Shrimp, genou insertion",
    "keyPoints": [
      "Cadrer avec les coudes",
      "Shrimp pour créer l'espace",
      "Insérer le genou rapidement",
      "Récupérer la half guard minimum"
    ],
    "situations": [
      "Mount stable bas",
      "Adversaire ne menace pas immédiatement",
      "Combinaison après upa manqué"
    ],
    "chains": [
      "Elbow escape → Half guard → Sweep",
      "Frame → Shrimp → Elbow escape",
      "Upa fake → Elbow escape"
    ]
  },

  // BACK CONTROL (5 techniques)
  {
    "category": "Back control",
    "technique": "Rear naked choke (RNC)",
    "variants": "Hand fight, position menton",
    "keyPoints": [
      "Crochets profonds en place",
      "Bras sous le menton, pas la gorge",
      "Main derrière la tête (pas devant)",
      "Expansion de la poitrine pour serrer"
    ],
    "situations": [
      "Après un backtake réussi",
      "Adversaire expose le cou en défendant",
      "Transition depuis turtle"
    ],
    "chains": [
      "RNC → Armbar from back (défense du cou)",
      "Body triangle → RNC",
      "Bow and arrow → RNC (changement d'angle)"
    ]
  },
  {
    "category": "Back control",
    "technique": "Bow and Arrow choke",
    "variants": "Blocage hanche, traction col",
    "keyPoints": [
      "Grip profond dans le col",
      "Jambe capture la hanche/pantalon",
      "Extension du corps en arc",
      "Traction col vers vous"
    ],
    "situations": [
      "Back control avec gi",
      "Adversaire défend bien le cou",
      "Alternative au RNC"
    ],
    "chains": [
      "RNC défendu → Bow and arrow",
      "Bow and arrow → Armbar (switch)",
      "Collar grip → Bow and arrow setup"
    ]
  },
  {
    "category": "Back control",
    "technique": "Armbar from back",
    "variants": "Transition depuis RNC manqué",
    "keyPoints": [
      "Capturer le bras défensif",
      "Basculer sur le côté",
      "Jambe par-dessus le visage",
      "Isoler le bras complètement"
    ],
    "situations": [
      "RNC défendu avec les mains",
      "Adversaire crée de l'espace",
      "Bras exposé pendant la défense"
    ],
    "chains": [
      "RNC → Armbar from back",
      "Armbar from back → RNC (return)",
      "Seatbelt → Armbar transition"
    ]
  },
  {
    "category": "Back control",
    "technique": "Seatbelt control",
    "variants": "Crochet, body triangle",
    "keyPoints": [
      "Bras par-dessus épaule, sous le bras",
      "Hands gripped ensemble",
      "Crochets actifs ou body triangle",
      "Poids sur le dos de l'adversaire"
    ],
    "situations": [
      "Maintien du back control",
      "Setup pour attaques",
      "Position de contrôle dominante"
    ],
    "chains": [
      "Seatbelt → RNC",
      "Seatbelt → Armbar transition",
      "Seatbelt → Bow and arrow"
    ]
  },
  {
    "category": "Back control",
    "technique": "Escape back",
    "variants": "Pont latéral, se retourner",
    "keyPoints": [
      "Hand fighting agressif",
      "Créer l'espace avec le menton",
      "Pont latéral explosif",
      "Retourner vers l'adversaire"
    ],
    "situations": [
      "Back control défensif",
      "Crochets pas encore deep",
      "Timing lors du setup d'attaque"
    ],
    "chains": [
      "Hand fight → Bridge → Escape",
      "Escape back → Guard recovery",
      "Escape back → Reversal to top"
    ]
  },

  // SIDE CONTROL (5 techniques)
  {
    "category": "Side control",
    "technique": "Kimura",
    "variants": "Main au poignet, levier",
    "keyPoints": [
      "Grip en figure-4 sur le poignet",
      "Coude au-dessus de l'épaule",
      "Isoler l'épaule avec votre corps",
      "Lever vers le plafond et tourner"
    ],
    "situations": [
      "Adversaire cadre",
      "Bras exposé en défense",
      "Setup depuis knee on belly"
    ],
    "chains": [
      "Kimura → Take the back",
      "Kimura → Pass to mount",
      "Failed kimura → North-south"
    ]
  },
  {
    "category": "Side control",
    "technique": "Americana",
    "variants": "Bras plié, verrou au sol",
    "keyPoints": [
      "Bras plié à 90 degrés",
      "Isoler avec votre genou",
      "Figure-4 grip sur poignet",
      "Pression vers le sol"
    ],
    "situations": [
      "Side control stable",
      "Adversaire cadre avec bras",
      "Alternative à la kimura"
    ],
    "chains": [
      "Americana → Mount transition",
      "Kimura → Americana switch",
      "Americana → Back take (si roule)"
    ]
  },
  {
    "category": "Side control",
    "technique": "North-South choke",
    "variants": "Rotation épaule, pression thorax",
    "keyPoints": [
      "Position north-south stable",
      "Bras capture le cou profond",
      "Rotation de l'épaule dans le cou",
      "Pression thorax sur le visage"
    ],
    "situations": [
      "Transition vers north-south",
      "Adversaire défend side control",
      "Setup depuis mount escape défendu"
    ],
    "chains": [
      "Side control → North-south → Choke",
      "Failed mount → North-south choke",
      "North-south → Armbar (défense)"
    ]
  },
  {
    "category": "Side control",
    "technique": "Transition to mount",
    "variants": "Glissement genou intérieur",
    "keyPoints": [
      "Contrôle du bras loin",
      "Genou glisse vers les hanches",
      "Poids distribué pour empêcher shrimp",
      "Jambe stepped over rapidement"
    ],
    "situations": [
      "Side control stable établi",
      "Adversaire ne peut pas shrimper",
      "Améliorer la position"
    ],
    "chains": [
      "Side control → Mount → Submissions",
      "Knee on belly → Mount transition",
      "Failed submission → Mount improve"
    ]
  },
  {
    "category": "Side control",
    "technique": "Escape side control",
    "variants": "Shrimp, frame bras",
    "keyPoints": [
      "Frame avec avant-bras rigide",
      "Shrimp pour créer espace",
      "Récupérer la garde avec genou",
      "Ne jamais tourner le dos"
    ],
    "situations": [
      "Défense side control",
      "Échapper à la pression",
      "Récupérer guard ou half guard"
    ],
    "chains": [
      "Frame → Shrimp → Guard recovery",
      "Escape → Half guard → Sweep",
      "Bridge → Shrimp → Escape"
    ]
  },

  // HALF GUARD (5 techniques)
  {
    "category": "Half guard",
    "technique": "Old school sweep",
    "variants": "Contrôle jambe, underhook",
    "keyPoints": [
      "Underhook profond",
      "Contrôle de la jambe lointaine",
      "Élévation et rotation",
      "Finir en top position"
    ],
    "situations": [
      "Half guard avec underhook",
      "Adversaire base large",
      "Classic sweep opportunity"
    ],
    "chains": [
      "Old school → Mount",
      "Old school → Back take",
      "Failed old school → Deep half"
    ]
  },
  {
    "category": "Half guard",
    "technique": "Deep half sweep",
    "variants": "Sortie bassin, élévation",
    "keyPoints": [
      "Entrer en deep half complet",
      "Capturer la jambe lointaine",
      "Élévation avec les épaules",
      "Sortir vers le côté"
    ],
    "situations": [
      "Half guard bas",
      "Adversaire pression forte",
      "Contre le smash pass"
    ],
    "chains": [
      "Deep half → Sweep to top",
      "Deep half → Back take",
      "Lockdown → Deep half entry"
    ]
  },
  {
    "category": "Half guard",
    "technique": "Lockdown control",
    "variants": "Verrouillage jambes, stretch",
    "keyPoints": [
      "Triangle avec les jambes",
      "Pied sous leur jambe",
      "Stretch pour déséquilibrer",
      "Setup pour sweeps"
    ],
    "situations": [
      "Contrôle en half guard",
      "Empêcher le pass",
      "Setup electric chair"
    ],
    "chains": [
      "Lockdown → Old school sweep",
      "Lockdown → Electric chair",
      "Lockdown → Plan B sweep"
    ]
  },
  {
    "category": "Half guard",
    "technique": "Knee shield",
    "variants": "Distance, garde haute",
    "keyPoints": [
      "Genou sur leur poitrine/hanche",
      "Créer distance et cadre",
      "Grip sleeve pour contrôle",
      "Base pour sweeps et transitions"
    ],
    "situations": [
      "Half guard défensif",
      "Créer espace",
      "Setup pour techniques actives"
    ],
    "chains": [
      "Knee shield → Sweep",
      "Knee shield → Back take",
      "Knee shield → Recovery to closed guard"
    ]
  },
  {
    "category": "Half guard",
    "technique": "Pass half guard",
    "variants": "Knee slice, cross-face",
    "keyPoints": [
      "Underhook ou crossface",
      "Genou slice à travers",
      "Poids sur la poitrine",
      "Finir en side control"
    ],
    "situations": [
      "Top half guard",
      "Passer la garde",
      "Transition to dominant position"
    ],
    "chains": [
      "Half guard pass → Side control",
      "Knee slice → Mount transition",
      "Crossface → Pass → Submission"
    ]
  },

  // CLOSED GUARD (6 techniques)
  {
    "category": "Closed guard",
    "technique": "Scissor sweep",
    "variants": "Traction col, pivot genou",
    "keyPoints": [
      "Contrôle du col et manche",
      "Pied sur la hanche",
      "Jambe coupe derrière",
      "Rotation et push/pull"
    ],
    "situations": [
      "Adversaire posture droite",
      "Closed guard actif",
      "Setup classique"
    ],
    "chains": [
      "Scissor sweep → Mount",
      "Failed scissor → Hip bump",
      "Scissor → Flower sweep combination"
    ]
  },
  {
    "category": "Closed guard",
    "technique": "Hip bump sweep",
    "variants": "Montée hanche, bras postérieur",
    "keyPoints": [
      "S'asseoir et créer angle",
      "Capturer le bras",
      "Bump avec la hanche",
      "Rotation par-dessus"
    ],
    "situations": [
      "Adversaire poste une main",
      "Setup depuis failed attack",
      "Adversaire résiste au kimura"
    ],
    "chains": [
      "Kimura attempt → Hip bump",
      "Hip bump → Kimura (if defends)",
      "Hip bump → Guillotine (if jumps over)"
    ]
  },
  {
    "category": "Closed guard",
    "technique": "Flower sweep",
    "variants": "Traction jambe, rotation bassin",
    "keyPoints": [
      "Contrôle du bras et jambe",
      "Ouvrir la garde",
      "Rotation du bassin",
      "Élever et renverser"
    ],
    "situations": [
      "Adversaire base large",
      "Depuis tentative de pass",
      "Alternative scissor sweep"
    ],
    "chains": [
      "Flower sweep → Mount",
      "Scissor → Flower combination",
      "Flower → Triangle (if defends)"
    ]
  },
  {
    "category": "Closed guard",
    "technique": "Triangle choke",
    "variants": "Serrage cuisse, angle",
    "keyPoints": [
      "Un bras dedans, un dehors",
      "Angle à 45 degrés",
      "Jambe sur la nuque",
      "Tirer le bras pour couper circulation"
    ],
    "situations": [
      "Adversaire passe un bras",
      "Adversaire se penche",
      "Setup depuis armbar manqué"
    ],
    "chains": [
      "Triangle → Armbar (if defends)",
      "Triangle → Omoplata (if escapes head)",
      "Armbar → Triangle → Armbar"
    ]
  },
  {
    "category": "Closed guard",
    "technique": "Armbar",
    "variants": "Jambe sur tête, pivot hanche",
    "keyPoints": [
      "Contrôler le bras isolé",
      "Pivoter hanches perpendiculaire",
      "Jambe sur le visage",
      "Jambes serrées, hanches hautes"
    ],
    "situations": [
      "Bras exposé ou isolé",
      "Setup depuis nombreuses positions",
      "Finition classique"
    ],
    "chains": [
      "Armbar → Triangle → Omoplata",
      "Failed collar choke → Armbar",
      "Armbar → Sweep (if defends)"
    ]
  },
  {
    "category": "Closed guard",
    "technique": "Omoplata",
    "variants": "Bras enfermé, sortie hanche",
    "keyPoints": [
      "Capturer le bras avec jambe",
      "Rotation hanche pour sortir",
      "Contrôle de la posture",
      "Finir avec la pression d'épaule"
    ],
    "situations": [
      "Triangle défendu",
      "Adversaire pousse le genou",
      "Setup depuis spider guard"
    ],
    "chains": [
      "Triangle → Omoplata",
      "Omoplata → Sweep",
      "Omoplata → Back take (if rolls)"
    ]
  },

  // OPEN GUARD (9 techniques)
  {
    "category": "Open guard",
    "technique": "Spider guard control",
    "variants": "Double manche, jambes tendues",
    "keyPoints": [
      "Grip bi-latéral manches",
      "Pieds sur biceps",
      "Jambes tendues pour contrôle",
      "Maintenir distance"
    ],
    "situations": [
      "Adversaire debout ou à genoux",
      "Contrôle à distance",
      "Setup pour sweeps"
    ],
    "chains": [
      "Spider → Spider sweep",
      "Spider → Triangle setup",
      "Spider → Lasso transition"
    ]
  },
  {
    "category": "Open guard",
    "technique": "Spider guard sweep",
    "variants": "Push-pull, déséquilibre",
    "keyPoints": [
      "Pousser avec une jambe",
      "Tirer avec l'autre",
      "Timing explosif",
      "Finir en top position"
    ],
    "situations": [
      "Spider guard établi",
      "Adversaire debout ou penché",
      "Déséquilibre l'adversaire"
    ],
    "chains": [
      "Spider sweep → Mount",
      "Failed spider → Lasso",
      "Spider → DLR transition"
    ]
  },
  {
    "category": "Open guard",
    "technique": "De La Riva guard",
    "variants": "Hook externe, tirage col",
    "keyPoints": [
      "Hook DLR derrière jambe",
      "Contrôle col + manche",
      "Pied sur hanche opposée",
      "Déséquilibre constant"
    ],
    "situations": [
      "Adversaire passe en standing",
      "Setup sweep ou backtake",
      "Contre leg drag"
    ],
    "chains": [
      "DLR → Berimbolo → Back",
      "DLR → X-guard → Sweep",
      "DLR → Single leg X"
    ]
  },
  {
    "category": "Open guard",
    "technique": "Reverse De La Riva",
    "variants": "Hook interne, backtake",
    "keyPoints": [
      "Hook interne sur la jambe",
      "Contrôle de la manche",
      "Setup pour back take",
      "Rotation sous l'adversaire"
    ],
    "situations": [
      "Alternative DLR",
      "Setup berimbolo",
      "Contre certain passes"
    ],
    "chains": [
      "RDLR → Back take",
      "RDLR → Sweep",
      "RDLR → Crab ride"
    ]
  },
  {
    "category": "Open guard",
    "technique": "Lasso guard",
    "variants": "Enroulement bras, immobilisation",
    "keyPoints": [
      "Lasso pied dans la manche",
      "Contrôle du bras opposé",
      "Immobiliser un côté",
      "Setup pour sweeps"
    ],
    "situations": [
      "Contrôle unilatéral fort",
      "Depuis spider guard",
      "Setup pour attaques"
    ],
    "chains": [
      "Lasso → Sweep to mount",
      "Lasso → Omoplata",
      "Lasso → Triangle setup"
    ]
  },
  {
    "category": "Open guard",
    "technique": "X-guard",
    "variants": "Élévation jambe, transition",
    "keyPoints": [
      "Jambes en X sous l'adversaire",
      "Contrôle de la jambe",
      "Élévation pour déséquilibre",
      "Setup multiple sweeps"
    ],
    "situations": [
      "Adversaire debout",
      "Depuis DLR ou butterfly",
      "Position de sweep forte"
    ],
    "chains": [
      "X-guard → Sweep to mount",
      "X-guard → Single leg X",
      "X-guard → Back take"
    ]
  },
  {
    "category": "Open guard",
    "technique": "Single leg X",
    "variants": "Entrée leglock, sweep",
    "keyPoints": [
      "Contrôle d'une jambe isolée",
      "Setup pour leg attacks",
      "Position de sweep",
      "Transition multiple"
    ],
    "situations": [
      "Setup leg locks",
      "Depuis X-guard",
      "Sweep opportunity"
    ],
    "chains": [
      "Single leg X → Sweep",
      "Single leg X → Ankle lock",
      "Single leg X → Back take"
    ]
  },
  {
    "category": "Open guard",
    "technique": "50/50 guard",
    "variants": "Contrôle jambes, sweep ou soumission",
    "keyPoints": [
      "Jambes entrelacées",
      "Contrôle mutuel",
      "Setup heel hooks (no-gi)",
      "Sweeps et transitions"
    ],
    "situations": [
      "Position neutre jambes",
      "Setup leg locks",
      "Depuis failed guard pass"
    ],
    "chains": [
      "50/50 → Heel hook (no-gi)",
      "50/50 → Sweep",
      "50/50 → Leg drag escape"
    ]
  },
  {
    "category": "Open guard",
    "technique": "Butterfly guard",
    "variants": "Hook lift, sweep ou arm drag",
    "keyPoints": [
      "Hooks sous les cuisses",
      "Posture active",
      "Contrôle des bras",
      "Élévation pour sweeps"
    ],
    "situations": [
      "Position assise active",
      "Setup sweeps puissants",
      "Transition vers X-guard"
    ],
    "chains": [
      "Butterfly → Sweep to mount",
      "Butterfly → X-guard",
      "Butterfly → Arm drag to back"
    ]
  },

  // PASSING (6 techniques)
  {
    "category": "Passing",
    "technique": "Knee-slice pass",
    "variants": "Cross-face, underhook",
    "keyPoints": [
      "Genou slice à travers garde",
      "Crossface fort",
      "Underhook du côté opposé",
      "Pression sur poitrine"
    ],
    "situations": [
      "Passer open guard",
      "Depuis half guard",
      "Pass universel"
    ],
    "chains": [
      "Knee slice → Side control",
      "Knee slice → Mount",
      "Failed knee slice → Leg drag"
    ]
  },
  {
    "category": "Passing",
    "technique": "Toreando pass",
    "variants": "Grips chevilles, pivot hanche",
    "keyPoints": [
      "Contrôle jambes/genoux",
      "Mouvement latéral explosif",
      "Passer jambes d'un côté",
      "Immediate crossface"
    ],
    "situations": [
      "Open guard assis",
      "Contre spider guard",
      "Pass rapide et dynamique"
    ],
    "chains": [
      "Toreando → Side control",
      "Toreando → Leg drag",
      "Failed toreando → X-pass"
    ]
  },
  {
    "category": "Passing",
    "technique": "Over-under pass",
    "variants": "Contrôle cuisse, pression torse",
    "keyPoints": [
      "Underhook une jambe",
      "Overhook l'autre",
      "Pression chest to chest",
      "Passer les hanches"
    ],
    "situations": [
      "Contre closed guard",
      "Pass avec pression",
      "Style judo/wrestling"
    ],
    "chains": [
      "Over-under → Side control",
      "Over-under → Mount",
      "Failed over-under → Stack pass"
    ]
  },
  {
    "category": "Passing",
    "technique": "Stack pass",
    "variants": "Empilement jambes, posture droite",
    "keyPoints": [
      "Empiler jambes vers poitrine",
      "Posture verticale",
      "Pression vers le bas",
      "Passer les hanches élevées"
    ],
    "situations": [
      "Contre open guard",
      "Adversaire flexible",
      "Pass avec pression verticale"
    ],
    "chains": [
      "Stack pass → Side control",
      "Stack pass → Mount",
      "Failed stack → Knee slice"
    ]
  },
  {
    "category": "Passing",
    "technique": "Leg drag pass",
    "variants": "Angle latéral, blocage hanche",
    "keyPoints": [
      "Dragger la jambe à travers",
      "Prendre angle latéral",
      "Bloquer la hanche",
      "Transition vers back ou side"
    ],
    "situations": [
      "Depuis DLR défense",
      "Pass dynamique",
      "Setup back take"
    ],
    "chains": [
      "Leg drag → Back take",
      "Leg drag → Side control",
      "Leg drag → Mount"
    ]
  },
  {
    "category": "Passing",
    "technique": "Double under pass",
    "variants": "Tirage bassin, col compression",
    "keyPoints": [
      "Underhook les deux jambes",
      "Tirer les hanches vers vous",
      "Pression avec tête/épaule",
      "Passer en side control"
    ],
    "situations": [
      "Contre open guard",
      "Pass avec contrôle fort",
      "Style pression"
    ],
    "chains": [
      "Double under → Side control",
      "Double under → Mount",
      "Failed double under → Stack"
    ]
  },

  // TAKEDOWNS (7 techniques)
  {
    "category": "Takedowns",
    "technique": "Single leg takedown",
    "variants": "Head inside, drive forward",
    "keyPoints": [
      "Change de niveau explosif",
      "Pénétration profonde",
      "Tête côté intérieur",
      "Drive avec hanches"
    ],
    "situations": [
      "Adversaire avance pied",
      "Depuis collar tie",
      "Setup depuis feinte"
    ],
    "chains": [
      "Single leg → Top position",
      "Failed single → Ankle pick",
      "Single leg → Trip → Mount"
    ]
  },
  {
    "category": "Takedowns",
    "technique": "Double leg takedown",
    "variants": "Niveau bas, pénétration",
    "keyPoints": [
      "Niveau très bas",
      "Pénétration profonde",
      "Capturer les deux jambes",
      "Drive forward explosif"
    ],
    "situations": [
      "Distance moyenne",
      "Adversaire carré",
      "Setup depuis fake"
    ],
    "chains": [
      "Double leg → Mount",
      "Double leg → Side control",
      "Failed double → Single leg"
    ]
  },
  {
    "category": "Takedowns",
    "technique": "Osoto gari",
    "variants": "Balayage externe",
    "keyPoints": [
      "Contrôle du col et manche",
      "Jambe balaye derrière",
      "Tirer vers vous",
      "Pousser épaule vers arrière"
    ],
    "situations": [
      "Adversaire poids arrière",
      "Gi gripping",
      "Setup depuis collar tie"
    ],
    "chains": [
      "Osoto gari → Side control",
      "Failed osoto → Ouchi",
      "Osoto → Transition to back"
    ]
  },
  {
    "category": "Takedowns",
    "technique": "Ouchi gari",
    "variants": "Balayage interne",
    "keyPoints": [
      "Contrôle supérieur",
      "Jambe balaye intérieur",
      "Timing sur le step",
      "Drive l'épaule"
    ],
    "situations": [
      "Adversaire step forward",
      "Setup depuis clinch",
      "Combination avec osoto"
    ],
    "chains": [
      "Ouchi → Osoto combination",
      "Ouchi → Top position",
      "Ouchi → Seoi nage"
    ]
  },
  {
    "category": "Takedowns",
    "technique": "Ankle pick",
    "variants": "Grip poignet, tirage cheville",
    "keyPoints": [
      "Contrôle du poignet",
      "Change de niveau",
      "Attraper la cheville",
      "Tirer vers vous"
    ],
    "situations": [
      "Adversaire avance pied",
      "Depuis wrist control",
      "Fast takedown"
    ],
    "chains": [
      "Ankle pick → Top position",
      "Failed ankle pick → Single leg",
      "Wrist control → Ankle pick"
    ]
  },
  {
    "category": "Takedowns",
    "technique": "Seoi nage",
    "variants": "Rotation, tirage bras",
    "keyPoints": [
      "Entrée avec rotation",
      "Charger sur hanches",
      "Tirer le bras fort",
      "Rotation complète"
    ],
    "situations": [
      "Gi gripping fort",
      "Adversaire tire vers vous",
      "Judo style throw"
    ],
    "chains": [
      "Seoi nage → Mount",
      "Failed seoi → Ouchi gari",
      "Seoi → Transition submissions"
    ]
  },
  {
    "category": "Takedowns",
    "technique": "Body lock takedown",
    "variants": "Clinch, bascule hanche",
    "keyPoints": [
      "Body lock grip serré",
      "Hanches collées",
      "Bascule ou trip",
      "Control jusqu'au sol"
    ],
    "situations": [
      "Clinch range",
      "No-gi ou gi",
      "Wrestling style"
    ],
    "chains": [
      "Body lock → Side control",
      "Body lock → Back take",
      "Clinch → Body lock → Takedown"
    ]
  },

  // SUBMISSIONS (15 techniques)
  {
    "category": "Submissions",
    "technique": "Guillotine choke",
    "variants": "Bras autour cou, extension",
    "keyPoints": [
      "Bras profond autour du cou",
      "Grip main dans main",
      "Extension hanches",
      "Serrer avec avant-bras"
    ],
    "situations": [
      "Adversaire shoot takedown",
      "Depuis closed guard",
      "Front headlock position"
    ],
    "chains": [
      "Guillotine → Sweep (if fails)",
      "Failed guillotine → Darce",
      "Guillotine → Arm-in variation"
    ]
  },
  {
    "category": "Submissions",
    "technique": "Darce choke",
    "variants": "Bras croisé, enroulement tête-bras",
    "keyPoints": [
      "Bras passe sous le cou",
      "Grip bicep opposé",
      "Enrouler tête et bras ensemble",
      "Serrer et arquer le dos"
    ],
    "situations": [
      "Depuis front headlock",
      "Turtle position",
      "Failed guillotine"
    ],
    "chains": [
      "Guillotine → Darce",
      "Darce → Anaconda switch",
      "Front headlock → Darce"
    ]
  },
  {
    "category": "Submissions",
    "technique": "Anaconda choke",
    "variants": "Bras roulé, compression",
    "keyPoints": [
      "Bras roule autour épaule/cou",
      "Grip main dans main",
      "Rouler sur le côté",
      "Squeeze ensemble"
    ],
    "situations": [
      "Turtle position",
      "Front headlock",
      "Alternative au darce"
    ],
    "chains": [
      "Darce → Anaconda switch",
      "Anaconda → Take back (if fails)",
      "Front headlock → Anaconda"
    ]
  },
  {
    "category": "Submissions",
    "technique": "Loop choke",
    "variants": "Main col, pivot",
    "keyPoints": [
      "Main profonde dans col",
      "Contrôle manche opposée",
      "Pivoter autour",
      "Serrer avec avant-bras"
    ],
    "situations": [
      "Adversaire passe tête bas",
      "Depuis turtle",
      "Opportuniste"
    ],
    "chains": [
      "Loop choke → Sweep (if defends)",
      "Loop choke → Take back",
      "Failed pass → Loop choke"
    ]
  },
  {
    "category": "Submissions",
    "technique": "Triangle choke",
    "variants": "Hanche, verrou cuisse",
    "keyPoints": [
      "Un bras dedans, un dehors",
      "Angle 45 degrés",
      "Jambe sur nuque",
      "Tirer bras pour finaliser"
    ],
    "situations": [
      "Depuis garde multiples",
      "Setup depuis armbar",
      "Bras exposé"
    ],
    "chains": [
      "Triangle → Armbar → Omoplata",
      "Triangle → Sweep",
      "Armbar → Triangle"
    ]
  },
  {
    "category": "Submissions",
    "technique": "Omoplata",
    "variants": "Bras coincé, roulade finale",
    "keyPoints": [
      "Bras capturé avec jambe",
      "Rotation hanche pour sortir",
      "Contrôle posture",
      "Pression épaule pour finish"
    ],
    "situations": [
      "Triangle défendu",
      "Spider guard setup",
      "Depuis closed guard"
    ],
    "chains": [
      "Triangle → Omoplata",
      "Omoplata → Sweep",
      "Omoplata → Back take"
    ]
  },
  {
    "category": "Submissions",
    "technique": "Armbar",
    "variants": "Bras isolé, levier",
    "keyPoints": [
      "Isoler le bras",
      "Hanches perpendiculaires",
      "Jambes serrées",
      "Hanches hautes pour finish"
    ],
    "situations": [
      "Multiple positions",
      "Setup universel",
      "High percentage"
    ],
    "chains": [
      "Armbar → Triangle",
      "Failed collar choke → Armbar",
      "Mount → Armbar → Triangle"
    ]
  },
  {
    "category": "Submissions",
    "technique": "Kimura",
    "variants": "Poignet, rotation épaule",
    "keyPoints": [
      "Figure-4 grip",
      "Coude au-dessus épaule",
      "Isoler l'épaule",
      "Lever et tourner"
    ],
    "situations": [
      "Depuis multiples positions",
      "Bras exposé",
      "Versatile submission"
    ],
    "chains": [
      "Kimura → Take back",
      "Kimura → Sweep",
      "Failed pass → Kimura"
    ]
  },
  {
    "category": "Submissions",
    "technique": "Americana",
    "variants": "Bras plié, clé horizontale",
    "keyPoints": [
      "Bras à 90 degrés",
      "Figure-4 sur poignet",
      "Isoler avec corps",
      "Rotation vers sol"
    ],
    "situations": [
      "Mount ou side control",
      "Bras défensif",
      "Alternative kimura"
    ],
    "chains": [
      "Americana → Mount transition",
      "Kimura → Americana",
      "Americana → Back take"
    ]
  },
  {
    "category": "Submissions",
    "technique": "Straight ankle lock",
    "variants": "Talon bloqué, extension cheville",
    "keyPoints": [
      "Contrôle du talon",
      "Jambe sous aisselle",
      "Extension de la cheville",
      "Pression sur achille"
    ],
    "situations": [
      "Depuis leg entanglements",
      "Single leg X",
      "50/50 position"
    ],
    "chains": [
      "Ankle lock → Sweep",
      "Failed pass → Ankle lock",
      "X-guard → Ankle lock"
    ]
  },
  {
    "category": "Submissions",
    "technique": "Toe hold",
    "variants": "Poignet, rotation pied",
    "keyPoints": [
      "Grip pied comme poignet",
      "Rotation du pied",
      "Contrôle de la jambe",
      "Lent et progressif"
    ],
    "situations": [
      "Leg entanglements",
      "50/50 variation",
      "Opportuniste"
    ],
    "chains": [
      "Toe hold → Transition",
      "Failed ankle lock → Toe hold",
      "50/50 → Toe hold"
    ]
  },
  {
    "category": "Submissions",
    "technique": "Kneebar",
    "variants": "Alignement hanche-genou",
    "keyPoints": [
      "Jambe isolée",
      "Contrôle du genou",
      "Hanches contre genou",
      "Extension contrôlée"
    ],
    "situations": [
      "Depuis X-guard",
      "50/50 position",
      "Leg entanglement"
    ],
    "chains": [
      "Kneebar → Sweep",
      "X-guard → Kneebar",
      "Failed pass → Kneebar"
    ]
  },
  {
    "category": "Submissions",
    "technique": "Heel hook",
    "variants": "Rotation tibia, contrôle talon",
    "keyPoints": [
      "Contrôle talon profond",
      "Rotation externe/interne",
      "Contrôle de la jambe",
      "DANGER - progression lente"
    ],
    "situations": [
      "No-gi principalement",
      "50/50 position",
      "Leg entanglements avancés"
    ],
    "chains": [
      "Heel hook → Transition",
      "50/50 → Heel hook",
      "ATTENTION: dangereux pour articulations"
    ]
  },
  {
    "category": "Submissions",
    "technique": "Bicep slicer",
    "variants": "Compression biceps",
    "keyPoints": [
      "Bras capturé",
      "Pression sur bicep",
      "Levier avec avant-bras",
      "Compression musculaire"
    ],
    "situations": [
      "Opportuniste",
      "Depuis certaines gardes",
      "Pressure submission"
    ],
    "chains": [
      "Bicep slicer → Transition",
      "Failed armbar → Bicep slicer",
      "Setup depuis turtle"
    ]
  },
  {
    "category": "Submissions",
    "technique": "Calf slicer",
    "variants": "Compression mollet",
    "keyPoints": [
      "Jambe capturée",
      "Pression sur mollet",
      "Triangle avec jambes",
      "Compression musculaire"
    ],
    "situations": [
      "Depuis leg entanglements",
      "Turtle position",
      "Opportuniste"
    ],
    "chains": [
      "Calf slicer → Back take",
      "Failed submission → Calf slicer",
      "Leg control → Calf slicer"
    ]
  },

  // ESCAPES (5 techniques)
  {
    "category": "Escapes",
    "technique": "Mount escape - upa",
    "variants": "Pont, blocage coude",
    "keyPoints": [
      "Pieds à plat près fesses",
      "Bloquer bras et jambe",
      "Pont explosif haut",
      "Rouler direction bloquée"
    ],
    "situations": [
      "Mount défensif",
      "Poids mal réparti",
      "Timing attaque haute"
    ],
    "chains": [
      "Upa → Guard recovery",
      "Failed upa → Elbow escape",
      "Upa → Reversal"
    ]
  },
  {
    "category": "Escapes",
    "technique": "Mount escape - elbow",
    "variants": "Shrimp, genou recovery",
    "keyPoints": [
      "Frame avec coudes",
      "Shrimp créer espace",
      "Insérer genou rapide",
      "Récupérer half guard"
    ],
    "situations": [
      "Mount bas stable",
      "Après upa manqué",
      "Défense fondamentale"
    ],
    "chains": [
      "Elbow escape → Half guard",
      "Frame → Shrimp → Escape",
      "Elbow escape → Full guard"
    ]
  },
  {
    "category": "Escapes",
    "technique": "Side control escape",
    "variants": "Frame, retournement",
    "keyPoints": [
      "Frame avant-bras rigide",
      "Shrimp pour espace",
      "Récupérer guard avec genou",
      "Ne pas tourner dos"
    ],
    "situations": [
      "Side control défense",
      "Échapper pression",
      "Guard recovery"
    ],
    "chains": [
      "Frame → Shrimp → Guard",
      "Side escape → Half guard",
      "Bridge → Shrimp → Escape"
    ]
  },
  {
    "category": "Escapes",
    "technique": "Back escape",
    "variants": "Hand fighting, rotation",
    "keyPoints": [
      "Hand fighting agressif",
      "Créer espace menton",
      "Pont latéral explosif",
      "Retourner vers adversaire"
    ],
    "situations": [
      "Back control défense",
      "Crochets pas deep",
      "Timing setup attaque"
    ],
    "chains": [
      "Hand fight → Bridge → Escape",
      "Back escape → Guard recovery",
      "Escape → Reversal top"
    ]
  },
  {
    "category": "Escapes",
    "technique": "Turtle escape",
    "variants": "Roll, regain guard",
    "keyPoints": [
      "Protéger le cou",
      "Roll through active",
      "Récupérer guard",
      "Ne pas rester statique"
    ],
    "situations": [
      "Position turtle",
      "Transition défensive",
      "Guard recovery"
    ],
    "chains": [
      "Turtle → Roll → Guard",
      "Turtle escape → Sweep",
      "Turtle → Sit through → Guard"
    ]
  },

  // NO-GI (5 techniques)
  {
    "category": "No-Gi",
    "technique": "Front headlock control",
    "variants": "Poids sur nuque, pression",
    "keyPoints": [
      "Bras autour du cou",
      "Poids sur la nuque",
      "Contrôle du bras",
      "Position dominante"
    ],
    "situations": [
      "Adversaire shoot échoué",
      "Turtle position",
      "Setup submissions"
    ],
    "chains": [
      "Front headlock → Darce",
      "Front headlock → Guillotine",
      "Front headlock → Take back"
    ]
  },
  {
    "category": "No-Gi",
    "technique": "Snap down to front headlock",
    "variants": "Tirage nuque, contrôle bras",
    "keyPoints": [
      "Snap down explosif",
      "Suivre vers le sol",
      "Capturer front headlock",
      "Transition vers attaque"
    ],
    "situations": [
      "Standing position",
      "Setup depuis clinch",
      "Adversaire penché"
    ],
    "chains": [
      "Snap down → Front headlock → Darce",
      "Snap down → Guillotine",
      "Snap down → Go-behind"
    ]
  },
  {
    "category": "No-Gi",
    "technique": "High elbow guillotine",
    "variants": "Bras haut, levier hanche",
    "keyPoints": [
      "Coude très haut",
      "Bras profond autour cou",
      "Extension hanches",
      "Serrer avec avant-bras"
    ],
    "situations": [
      "No-gi guillotine",
      "Plus efficace qu'arm-in",
      "Setup optimal"
    ],
    "chains": [
      "High elbow guillotine → Sweep",
      "Failed takedown → Guillotine",
      "Guard pull → Guillotine"
    ]
  },
  {
    "category": "No-Gi",
    "technique": "Darce choke",
    "variants": "Bras roulé, compression",
    "keyPoints": [
      "Bras passe sous cou",
      "Grip bicep opposé",
      "Enrouler tête et bras",
      "Arquer le dos"
    ],
    "situations": [
      "Front headlock no-gi",
      "Turtle position",
      "Setup optimal no-gi"
    ],
    "chains": [
      "Darce → Anaconda",
      "Front headlock → Darce",
      "Failed pass → Darce"
    ]
  },
  {
    "category": "No-Gi",
    "technique": "Ankle lock defense",
    "variants": "Rotation jambe, posture basse",
    "keyPoints": [
      "Rotation jambe interne",
      "Posture basse et forte",
      "Créer slack",
      "Échapper rapidement"
    ],
    "situations": [
      "Défense leg attacks",
      "No-gi leg entanglements",
      "Survival technique"
    ],
    "chains": [
      "Ankle defense → Counter attack",
      "Ankle defense → Escape position",
      "Defend → Pass to top"
    ]
  }
];

// Données toujours présentes - progression sauvegardée
const progressData = {
  learned: {},
  repeated: {},
  sparring: {},
  chained: {},
  notes: {}
};
