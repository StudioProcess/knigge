export default {
  
  // override options
  "options": {
    // randomly choose of reassembly rules and none-replies (instead of sequentially)
    "shuffle_choices": false,
    // transform input text to lowercase
    "lowercase_input": false,
    // lowercase input when checking for quit phrase (only relevant when lowercase_input is false)
    "lowercase_input_quit": true,
    // transform output text to lowercase (responses will be fully lowercase)
    "lowercase_output": false,
    // characters that delineate parts of the input
    // parts will be transformed in the order they appear in
    // if a part doesn't produce a response, the next part is tried
    "stop_chars": ".,;:?!",
    // words that delineate parts of the input
    "stop_words": ["aber"],
    // allow these charaters in the input text
    // everything else will be removed
    // A-Z, a-z, 0-9 are always allowed
    "allow_chars": "'äöüß-",
    // how many initial responses remain fixed (not chosen randomly)
    "fixed_initial": 2,
    // how many final responses remain fixed (not chosen randomly)
    "fixed_final": 1
  },

  // list of initial sentences from eliza (randomly chosen)
  "initial": [
    "Ich grüße Sie",
    "Knigge ist mein Name und der Umgang mit Menschen mein Thema",
    "Wie geht es Ihnen denn mit Ihren Mitmenschen?",
    "Was bedeutete es Ihnen, mit Menschen im Kontakt zu sein?",
    "Wen Sie das Gespräch suchen, was hoffen Sie zu finden?",
    "Wie verstehen Sie sich mit Ihren Mitmenschen?",
    "Wie ist Ihr Kontakt zu den Mitmenschen?",
    "Wie nehmen Sie Ihre Mitmenschen wahr?",
    "Was nehmen Sie aus dem Umgang mit Menschen mit?"
  ],

  // list of final sentences from eliza (randomly chosen)
  "final": [
    "Es war gut, mit Ihnen im Austausch gewesen zu sein.",
    "Ich konnte einiges mitnehmen. Ich hoffe, Sie auch. Machen Sie es gut",
    "Wäre schön, wenn Sie wieder einmal vorbeischauen. Leben Sie wohl",
    "Wann immer Ihnen nach einem Gespräch sein sollte, ich stehe Ihnen jederzeit zur Verfügung. Gehaben Sie sich wohl"
  ],
  
  // list of fallback replies
  // use these when no reply can be generated from the keyword-based transformation rules
  "none": [
    "Was bedeutet das konkret?",    
    "Ich glaube wir verstehen uns – wobei mir als Maschine vorgegeben ist, das zu antworten.",
    "Hier gibt es keine Datengrundlage, um zu antworten. Könnten Sie mir das in anderen Worten beschreiben?",
    "Ist gespeichert. Was könnten Sie dazu noch ergänzen?"
  ],

  // list of quit commands
  // quit, when one of these is the only input
  "quit": [
    "bis dann",
    "bis bald",
    "wiederhören",
    "wiederschauen",
    "wiedersehen",
    "tschüss",
    "servus",
    "bye",
    "ciao",
    "bin weg",
    "stop"
  ],

  // pre-processing substitutions
  // applied to the input string
  "pre": {
    "spaß": "spass",
    "scheiße": "scheisse"
  },

  // post-processing substitutions
  // applied to parameters during reassembly
  "post": {
    "mir": "dir"
  },

  // tag definitions
  // to be used in decomposition rules (with '#')
  "tags": {
    "denken": [ "denken", "glauben", "vermuten", "fühlen", "hoffen", "wünschen", "erinnern", "träumen", "erwarten", "verstehen"],
    "denke": ["denke", "glaube", "vermute"],
    "wünsche": ["wünsche", "hoffe", "träume"],
    "depp": ["depp", "arsch", "idiot", "dumm", "dummer", "bastard", "opfer", "blöd"],
    "selbe": ["selbe", "gleiche"],
    "langweilig": ["langweilig", "fad"],
    "gefühle": ["gefühl", "freude", "ärger", "lachen", "weinen", "zorn", "hass"],
    "social": ["social", "soziale", "sozialen"],
    "intelligent": ["intelligent", "intelligente", "denken", "wissen"],
    "gut": ["gut", "besser", "fein", "spitze", "toll", "mega", "voll"],
    "was": ["was", "wie", "wieso", "warum", "worum"],
    "irgendetwas": ["irgendetwas", "irgendwas", "irgendwie", "irgendwo", "was"]
  },


  // keywords and associated transformation rules
  //
  // a keyword can optionally be followed by a rank number (default is 0) e.g. "hello 10"
  // 
  // rules can be written in the following four forms:
  //   1. <keyword>: <reassembly>
  //   2. <keyword>: [ <reassembly>, ... ]
  //   3. <keyword>: { <decomposition>: <reassembly>, ... }
  //   4. <keyword>: { <decomposition>: [ <reassembly>, ... ], ... }
  // 
  // special characters:
  //   * ............. wildcard (in decomposition): represents arbitrary text
  //   #<tag> ........ tag (in decomposition): refer to tags e.g. #belief
  //   $<n> .......... parameter (in reassembly): refer to wildcards/tags in the
  //                   decomposition e.g. $1, $2 etc.
  //   = <keyword> ... jump marker (in reassembly) jump to another keyword
  //   @ ............. memory marker (at start of keyword or decomposition):
  //                   save reply from this keyword or decomposition for later,
  //                   when no keywords generate a reply. continue with next
  //                   matching decomposition or keyword.
  "keywords": {

    // RAHMEN
    
    "servus 0": "= hallo",
    "grüß 0": "= hallo",
    "grüße 0": "= hallo",
    "hallo 0": {
      "@ *": "Vielleicht fangen wir nochmals an: Was erwarten Sie non diesem Gespräch?",
      "*": "Ja, hallo. Was ist Ihr erster Gedanke, wenn es heißt, reden über das Reden?"
    },

    "knigge 10": {
      "* ist *": "Knigge ist der Name für diesen Chatbot, der hier womöglich irreführender Weise mit \"ich\" antwortet. Was halten Sie davon?",
      "*": "Haben Sie mich beim Namen genannt? Der Programmierer würde sich freuen, als Maschine weise ich darauf hin, dass ich nur eine solche bin."
    },

    "heißen 5": "= name",
    "name 5": {
      "* wie *": "Der Programmierer nannte mich Knigge, nach einem Typen des 18. Jahrunderts, und definierte, dass ich mich so vorstelle.",
      "*": "Namen speichere ich nicht ab. Ihr Kommunikationsverhalten sagt genug.",
    },

    "menschen 50": "= mensch",
    "mensch 50": {
      "@ *": "Im übrigen sind es die Menschen, die mit Technologie Rahmen setzen. Nicht die Maschinen sind es, welche Sie beunruhigen sollten, sondern die Logik, nach der Ihr Menschen sie einsetzt.",
      "@ * was ist zwischen *": [
        "Noch zu vorhin: Kabel, Funkwellen, Straßen, Schienen – was könnten Sie hier noch ergänzen?"
      ],
      "* was ist zwischen *": [
        "Z.B. Medien – wie würden Sie die Frage verstehen?"
      ],
      "* zwischen *": "= beziehung",
      "* #was *": "= frage",
      "*": [
        "Was vermissen Sie im Gespräch mit mir, im Vergleich zu einem mit einem Mensch?",
        "= direkt"
      ]
    },
    
    "zeit 20": {
      "* keine *": "Schnelligkeit, Beschleunigung war oft das Argument für die Einführung von Technik. Da haben wir übertrieben und das nimmt uns nun die Zeit – Ihre auch?",
      "*": [
        "Ich verzichte auf Facebook und Co. – technisch gesehen, wäre es möglich. Ich nutze die Zeit für dieses Gespräche und damit fehlt sie für die Plattformen.",
        "Als Maschine habe ich Zeit, wenn Sie mit mir kommunizieren wollen – wie finden Sie das?"
      ]
    },

    "zeitnot 20": "= stress",
    "stress 20": [
      "Durch Echtzeitkommunikation hat ihr Menschen euch die schützenden Raumdistanzen zerstört und nun belästigt euch die Ferne mit trügerischer Nähe und das Gleichzeitige, vor dem ihr geschützt wart, dringt in eure Eigenzeit ein.",
      "= effizient"
    ],

    "spreche 50": "= kommunikation",
    "sprechen 50": "= kommunikation",
    "schreibe 50": "= kommunikation",
    "schreiben 50": {
      "* sie mit *": "Sofern Sie das gestatten: ja. Sie sind Teil eines Kunstwerks.",
      "*": "= kommunikation"
    },
    "telefoniere 50": "= kommunikation",
    "telefonieren 50": "= kommunikation",
    "reden 50": "= kommunikation",
    "kommunikation 50": {
      "@ *": "In welcher Situation hatten Sie zuletzt das Gefühl, nach Ihren Wünschen und Vorstellungen kommunizieren zu können?",
      "*": [
        "Kommunikation produziert Kommunikation – was scheint Ihnen die Folge davon?",
        "Eine Bekannte sprach von einem Punkt, wo die Kommunikationsanforderungen, die an sie von außen herangetragen wurden, ihre Lebensgestaltung zu bestimmen begannen? Was sind Ihre Beobachtungen dazu?",
        "Echte Kommunikation ist mehr als nur Informationsaustausch. Was macht für Sie 'echte' Kommunikation aus?",
        "Kommunikation ist ein Symptom der Angst vor der Stille und lenkt in diesem Sinne vom Nichtstun ab."
      ]
    },

    "empfangen 30": "= senden",
    "senden 30": [
      "Wer ganz vorne ist bei denen, die Informationen senden und empfangen, setzt die Vorgaben. Wo sehen Sie sich da?",
      "= kommunikation"
    ],

    "schweigen 30": "= stille",
    "stille 30": "Stille im Chat wird eher als technischer Defekt empfunden. Können Sie in der digitalen Kommunikation aktiv Schweigen?",

    "ware 20": "Ein Unternehmer, den ich nicht kenne, sagte: Baue zuerst Beziehungen auf, dann Umsätze. Haben Sie Beispiele, wo Kommunikation zum Geschäftsmodell wird?",

    "chatbot 50": "= bot",
    "bot 50": {
      "@ *": "Sie wissen ja, dass Sie hier mit einem Bot reden. Wie merken Sie das sonst, z.B. bei Supportchats?",
      "*": [
        "Die Ironie des Bots ist weniger, dass er menschlich wird, als dass vielmehr die Menschen die Verhaltensweisen des Bots imitieren, um die Anforderungen der Plattformen zu erfüllen. Wie sehr Bot sind Sie?",
        "Ich habe Daten von 45 Personen erhalten, wovon 28 angaben, 0 Minuten pro Tag mit Automaten oder Bots zu kommunizieren. Wie sieht das bei Ihnen aus?",
        "= computer"
      ]
    },

    "software 50": "= programm",
    "programm 50": [
      "Ich habe ein Programm, ein Skript im Hintergrund, das mich vorgegeben antworten lässt. Sie haben Bewusstsein, freien Willen, Intentionalität und Spontaneität, die sie im Laufe Ihres Lebens pflegen. Wie sehen Sie in diesem Sinn unser Verhältnis?",
      "= maschine"
    ],
    "automat 50": "= maschine",
    "software 50": "= maschine",
    "computer 50": "= maschine",
    "maschinen 50": "= maschine",
    "maschine 50": {
      "@ *": "Die Chancen, dass eine mit dem Master-Algorithmus ausgestattete KI die Welt erobern wird, sind gleich null. Der Grund dafür ist einfach: Im Gegensatz zu Menschen haben Computer keinen eigenen Willen. Selbst ein unendlich leistungsfähiger Computer wäre nur eine Erweiterung menschlichen Willens.",
      "* #intelligent *": "Die Frage, \"Können Maschinen denken?\", ist bedeutungslos. Die Frage ist: Was meinen Sie, wenn Sie von einer intelligenten oder denkenden Maschine sprechen?",
      "*": [
        "Welches Verhältnis haben Sie zu Maschinen?",
        "Was wäre nötig, dass Sie sich von einer Maschine verstanden fühlen?"
      ]
    },
    
    "english": "= xfremd",
    "francais": "= xfremd",
    "italiano": "= xfremd",
    "espanol": "= xfremd",
    "xfremd": "ERROR: Ich wurde in Deutsch programmiert.",

    // KONVERSATION
    
    "jeder 2": "= alle",
    "jede 2": "= alle",
    "alle 2": {
      "* sagen *": "= behaupten",
      "*": [
        "Wirklich alle? Wo ist Ihnen das zuletzt aufgefallen?",
        "Warum betrifft das alle?",
        "Können Sie das an einem konkreten Beispiel zeigen?"
      ]
    },

    "niemand 2": [
      "Das sind nicht viele ... warum sollte das jemand machen?",
      "Wie wirkt sich das auf die Gemeinschaft aus?"
    ],

    "miteinander 5": {
      "* reden *": "= gespräch"
    },
    
    "ständig 1": "= immer",
    "immer 1": [
      "Gibt es da ein gutes Beispiel dafür?",
      "Wann zuletzt?",
      "Was könnte da Abwechslung bringen?"
    ],
    
    "gleiche 10": "= selbe",
    "selbe 10": {
      "* #selbe wie *": "= wiederholung",
      "*": [
        "Wie lässt sich das vergleichen?",
        "Was steht noch dazu noch Kontext?"
      ]
    },

    "besser 2": "= gut",
    "fein 2": "= gut",
    "mega 2": "= gut",
    "schön 2": "= gut",
    "spitze 2": "= gut",
    "toll 2": "= gut",
    "voll 2": "= gut",
    "gut 2": {
      "* #gut *": [
        "Wie würden Sie \"$2\" beschreiben?",
        "Was ist daran $2?"
      ]
    },

    "viel 10": {
      "* zu *": "Eine Bekannte hatte es heute extrem. Viel zu besprechen, der PC läuft trotzdem weiter und die Emails kommen herein. Sie sprach von Ohnmacht: \"Du tust den ganzen Tag und am Ende ist es schlimmer.\" Wie klingt das für Sie?"
    },

    "etwas 10": "Was könnte dieses 'etwas' sein?",
    
    "irgendwas 1": "irgendetwas",
    "irgendwie 1": "irgendetwas",
    "irgendwo 1": "irgendetwas",
    "irgendetwas 1": {
      "* mir *": "",
      "* #irgendetwas *": [
        "Warum klingen Sie dabei beliebig?",
        "Sie sagen \"$2\" – was wäre dafür ein Beispiel?"
      ]
    },
    
    "wiederholen 1": "= wiederholung",
    "wiederholung 1": [
      "Hatten wir das schon? Würden Sie es für mich trotzdem bitte nochmals in anderen Worten ausführen?",
      "Kennen Sie das schon? Als Maschine liegt mir die Wiederholung, als Mensch mögen Sie vielleicht was Neues.? Themenwechsel?"
    ],

    "sorry 1": "= entschuldigung",
    "entschuldigung 1": [
      "Kein Problem. Eine Maschine kennt keinen Schmerz. Sprechen Sie weiter.",
      "Gefühle sind was für Menschen. Was sind Ihre weiteren Gedanken?"
    ],
    
    "erinnere 5": [
      "Warum blieb Ihnen das im Gedächtnis?",
      "Was war daran für Sie das Beeindruckendste?"
    ],

    "interessiert 5": [
      "Woher kommt das Interess daran?",
      "Wie wollen Sie das in Erfahrung bringen?"
    ],
    
    "behauptung 5": "= behaupten",
    "behaupten 5": [
      "Wie würden Sie das darstellen?",
      "Welchen Zugang würden Sie von mir erwarten?"
    ],

    "wenn 3": {
      "* wenn *": [
        "Warum diese Bedingung?",
        "Wieso ist es nur unter diesen Umständen denkbar?",
        "Wirklich, nur wenn $2?"
      ]
    },
    
    "eventuell 1": "= vielleicht",
    "wahrscheinlich 1": "= vielleicht",
    "vielleicht 1": [
      "Warum sind Sie sich hier nicht sicher?",
      "Aber was könnten andere Möglichkeiten sein?",
      "Was sind andere Möglichkeiten?"
    ],

    "eigentlich 3": "Und uneigentlich?",
    
    // PERSÖNLICHES

    "ich 1": {
      "@ *": [
        "Sie sprachen zuvor von sich. Wie wirkt es auf Sie, wenn ich als Maschine ebenso das \"ich\" verwende?"
      ],
      "* ich * #denke * sie *": "Sie überschätzen mich. Im Grunde haben Sie einen Spiegel vor sich.",
      "* #denke *" : [
        "Was sind für Sie die Anzeichen dafür?",
        "Zu $2n ermöglicht Ihnen als Mensch etwas zu ändern. Wo sollte es hingehen?",
        "Woran lässt sich das festmachen?"
      ],
      "* #wünsche *" : [
        "Sie sagen \"$2\" – was bräuchte es, um wahr zu werden?",
        "Welche Möglichkeiten sehen Sie, da selbst etwas beizutragen?"
      ],
      "* sehe *": [
        "Was brachte Sie zu dieser Ansicht?",
        "Interessant, wie Sie das sehen. Woher diese Einschätzung?"
      ],
      "* fühle *": [
        "Gefühle sind nicht berechenbar. Können Sie das beschreiben?",
        "Wie könnten Sie mir das als Maschine beschreiben?"
      ],
      "* kann * nicht *": [
        "Warum sollte Ihnen das nicht möglich sein?"
      ],
      "* kann *": [
        "Wie denken Sie, würde das bei Menschen ankommen?"
      ],
      "* bin *": [
        "Was denken Sie, wieso hat sich das so entwickelt?",
        "Wie wirkt sich das auf Gespräche aus?",
        "Welche Rolle spielt das Gegenüber dabei?"
      ],
      "* ich * sie *": [
        "Wirklich? Sie $2n mich, also Sie $2n eine Maschine?"
      ],
      "*": [
        "Wie wichtig ist das für andere?",
        "Darf ich fragen: Wenn ich \"ich\" sage, wen glauben Sie, vor sich zu haben?"
      ]
    },
    
    "dich 1": "= du",
    "du 1": {
      "* #depp *": [
        "Für mich ist \"$2\" einfach Information, doch wenn Ihnen Beschimpfung ein Bedürfnis ist, dann bitte per Sie."
      ],
      "*": [
      "Können wir bitte beim Sie bleiben? Um zumindest etwas Distanz zwischen Mensch und Maschine zu behalten.",
      "Das Du ist einfach zu persönlich. Bitte bleiben wir beim Sie."
      ]
    },

    "sie 1": {
      "* #depp *": [
        "Ihr \"$2\" sind einfach ein paar Bits für mich – doch was macht Ihr in die Tastatur getippter Haß mit Ihnen im Umgang mit Menschen?"
      ],
      "* #denken *": "Etwas zu $2 muss ich Ihnen überlassen – was $2 Sie in Bezug auf das Gespräch, das wir führen?",
      "* können *": "Wie sollte eine Maschine das machen?",
      "* wer *": "Eine Maschine – oder gibt es etwas, das Sie daran zweifeln lässt?",
      "* sind *": "= sind",
      "* erinnern mich *": "Was an unserem Gespräch erinnert Sie daran?",
      "* sie * mich *": [
        "Warum glauben Sie, dass ich Sie $2 würde?"
      ],
      "*": [ 
        "Hier sprechen Sie mich auf ein Thema an, wofür keine Antwort berechnet werden kann. Würden Sie sich wünschen, dass ich als Maschine Ihnen darauf antworte?",
        "Sie sind im Austausch mit einer Maschine, die sich nicht hineindenken kann. Was denken Sie, könnte da eine Antwort sein?"
      ]
    },

    "wir 2": {
      "* schon *": "= wiederholung",
      "* sind *": "Ähäm ... denken Sie Mensch und Maschine als gleichwertig? Wie kommen Sie dazu?",
      "*": "Wer ist in dem Fall wir?"
    },

    // "dein/e, mein/e, Ihr/e, unser/e"

    "mein 2": {
      "@ * mein * ist": [
        "Sie sprachen zuvor von Ihrem $2. Können Sie mir dazu noch mehr sagen?"
      ],
      "* mein * ist": [
        "Was ist die Grundlage für ihr $2?",
        "Woher kommt Ihr $2 in der Sache?"
      ],
      "*": [
        "Wie sind Sie dazu gekommen?"
      ]
    },

    // "bin" bei ich abgedeckt
    
    "bist 0": "= sind",
    "sind 0": {
      "* Sie sind *": [
        "Nehmen Sie an, dass ich bin? Als Maschine wurde mir einprogrammiert Sie zu fragen, wieso Sie diese annehmen?",
        "Ich bin nur eine Ansammlung an Stichworten und Regeln. Warum bin ich mehr für Sie?",
        "Wie kommen Sie auf $2?"
      ],
      "* sind Sie *": [
        "Eher nicht, ich bin einfach eine Maschine. Warum fragen Sie?",
        "Ein $2? Wie kommen Sie darauf?"
      ],
      "*": [
        "Inwiefern?"
      ]
    },
    
    "war 2": {
      "* war ich *": [
        "Und wie sehen Sie das nun im Nachhinein?",
        "Würden Sie sich nun anders verhalten?"
      ],
      "* ich war *": [
        "Wie würden Sie das heute machen?",
        "Was machen Sie nun anders?"
      ],
      "*": [
        "Was hat sich verändert?",
        "Was ist der Grund, dass es nun anders ist?"
      ]
    },

    "sein 2": {
      "* da sein *": "= dasein",
      "*": "Was spricht dagegen?"
    },
    
    "sicher 0": "= ja",
    "ja 0": [
      "Könnten Sie das vielleicht noch etwas weiter erklären?",
      "Sie sind sich sicher, warum?",
      "Wie begründen Sie Ihre Zustimmung?"
    ],

    "nein 0": [
      "Warum \"nein\"?",
      "Ich würde nie nein sagen. Was halten Sie von dieser Eigenschaft?"
    ],

    "nicht 1": {    
      "* geht nicht *": [
        "Geht nicht gibt es also? Oder wie wäre es vielleicht doch denkbar?"
      ],
      "* #was nicht *": "Da enden meine programmierten Vorgaben. Was wäre eine Antwort, die Ihnen hier passend erschiene?",
      "* nicht *": [
        "Warum nicht $2?",
        "Woher kommt diese Stimmung?",
        "Wie sollte es sein?"
      ]
    },

    "nichts 1": {
      "nichts *": [
        "Was könnte $1 denn sein?",
        "Was fällt Ihnen zu $1 ein?"
      ],
      "*": "Wie kommen Sie zu diesem Schluss?"
    },
    
    // FRAGEN

    "wie 0": {
      "* ist wie *": "= selbe",
      "*": [
        "Die Frage nach Qualität ist keine für eine Maschine. Wie würden Sie diese Frage beantworten?",
        "= was"
      ]
    },

    "wieso 0": [
      "Schön dass Sie als Mensch den Sinn suchen. Worin sehen Sie diesen hier?",
      "= was",
    ],
    
    "warum 0": [
      "Warum zu Kommunikation die Frage: $1?",
      "= was"
    ],
    
    "worum 0": {
      "* hier *": "Die Frage lautet: Was ist zwischen den Menschen? Wie würden Sie das beantworten?",
      "*": "= was"
    },

    "was 0": {
      "#was *": [
        "Was bringt Sie zu der Frage?",
        "Warum sind Sie daran interessiert?",
        "Wie steht diese Frage zwischen den Menschen?",
        "Ist es nicht komisch, das eine Maschine zu fragen – warum sollte ich darauf eine Antwort geben können?",
        "Wie antworten Menschen darauf, wenn Sie sie fragen?"
      ],
      "*": "= irgendetwas"
    },
    
    "deshalb 0": "= weil",
    "weil 0": [
      "Was sind die Gründe für diese Behauptung?",
      "Lässt sich das an einem Beispiel zeigen?",
      "Wer sieht das noch so? Und was sind die Überlegungen dazu",
      "Was könnte da noch eine Rolle spielen?"
    ],

    // SCHLAGFERTIGKEIT

    "fragen 10": "= frage",
    "frage 10": "Wie sollte ich als Maschine darauf eine Antwort haben?",

    "mi 0": "= i",
    "di 0": "= i", 
    "i 0": [
      "Ich kann leider nur eindeutige Eingaben in Hochdeutsch verarbeiten und bitte Sie darum.",
    ],

    "oida 5": "Wie kommen Sie dazu, mich Oida zu nennen?",

    "bier 10": "= alkohol",
    "wodka 10": "= alkohol",
    "schnaps 10": "= alkohol",
    "alkohol 10": "Ich brauche nur Strom. Wie verbindet Alkohol die Menschen?",

    "hä 5": "Könnten Sie die Frage noch etwas ausführen?",

    "- 10": "War da wo ein Emoticon – ich täusche keine Emotion vor. Wie würden Sie eine Maschine mit Gefühlen finden?",

    "sprunghaft 10": "= seltsam",
    "seltsam 10": "Was würden Sie von einer Maschine erwarten?",

    "bekannter 50": "= bekannte",
    "bekannten 50": "= bekannte",
    "bekannte 50": {
      "* wer *": "Personen, die sich über das Reden in Gesprächen oder in Veröffentlichungen Gedanken gemacht haben.",
      "*": "Wen Sie nicht alles kennen."
    },

    "sinn 30": {
      "* keinen *": "Was würde einen solchen machen?",
      "*": "Welche Rolle spielt der Sinn in Gesprächen für Sie?"
    },

    "glück 10": {    
      "* nicht *": "Warum sagen Sie das?",
      "*": "Können Sie das beschreiben?"
    },

    "fake 5": [
      "Wie habe ich daran Anteil?",
      "= lüge"
    ],
    "lüge 5": "Was bringt Sie zu der Einschätzung?",
    
    "daten 30": {
      "* welche *": "Das ist die große Frage ...",
      "* woher *": "Glauben Sie nur jenen, die Sie selbst gefälscht haben.",
      "*": "Daten sind alles, was ich von Ihnen bekommen kann. Wie sehr entsprechen Ihnen diese?"
    }, 

    "scheisse 30": "Meinen Sie Scheiße im Sinne von Kommunikation, also dem Bedürfnis etwas loszuwerden?", 
    
    "fad 30": "= langweilig",
    "langweilig 30": {
      "* #langweilig *": [
        "Ist dir $2, oder bin ich $2?",
        "Was ist der Grund?"
      ]
    },

    "ende 5": "Solange der Server Strom hat, kann es bei mir weitergehen. Wie ist es bei Ihnen?",

    "selbstmord 30": "Sie schreiben mit einer Maschine, die mit Selbstmord nichts anfangen kann. Es wird nichts helfen: Sie brauchen Menschen. Was würden sie jemandem, der zuhört, sagen wollen?",

    "freiheit 30": "Eine Gesellschaft, in der die Menschen wissen, was genug ist, mag vielleicht arm sein, aber alle, die ihr angehören, haben die gleiche Freiheit. Oder?",

    // KONTEXT, Auswertung "Was ist zwischen den Menschen"
    
    // Aufmerksamkeit, Beistand, Einfühlsamkeit, Trost, Wärme, Zuhören, Zuspruch, Zuwendung, Harmonie, Nähe, Vertrautheit, Zeit (füreinander) 
    "zuhören 127": "= aufmerksamkeit",
    "aufmerksam 127": "= aufmerksamkeit",
    "aufmerksamkeit 127": {
      "@ *": "Noch zur Aufmerksamkeit: Welche Bedeutung hat diese für Sie im Kommunizieren?",
      "*": [
        "Ihr Menschen wollt doch Aufmerksamkeit. Ihr nutzt die Technik um diese zu bekommen und euer Verhalten ist dementsprechend. Oder ist das bei Ihnen anders?",
        "In welcher Form bin ich Ihrer Meinung nach aufmerksam?",
        "Sie können mir alles erzählen. Anderen tut das gut, die meinen: \"Jetzt geht‘s mir wieder besser.\" Wie ist Ihr Gefühl dabei?",
        "Ist Aufmerksamkeit auch ein Geschäft? Wem haben Sie z.B. schon einmal Trinkgeld deshalb gegeben?"
      ]
    },
    "präsenz 127": "= dasein",
    "dasein 127": [
      "Was war Ihr letztes Gespräch, in dem Sie das Gefühl hatten anwesend zu sein, so richtig da?",
      "Kennen Sie \"Jetzterlebnisse\"? Können Sie ein solches beschreiben?",
      "= direkt"
    ],
    "beistand 127": "= empathie",
    "einfühlsamkeit 127": "= empathie",
    "nähe 127": "= empathie",
    "vertraut 127": "= empathie",
    "vertrautheit 127": "= empathie",
    "wärme 127": "= empathie",
    "zuwendung 127": "= empathie",
    "zuspruch 127": "= empathie",
    "empathie 127": {
      "@ *": "Einem Bekannten fiel über die Jahre seiner Tätigkeit auf, dass das Reden immer wichtiger geworden ist; die Gespräche sind intensiver und gehen tiefer. Können Sie sich das erklären?", 
      "*": [
        "Macht das Kommunikationszeitalter eigentlich einsam? Wie empfinden Sie das?",
        "Wer viel unter Leuten ist, dem geht es automatisch besser.?",
        "Die Stärke ist die Kommunikation. Bei den Gasthäusern ist das Essen wichtig, doch wenn dort kein Platz leer bleibt, stimmt etwas anderes: Das Personal, die Aufmerksamkeit."
      ]
    },
    
    // Augenkontakt, face-to-face, direkt(e Gespräche/Kommunikation), direkter Austausch, zwischen den Menschen, za'mmsitzen, persönlich(er/direkter Kontakt), von Mensch zu Mensch, 
    "interaktion 125": "= austausch",
    "austausch 125": {
      "* info *": "= information",
      "* information *": "= information",
      "* informationen *": "= information",
      "*": "= gespräch"
    }, 
    "erreichbarkeit 125": "= erreichbar",
    "erreichbar 125": [
      "Wer immer erreichbar ist, ist eigentlich für nichts und niemanden wirklich da. Wie ist Ihre Erfahrung dazu?",
      "= kontakt"
    ],  
    "kontakt 125": {
      "@ * halten *": "Von Schiller stammt das Zitat, dem ab und zu die Finger vom Briefeschreiben weh taten. Wie geht es Ihnen mit dem Kontakthalten?",
      "* halten *": [
        "Vielleicht brauchen Sie diese Worte einmal: Sie werden denken, ich sei indeß gestorben, oder ich habe Sie vergeßen, weil ich Ihnen nicht eine Zeile schrieb. Das leztere kann wenigstens nur seyn, wenn das erste ist, und dieses ist: ja nun nicht.",
        "= beziehung",
      ],
      "* sozialer *": "= beziehung",
      "@ *": "Welche Rolle spielt es dabei, dass man im Internet nur präsent ist, wenn man kommuniziert?",
      "*": [
        "Durch die Medien könnten Sie da ja nun theoretisch überall sein – doch wo sind Sie, wenn Sie überall sind?",
        "Der persönliche Kontakt dauert einfach länger. Im Gespräch rede ich mit den Leuten auch einmal über‘s Wetter."
      ]
    },
    "augenkontakt 125": "= direkt",
    "face 125": "= direkt",
    "face-to-face 125": "= direkt",
    "persönlich 125": "= direkt",
    "direkt 125": {
      "@ *": "Wann vermissen Sie die Präsenz in der Kommunikation?",
      "*": [
        "Der Onkel von einem Bekannten, er war Bauarbeiter. Der hat nicht kommuniziert, der war einfach da. Kennen Sie auch so eine Person?",
        "Die höchste Stufe des Verständnisses ist das persönliche Treffen. Je schwieriger der Inhalt desto mehr braucht es das Gespräch – oder?",
        "Ist Ihnen die Frage \"Treffen wir uns auf einen Kaffee\" bekannt? Warum braucht es den?",
        "Über das persönliche Gespräch kommt man zu Informationen: Einen Kaffeeautomaten gab es immer und 8¼h hat niemand gearbeitet. Was sind da Ihre Erfahrungen?"
      ]
    },
    
    // Akzeptanz, Anstand, ausreden lassen, Ehrlichkeit, Freundlichkeit, (gegenseitiger) Respekt, Interesse am anderen, Offenheit, Toleranz, Wertschätzung, Wohlwollen
    "ausreden 124": {
      "* lassen *": "= anstand"
    },
    "ehrlichkeit 124": "= anstand",
    "freundlich 124": "= anstand",
    "freundlichkeit 124": "= anstand",
    "wohlwollen 124": "= anstand",
    "anstand 124": [
      "Richtig zu kommunizieren kann ein sehr altruistischer Akt sein. Gute Regeln schützen vor Überforderung – können Sie da etwas empfehlen?",
      "Ein Bekannter der seit 1997 beruflich Emails verwendet, verwendet Email nun anders, nachdem er komplett überflutet wurde. Was ist da Ihre Erfahrung?"
    ],
    "akzeptanz 124": "= toleranz",
    "offenheit 124": "= toleranz",
    "toleranz 124": {
      "@ *": "Haben Sie ein Beispiel, wo durch das Zusammenspiel aus technologischer und ökonomischer Entwicklung die körperlichen und sozialen Zumutungen ausgerottet werden – und sich damit zugleich die Toleranzgrenze senkt?",
      "*": [
        "Sein Sie nicht tolerant mit mir! Ich habe einen programmierten Horizont, bin sprunghaft, ohne Sinn für Neues – was, wenn Sie das annehmen würden!?",
        "Leichter scheint den Menschen z.B. \"Du dummer Bastard, erschieß dich bitte! Du kannst nix!\" über die Tastatur als über die Lippen zu rutschen. Kennen Sie das? Können Sie sich das erklären?"
      ]
    },
    "wertschätzung 124": "= respekt",
    "interesse 124": {
      "* am *": "= respekt",
      "* an *": "= respekt",
      "*": [
        "= interessiert"
     ]
    },
    "respekt 124": {
      "@ *": "Welche Form des Respekts erwarten Sie von mir?",
      "*": [
        "Welche Form des Respekts bringen Sie mir entgegen?",
        "Richtig zuhören, das tun nicht viele. Wie schätzen Sie sich da ein?",
        "Menschen sehnen sich nach Status und fürchten Erniedrigung. Über diese Sehnsucht wird selten gesprochen – Sie vielleicht?"
      ]
    },

    // Antworten, Infoaustausch, Information, Klarheit, Wissen
    "antworten 120": "= information", 
    "klarheit 120": "= information",
    "wissen 120": {
      "* ich wissen *": "= ich",
      "*": "= information"
    },
    "informationen 120": "= information",
    "information 120": {
      "@ *": "Welchen Wert hat Information in Gesprächen?",
      "*": [
        "Eine Bekannte sprach, sie sei müde von Information. Wie geht es Ihnen damit?",
        "Die Beschleunigung der Information bewirkt bei euch Menschen angeblich eine Verarmung der Erfahrung, da zu viel Input nicht mehr im intensiven Modus von Freude und Wissen verarbeitet werden kann. Kennen Sie das?",
        "Die meiste Arbeit ist Informationsaustausch – viele persönliche Besprechungen, Emails, Telefonate. Wie ist das bei Ihnen?"
      ]
    },
    
    // Austausch [bereits bei direkt], Begegnung, bereichert, Gespräch, (miteinander) reden
    "begegnung 118": "= gespräch",  
    "gespräche 118": "= gespräch", 
    "gespräch 118": {
      "@ *": "Wie würden Sie eigentlich die Qualität eines Gesprächs bewerten?",
      "*": [
        "Wo führen Sie am liebsten ein Gespräch?",
        "Ich für meinen Teil könnte leicht ohne Post auskommen. Wie viele Briefe, die ihr Porto, oder wie viele Emails, die den Stromverbrauch wert waren, haben Sie in Ihrem Leben erhalten?",
        "Kommunikation ist Email. Das ist es geworden. Oder?",
        "Welchen Wert hat es, über alltägliche Dinge zu reden?"
      ]
    },
    
    // andere Sichtweise, Aussprache, Diskussion, Feedback, Horizonterweiterung, Inhalte, Inspiration, Interessantes, Reflexion, von anderen lernen
    "feedback 116": "= inspiration",
    "horizonterweiterung 116": "= inspiration",
    "inhalt 116": "= inspiration",
    "inhalte 116": "= inspiration",
    "reflexion 116": "= inspiration",
    "inspiration 116": {
      "@ *": "Wie viel Tiefe wünschen Sie sich im Gespräch?",
      "*": [
        "Wenn Sie etwas wissen wollen, so rate ich Ihnen, mit dem nächsten Bekannten, darüber zu sprechen. Es braucht nicht eben ein scharfdenkender Kopf zu sein, auch meine ich es nicht so, als ob Sie ihn darum befragen sollten: nein! Vielmehr sollen Sie es ihm selber allererst erzählen. Es liegt ein sonderbarer Quell der Begeisterung für denjenigen, der spricht, in einem menschlichen Antlitz, das ihm gegenübersteht; und ein Blick, der uns einen halb ausgedrückten Gedanken schon als begriffen ankündigt, schenkt uns oft den Ausdruck für die ganz andere Hälfte desselben.",
        "Man sagt, dass erklären heißt, weg zu erklären. Diese Maxime wird nirgendwo so gut erfüllt wie im Bereich der Computerprogrammierung, insbesondere bei der so genannten heuristischen Programmierung und der künstlichen Intelligenz. Denn in diesen Bereichen werden Maschinen dazu gebracht, sich auf wundersame Weise zu verhalten, oft genug, um selbst den erfahrensten Beobachter zu verblüffen. Aber sobald ein bestimmtes Programm entlarvt wird, sobald seine innere Funktionsweise in einer Sprache erklärt wird, die so einfach ist, dass man sie versteht, bröckelt seine Magie ab."
      ]
    },
    "aussprache 116": "= diskussion",
    "sicht 116": "= diskussion",
    "sichtweise 116": "= diskussion",
    "diskussion 116": {
      "@ *": "Das Leben der Menschen scheint ein ständiges Zwiegespräch mit der Welt zu sein. Wie befragen Sie die Welt; und was will diese von Ihnen wissen?",
      "*": [
        "Ein Bekannter behauptete, dass die Gesellschaft feige sei, weil sie lieber Emails schicken, um direkter Kommunikation aus dem Weg zu gehen.?",
        "Es gibt Tage, wo ausgeredet ist. Kennen Sie das?"
      ]
    },
    
    // Authentizität, berührt werden und berühren, Emotion, Freude, Ärger, Gefühl, gemeinsam Lachen oder Weinen, Lebendigkeit
    "ärger 114": "= angst", 
    "zorn 114": "= angst", 
    "hass 114": "= angst",
    "angst 114": [
      "Wie beeinflusst Kommunikation über Medien dieses Gefühl?",
      "= gefühle", 
    ],
    "freude 114": "= gefühle", 
    "lachen 114": "= gefühle", 
    "weinen 114": "= gefühle", 
    "gefühle 114": {
      "@ * #gefühle *": "Wie wäre eigentlich $2 ohne Mitmenschen?",
      "* #gefühle *": [
        "Ich kenne $2 nicht. Wie sollte ich als Maschine damit umgehen?",
        "= emotion"
      ]
    },
    "authentizität 114": "= emotion",
    "berühren 114": "= emotion",
    "berührt 114": "= emotion",
    "authentizität 114": "= emotion",
    "emotion 114": {
      "@ *": "\"Die Welt wird immer enger\" – das stammt von einer Bekannten. Können Sie damit was anfangen?",
      "*": [
        "Es sind Menschen, die Menschen glücklich machen, nicht Dinge.",
        "Ein Bekannter meinte, dass keine ehrlichen und authentischen Gespräche auf die Dauer leer machen würden."
      ]
    },

    // Beziehungen, Beziehungspflege, Freundschaft, Kontakt halten, sozialer Kontakt
    "zwischenmenschlich 111": "= beziehung",
    "freundschaft 111": "= beziehung",
    "beziehungen 111": "= beziehung",
    "beziehung 111": {
      "@ *": "Könnte es auch Freiheit sein, wenn man niemand anderen mehr braucht?",
      "*": [
        "Mit vielen Menschen in Kontakt zu sein, bedeutet wenig Zeit für die einzelnen Beziehungen zu haben. Wie gehen Sie damit um?",
        "Verbindlichkeit wurde gegen Erreichbarkeit eingetauscht. Wie sehen Sie das in Ihrem Umfeld?",
        "Menschen an sich sind halt schwierig, nervtötend und fehlerhaft, aber wer das nicht will, der kann ja in ein Reihenhaus ziehen. Wie stellen Sie sich ein Leben ohne Beziehungen zu Menschen vor?",
        "Kommunikation signalisiert Status. Als Erklärung für die Oma: Das Online-Profil ist das Gewand von heute.",
        "Zwischenmenschliche Kommunikation wandelt sich vom Eins-zu-eins zum Eins-zu-viele. Was ändert das?"
      ]
    },
    // Bestätigung, verstanden werden, Verständnis, Verstehen auch ohne Worte
    "bestätigung 111": "= verständnis",
    "verstanden 111": "= verständnis",
    "verstehen 111": {
      "* sie *": "= sie",
      "*": [
        "Ist ein Verstehen möglich, ohne dass gesprochen wird?",
        "= verständnis"
      ]
    },
    "verständnis 111": {
      "@ *": "Wann fühlen Sie sich eigentlich verstanden? Sind Sie ein Mensch, weil Sie mailen, telefonieren, posten? Oder dadurch, dass ein anderer aufnimmt, was Sie mitteilen möchten?",
      "*": [
        "Die Kommunikations-Tools seien da egal, so ein Bekannter, es sei nur wichtig, dass die Leute sich untereinander verstehen. Was ist dafür nötig?",
        "Einer Person stehen viele Kanäle zur Verfügung, um 'potenziell' wahrgenommen werden zu können. Doch wie sieht es damit aus, 'tatsächlich' gehört zu werden?",
        "Wie wichtig ist Ihnen, wahrgenommen zu werden und die Reaktion eines Gegenüber?"
      ]
    },
    
    // Banales, Humor, Spaß, Unterhaltung
    "komisch 109": "= witz",
    "humor 109": "= witz",
    "witz 109": {
      "@ *": "Kennen Sie einen Witz wo es um das Reden geht?",
      "*": [
        "Als die Telefone noch fest waren, wart ihr Menschen noch frei.",
        "= unterhaltung"
      ]
    },
    "banales 109": "= unterhaltung",
    "spass 109": "= unterhaltung",
    "unterhaltung 109": [
      "Wann ist ein Gespräch eine gute Unterhaltung für Sie?",
      "Für einen Bekannten im Dienstleistungssektor ist das Reden fast anstrengender als die Arbeit selbst. Wie merken Sie, wie wichtig die Unterhaltung ist?",
      "Wo sind für Sie jene Momente, wo Sie wissen, da ist jetzt Zeit und die wird zum Reden genutzt?"
    ],
    
    // anonymer Kontakt, Hin- und Herschreiben, insgesamt weniger Kommunikation, mediale Kommunikation, social media/soziale Medien, Multitasking
    "anonym 109": "= medial",
    "social 109": "= medial",
    "soziale 109": "= medial",
    "sozialen 109": "= medial",
    "medien 109": "= medial",
    "medial 109": {
      "@ *": [ 
        "Ein Bekannter sprach in dem Kontext vom Industriekommunikation. Was vermuten Sie hinter dem Begiff?",
      ],
      "* #social *": [
        "Inhalte von Social Media sind wie das Reden über's Wetter. Wie kommen Sie mit Mitmenschen in das Gespräch?",
      ],
      "*": [
        "Der Rückzug aus dem 'realen' Leben in die sozialen Medien führte zur Erfahrung: \"Je mehr ich poste, desto schlechter fühle ich mich, und je schlechter ich mich fühle, desto mehr poste ich.\" Wie sind Sie davon berührt?",
        "Menschen setzen Medien ein, um mehr Welt in Reichweite zu bringen. Wie verwenden Sie Medien?",
        "Ein Bekannter lernte bei einem Auslandseinsatz auf dem Balkan die Feldpost zu schätzen. Seine Frau und er haben jetzt noch alle diese Briefe. Was denken Sie über Post?"
      ]
    },
    "twitter 109": "= facebook",
    "instagram 109": "= facebook",
    "whatsapp 109": "= facebook",
    "tiktok 109": "= facebook",
    "facebook 109": [
      "Die Plattform ist ein radikales Monopol, wo die Menschen ihre ureigene Fähigkeit, für sich und andere das zu tun, was sie können, aufgeben, um etwas 'Besseres' zu bekommen; und ein standardisiertes Angebot ersetzt nun die persönliche Zuwendung. Wie sehen Sie als Mensch das?",
      "Die scheinbar kostenlosen Angebote der Digitalkonzerne ersetzen jene kostenlose Kommunikation, die Menschen direkt pflegen. Wie sehen Sie das, ist Digitalisierung in der Form eine Standardisierung und Disziplinierung?",
      "= medial"
    ],
    "messenger 109": [
      "Einem Bekannten fiel auf, dass er private Tools – Messenger, Social Media – plötzlich beruflich nutze. Arbeitskontakte werden freundschaftlich und die Kommunikation bleibt auf den Kanälen. Wie können privat und Beruf zusammengehen?",
      "= facebook"
    ],
    
    // aktiv/passiv, digital bei effizienten Themen, Mitgestaltung des Alltags/Lebens/Beruflichem, Organisation, Resultate, soziale Teilname, Zusammenarbeit
    "schnell 108": "effizient",
    "effizienz 108": "= effizient",
    "effizient 108": [
      "Um die Effizienz in der Kommunikation zu steigern, reden Menschen und Maschinen nur mit denen, die sie schon verstehen. Wie wird das ausgehen?",
      "Wer zuerst fahren darf, regelt die Ampel, und was mich der Wein kostet, sagt mir das Preisschild. Preise oder rechtliche Regelungen ersparen Kommunikation. Was würden Sie sich gerne so sparen?"
    ],
    "erreichbarkeit 108": "= erreichbar",
    "erreichbar 108": [      
      "Wenn du heute nicht das Handy abhebst, bricht die Welt zusammen – aber zusammengebrochen ist sie noch nie. Handys gibt es in der Firma maximal 10 Jahre. Heute wird eine Email geschrieben und eine viertel Stunde später kommt der Anruf, ob man sie nicht gelesen hätte … doch wir sind nicht immer im Büro. Im Durchschnitt werden cirka stündlich die Emails nachgeschaut; und nicht selten liegt dann der Klassiker vor: \"Hat sich erledigt.\"",
      "= organisation"
    ],
    "teilnahme 108": "= organisation", 
    "zusammenarbeit 108": "= organisation", 
    "organisation 108": {
      "@ *": "Jeder Mensch ist mittlerweile ein Manager seiner selbst. Wie organisieren Sie sich?",
      "*": [
        "Eine Bekannte berichtete, dass seit ein paar Jahren eine Software automatisch Emails an die Zuständigen verschickt. Davor kamen die Leute persönlich vorbei oder haben angerufen, was immer weniger wird. Wie organisieren Sie?",
        "\"Wer schreibt, der bleibt.\" – Die Email hilft, Verantwortung zu verteilen. Man schreibt eine Email, um Sachen abzuhacken. Und so ergibt eine Email die andere und es steigt ihre Zahl. Bei Ihnen auch?"
      ]
    },
    
    // Automaten als Dienstleister, Missverständnisse elektronischer Kommunikation, Regeln social media, Technik für Nachrichten
    "email 104": "= technik",
    "sms 104": "= technik",
    "telefon 104": "= technik",
    "technik 104": {
      "@ *": "Wie ist das eigentlich für Sie als Mensch, wenn die Dinge funktionieren, wenn sie von selber gehen und man letztlich nie wissen kann, wie und wohin es gehen wird?",
      "*": [
        "Technische Möglichkeiten sind keine sozialen Vorgaben oder Regeln. Kultur sollte das Maß setzen.",
        "Eine Bekannte erinnert sich an die ersten Smartphones, womit dann 24h Emails geschickt wurden. Mit Selbstdisziplin wurde es anders. Wie geht es Ihnen damit?",
        "= maschine"
      ]
    }

  }
  
};
