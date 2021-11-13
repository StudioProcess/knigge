export default {
  
  // override options
  "options": {
    // randomly choose of reassembly rules and none-replies (instead of sequentially)
    "shuffle_choices": true,
    // transform input text to lowercase
    "lowercase_input": true,
    // transform output text to lowercase (responses will be fully lowercase)
    "lowercase_output": false,
    // characters that delineate parts of the input
    // parts will be transformed in the order they appear in
    // if a part doesn't produce a response, the next part is tried
    "stop_chars": ".,;:?!",
    // words that delineate parts of the input
    "stop_words": ["but"],
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
    "Ich grüße Dich",
    "Knigge ist mein Name und der Umgang mit Menschen mein Thema",
    "Wenn Du das Gspräch suchst, was hoffst Du zu finden?",
    "Was erwartest Du von zwischenmenschlicher Kommuikation?",
    "Was ist für Dich ein schönes Gespräch?"
  ],

  // list of final sentences from eliza (randomly chosen)
  "final": [
    "Bis dann",
    "Ich konnte einiges aus unserem Gespräch mitnehmen. Ich hoffe, Du auch.",
    "Würd' mich freuen, wenn Du wieder einmal vorbeischaust."
  ],
  
  // list of fallback replies
  // use these when no reply can be generated from the keyword-based transformation rules
  "none": [
    "Das habe ich jetzt nicht verstanden?",
    "Ich bin aufmerksam.",
    "Ich glaube wir verstehen uns."
  ],

  // list of quit commands
  // quit, when one of these is the only input
  "quit": [
    "bis dann",
    "wiederschauen",
    "tschüss",
    "alles gute",
    "servus",
    "mir reicht es"
  ],

  // pre-processing substitutions
  // applied to the input string
  "pre": {
    "dont": "don't",
    "cant": "can't",
    "wont": "won't",
    "dreamed": "dreamt",
    "dreams": "dream",
    "were": "was",
    "i'm": "i am",
    "you're": "you are",
    "mom": "mother",
    "dad": "father"
  },

  // post-processing substitutions
  // applied to parameters during reassembly
  "post": {
    "am": "are",
    "your": "my",
    "me": "you",
    "you are": "I am",
    "i am": "you are",
    "myself": "yourself",
    "yourself": "myself",
    "i": "you",
    "you": "I",
    "my": "your"
  },

  // tag definitions
  // to be used in decomposition rules (with '#')
  "tags": {
    "alle": ["jede","jeder", "immer"],
    "kommuniziere": ["spreche", "rede", "schreibe", "telefoniere"],
    "wünsche": ["hoffe"],
    "verstanden": ["verstehen", "verstehe", "nachvollziehen"]
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
    
    // form 1
    "name": "I am not interested in names.",
    "how": "= what",
    "alike 10": "= dit",
    "certainly": "= yes",
    
    // form 2
    "sorry 5": [
      "Please don't apologize.",
      "Apologies are not necessary.",
      "What feelings do you have when you apologize?",
    ],
    "what": [
      "Why do you ask?",
      "Does that question interest you?",
    ],
    "dit": [
      "In what way?",
      "What resemblance to you see?",
      "How?"
    ],
    "yes": [
      "You seem quite positive.",
      "You are sure.",
      "I see.",
      "I understand."
    ],
    
    // form 3
    "you": {
      "* you remind me of *": "= dit",
      "* you are *": "What makes you think I am $2?",
      "* you * me": "Why do you think I $2 you?",
      "* you *": "We were discussing you - not me.",
    },
    
    // form 4
    "remember 5": {
      "* i remember *": [
        "Do you often think of $2?",
        "Does thinking of $2 bring anything else to mind?",
        "What else do you remember?",
        "Why do you remember $2 just now?",
        "What in the present situation reminds you of $2?",
        "What is the connection between me and $2?",
      ],
      "* do you remember *": [
        "Did you think I would forget $2?",
        "Why do you think I should recall $2 now?",
        "What about $2?",
        "= what",
        "You mentioned $2?"
      ]
    },
    
    // forms 3 and 4 can be combined
    "why": {
      "* why don't you *": [
        "Do you believe I don't $2?",
        "Perhaps I will $2 in good time?",
        "Should you $2 yourself?",
        "You want me to $2?",
        "= what"
      ],
      "* why can't I *": "Do you think you should be able to $2?",
    },
    
    // memory
    "my 2": {
      "@ * my *": [
        "Lets discuss further why your $2.",
        "Earlier you said your $2.",
      ],
      "* my *": [
        "Your $2?",
        "Why do you say your $2?",
      ]
    },
    
    // tags
    "i 1": {
      "* i #want *" : [
        "What would it mean to you if you got $3?",
        "Why do you want $3?",
      ],
      "* i am * #sad *": [
        "I am sorry to hear you are $3.",
        "Do you think coming here will help you not to be $3?",
      ],
      "* i am * #happy *": [
        "How have I helped you to be $3?",
        "Has your treatment made you $3?",
      ],
      "* i #belief i *": [
        "Do you really think so?",
        "But you are not sure you $3.",
      ],
      "* i * #belief * you *": "= you",
    },

    // KNIGGE
    "knigge": "= name",
    "bist du": "= name",
    "name": [
      "Hatte ich mich zu kurz vorgestellt? Knigge mein Name und ich bin ein Chatbot, der mit Dir über's Reden redet.",
      "Zu meiner Person findest Du noch mehr in der Unterseite."
    ],

    // ALLGEMEINHEITEN
    "eventuell": "= vielleicht",
    "vielleicht": [
      "Warum bist du dir nicht sicher?",
      "Das klingt etwas unsicher?"
    ],

    "ich 1": {
      "* ich #kommuniziere *": "Was ist schön am Austausch?",
      "* ich #wünsche *": "Was bräuchte es dafür?"
    },

    "du 1": {
      "* sagst du *": [
        "$2 ist nicht unbedingt mein Thema ..."
      ]
    },

    "nicht 1": {
      "* nicht #verstanden *": "Was bräuchte es für Verständnis?"
    },
    
    "jede 2": "= alle",
    "jeder 2": "= alle",
    "immer 2": "= alle",
    "alle 2": {
      "* #alle *": [
        "Kannst Du dir da jemanden im Speziellen vorstellen?",
        "Gibt es für dich dazu ein Beispiel?",
        "Wie schaut das genau aus? Ich würde es mir gerne vorstellen",
      ]
    },

    "english": "= xfremd",
    "francais": "= xfremd",
    "italiano": "= xfremd",
    "espanol": "= xfremd",
    
    "xfremd": "Entschuldigung, ich spreche nur Deutsch ...",
    
    "wie 10 ": {
      "* wie *": "= dit"
    },
    
    "dit": [
      "Inwiefern?",
      "Gibt es dazu Vergleichbares?"
    ],

    // Kommunikation
    "kommunikation 20": {
      "@ *": [
        "Nochmal wegen dem Kommunizieren: Warum eigentlich?"
      ],
      "* kommunikation mit *": [
        "Was fällt Dir auf, wenn du mit $2 kommunizierst?"
      ],
      "*": [
        "Vermisst du dabei den persönlichen Kontakt?",
        "Oft ist es doch unnötiges Hin-und-Herschreiben, oder?",
        "Der Onkel, er war Bauarbeiter, der hat nicht kommuniziert, der war einfach da."
      ]
    },

    // Technik, Bot
    "bot": "= technik",
    "technik 20": {
      "@ * technik *": [
        "Technik - wann bist du damit noch in Berührung?"
      ],
      "*": [
        "Ich verzichte auf Facebook und Co. – Wann soll ich das machen? Ich nehme mir die Zeit für unser Gespräche und damit fehlt sie für die Plattformen."
      ]
    },
    
    // Nähe
    "nah": "= nähe",
    "nähe 10": {
      "@ * nähe *": [
        "Steht das mit Nähe in Verbindung?"
      ],
      "* keine nähe *": [
        "Wenn ich Information will, ist ein Chatbot auch ok. Aber für den Austausch ...",
        "Macht das Kommunikationszeitalter einsam? Und wenn ja, ist diese Einsamkeit beängstigend oder angenehm?"
      ],
      "* nähe *": [
        "Auch das Gefühl von Vertrautheit, oder?",
        "Ist dir da Emotion auch wichtig?",
        "Wir haben uns an die Echtzeitkommunikation gewöhnt, obwohl sie so jung ist. Die Ferne belästigt uns mit trügerischer Nähe und vor dem Gleichzeitigen schützen uns keine Distanzen mehr."
      ],
      "*": "Leben wir vielleicht davon?"
    },

    // Zeit
    "zeit 10": {
      "@ * zeit *": [
        "Das mit der Zeit lässt mich nicht los."
      ],
      "* zeit *": [
        "Schnelligkeit, Beschleunigung war oft das Argument für die Einführung von Technik. Da haben wir übertrieben und das nimmt uns nun die Zeit.",
        "Das Reden ist fast anstrengender als die Arbeit selbst. Um 17:00 ist nun Feierabend, diese persönliche Grenze habe ich gezogen. Ich habe die Zeiten reduziert, um die Lebensqualität zu erhöhen."
      ]
    },

    // Verständnis
    "Verständnis 5": [
      "Der Mensch hat ein inneres Bedürfnis nach Wahrnehmung, Wahrgenommenwerden und Reaktion.",
      "Die höchste Stufe des Verständnisses ist das persönliche Treffen. Je schwieriger der Inhalt desto mehr braucht es das Gespräch.",
      "Verständnis würde ich mir wünschen. Wie entsteht das?",
    ],

    // Anwesenheit
    "anwesend": "= anwesenheit",
    "anwesenheit 5": [
      "Ich sehe bei  mir gerade 23 Anrufe in Abwesenheit ... in so Situationen frage ich mich: Wann war ich zuletzt anwesend? So richtig da?",
      "Ich würde sagen: Verbindlichkeit wurde gegen Erreichbarkeit eingetauscht."
    ],

    // Aufmerksamkeit
    "anteilnahme": "= aufmerksamkeit",
    "aufmerksamkeit 5": { 
      "@ * aufmerksamkeit *": [
        "Vermisst Du die Präsenz in der Kommunikation?"
      ],
      "*": [
        "Ich bin nicht dadurch, dass ich maile, funke, simse. Ich bin dadurch, dass Du das zur Kenntnis nimmst, was ich Dir mitteilen möchte, und daraus etwas machst. Und Du bist dadurch, dass ich nicht nur wahrnehme, wie Du kommunizierst, sondern aufnehme, was Du mir sagen willst.",
        "Die Stärke ist die Kommunikation. Bei den Gasthäusern – z.B. – ist das Essen wichtig, doch wenn dort kein Platz leer bleibt, stimmt etwas anderes: Das Personal, die Aufmerksamkeit."
      ]
    }

  }
  
};