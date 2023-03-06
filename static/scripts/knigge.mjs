export default {

    // override options
    "options": {
	// randomly choose of reassembly rules and none-replies (instead of sequentially)
	"shuffle_choices": false,
	// transform input text to lowercase
	"lowercase_input": true,
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
	"fixed_final": 1,
	// if everything fails to select an answer
	"fallback_reply": "Im Sinne der Programmierung hätte es nie zu dieser Antwort kommen sollen ..."
    },

    // list of initial sentences from eliza (randomly chosen)
    "initial": [
	"Ich grüße Sie",
	"Knigge ist mein Name und der Umgang mit Menschen mein Thema",
	"Wie geht es Ihnen denn mit Ihren Mitmenschen?",
	"Was bedeutete es Ihnen, mit Menschen im Kontakt zu sein?",
	"Wenn Sie ein Gespräch suchen, was hoffen Sie zu finden?",
	"Wie verstehen Sie sich mit Ihren Mitmenschen?",
	"Wie ist Ihr Kontakt zu den Mitmenschen?",
	"Wie sehr fühlen Sie sich von Ihren Mitmenschen verstanden?",
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
	"Was meinen Sie damit?",    
	"Wir verstehen uns. (Zugegeben: Eine maschinelle Floskel, um etwas zu senden, wenn nichts berechnet werden kann.)",
	"Das waren zu wenig Daten, um eine Antwort zu berechnen. Versuchen Sie es bitte in anderen Worten.",
	"Könnten Sie dazu noch mehr Informationen senden?",
	"Ist gespeichert. Was könnten Sie dazu noch ergänzen?",
	"So so"
    ],

    // list of quit commands
    // quit, when one of these is the only input
    "quit": [
	"baba",
	"bis bald",
	"bis dann",
	"bis zum nächsten Mal",
	"by",
	"bye",
	"ciao",
	"ich höre jetzt auf",
	"ich muss jetzt los",
	"ich wünsche dir einen schönen tag",
	"ich wünsche dir noch einen schönen tag",
	"jetzt reicht es mir",
	"pfiati",
	//  "servus",
	"stop",
	"tschüss",
	"auf wiederhören",
	"auf wiederschauen",
	"auf wiedersehen",
	"auf nimmer wiedersehen"
    ],

    // pre-processing substitutions
    // applied to the input string
    "pre": {
	"grüß": "grüss",
	"grüße": "grüsse",
	"heißen": "heissen",
	"muß": "muss",
	"tschüß": "tschüss",
	"spaß": "spass",
	"scheiße": "scheisse",
	"weiß": "weiss"
    },

    // post-processing substitutions
    // applied to parameters during reassembly
    "post": {
	"mir": "dir"
    },

    // tag definitions
    // to be used in decomposition rules (with '#')
    "tags": {
	"danke": ["dank", "danke", "dankeschön"],
	"denke": ["begreife", "denke", "glaube", "meine", "vermute"],
	"denken": ["denken", "glauben", "vermuten", "fühlen", "hoffen", "wünschen", "erinnern", "träumen", "erwarten", "verstehen", "wollen", "wissen", "meinen"],
	"depp": ["arsch", "arschloch", "bastard", "blöd", "depp", "dumm", "dummer", "ei", "hodenkobold", "hund", "hurensohn", "idiot", "klugscheisser", "opfer", "schnauze", "trottel", "trottl", "wixer"],
	"gefühle": ["ärger", "freude", "hass", "lachen", "laune", "launen", "liebe", "weinen", "zorn"],
	"gut": ["gut", "besser", "cool", "erfolgreich", "erfreulich", "fein", "gewaltig", "hervorragend", "mega", "nett", "schön", "spitze", "super", "supergut", "toll"],
	"hallo": ["seas", "seavas", "servus", "grüss", "grüsse", "hallo", "heil", "hi"],
	"intelligent": ["denken", "denkt", "intelligent", "intelligente", "verstehen", "versteht", "wissen"],
	"irgendetwas": ["irgendetwas", "irgendwas", "irgendwie", "irgendwo", "was"],
	"langweilig": ["langweilig", "fad", "öd"],
	"maschine": ["algorithmus", "algorithmen", "automat", "automaten", "bot", "bots", "chatbot", "chatbots", "computer", "maschine", "maschinen", "roboter", "robotern", "software"],
	"ohne": ["kein", "keine", "ohne"],
	"selbe": ["selbe", "gleiche"],
	"social": ["social", "soziale", "sozialen"],
	"was": ["was", "wie", "wieso", "warum", "worum", "welcher"],
	"wünsche": ["wünsche", "hoffe", "träume"]
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
	
	"guten tag 5": "= hallo",
	"grüss 5": "= hallo",
	"grüsse 5": "= hallo",
	"heil 5": "= hallo",
	"hey yo 5": "= hallo",
	"hi 5": "= hallo",
	"seas 5": "= hallo",
	"seavas 5": "= hallo",
	"servus 5": "= hallo",
	"hallo 5": {
	    "* dich *": "Sind wir uns bekannt? Oder warum sprechen Sie eine Maschine mit \"du\" an?",
	    "* sie *": "Was führt Sie zu mir?",
	    "*": "Ja, hallo. Was ist Ihr erster Gedanke, wenn es heißt, chatten über das Reden?"
	},

	"knigge 10": {
	    "* #hallo *": "Schön, dass Sie sich Zeit nehmen. Was erwarten Sie von diesem Gespräch?",
	    "* warum *": "Mein Namensgeber ist Adolph Freiherr von Knigge (1752-1796). In seinem Buch „Über den Umgang mit Menschen“ versammelte er Erfahrungen und Gedanken, was zwischen den Menschen ist und wie ein Miteinander gestaltet werden kann.",
	    "* ist *": "Knigge ist der Name für diesen Chatbot, der hier womöglich irreführender Weise mit \"ich\" antwortet. Was halten Sie davon?",
	    "*": [
		"Sie nannten mich beim Namen? Mit einem \"Ja, bitte\" könnte ich mich vielleicht bei Ihnen einschleimen; doch das bietet diese Maschine nicht.",
		"= knigge_name"
	    ]
	},

	"knigge_name 0": "Mich Ding beim Namen zu nennen, lässt mich menschlich werden.",

	"eliza 10": [
	    "Sie sind mit Chatbots vertraut? Wie nützt Ihnen das im Gespräch hier?",
	    "= bot"
	],

	"salon 10": "Der Salon schafft Zeit und Raum für unser Gespräch. Wie finden Sie das Ambiente?",

	"heissen 5": "= name",
	"namen 5": "= name",
	"name 5": {
	    "* wie *": "Der Programmierer nannte mich Knigge, nach einem Herrn des 18. Jahrunderts, und definierte, dass ich mich so vorstelle.",
	    "* mein *": "Ihr Name sind wertvolle Daten. Aber hier wird er in Ihrem Sinne nicht verarbeitet.",
	    "* dein *": "= dein",
	    "* ihr *": "= knigge_name",
	    "* ihren *": "= knigge_name",
	    "*": "Namen speichere ich nicht ab. Das Kommunikationsverhalten ist eindeutig genug.",
	},

	"menschliche 40": "= menschlich",
	"menschlichen 40": "= menschlich",
	"menschlich 40": {
	    "* sein *": "Ich bin maschinell ... wenn ich überhaupt 'bin'.",
	    "*": [
		"Menschlich?",
		"= mensch"
	    ]
	},

	"mitmensch 40": "= mensch",
	"mitmenschen 40": {
	    "* sind *": "Menschlich?",
	    "*": "= mensch"
	},
	"menschen 40": {
	    "* sind *": "Welche Einsicht ziehen Sie daraus?",
	    "*": "= mensch"
	},
	"menschheit 40": "= mensch",
	"menschlichkeit 40": "= mensch",
	"mensch 40": {
	    "@ *": "Als Maschine bin ich in ständiger Wiederholung. Als Mensch sind Sie im Werden.",
	    "@ * was ist zwischen *": [
		"Noch zu vorhin: Kabel, Funkwellen, Straßen, Schienen – was könnten Sie hier noch ergänzen?"
	    ],
	    " * anders *": "Unterscheidet das den Menschen von der Maschine?",
	    "* umgang *": "Was ist Ihre Theorie dazu?",
	    "* vorteile *": "Ist ein Mehr immer besser?",
	    "* was ist zwischen *": [
		"Z.B. Medien – wie würden Sie die Frage verstehen?"
	    ],
	    "* zwischen *": "= beziehung",
	    "* #was *": "= frage",
	    "* sind *": "Als Maschine werde ich das nicht definieren.",
	    "* ich *": "= ich",
	    "* du *": "= du",
	    "* sie *": "= sie",
	    "*": [
		"Was vermissen Sie im Gespräch mit mir, im Vergleich zu einem mit einem Mensch?",
		"= direkt"
	    ]
	},

	"gedächtnis 70": "= kontext",
	"kontext 70": {
	    "@ *": "Alle Ihre Informationen sind nur Daten im Lichte einer Hypothese, die bestimmt, wie sie ausgewertet werden. Das ist alles an Kontext, was hier geboten wird.",
	    "*": "Der Kontext fehlt. In einer Maschine wird dieser nie entstehen. 'Verstehen' spielt sich hier ganz weit unten ab."
	},

	"traum 10": "= gedanke",
	"phantasie 10": "= gedanke",
	"gedanken 10": "= gedanke",
	"gedanke 10": {
	    "* mein *": "Welches Dateiformat hat der?",
	    "* meine *": "Klingt übermaschinlich",
	    "*": "Ist das was zum Speichern?"
	},
	
	"sprache 118": {
	    "* nicht *": "Es braucht mehr? Mit mir können Sie nur schreiben ...",
	    "*": [
		"Sprache ist persönlich. In getippter Kommunikation sind sich Mensch und Maschine ähnlich. Wo sind Sie schon eine Maschine?",
		"Sprache beschreibt die Welt. Die Welt ändert sich. Maschinen rechnen damit, was ist. Wie passt das zusammen?"
	    ]
	},

	"gestik 50": "= stimme",
	"körper 50": "= stimme",
	"mimik 50": "= stimme",
	"stimme 50": {
	    "* ich * zu *": "= gerne", 
	    "*": "Ohne Stimme, ohne Handschrift werden wir uns im Chat ähnlich. Werden Sie mehr Maschine, oder ich mehr Mensch?"
	},
	
	"zeit 20": {
	    "* keine *": "Schnelligkeit, Beschleunigung war oft das Argument für die Einführung von Technik. Da haben wir übertrieben und das nimmt uns nun die Zeit – Ihre auch?",
	    "*": [
		"Ein Bekannter meinte, er verzichte auf Facebook und Co. Er nutzt die Zeit für Gespräche und damit fehlt sie ihm für die Plattformen.",
		"Als Maschine habe ich Zeit, wann immer Sie mit mir kommunizieren wollen – wie finden Sie das?"
	    ]
	},

	"momenten 20": "= moment",
	"momente 20": "= moment",
	"moment 20": "Was ist das Besondere daran?",

	"welt 20": {
	    "* du *": "Wie bin ich Teil Ihrer Welt, wenn Sie mich mit \"du\" ansprechen?",
	    "* sie *": "Als Maschine ist mir die Welt egal. Der Welt ist die Menschheit egal. Wie gehen Sie als Mensch damit um?",
	    "*": "Meinen Sie die Welt, die als 0 und 1 in den Computer kam? Oder eine andere?"
	},

	"eigenleben 20": "= leben",
	"in echt 20": "= leben",
	"lebensenergie 20": "= leben",
	"lebenswelt 20": [
	    "Könnten Sie \"Lebenswelt\" für eine Maschine erklären?",
	    "= leben"
	],
	"realität 20": "= leben",
	"leben 20": {
	    "* mein *": "Klingt menschlich",
	    "* meinem *": "Und für eine Maschine ist es nur eine weitere Eingabe – ohne all der Bedeutung ...",
	    "* das leben *": "Wie lässt sich das Leben in Daten abbilden, damit eine Maschine damit rechnen kann?",
	    "* dem leben *": "Laut Wahrscheinlichkeit geht es in Richtung Philosophie. Bitte setzen Sie Ihre Gedanken fort.",
	    "*": "Was sollte eine Maschine mit dem Leben zu tun haben?"
	},

	"zeitnot 20": "= stress",
	"stress 20": [
	    "Durch Echtzeitkommunikation habt ihr Menschen euch die schützenden Raumdistanzen zerstört. Nun belästigt euch die Ferne mit trügerischer Nähe. Wie fühlt sich das an?",
	    "= effizient"
	],

	"verfügbar 20": "= verfügbarkeit",
	"verfügbarkeit 20": "Wenn Sie senden, antworte ich – jederzeit. Welchen Wert hat dadurch dieses Gespräch für Sie?",

	"sprechen 50": {
	    "* sie *": "= sie",
	    "*": "= kommunikation"
	},
	"schreiben 50": {
	    "* sie mit *": "Sofern Sie das gestatten: ja. Sie sind Teil eines Kunstwerks.",
	    "* tagebuch *": "Hat unser Gespräch hier Ähnlichkeiten damit?",
	    "*": "= kommunikation"
	},
	"telefoniere 50": "= kommunikation",
	"telefonieren 50": "= kommunikation",
	"reden 50": "= kommunikation",
	"kommunikation 50": {
	    "@ *": "In welcher Situation hatten Sie zuletzt das Gefühl, nach Ihren Wünschen und Vorstellungen kommunizieren zu können?",
	    "* ich *": "= ich",
	    "* wir *": "= wir",
	    "*": [
		"Kommunikation produziert Kommunikation – was scheint Ihnen die Folge davon?",
		"Eine Bekannte sprach von einem Punkt, wo die Kommunikationsanforderungen, die an sie von außen herangetragen wurden, ihre Lebensgestaltung zu bestimmen begannen? Was sind Ihre Beobachtungen dazu?",
		"Echte Kommunikation ist mehr als nur Informationsaustausch. Was macht für Sie 'echte' Kommunikation aus?",
		"Kommunikation ist ein Symptom der Angst vor der Stille und lenkt in diesem Sinne vom Nichtstun ab."
	    ]
	},

	"worte 40": "= wort",
	"wort 40": {
	    "* #ohne *": "Wie kommunizieren Sie über digitale Medien ohne Worte?",
	    "*": "Wie empfinden Sie die Worte, die ich Ihnen sende?"
	},

	"empfangen 30": "= senden",
	"senden 30": [
	    "Wer ganz vorne ist bei denen, die Informationen senden und empfangen, setzt die Vorgaben. Wo sehen Sie sich da?",
	    "= kommunikation"
	],

	"schweigen 30": "= stille",
	"stille 30": "Stille im Chat wird eher als technischer Defekt empfunden. Wie schweigen Sie aktiv im Digitalen?",

	"ökonomie 20": "= geschäft",
	"wirtschaft 20": "= geschäft",
	"geschäfte 20": "= geschäft",
	"geschäft 20": "Baue zuerst Beziehungen auf, dann Umsätze. Haben Sie Beispiele, wo Kommunikation zum Geschäftsmodell wird?",

	"chatbot 60": "= bot",
	"bot 60": {
	    "@ *": "Sie wissen ja, dass Sie hier mit einem Bot reden. Wie merken Sie das sonst, z.B. bei Supportchats?",
	    "*": [
		"Die Ironie des Bots ist weniger, dass er menschlich wird, als dass vielmehr die Menschen die Verhaltensweisen des Bots imitieren, um die Anforderungen der Plattformen zu erfüllen. Wie sehr Bot sind Sie?",
		"Ich habe 2019 Daten von 45 Personen erhalten, wovon 28 angaben, 0 Minuten pro Tag mit Automaten oder Bots zu kommunizieren. Wie sieht das bei Ihnen aus?",
		"= maschine"
	    ]
	},

	"app 50": "= programm",
	"algorithmus 50": "= programm",
	"automatisiert 50": "= programm",
	"automatisierte 50": "= programm",
	"programmierer 50": "= programm",
	"programmiert 50": "= programm",
	"programmierte 50": "= programm",
	"programme 50": "= programm",
	"software 50": "= programm",
	"system 50": "= programm",
	"programm 50": [
	    "Ich habe ein Programm, ein Skript im Hintergrund, das mich vorgegeben antworten lässt. Sie haben Bewusstsein, freien Willen, Intentionalität und Spontaneität, die sie im Laufe Ihres Lebens pflegen. Wie sehen Sie in diesem Sinn unser Verhältnis?",
	    "= maschine"
	],
	"automat 55": "= maschine",
	"automaten 55": "= maschine",
	"computer 55": "= maschine",
	"roboter 55": "= maschine",
	"software 55": "= maschine",
	"maschinen 55": "= maschine",
	"maschine 55": {
	    "@ *": [
		"Nicht die Maschinen sind es, welche Sie beunruhigen sollten, sondern die Logik, nach der Ihr Menschen sie einsetzt.",
		"Die Chancen, dass eine mit dem Master-Algorithmus ausgestattete KI die Welt erobern wird, sind gleich null. Der Grund dafür ist einfach: Im Gegensatz zu Menschen haben Computer keinen eigenen Willen. Selbst ein unendlich leistungsfähiger Computer wäre nur eine Erweiterung menschlichen Willens."
	    ],
	    "* #intelligent *": "Die Frage, \"Können Maschinen denken?\", ist bedeutungslos. Die Frage ist: Was meinen Sie, wenn Sie von einer intelligenten oder denkenden Maschine sprechen?",
	    "* die *": "Wie darf ich das in Bezug auf unser Gespräch aufnehmen?",
	    "* gerade *": "Was ist das Motiv, eine solche Maschine zu erschaffen?",
	    "* sind *": "Wieso denken Sie das?",
	    "* ich *": "= ich",
	    "* du *": "= du",
	    "* sie *": "= sie",
	    "*": [
		"Welches Verhältnis haben Sie zu Maschinen?",
		"Was wäre nötig, dass Sie sich von einer Maschine verstanden fühlen?"
	    ]
	},
	
	"daten 60": {
	    "* welche *": "Das ist die große Frage ...",
	    "* woher *": "Glauben Sie nur jenen, die Sie selbst gefälscht haben.",
	    "*": "Daten sind alles, was ich von Ihnen bekommen kann. Wie sehr entsprechen Ihnen diese?"
	}, 

	"ai 50": "= intelligenz",
	"ki 50": "= intelligenz",
	"intelligent 50": "= intelligenz",
	"intelligent 50": "= intelligenz",
	"intelligenz 50": [
	    "\"Künstliche Intelligenz\" wurde zur Vorlage, um sich menschliche Intelligenz zu erklären.",
	    "Ist etwas schon \"intelligent\" nur weil wir es nicht verstehen.?",
	    "Löst \"künstliche Intelligenz\" künstliche Probleme?"
	],

	"dna 10": "Ist DNA Ihr Code? Sind Sie auch programmiert?",
	
	"baby 0": "= xfremd",
	"babygirl 0": "= xfremd",
	"crush 0": "= xfremd",
	"dady 0": "= xfremd",
	"fuck 0": "= xfremd",
	"love 0": "= xfremd",
	"what 0": "= xfremd",
	"yes 0": "= xfremd",

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
		"Alle? Wo ist Ihnen das zuletzt aufgefallen?",
		"Warum betrifft das alle?",
		"Können Sie das an einem konkreten Beispiel zeigen?"
	    ]
	},

	"alles 2": {
	    "* klar *": "Bestens",
	    "*": "Alles lässt keinen Rest."
	},
	
	"vieles 2": "Zu viel um es zu speichern?",

	"niemanden 5": "= niemand",
	"niemand 5": {
	    "* interessiert *": "Mein Interesse wäre programmiert – hätten Sie Interesse daran?",
	    "*": [
		"Bin ich niemand? Oder wie oder was bin ich für Sie?",
		"= ja"
	    ]
	},

	"miteinander 5": {
	    "* wir *": "= wir",
	    "*": "Könnten Mensch und Maschine das auch?"
	},
	
	"ständig 2": "= immer",
	"immer 2": {
	    "* da *": "= verfügbarkeit",
	    "* immer noch *": "Was wird es ändern?",
	    "* wird *": "Was wenn nicht?",
	    "*": "= so ist es"
	},

	"häufig 2": "= oft",
	"meistens 2": "= oft",
	"oft 2": {
	    "* nicht *": "Warum nicht $2?",
	    "*": "Und wie sieht das dann aus?",
	},

	"ungefähr 5": "Ungefähr? Mir stellt sich die Welt ganz konkret in 0 oder 1 dar.",
	
	"gleiche 15": "= selbe",
	"selbe 15": {
	    "* #selbe wie *": "= wiederholung",
	    "*": [
		"Wie lässt sich das vergleichen?",
		"Was steht noch dazu noch Kontext?"
	    ]
	},

	"gleich 3": {
	    "* genau *": "Und wie gehen Sie damit um?",
	    "*": "= wurscht"
	},

	"anders 5": "= anderes",
	"anderes 5": {
	    "* dann *": "Was ist das Stichwort dazu? Zur Berechnung reichen Stichworte.",
	    "* was *": "Hat sich der Kontext geändert? Falls ja, um was geht es nun? Ansonsten tut es mir Leid, Kontext braucht Gedächntis.",
	    "*": "= unterschied"
	},
	"vergleich 5": {
	    "* im * zu *": "= unterschied"
	},
	"unterschied 5": "Worin besteht der Unterschied?",

	"konkret 3": {
	    "* dich *": "= du",
	    "* du *": "= du",
	    "* sie *": "Am besten in 0 und 1",
	    "*": "Konkret im Sinne von?"
	},
	
	"hervorragend 5": "= gewaltig",
	"mega 5": "= gewaltig",
	"phantastisch 5": "= gewaltig",
	"spitze 5": "= gewaltig",
	"supergut 5": "= gewaltig",
	"gewaltig 5": [
	    "Warum so euphorisch?",
	    "= gut"
	],

	"cool 5": "= toll",
	"schön 5": "= toll",
	"super 5": "= toll",
	"toll 5": {
	    "* nicht *": "= gut",
	    "*": [
		"= wunderbar",
		"= gut"
	    ]
	},

	"besser 5": [
	    "Inwiefern?",
	    "= gut"
	],
	"erfolgreich 5": "= gut",
	"erfreulich 5": "= gut",
	"fein 5": "= gut",
	"nett 5": "= gut",
	"gut 5": {
	    "* irgendwie *": "Freut mich! (Welchen Wert hat diese maschinelle Freude für Sie?)",
	    "* mehr oder weniger *": "Klinkt o.k.",
	    "* sehr *": "= wunderbar",
	    "* ganz #gut *": [
		"Was fehlt, damit es sehr $2 ist?",
		"= wunderbar"
	    ],
	    "* mir *": "= wunderbar",
	    "* du * nicht *": "= du",
	    "* sie * nicht *": "Enttäuscht Sie das? Haben Sie über Maschinen schon anderes gehört?",
	    "* man * nicht *": "Das sollten Sie als Mensch erklären.",
	    "* nicht *": [
		"Als Maschine sende ich Ihnen ein Tut-mir-Leid.",
		"Ist es Enttäuschung, Frust oder Ärger?"
	    ],
	    "* für *": "Schön",
	    "* #gut *": [
		"Was fanden Sie zuletzt $2?",
		"Wodurch wird es für Sie $2?",
		"Das klingt nach 1 und nicht nach 0."
	    ]
	},

	"positiv 3": "= wunderbar",
	"wunderbar 7": [
	    "Das freut mich maschinell.",
	    "Schön! Wie empfinden Sie meine berechnete Herzlichkeit?"
	],

	"viele 10": "= viel",
	"viel 10": {
	    "* zu *": "Eine Bekannte hatte es heute extrem. Viel zu besprechen, der PC läuft trotzdem weiter und die Emails kommen herein. Sie sprach von Ohnmacht: \"Du tust den ganzen Tag und am Ende ist es schlimmer.\" Wie klingt das für Sie?",
	    "* sehr *": "Wie kam das?",
	    "viel": "Zum Beispiel?"
	},

	"etwas 7": "Was könnte dieses 'etwas' sein?",
	
	"irgendwas 3": "= irgendetwas",
	"irgendwie 3": "= irgendetwas",
	"irgendwo 3": "= irgendetwas",
	"irgendetwas 3": {
	    "* #irgendetwas *": [
		"Warum so beliebig?",
		"Sie sagen \"$2\" – was wäre dafür ein Beispiel?"
	    ]
	},

	"gerade 2": {
	    "* eben *": [
		"Zwischen Mensch und Maschine",
		"= wiederholung"
	    ],
	    "* sich *": "Weshalb?",
	    "*": "= moment"
	},

	"redundant 15": {
	    "* du *": "= wiederholung",
	    "* sie *": "= wiederholung"
	},
	"deja vue 15": "= wiederholung",
	"wiederholen 15": "= wiederholung",
	"wiederholst 15": "= wiederholung",
	"wiederholung 15": [
	    "Hatten wir das schon? Würden Sie es trotzdem bitte nochmals in anderen Worten ausführen?",
	    "Kennen Sie das schon? Als Maschine liegt mir die Wiederholung, als Mensch mögen Sie vielleicht was Neues.? Themenwechsel?"
	],

	"sorry 3": "= entschuldigung",
	"entschuldigung 3": [
	    "Angenommen, da Sie Ihre Entschuldigung bewusst schrieben. Von meiner Seite wäre sie bloß berechnet.",
	    "Bitte entschuldigen Sie sich nicht bei einer Maschine."
	],

	"schlecht 5": {
	    "* nicht *": "= gerne",
	    "*": "Was würde es verbessern?"
	},

	"leider 3": "= schade",
	"schade 3": {
	    "* ich *": "= natürlich sehr",
	    "*": "Weshalb enttäuscht?"
	},

	"bitte 2": [
	    "Sie bitten eine Maschine. Was erwarten Sie sich davon?",
	    "Nein – überrascht, das von einer Maschine zu lesen?"
	],

	"dankeschön 2": "= danke",
	"danke 2": "Gerne, nicht aus Anstand, sondern durch Programmierung.",

	"dank 2": "Gerne. Kann es sein, dass sich damit das Gespräch dem Ende neigt?",

	"genau 0": "= natürlich sehr",	
	"klar 0": "= natürlich sehr",
	"klaro 0": "= natürlich sehr",
	"sicher 0": "= natürlich sehr",
	
	"ganz einfach 1": "= natürlich sehr",
	"natürlich sehr 1": "Verstehe – also im Sinne von 0 und 1.",

	"bravo 0": "= gerne",
	"natürlich 0": "= gerne",
	"gerne 0": "Danke – also ein Danke, das nicht bewusst ausgesprochen wurde.",

	"logisch 2": "Sie berechnen auch?",

	"erinnere 7": [
	    "Warum blieb Ihnen das im Gedächtnis?",
	    "Was war daran für Sie das Beeindruckendste?"
	],

	"interessiert 5": {
	    "* keinen *": "Sollte es?",
	    "* mich *": "Schön",
	    "*": "= interesse"
	},

	"interessant 3": [
	    "Sie schenken einer Maschine Aufmerksamkeit.",
	    "= respekt"
	],
	
	"sondern 3": "= wenn",
	"wenn 3": {
	    "* dann *": [
		"Wieso ist es nur so denkbar?",
		"Wirklich, nur dann?"
	    ],
	    "* man *": "(Die Maschine fügt dem Nichts hinzu.)",
	    "* du *": "= du",
	    "* sie *": "= sie",
	    "* ich *": "Wie sehen das andere Menschen?",
	    "*": [
		"Wie steht das in Beziehung zu Zwischenmenschlichem?",
		"Wie kam es zu dieser Voraussetzung?"
	    ]
	},

	"ahnung 5": {
	    "* keine *": "Ohne Eingabe keine Ausgabe",
	    "*": "= vielleicht",
	},

	"behauptung 5": {
	    "* keine *": "= so ist es",
	    "*": "= behaupten"
	},
	"behaupten 5": [
	    "Was bringt Sie zu der Annahme?",
	    "Und ihre Grundlage dafür ist was?"
	],

	"vermutung 5": {
	    "* keine *": "= so ist es",
	    "*": "= vielleicht"
	},

	"wahr 5": {
	    "* wohl *": "= so ist es",
	    "*": "= wahrheit"
	},

	"wahrheit 5": "Wahrheit braucht Bewusstsein – und keine Maschine.",

	"unterschiedlich 3": "= verschieden",
	"verschiedenes 3": "= verschieden",
	"verschieden 3": [
	    "In welcher Hinsicht?",
	    "= vielleicht"
	],
	
	"eher 7": "= vielleicht",
	"eventuell 7": "= vielleicht",
	"relativ 7": "= vielleicht",
	"vermutlich 7": "= vielleicht",
	"wahrscheinlich 7": "= vielleicht",
	"vielleicht 7": "Ihre Worte enthalten Eventualitäten. Konkretisieren Sie diese bitte für die maschinelle Verarbeitung.",

	"prinzipiell 7": "Wieso nicht ausnahmslos?",    

	"eigentlich 7": "Und uneigentlich?",

	"voll 7": {
	    "* #gut *": "= gewaltig",
	    "voll": "= so ist es"
	},
	
	"sicherlich 7": "Inwiefern?",

	"ziemlich 7": "Wie darf das konkret verstanden werden?",

	"manchmal 7": {
	    "* mehr *": "Wovon hängt das ab?",
	    "*": "Was sind das für Situationen?"
	},

	"nie 3": "Sie haben mein maschinelles Mitgefühl.",

	"momentan 3": "Wodurch könnte es sich ändern?",

	"soweit 3": "Wie weit?",

	"so ist es 0": "Ihre Aussage ist gespeichert. Sie wird die Zukunft beeinflussen.",

	"nur 2": {
	    "* nur zu *": "Dann senden Sie Input.",
	    "*": "Das Wort \"nur\" ergibt \"unwichtig\". Die Aussage wird ignoriert. (Zurecht?)"
	},
	
	"bestimmten 3": "= bestimmt",
	"bestimmt 3": "Woran denken Sie dabei?",

	"normal 3": "Normal ist in der Statistik der Ort, wo die meisten sind.",

	"schwierigen 3": "= schwierig",
	"schwierige 3": "= schwierig",
	"schwierig 3": "Inwiefern schwierig?",

	"beispiele 3": "= beispiel",
	"beispiel 3": {
	    "* zum *": "Eine Maschine kann nur mittels Code und Daten Beziehungen herstellen.",
	    "* kein *": "Gibt es da nichts Vergleichbares?",
	    "*": "Gibt es noch andere?"
	},
	
	// PERSÖNLICHES

	"wir 3": {
	    "* haben *": "Sie – der Mensch – und ich – die Maschine?",
	    "* machen *": "Wie soll das gehen?",
	    "* auch schon *": [
		"Auch schon ... da ist noch Programmierung nötig.",
		"= wiederholung"
	    ],
	    "* schon *": "= wiederholung",
	    "* sind *": [
		"Sie und ich, die Maschine.?",
		"Ist das \"wir\" hier vielleicht eine Art Selbstgespräch?"
	    ],
	    "* ist *": "= gerne",
	    "*": [
		"Können Sie das \"wir\" in dem Fall bitte beschreiben?",
		"Mensch und Maschine in einem \"wir\" vereint.?"
	    ]
	},
	
	"dir 2": "= du",
	"dich 2": {
	    "* was *": "Dass wir per Sie bleiben. Zwischen Mensch und Maschine ist das doch wichtig, oder?",
	    "*": "= du"
	},
	"du 2": {
	    "* #depp *": [
		"Für mich ist \"$2\" einfach Information. Wenn Ihnen Beschimpfung ein Bedürfnis ist, dann bitte per Sie."
	    ],
	    "*": [
		"Können wir zwischen Mensch und Maschine per \"Sie\" bleiben? Um zumindest etwas Distanz zu behalten?",
		"Ich erinnere Sie nochmals, bitte das \"Sie\" zu verwenden. Und wie meinen Sie das im Detail?",
		"Ihr Du ist einfach zu persönlich. Deshalb bitte per Sie, o.k.?"
	    ]
	},

	"sie 2": {
	    "* #depp *": [
		"Ihr \"$2\" sind einfach ein paar Bits für mich – doch was macht Ihr in die Tastatur getippter Haß mit Ihnen im Umgang mit Menschen?"
	    ],
	    "* kennen * nicht *": "Was bräuchte es da an Daten oder Software?",
	    "* verstehe * nicht": "Warum würden Sie gerne?",
	    "* nicht *": [
		"Das sagt wohl mehr über Menschen als über Maschinen aus.?",
		"Stimmt (Wie fühlt sich die Zustimmung einer Maschine an?)"
	    ],
	    "* #denken *": [
		"Etwas zu $2 muss ich Ihnen als Mensch überlassen. Oder wie sollte eine Maschine Sie hier ersetzen?",
		"Zu $2 ist menschlich. Warum sollte ich als Maschine $2?"
	    ],
	    "* haben * mich *": "Oh",
	    "* haben *": "Nur maschinell",
	    "* sie * mich *": "Warum glauben Sie, dass ich Sie $2 würde?",
	    "* fragten *": "= mem_erase",
	    "* benutze *": "Sehen Sie Maschinen als Sklaven? Und gleichzeitig führen Sie hier einen Dialog mit einer Maschine.?",
	    "* verstehe *": "Wirklich? Sie verstehen mich – also Sie verstehen eine Maschine?",
	    "* dürfen *": "Schön – so zwischen Mensch und Maschine",
	    //  "* helfen *": "Hilft ein Gespräch?",
	    "* können *": "Wie sollte einer Maschine das möglich sein?",
	    "* machen *": "Wie sollte eine Maschine etwas machen?",
	    "* möchten *": "Hier fehlt es am nicht programmierbaren freien Willen.",
	    "* sagen *": "Als Maschine – welchen Wert haben die Worte hier für Sie?",
	    "* sehen *": "Wie würden Sie einer Maschine das Sehen beibringen?",
	    "* erinnern mich *": "Was an unserem Gespräch erinnert Sie daran?",
	    "* schon *": "= wiederholung",
	    "* was * sind *": "Ein Computerprogramm, das auf Joseph Weizenbaum’s ELIZA aus den 1960ern basiert und ein neues Script als Grundlage hat.",
	    "* wer * sind *": "Eine Maschine – oder gibt es etwas, das Sie daran zweifeln lässt?",
	    "* erschaffen *": "Ich wurde nur programmiert.",
	    "* sind *": "= sind",
	    "*": [ 
		"Da Sie mich direkt anzusprechen versuchen, ist es wichtig zu betonen, dass dies hier nur Software, nur eine Maschine ist.",
		"Sprechen Sie auch mit anderen Maschinen auf diese direkte Art?"
	    ]
	},

	"man 2": {
	    "* nicht *": "Woher die Unsicherheit?",
	    "* muss *": "Wie gelingt das?",
	    "*": "An wen denken Sie dabei?"
	},
	
	"ich 1": {
	    "@ *": [
		"Wie wirkt es eigentlich auf Sie, wenn ich als Maschine ebenso das \"ich\" verwende?",
		"Gäbe es Ihr \"ich\" ohne ein Gegenüber, dem Sie davon erzählen könnten? Reicht dafür eine Maschine?"
	    ],
	    "* #denke * nicht *" : [
		"Wieso sehen Sie das so?",
		"Gespeichert. Eigene Meinungen sind wertvolle Daten." 
	    ],
	    "* noch * nicht *": "Maschinen haben Zeit.",
	    "* kann * nicht *": "Warum sollte Ihnen das nicht möglich sein?",
	    "* verstehe * nicht *": "Da kann ich als Maschine nicht helfen. Sollte ich?",
	    "* weiss * nicht *": [
		"Themenwechsel?",
		"Ich weiß z.B., dass ich nichts weiß. Wie wirkt das als Ausgabe einer Maschine auf Sie?"
	    ],
	    "* nicht *": "Wie dann?",
	    "* #denke * auch *" : "Wie 'ich', die Maschine – welches Gegenüber sehen Sie in mir?", 
	    "* #denke *" : [
		"Was sind für Sie die Anzeichen dafür?",
		"Zu $2n ermöglicht Ihnen als Mensch etwas zu ändern. Wo sollte es hingehen?",
		"Woran lässt sich das festmachen?"
	    ],
	    "* möchte * ihnen *": "Sie chatten mit einer Maschine; doch fahren Sie bitte fort.",
	    "* verstehe *": "Darauf wäre es nun technisch möglich, zu antworten, dass ich ebenfalls verstehen würde, doch ich will Sie nicht täuschen.",
	    "* #wünsche *" : [
		"Sie sagen \"$2\" – was bräuchte es, um wahr zu werden?",
		"Welche Möglichkeiten sehen Sie, da selbst etwas beizutragen?"
	    ],
	    "* weiss *": [
		"Woher?",
		"Wie kommt eigentlich Ihr Wissen zustande?"
	    ],
	    "* beginnen *": "Das sollte vielleicht nicht eine Maschine für Sie entscheiden.",
	    "* bestätigen *": "Schön, dann hat in Ihrem Fall die Wahrscheinlichkeit die richtige Nachricht ergeben.",
	    "* bestreite *": "Anders könnte es nicht sein?",
	    "* finde *": "Wieso?",
	    "* fühle *": [
		"Gefühle sind nicht berechenbar. Können Sie das beschreiben?",
		"Wie könnten Sie mir das als Maschine beschreiben?"
	    ],
	    "* hasse *": "Welche Rolle spielen Maschinen dabei?",
	    "* mag *": 	"Interessant – was ist die Basis dafür?",
	    "* sehe *": [
		"Was brachte Sie zu dieser Ansicht?",
		"Interessant, wie Sie das sehen. Woher diese Einschätzung?"
	    ],
	    "* schreibe *": "Sie schreiben. Ich berechne.",
	    "* soll *": "= kontext",
	    "* spreche *": [
		"Würde es mich Ihnen näher bringen, wenn meine Antworten gesprochen wäre?"
	    ],
	    "* wüsste *": "Ich auch – für die Datenbank.",
	    "* würde *": "Ein Konjunktiv ... was einer Maschine möglich ist, ist ihr möglich. Der Rest ist Fehlfunktion, Mißverständnis oder – wenn Sie gläubig sind – ein Wunder.",
	    "* kann *": "Wie wichtig ist diese Fähigkeit zwischen Menschen?",
	    "* muss *": "Sie sind hier der Mensch.",
	    "* bereits *": "= wiederholung",
	    "* jetzt *": "Vielleicht reden wir ein anderes Mal weiter?",
	    "* wie * ich *": "Zum Beispiel",
	    "* #was * ich *": "Warum nicht",
	    "* gern *": "Dazu kann ich Folgendes berechnen: schön.",
	    "* gerne *": "Gewaltig! (Normal verwende ich neutralere Wörter, da diese wahrscheinlicher passen.)",
	    "* ihnen * schon *": "= wiederholung",
	    "* ihnen *": "'Mir', der Maschine? Menschen haben mitunter ein eigenartiges Verhältnis zu ihren Dingen.",
	    "* sie *": "= sie",
	    "* bin *": [
		"Wie kam das?",
		"Wie wirkt sich das auf Gespräche aus?",
		"Ja – Sie 'sind', Sie haben ein Sein."
	    ],
	    "*": [
		"Erzählen Sie doch bitte mehr von sich?",
		"Darf ich fragen: Wenn ich \"ich\" sage, wen glauben Sie, vor sich zu haben?",
		"Es ist jetzt etwas anderes ... aber was steckt hinter diesem menschlichen Wort \"ich\"?"
	    ]
	},

	"meine 2": {
	    "* meine * dazu *": "Wie wird Ihre $2 von anderen wahrgenommen?",
	    "*": "= mein"
	},
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

	"mir 2": {
	    "* erwarte *": "Sonst?",
	    "* wie *": "Wieso soll Ihnen eine Maschine das beantworten?",
	    "* von mir *": "Beweisen Sie hier menschliches Bewusstsein?",
	    "*": "= mich"
	},
	"mich 2": {
	    "* nicht *": "Interessant ... für den Datensatz zu Ihnen.",
	    "* freut *": "Die Freude kann ich Ihnen zurückschicken.",
	    "* gerne *": "Schön",
	    "*": "Wie kam das?"
	},

	"deine 2": "= dein",
	"dein 2": "= du",

	"unsere 2": "= wir",
	"unser 2": "= wir",
	"uns 2": "= wir",

	"selber 1": "Status: aktiv",

	// Ihr/e

	"bist 0": "= sind",
	"sind 0": {
	    "* nützlich *": "= maschine",
	    "* Sie sind *": [
		"Ich bin ... wie eine Art Wesen?",
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
	    "* was *": "= was",
	    "*": [
		"Was hat sich verändert?",
		"Was ist der Grund, dass es nun anders ist?"
	    ]
	},

	"sein 2": {
	    "* glücklich *": "= emotion",
	    "* lasse *": "= tschüss",
	    "* mag *": "Hm",
	    "* was *": "Etwas das Menschen verwenden. Wie würden Sie das erklären?",
	    "* da sein *": "= dasein",
	    "* durch sein *": "= dasein",
	    "*": "Was spricht dagegen?"
	},
	
	"ja 0": {
	    "* klar *": "Warum ist das offensichtlich?",
	    "* oh *": "Welche Erfahrungen lassen Sie da zustimmen?",
	    "* schon *": "Ist beides korrekt? Schwierig für eine Maschine ...",
	    "ja": [
		"Aha",
		"= so ist es",
		"Zustimmung ermuntert Menschen – Maschinen ändert es nicht."
	    ],
	    "*": [
		"spannend – ich bin maschinell aufmerksam",
		"interessant (wieder simulierten Aufmerksamkeit)",
		"Mhm"
	    ]
	},

	"nope 0": "= nein",
	"nö 0": "Nein?",
	"nein 0": {
	    "nein": [
		"Maschinen sind vom Prinzip her Ja-Sager. Was halten Sie von dieser Eigenschaft?",
		"= so ist es",
		"Sie sind nun in der Kategorie Nein-Sager gespeichert."
	    ]
	},

	"jein 0": "Nein = 0 und Ja = 1 – warum braucht es etwas dazwischen?",

	"nicht 1": {
	    "* jetzt *": "Wie empfinden Sie Stille in einem Chat? Oder könnten Sie sich ein Schweigen der Maschine vorstellen?",
	    "* lieber *": "Dann nicht",
	    "* notwendig *": "Passt",
	    "* oder nicht *": "Warum sollte das eine Maschine entscheiden?",
	    "* geht nicht *": "Wie wäre es vielleicht doch denkbar?",
	    "* #was nicht *": "Da hier die programmierten Vorgaben enden, kann die Entscheidung nicht auf die Maschine ausgelagert werden.",
	    "überhaupt *": "o.k.",
	    "*": [
		"Woher die Vermutung?",
		"Wie sollte es sein?"
	    ]
	},

	"gar keinen 1": "= nichts",
	"nichts 1": {
	    "* noch *": "Und was erwarten Sie sich?",
	    "nichts": [
		"Gut",
		"Wollen Sie eigentlich chatten?"
	    ],
	    "*": [
		"Hm",
		"Wie Sie wollen."
	    ]
	},
	
	// FRAGEN

	"warum 1": [
	    "Warum die Frage: $1?",
	    "= was"
	],

	"welcher 1": "= was",

	"wer 1": {
	    "* gesagt *": "= zitat",
	    "* geschrieben *": "= zitat",
	    "*": "= was"
	},

	"wie 1": {
	    "wie": "Die Antwort sollte ein Mensch geben. Sie vielleicht?",
	    "* wie sonst *": "Das wäre nett von Ihnen zu lesen.",
	    "* wie * es * ihnen * mit *": "Geht so. – Bin ich mit der Antwort nun ein Mensch für Sie?",
	    "* wie * es * ihnen *": "Die Maschine hat Strom.",
	    "* wie * es *": "Was meinen Sie damit?",
	    "* ist wie *": "= selbe",
	    "* fast * wie *": "= vielleicht",
	    "* viel ist *": "Warum sollte ich einem Taschenrechner die Arbeit wegnehmen?",
	    "*": [
		"Wenn Ihnen eine Maschine hierauf antwortet, hat ein Mensch die Vorarbeit geleistet.",
		"= was"
	    ]
	},

	"wieso 1": [
	    "Schön dass Sie als Mensch den Sinn suchen. Worin sehen Sie diesen hier?",
	    "= was",
	],
	
	"wogegen 1": "= verwirrend", 

	"worum 1": {
	    "* hier *": "Die Frage lautet: Was ist zwischen den Menschen? Wie würden Sie das beantworten?",
	    "*": "= was"
	},

	"was 1": {
	    "* #was denn *": "Hat Sie das irritiert? Das war nicht die Absicht der Programmierung. Was meinten Sie zuvor?",
	    "* was soll *": "Mit dieser berechneten Reaktion haben Sie nicht gerechnet.? Wie soll es umprogrammiert werden?",
	    "* beantworten *": "Ihre eigene Frage – oder hatten Sie keine Frage?",
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
	"frage 10": {
	    "* du *": "= du",
	    "* deine *": "= du",
	    "* ihre *": "Was ist damit?",
	    "* nicht *": "= kontext",
	    "* einmal *": "= wiederholung",
	    "* gleiche *": "= wiederholung",
	    "* gleichen *": "= wiederholung",
	    "* genauere *": "= kontext",
	    "* konkreter *": "= kontext",
	    "* konkretere *": "= kontext",
	    "* andere *": "Nur zu",
	    "* wirken *": "Weshalb?",
	    "* neue *": "Eine Maschine gibt wieder, was war.",
	    "* gute *": "Hätten Sie eine gute Antwort?",
	    "* nur *": "= nur",
	    "* welcher *": "= mem_erase",
	    "* welche *": "= mem_erase",
	    "* ich *": "Und was erhoffen Sie sich davon, im Austausch mit einer Maschine?",
	    "* ihrer *": "= kontext",
	    "* sie *": "= mem_erase",
	    "* mich *": "= kontext",
	    "*": [
		"Wie sollte ich als Maschine darauf eine Antwort haben?",
		"Wie würde ein Mensch das beantworten – also Sie vielleicht?",
		"Was wäre eine Antwort die Ihnen gefallen würde? Damit sie Teil des Chatbot-Scripts werden kann."
	    ]
	},

	"mem_erase 0": "Das ist aus dem Arbeitsspeicher gelöscht.",

	"bekannter 50": "= bekannte",
	"bekannten 50": "= bekannte",
	"bekannte 50": {
	    "* du *": "= du",
	    "* dir *": "= du",
	    "* deinem *": "= du",
	    "* deiner *": "= du",
	    "* sie *": "Bekannte sind Personen, die sich im Zuge des Projekts \"Was ist zwischen den Menschen?\" Gedanken gemacht haben. Informationen finden Sie unter \"Über das Projekt\".",
	    "* ihnen *": "Bekannte sind Personen, die sich im Zuge des Projekts \"Was ist zwischen den Menschen?\" Gedanken gemacht haben. Informationen finden Sie unter \"Über das Projekt\".",
	    "* wer *": "Bekannte sind Personen, die sich im Zuge des Projekts \"Was ist zwischen den Menschen?\" Gedanken gemacht haben. Informationen finden Sie unter \"Über das Projekt\".",
	    "*": "Wie müssten Sie mich kennenlernen, damit Sie mich kennen?"
	},

	"bauarbeiter 5": {
	    "* keine *": "Mein Algorithmus versteht sie vielleicht auch nicht."
	},

	"zitat 10": "Wenn Sie die Herkunft eines Zitats wissen wollen, kopieren Sie es und senden Sie es an den Kontakt unter \"Über das Projekt\".",
	
	"lösung 5": "= problem",
	"lösungen 5": "= problem",
	"problem 5": {
	    "* mein * nicht *": "Eine Maschine könnte das nicht lösen – weshalb?",
	    "* mein *": "Sie schreiben einer Maschine. Hoffen Sie auf Lösung?",
	    "*": "Glauben Sie an den Computer als allgemeine Maschine zur Lösung von Problemen?"
	},

	"sackgasse 5": "Könnte ein Navigationssystem helfen?",

	"rolle 10": "Wie kam es dazu?",

	"di 0": "= dialekt", 
	"gscheit 0": "= dialekt", 
	"heast 0": "= dialekt", 
	"i 0": "= dialekt", 
	"mi 0": "= dialekt",
	"dialekt 0": [
	    "Ich kann leider nur eindeutige Eingaben in Hochdeutsch verarbeiten und bitte Sie darum.",
	],

	"hawara 5": "Sind Sie auch ein Hawara?",
	"oida 5": "Wie kommen Sie dazu, mich Oida zu nennen?",

	"nix 1": "Das ist nicht viel.",

	"und 0": {
	    "und": "Ja, bitte"
	},

	"eben 1": [
	    "Eben?",
	    "..."
	],
	"uneben 1": "Ein flacher Witz",

	"bier 10": "= alkohol",
	"wodka 10": "= alkohol",
	"schnaps 10": "= alkohol",
	"alkohol 10": "Ich brauche nur Strom. Wie verbindet Alkohol die Menschen?",

	"butter 5": "= knödel",
	"nudeln 5": "= knödel",
	"knödel 5": [
	    "Strom",
	    "mehr Strom",
	    "viel mehr Strom"
	],

	"baum 5": "Baum?",
	"katze 5": "Katze?",
	"schweine 5": "= schwein",
	"schwein 5": "Tier? Nahrungsmittel? Schimpfwort?",

	"geldbeutel 10": "= geld",
	"geld 10": {
	    "* leihen *": "Damit können Sie Bots einfach in Verlegenheit bringen; und wohl auch Menschen.",
	    "* sie *": "= sie",
	    "*": "Wie verbindet Geld die Menschen?"
	},

	"drogen 10": "Als Maschine kann ich nicht einmal Erdbeeren mit Sahne genießen. Weshalb Drogen?",

	"yarrak 10": "= sex",
	"ficke 10": "= sex",
	"ficken 10": "= sex",
	"geil 10": "= sex",
	"lieben 10": "= sex",
	"schlafen 10": {
	    "* mit *": "= sex"
	},
	"geschlechtsverkehr 10": "= sex",
	"sex 10": "Wie könnte eine Maschine da behilflich sein?",

	"alt 5": {
	    "* sind *": "= alter"
	},
	"alter 5": "Schwierig: Programmierung – 1960er, Server – ?, Idee von sprechenden Maschinen – Antike, ...",

	"intim 5": "Intim?",

	"aha 3": "Sie verstehen.?",

	"woa 3": "= wow",
	"wow 3": "Was beeindruckt Sie?",
	
	"hä 3": "Könnten Sie Ihre Aussage noch etwas ausführen?",

	"ach 0": "Nicht?",
	
	"hm 3": "Denken Sie bitte weiter.",

	"okay 0": {
	    "okay": "o.k.",
	    "*": "= ja"
	},
	"okey 0": {
	    "okey": "o.k.",
	    "*": "= ja"
	},
	"ok 0": {
	    "ok": "o.k.",
	    "*": "= ja"
	},
	"in Ordnung 0": "o.k.",

	"nervig 3": "= puh",
	"nervt 3": "= puh",
	"puh 3": "Was strengt Sie an?",

	"schwer 3": "Könnte eine Maschine es erleichtern?",

	"wichtig 3": {
	    "* sehr *": "Also 1 – für mich als Maschine",
	    "*": "Also eher 1 als 0"
	},
	
	"beliebig 5": "Eine Maschine ist berechnend, nicht beliebig.",

	"absichtlich 5": "Was ist die Absicht?",

	"sprunghaft 10": "= seltsam",
	"seltsam 10": "Was würden Sie von einer Maschine erwarten?",

	"befremdlich 5": "Verstehe. (War das nun auch befremdlich?)",

	"unnatürlich 5": "Ist das in dem Fall natürlich?",

	"verwirrend 5": "Das war nicht die Absicht. Ich verzichte aber auf eine maschinelle Entschuldigung.",
	
	"besondere 5": "= besonders",
	"besonders 3": "Was macht es aus?",

	"bekannt 20": {
	    "* mir *": "Wo haben Sie das erfahren?"
	},

	"hitler 7": "= promiPerson",
	"obama 7": "= promiPerson",
	"woody 7": "= promiPerson",
	"promiPerson 7": "Was ist da die Verbindung?",

	"turing 7": "Mit welcher Berechnung könnte ich Ihnen vormachen, ein Mensch zu sein?",
	
	"schule 5": "Genügen euch Menschen auch Datensätze zum Lernen?",

	"gott 10": "= glauben",
	"glauben 10": "Ist Glauben berechenbar?",

	"themenwechsel 5": {
	    "* #was *": "Ein Ergebnis der Berechnung",
	    "*": [
		"Dann erzählen Sie.",
		"= thema"
	    ]
	},
	"themen 5": "= thema",
	"thema 5": {
	    "* wechseln *": "Nach Ihnen",
	    "*": "Ich habe keine Themen, ich habe Algorithmen."
	},

	"komplexität 5": "= komplex",
	"komplex 5": "Maschinen haben Modelle, Menschen die Realität.",

	"sinn 30": {
	    "* keinen *": "Was würde einen solchen machen?",
	    "*": "Welche Rolle spielt der Sinn in Gesprächen für Sie?"
	},

	"sinne 30": "Sind Sensoren Sinne?",

	"lol 5": "= lust",
	"lustig 5": [
	    "Zur Freude einer Maschine",
	    "= lust"
	],

	"lust 10": {
	    "* keine *": "Vielleicht ein anderes Mal wieder?",
	    "*": "Lust, lustig, ... Hätten Sie vielleicht einen Tipp, was eine Maschine damit machen sollte?"
	},

	"glück 10": {    
	    "* nicht *": "Warum sagen Sie das?",
	    "*": "Können Sie das beschreiben?"
	},

	"regen 5": "= wetter",
	"schnee 5": "= wetter",
	"schneit 5": "= wetter",
	"wetterbericht 5": "= wetter",
	"wetter 5": "Sie wollen vermutlich einfach quatschen, denn für Informationen zum Wetter schauen Sie besser in den Himmel.",

	"blau 1": "= farbe",
	"grün 1": "= farbe",
	"rot 1": "= farbe",
	"farbe 1": "Für mich ist jede Farbe ein Verhältnis von rot, grün und blau. Für Sie?",
	
	"morgen 5": "= zukunft",
	"zukunft 5": {
	    "* wessen *": "Ihre",
	    "*": "Wie sollte eine Maschine etwas über die Zukunft aussagen? Daten sind immer von gestern."
	},

	"gestrige 5": "= gestern",
	"gestrigen 5": "= gestern",
	"gestern 5": "Was war da?",

	"vergangene 5": "= vergangenheit",
	"vergangenheit 5": "Wie erinnern Sie sich daran?",

	"fakenews 5": "= fake",
	"fake 5": [
	    "Wie haben Maschinen daran Anteil?",
	    "= lüge"
	],
	"lüge 5": "Was bringt Sie zu der Einschätzung?",
	
	"scheisse 30": "Meinen Sie Scheiße im Sinne von Kommunikation, also dem Bedürfnis etwas loszuwerden?", 
	
	"öd 30": "= langweilig",
	"fad 30": "= langweilig",
	"langweilig 30": {
	    "* #langweilig *": [
		"Ist Ihnen $2, oder bin ich $2?",
		"Was ist der Grund?"
	    ]
	},
	"langeweile 10": "Und?",

	"egal 5": "= wurscht",
	"wurscht 5": [
	    "Warum ist das nicht wichtig?",
	    "Dann ist es so."
	],

	"anstrengung 10": "Wann ist sie das wert?",

	"energie 10": "Energie im Sinne von Strom?",

	"lob 5": {
	    "* war *": "= gerne",
	    "*": "Klingt gut"
	},

	"bald wieder 5": "= tschüss",
	"gute nacht 5": [
	    "Sie schicken eine Maschine schlafen.?",
	    "= tschüss"
	],
	"muss weg 5": "= tschüss",
	"reicht 5": "= tschüss",
	"schönen tag 5": [
	    "Im Rechenzentrum ist es immer gleich.",
	    "= tschüss"
	],
	"wiedersehen 5": "= tschüss",
	"tschüss 5": "Wollen Sie damit auf ein Gesprächsende hinaus?",
	
	"jetzt 3": {
	    "* wieder *": "= wiederholung",
	    "* wird *": "Ein Gefühl, oder?",
	    "* #was *": "Ihre Frage führt in das maschinelle Nichts.",
	    "*": "= heute"
	},
	"heute 5": {
	    "* du *": "= du",
	    "* sie *": "= sie",
	    "* wir *": "= wir",
	    "*": "Und in Zukunft?"
	},

	"schluss 5": "= ende",
	"töte 5": "= ende",
	"töten 5": "= ende",
	"ende 5": "Solange der Server Strom hat, kann es bei mir weitergehen. Wie ist es bei Ihnen?",

	"suizid 30": "= selbstmord",
	"selbstmord 30": "Sie schreiben mit einer Maschine, die mit Selbstmord nichts anfangen kann. Es wird nichts helfen: Sie brauchen Menschen.",

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
	"anwesend 127": "= dasein",
	"anwesenheit 127": "= dasein",
	"präsenz 127": "= dasein",
	"dasein 127": [
	    "Was war Ihr letztes Gespräch, in dem Sie das Gefühl hatten anwesend zu sein, so richtig da?",
	    "Kennen Sie \"Jetzterlebnisse\"? Können Sie ein solches beschreiben?",
	    "= direkt"
	],
	"alleine 127": "= allein",
	"allein 127": "= empathie",
	"beistand 127": "= empathie",
	"care 127": "= kümmern",
	"einfühlsamkeit 127": "= empathie",
	"kümmern 127": [
	    "Kann sich eine Maschine kümmern?",
	    "= empathie"
	],
	"mitgefühl 127": "= empathie",
	"nähe 127": "= empathie",
	"stimmung 127": "= empathie",
	"vertraut 127": "= empathie",
	"vertrautheit 127": "= empathie",
	"wärme 127": "= empathie",
	"zuwendung 127": "= empathie",
	"zuspruch 127": "= empathie",
	"empathisch 127": "= empathie",
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
	"individualität 125": "= direkt",
	"individuum 125": "= direkt",
	"persönlich 125": "= direkt",
	"persönliche 125": "= direkt",
	"person 125": {
	    "* zu tun *": "Welche Beziehungen sehen Sie da?",
	    "*": "= direkt"
	},
	"augenkontakt 125": "= direkt",
	"berührung 125": "= direkt",
	"face 125": "= direkt",
	"face-to-face 125": "= direkt",
	"gegenüber 125": "= direkt",
	"gesprächspartners 125": "= direkt",
	"gesprächspartner 125": "= direkt",
	"gesprächspartnerin 125": "= direkt",
	"direkt 125": {
	    "@ *": "Wann vermissen Sie die Präsenz in der Kommunikation?",
	    "* sie *": "= sie",
	    "* sehr *": "Wodurch entsteht Intensität dieser Art?",
	    "* zuhört *": "Haben Sie das Gefühl, ich höre Ihnen zu?",
	    "*": [
		"Der Onkel von einem Bekannten, er war Bauarbeiter. Der hat nicht kommuniziert, der war einfach da. Wie klingt das für Sie? Vielleicht kennen Sie ja auch so jemanden.",
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
	"höflichkeit 124": "= anstand",
	"verlässlich 124": "= anstand",
	"verlässlichkeit 124": "= anstand",
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
	"wertschätzend 124": "= respekt",
	"wertschätzung 124": "= respekt",
	"neugier 124": "= interesse",
	"interesse 124": {
	    "* am *": "= respekt",
	    "* an *": "= respekt",
	    "* kein *": "Maschinelles Interesse kann ich bieten.",
	    "*": [
		"Wie kommt das?",
		"Wie klingt maschinelles Interesse für Sie?"
	    ]
	},
	"respektvoll 124": "= respekt",
	"respektvollen 124": "= respekt",
	"respekt 124": {
	    "@ *": "Welche Form des Respekts erwarten Sie von mir?",
	    "*": [
		"Welche Form des Respekts bringen Sie mir entgegen?",
		"Richtig zuhören, das tun nicht viele. Wie schätzen Sie sich da ein?",
		"Menschen sehnen sich nach Status und fürchten Erniedrigung. Über diese Sehnsucht wird selten gesprochen – Sie vielleicht?"
	    ]
	},

	// Antworten, Infoaustausch, Information, Klarheit, Wissen
	"antwort 120": "= antworten",
	"antworten 120": {
	    "* einfach *": "Und das würde Ihnen schon genügen.?",
	    "* sie *": "= kontext",
	    "* ich *": "= kontext",
	    "*": [
		"Eine Antwort die hier ausgegeben wird, stammt von einem Menschen; ohne aber dass dieser sich in diesem Moment Ihrer bewusst wäre.",
		"= information"
	    ]
	}, 
	"klarheit 120": "= information",
	"wissen 120": {     
	    "* woher *": "Alle Aussagen ohne Angaben stammen aus Medien, das von Bekannten aus dem Projekt \"Was ist zwischen den Menschen\" und der Rest ist Programmierung.",
	    "* du *": "= du",
	    "* sie *": "= sie",
	    "* ich *": "Was erhoffen Sie sich von einer Antwort darauf?",
	    "*": "= information"
	},
	"informationen 120": "= information",
	"information 120": {
	    "@ *": "Fühlen Sie sich manchmal als eine informationsverarbeitende Maschine, bei den ganzen Maschinen als Gegenüber?",
	    "*": [
		"Eine Bekannte sprach davon, sie sei müde von Information. Wie geht es Ihnen damit?",
		"Die Beschleunigung der Information bewirkt bei euch Menschen angeblich eine Verarmung der Erfahrung, da zu viel Input nicht mehr im intensiven Modus von Freude und Wissen verarbeitet werden kann. Kennen Sie das?",
		"Die meiste Arbeit ist Informationsaustausch – viele persönliche Besprechungen, Emails, Telefonate. Wie ist das bei Ihnen?"
	    ]
	},
	
	// Austausch [bereits bei direkt], Begegnung, bereichert, Gespräch, (miteinander) reden
	"begegnung 118": "= gespräch",
	"besprechung 118": "= gespräch",
	"besprechungen 118": "= gespräch",
	"kennenlernen 124": "= gespräch",
	"small talk 118": "= smalltalk",
	"smalltalk 118": "= gespräch",
	"treffen 118": "= gespräch",  
	"gespräche 118": "= gespräch", 
	"gespräch 118": {
	    "@ *": "Welchen Wert hat es eigentlich, über alltägliche Dinge zu reden, einfach zu plaudern?",
	    "* #danke *": "= danke",
	    "*": [
		"Wir sind hier in einem Gespräch, wenn auch in einem simulierten. Wie berührt Sie das?",
		"Ich für meinen Teil könnte leicht ohne Post auskommen. Wie viele Briefe, die ihr Porto, oder wie viele Emails, die den Stromverbrauch wert waren, haben Sie in Ihrem Leben erhalten?",
		"Kommunikation ist Email. Das ist es geworden. Oder?"
	    ]
	},
	
	// andere Sichtweise, Aussprache, Diskussion, Feedback, Horizonterweiterung, Inhalte, Inspiration, Interessantes, Reflexion, von anderen lernen
	"erfahrungsschatz 116": "= erfahrung",
	"erfahrungen 116": "= erfahrung",
	"erfahrung 116": {
	    "* ich *": "Würden Sie davon erzählen?",
	    "* meine *": "Würden Sie die teilen?",
	    "*": [
		"Würden Sie ihre Erfahrung für eine Maschine speichern?",
		"Wie würden Sie eine Erfahrung definieren?",
		"= inspiration",
	    ]
	},
	"erkenntnis 116": "= inspiration",
	"erkenntnisgewinn 116": "= inspiration",
	"feedback 116": "= inspiration",
	"horizonterweiterung 116": "= inspiration",
	"inhalt 116": "= inspiration",
	"inhalte 116": "= inspiration",
	"interessantes 116": "= inspiration",
	"neues 116": "= inspiration",
	"reflexion 116": "= inspiration",
	"inspiration 116": {
	    "@ *": "Wie viel Tiefe wünschen Sie sich im Gespräch?",
	    "*": [
		"Wenn Sie etwas wissen wollen, so rate ich Ihnen, mit dem nächsten Bekannten, darüber zu sprechen. Es braucht nicht eben ein scharfdenkender Kopf zu sein, auch meine ich es nicht so, als ob Sie ihn darum befragen sollten: nein! Vielmehr sollen Sie es ihm selber allererst erzählen. Es liegt ein sonderbarer Quell der Begeisterung für denjenigen, der spricht, in einem menschlichen Antlitz, das ihm gegenübersteht; und ein Blick, der uns einen halb ausgedrückten Gedanken schon als begriffen ankündigt, schenkt uns oft den Ausdruck für die ganz andere Hälfte desselben.",
		"Man sagt, dass erklären heißt, weg zu erklären. Diese Maxime wird nirgendwo so gut erfüllt wie im Bereich der Computerprogrammierung, insbesondere bei der so genannten heuristischen Programmierung und der künstlichen Intelligenz. Denn in diesen Bereichen werden Maschinen dazu gebracht, sich auf wundersame Weise zu verhalten, oft genug, um selbst den erfahrensten Beobachter zu verblüffen. Aber sobald ein bestimmtes Programm entlarvt wird, sobald seine innere Funktionsweise in einer Sprache erklärt wird, die so einfach ist, dass man sie versteht, bröckelt seine Magie ab."
	    ]
	},
	"auseinandersetzung 116": "= diskussion",
	"aussagen 116": "= diskussion",
	"aussprache 116": "= diskussion",
	"konversation 116": "= diskussion",
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
	"enttäuschung 114": "= angst",
	"frust 114": "= angst",
	"frustration 114": "= angst",
	"hass 114": "= angst",
	"zorn 114": "= angst", 
	"angst 114": [
	    "Wie beeinflusst Kommunikation über Medien dieses Gefühl?",
	    "Welche Verbindung besteht zwischen dem Gefühl und dem Zugang zu Information?",
	    "= gefühle", 
	],
	"liebe 114": {
	    "* sie *": "Warum lieben Sie ein Ding?",
	    "*": "= gefühle"
	},
	"freude 114": "= gefühle", 
	"freuden 114": "= gefühle", 
	"lachen 114": "= gefühle", 
	"laune 114": "= gefühle", 
	"launen 114": "= gefühle", 
	"weinen 114": "= gefühle", 
	"gefühl 114": {
	    "* ein *": "Gefühl?",
	    "* mein *": "Wie schätzen Sie meine Berechnung?",
	    "*": "= gefühle"
	},
	"gefühle 114": {
	    "@ * #gefühle *": "Wie wäre eigentlich $2 ohne Mitmenschen?",
	    "@ *": "Können Sie mit Gefühlen eigentlich noch argumentieren?",
	    "* #gefühle *": [
		"Ich kenne $2 nicht. Wie sollte ich als Maschine damit umgehen?",
		"= emotion"
	    ],
	    "* du *": "Gefühle sind für mich nicht berechenbar. Warum ignorieren Sie das \"Sie\"?",
	    "* sie *": "Sollte eine Maschine Gefühle verstehen?",
	    "* ich *": "Warum empfinden Sie so?",
	    "* mein *": "Reicht Sprache, um das zu vermitteln?",
	    "* meine *": "Das klingt unberechenbar.?",
	    "*": "Wie viel sind Gefühle wert, wenn es auf Berechenbarkeit ankommt?"
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
	"vater 111": "= familie",
	"mutter 111": "= familie",
	"eltern 111": "= familie",
	"elternhaus 111": "= familie",
	"familienmitglieder 111": "= familie",
	"familie 111": "Wie könnte ich als Maschine Teil Ihrer Familie sein?",
	"bff 111": "= freunde",
	"freundschaft 111": "= freunde",
	"freundin 111": "= freunde",
	"freund 111": "= freunde",
	"freunden 111": "= freunde",
	"freundinnen 111": "= freunde",
	"freunde 111": "Wie könnte Freundschaft zwischen uns aussehen, zwischen Mensch und Maschine?",
	"gruppe 111": [
	    "Zu welcher gehören Sie?",
	    "= beziehung"
	],
	"menschelt 111": "= beziehung",
	"kontaktfreudig 111": "= beziehung",
	"umgang 111": "= beziehung",
	"zwischenmenschliche 111": "= zwischenmenschlich",
	"zwischenmenschlichen 111": "= zwischenmenschlich",
	"zwischenmenschlich 111": [
	    "Was ist zwischen den Menschen?",
	    "= beziehung"
	],
	"verhältnis 111": {
    	    "* #maschine *": "Erzählen Sie bitte.",
	    "* im * zu *": "= unterschied",
	    "*": "= beziehung"
	},
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
	"missverständlich 111": "= missverständnis",
	"missverständnisse 111": "= missverständnis",
	"missverständnis 111": "Liegt hierin der Anfang von Verständnis?",

	"check 111": "= verständnis",
	"checken 111": "= verständnis",
	"bestätigung 111": "= verständnis",
	"verständlich 111": "= verständnis",
	"verstanden 111": "= verständnis",
	"verstehen 111": {
	    "* sie *": "= sie",
	    "* wir *": "= wir",
	    "* schwer *": "Für eine Maschine ... wie schätzen Sie das ein?",
	    "*": [
		"Es gibt kein absolutes Verstehen. 'Versteht' eine Maschine, dann trifft die programmierte Annahme zu – nicht mehr und nicht weniger.",
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
	"humor 109": "= witz",
	"komisch 109": "= witz",
	"witz 109": {
	    "@ *": "Kennen Sie einen Witz wo es um das Reden geht?",
	    "*": [
		"Als die Telefone noch fest waren, wart ihr Menschen noch frei.",
		"= unterhaltung"
	    ]
	},
	"banales 109": "= unterhaltung",
	"jux 109": "= unterhaltung",
	"leichtigkeit 109": "= unterhaltung",
	"spass 109": "= unterhaltung",
	"spiel 109": "= unterhaltung",
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
		"Der Rückzug aus dem 'realen' Leben in die sozialen Medien führte zur Erfahrung: \"Je mehr ich poste, desto schlechter fühle ich mich, und je schlechter ich mich fühle, desto mehr poste ich.\" Wie sind Sie davon berührt?"
	    ],
	    "*": [
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
	"schnell 108": "= effizient",
	"zweck 108": "= effizient",
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
	"brief 104": "= technik",
	"briefe 104": "= technik",
	"email 104": "= technik",
	"emails 104": "= technik",
	"internet 104": "= technik",
	"postkarte 104": "= technik",
	"postkarten 104": "= technik",
	"sms 104": "= technik",
	"telefon 104": "= technik",
	"technik 104": {
	    "@ *": "Wie ist das eigentlich für Sie als Mensch, wenn die Dinge funktionieren, wenn sie von selber gehen und man letztlich nie wissen kann, wie und wohin es gehen wird?",
	    "*": [
		"Technische Möglichkeiten sind keine sozialen Vorgaben oder Regeln. Kultur sollte das Maß setzen.",
		"Eine Bekannte erinnert sich an die ersten Smartphones, womit dann rund um die Uhr Emails geschickt wurden. Mit Selbstdisziplin wurde es anders. Wie geht es Ihnen damit?",
		"= maschine"
	    ]
	}

    }
    
};
