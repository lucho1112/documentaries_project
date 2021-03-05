const dirtyData = [
    {
        genre: 'Documentaire',
        topic: 'Buster Keaton Un genie brise par Hollywood',
        mainspeaker: 'Buster Keaton',
        plot: "Rétrospective de la vie de Buster Keaton dans le contexte du cinéma Hollywoodien des 30's 40's 50's...",
        category: 'Cinéma',
        subcategory: 'Acteur                                       Hollywood                             Producteur',
        duration: 52,
        language: 'Fr',
        year: 2016,
        link: 'https://www.youtube.com/watch?v=Q4N0hIU3Wuw',
    },
    {
        genre: 'Conférence',
        topic: 'La surveillance sur Internet',
        mainspeaker: 'Fabrice Epelboin',
        plot:
            "Surveillance de masse, Deep Package Inspection et autres geekeries du même genre - D'accord ou pas avec le propos global, y'a des choses intéressantes dans son discours",
        category: 'Numérique',
        subcategory: 'Surveillance  Données-personnelles',
        duration: 72,
        language: 'Fr',
        year: 2014,
        link: 'https://www.youtube.com/watch?v=mqUInAOfBWI',
    },
    {
        genre: 'Conférence',
        topic: 'Le MSFR : vers un nucléaire socialement acceptable',
        mainspeaker: 'Daniel Heuer',
        plot:
            "Directeur de recherche au CNRS, l'intervenant explique son prototype de réacteur nucléaire à sel fondu qui pourrait être une alternative au nucléaire civil actuel...",
        category: 'Energie',
        subcategory: 'Nucléaire                             Prototype',
        duration: 45,
        language: 'Fr',
        year: 2015,
        link: 'https://www.youtube.com/watch?v=FDy9FemEk8Y',
    },
    {
        genre: 'Documentaire',
        topic: "Quand l'Internet Fait des Bulles",
        mainspeaker: 'Moult "dinosaures" de l\'internet des années 2000',
        plot:
            "Documentaire sur la bulle internet, du gonflement à l'explosion. Pas mal d'images d'époques, d'intervenants du numérique français, etc...",
        category: 'Numérique',
        subcategory: 'Internet                                Bulle',
        duration: 100,
        language: 'Fr',
        year: 2008,
        link: 'https://www.youtube.com/watch?v=CVVja_4xDrQ',
    },
    {
        genre: 'Conférence',
        topic: 'Point sur la crise européenne et ses blocages',
        mainspeaker: 'Gaël Giraud',
        plot: "Breve explication de la crise européenne par un ancien consultant financier : c'est clair et limpide",
        category: 'Finance',
        subcategory: 'crise                                 banques                             europe',
        duration: 20,
        language: 'Fr',
        year: 2012,
        link: 'https://www.youtube.com/watch?v=Pg9jPXiu_Yo',
    },
    {
        genre: 'Conférence',
        topic: 'Mars : un monde "habitable" ?',
        mainspeaker: 'Jean-Pierre Bibring',
        plot:
            "Que sait-on de Mars, qu'observe t-on ? Quelles avancées ? Etc... + série de questions / réponses à la fin plutôt intéressantes",
        category: 'Sciences',
        subcategory:
            'Astrophysique                      Mars                                     Espace                               Physique',
        duration: 140,
        language: 'Fr',
        year: 2014,
        link: 'https://www.youtube.com/watch?v=4u09XUoCxRw',
    },
    {
        genre: 'Conférence',
        topic: 'Le voyage interstellaire',
        mainspeaker: 'Roland LEHOUCQ',
        plot: "A quelle vitesse on peut se déplacer dans l'espace ? Comment le faire ? Quelles technologies ? Etc",
        category: 'Sciences',
        subcategory:
            'Astrophysique                Fusées                                Espace                             Physique',
        duration: 90,
        language: 'Fr',
        year: 2016,
        link: 'https://www.youtube.com/watch?v=o03Z6uOA1Kg&t=3638s',
    },
    {
        genre: 'Documentaire',
        topic: 'Part 1 / La Face Cachée du Pétrole : Le partage du monde',
        mainspeaker: '-',
        plot:
            'Docu Arte : Pétrole et implications géopolitiques - rien à voir avec les mecs qui ont uploadé cette vidéo (pro théorie du complot)',
        category: 'Energie',
        subcategory: 'Pétrole                               Géopolitique                             histoire',
        duration: 52,
        language: 'Fr',
        year: 2010,
        link: 'https://www.dailymotion.com/video/xewkez',
    },
    {
        genre: 'Documentaire',
        topic: 'Part 2 / La Face Cachée du Pétrole : Les grandes manipulations',
        mainspeaker: '-',
        plot:
            'Docu Arte : Pétrole et implications géopolitiques - rien à voir avec les mecs qui ont uploadé cette vidéo (pro théorie du complot)',
        category: 'Energie',
        subcategory: 'Pétrole                               Géopolitique                             histoire',
        duration: 52,
        language: 'Fr',
        year: 2010,
        link: 'https://www.dailymotion.com/video/xewm92',
    },
    {
        genre: 'Conférence',
        topic: 'Énergie et Climat : qu’est-ce qu’on fait Président ?',
        mainspeaker: 'Jean Marc Jancovici',
        plot:
            'Exposé global sur la problématique énergie-climat, les ordres de grandeur en jeu, les possibilités, les limites, le coût réel, etc...',
        category: 'Energie',
        subcategory:
            'Climat                        Renouvelables                     Nucléaire                     Physique                  Vulgarisation',
        duration: 150,
        language: 'Fr',
        year: 2017,
        link: 'https://www.youtube.com/watch?v=TgWU_jssAhk',
    },
    {
        genre: 'Conférence',
        topic: 'Les enjeux de la transition énergétique',
        mainspeaker: 'Gaël Giraud',
        plot:
            'Exposé global sur la problématique énergie-climat + rapport club de Rome (Meadows 72) + lien entre énergie et PIB',
        category: 'Energie',
        subcategory:
            'Climat                                  PIB                      vulgarisation                     Physique',
        duration: 77,
        language: 'Fr',
        year: 2016,
        link: 'https://www.youtube.com/watch?v=NzDe80EeUlY',
    },
    {
        genre: 'Conférence',
        topic: 'Face à la raréfaction des métaux : croissance verte ou low tech ?',
        mainspeaker: 'Philippe Bihouix',
        plot:
            'Peut on tout recycler ? Quid des usages dispersifs ? Quid des terres rares ? La croissance verte est elle une solution ? Etc...',
        category: 'Energie',
        subcategory: 'Métaux                              Lowtech                          Recyclage',
        duration: 72,
        language: 'Fr',
        year: 2015,
        link: 'https://www.youtube.com/watch?v=mqhC6uI8TUY',
    },
    {
        genre: 'Conférence',
        topic: 'Médias et leur critique',
        mainspeaker: 'Usul + Pierre Carles',
        plot: "Débat à l'université populaire de Bordeaux sur les médias...",
        category: 'Médias',
        subcategory: 'Journalisme                     Internet',
        duration: 120,
        language: 'Fr',
        year: 2018,
        link: 'https://www.youtube.com/watch?v=2q_2OIzTYwY&t=6155s',
    },
    {
        genre: 'Débat',
        topic: 'Loi Hadopi à son début',
        mainspeaker: 'Fabrice Epelboin + Marc Guez',
        plot: "2 visions qui s'opposent radicalement...",
        category: 'Numérique',
        subcategory:
            'Internet                  téléchargement                            loi                                 surveillance',
        duration: 15,
        language: 'Fr',
        year: 2010,
        link: 'https://vimeo.com/15920769',
    },
    {
        genre: 'Documentaire',
        topic: 'Nothing to Hide',
        mainspeaker: 'Beaucoup de monde...',
        plot: 'Surveillance de masse, données personnelles, tracking et autres joyeusetés',
        category: 'Numérique',
        subcategory:
            'Données                              Tracking                          Surveillance                      Smartphones',
        duration: 85,
        language: 'Fr',
        year: 2017,
        link: 'https://www.youtube.com/watch?v=djbwzEIv7gE',
    },
    {
        genre: 'Interview',
        topic: 'France, terrorisme et diplomatie en carton',
        mainspeaker: 'Pierre Conesa',
        plot: 'Interview de Pierre Conesa, ancien haut fonctionnaire du Ministère de la Défense.',
        category: 'Géopolitique',
        subcategory: 'Terrorisme                      diplomatie                          Moyen Orient',
        duration: 70,
        language: 'Fr',
        year: 2016,
        link: 'https://www.youtube.com/watch?v=AQN8AYVzXqs',
    },
    {
        genre: 'Interview',
        topic: 'Internet option vie privée',
        mainspeaker: 'Benjamin Bayart',
        plot: "Discussion autour de des enjeux actuels du numérique, des lois gouvernementales, de l'état d'urgence...",
        category: 'Numérique',
        subcategory: 'Internet                                     Loi                                     Activisme',
        duration: 70,
        language: 'Fr',
        year: 2017,
        link: 'https://www.youtube.com/watch?v=VBsLSfPs2PE',
    },
    {
        genre: 'Interview',
        topic: 'Politique étrangère Fr, armée',
        mainspeaker: 'Guillaume Ancel',
        plot:
            "Ancien colonnel de la force d'action rapide qui explique son parcours dans l'armée, les conflits auxquels il a participé, etc..",
        category: 'Géopolitique',
        subcategory: 'Armée                               FAR                                  Politique',
        duration: 70,
        language: 'Fr',
        year: 2017,
        link: 'https://www.youtube.com/watch?v=sIaLxUiR9BQ',
    },
    {
        genre: 'Documentaire',
        topic: 'DIG !',
        mainspeaker: 'Brian Jonestown Massacre + Dandy Warhols',
        plot: 'Documentaire rock qui retrace les début de ces 2 groupes, leurs aventures et galères..',
        category: 'Musique',
        subcategory: 'Rock                          Tournée                        Alcool ...',
        duration: 110,
        language: 'En',
        year: 2005,
        link: 'https://www.youtube.com/watch?v=t9IH-qVU5EM',
    },
    {
        genre: 'Interview',
        topic: 'L214 : Exploitation animale & Alimentation - Souffrance du 21ème siècle ?',
        mainspeaker: 'Sébastien Arsac',
        plot: "Interview sur l'association L214, le véganisme, l'explotation animale...",
        category: 'Alimentation',
        subcategory:
            'vegan                                    animaux                               Explotation-intensive                 climat',
        duration: 95,
        language: 'Fr',
        year: 2018,
        link: 'https://www.youtube.com/watch?v=6_RjvC7fQck',
    },
    {
        genre: 'Conférence',
        topic: 'Peut on vivre seul sur Mars',
        mainspeaker: 'Roland LEHOUCQ',
        plot: 'Analyse du film Seul sur Mars : ce qui est réaliste physiquement',
        category: 'Sciences',
        subcategory: 'Film                                     physique                            espace',
        duration: 60,
        language: 'Fr',
        year: 2016,
        link: 'https://www.youtube.com/watch?v=OQ7Hy-ALMP4',
    },
    {
        genre: 'Documentaire',
        topic: "L'aventure Rosetta aux origines de la vie",
        mainspeaker: '-',
        plot: 'Documentaire sur la sonde Rosetta, une aventure de plus de 20 ans et une prouesse scientifique',
        category: 'Sciences',
        subcategory: 'physique                    comete                             Philae',
        duration: 52,
        language: 'Fr',
        year: 2016,
        link: 'https://www.youtube.com/watch?v=amWvEtLb6kE',
    },
    {
        genre: 'Interview',
        topic: "Anticiper l'effondrement ?",
        mainspeaker: 'Vincent Mignerot',
        plot: 'Point de vue sur la chute de la civilisation industrielle à venir... fin des ressources, etc',
        category: 'Energie',
        subcategory: 'ressources                 energie                               climat',
        duration: 62,
        language: 'Fr',
        year: 2017,
        link: 'https://www.youtube.com/watch?v=CwXudpMdbuo',
    },
    {
        genre: 'Conférence',
        topic: 'Un avenir tout tracé ?',
        mainspeaker: 'Alain Damasio + Adrienne Charmet',
        plot: "Etat d'urgence, Internet, loi...Quadrature du net",
        category: 'Numérique',
        subcategory:
            'Loi                                      data                    renseignement                     Internet                          Quadrature du net',
        duration: 48,
        language: 'Fr',
        year: 2016,
        link: 'https://www.youtube.com/watch?v=zU6eQBvaKfM',
    },
    {
        genre: 'Conférence',
        topic: 'Economie mon amour',
        mainspeaker: 'Adrien Chaudot',
        plot: "Conférence gesticulée sur l'économie",
        category: 'Economie',
        subcategory: 'Emploi                                 Productivité                       "Humour',
        duration: 68,
        language: 'Fr',
        year: 2016,
        link: 'https://www.youtube.com/watch?v=2vIjJS6Jsrk',
    },
    {
        genre: 'Documentaire',
        topic: '15 ans de rivalité entre Sarkozy et Villepin',
        mainspeaker: 'Sarkozy                              Villepin',
        plot:
            'Les Fauves raconte quinze années d’affrontements entre Nicolas Sarkozy et Dominique De Villepin, de la campagne Présidentielle de 1995 à aujourd’hui',
        category: 'Politique',
        subcategory: 'Sarkozy                              Villepin                                Conflit',
        duration: 102,
        language: 'Fr',
        year: 2017,
        link: 'https://www.youtube.com/watch?v=4cWnqbMLANI',
    },
    {
        genre: 'Documentaire',
        topic: 'La période 1976-1984 et la vague Punk / Post-Punk',
        mainspeaker: '-',
        plot: 'Documentaire sur la période 1976-1984 et la vague Punk / Post-Punk',
        category: 'Musique',
        subcategory: 'Punk                                  England',
        duration: 49,
        language: 'Fr',
        year: 1998,
        link: 'https://www.youtube.com/watch?v=H7-jm8nWEcg',
    },
    {
        genre: 'Interview',
        topic: 'Surveillance de masse de la population',
        mainspeaker: 'Thibault Bechetoille  + fabrice elpeboin  + Bluetouffe',
        plot:
            'Interview réalisé par un Hacker + cyberactiviste afin de poser les questions qui "dérangent" au PDG de Qosmos, une boite française qui vend des solutions pour monitorer la population. Solutions notamment utilisées par le régime de Bachar...',
        category: 'Numérique',
        subcategory: 'Surveillance  Données-personnelles    Big data               Deep-Package-Inspection',
        duration: 38,
        language: 'Fr',
        year: 2011,
        link: 'https://www.youtube.com/watch?v=tkfJKKuj5Xc',
    },
    {
        genre: 'Documentaire',
        topic: 'Chirac, le jeune loup',
        mainspeaker: 'Jacques Chirac',
        plot: 'Les début de la carrière politique de Jaques Chirac',
        category: 'Politique',
        subcategory: 'Président                                   Etat                               Elections',
        duration: 102,
        language: 'Fr',
        year: 2017,
        link: 'https://www.youtube.com/watch?v=o8gfQK8EgSA',
    },
    {
        genre: 'Documentaire',
        topic: 'Chirac, le vieux lion',
        mainspeaker: 'Jacques Chirac',
        plot: 'Seconde partie de la carrière politique de Jaques Chirac et fin',
        category: 'Politique',
        subcategory: 'Président                                   Etat                               Elections',
        duration: 102,
        language: 'Fr',
        year: 2017,
        link: 'https://www.youtube.com/watch?v=oZ3Ckmr3MO8',
    },
    {
        genre: 'Conférence',
        topic: "Propos sur l'art contemporain",
        mainspeaker: 'Franck Lepage',
        plot: "Propos (très tranchés) sur l'art contemporain, la dimension politique et économique de la chose...",
        category: 'Art',
        subcategory: 'Art-contemporain',
        duration: 30,
        language: 'Fr',
        year: 2010,
        link: 'https://www.youtube.com/watch?v=n3gOLGzMChU',
    },
    {
        genre: 'Conférence',
        topic: "L'incroyable monde des semi-conducteurs",
        mainspeaker: 'Olivier Ezratty',
        plot:
            'Quel est le rôle des semi-conducteurs ? Comment les fabriquer ? Quels sont les principaux acteurs ? Les limites phyisiques et principales applications ?',
        category: 'Sciences',
        subcategory:
            'Informatique                             Electronique                                   puces                            Hardware',
        duration: 52,
        language: 'Fr',
        year: 2014,
        link: 'https://www.youtube.com/watch?v=pBL6YyXL1lc',
    },
    {
        genre: 'Documentaire',
        topic: 'It Might Get Loud',
        mainspeaker: 'Jack White, Jimmy Page, The Edge',
        plot:
            'Trois des plus grands guitaristes rock échangent autour de leur rapport à la musique et à la guitare en particulier',
        category: 'Musique',
        subcategory: 'Rock Guitare',
        duration: 98,
        language: 'En',
        year: 2008,
        link: 'https://www.youtube.com/watch?v=CT2MuizGQ5I',
    },
    {
        genre: 'Documentaire',
        topic: 'Guépard, la course pour la vie',
        mainspeaker: 'Guépard, Springbok',
        plot:
            'Documentaire National Geographic dans le désert du Kalahari (Afrique australe) sur le guépard et sa proie favorite, le springbok',
        category: 'Animaux',
        subcategory: 'Afrique, savane',
        duration: 54,
        language: 'Fr',
        year: 2011,
        link: 'https://www.dailymotion.com/video/xwzmmf',
    },
    {
        genre: 'Documentaire',
        topic: '14-18, le bruit et la fureur',
        mainspeaker: 'Soldats',
        plot:
            "Documentaire sur la 1ère guerre mondiale racontée du point de vue postérieur d'un soldat français fictif à l'aide d'archives cinématographiques d'époque. Voix off d'Alexandre Astier.",
        category: 'Histoire',
        subcategory: 'Guerre, Europe, France',
        duration: 100,
        language: 'Fr',
        year: 2008,
        link: 'http://www.dailymotion.com/playlist/x1ghyd_soleillevant32bis_14-18-le-bruit-et-la-fureur/1#video=xflz1d',
    },
    {
        genre: 'Documentaire',
        topic: "The Internet's Own Boy: The Story of Aaron Swartz",
        mainspeaker: 'Aaron Swartz',
        plot:
            "Documentaire qui retrace la vie d'Aaron, gamin génie de l'informatique qui a collaboré dès le plus jeune âge sur des projets d'ampleur : Flux RSS, création du site Reddit, Creaticve Commons... Millitant pour l'open source, la libre circulation des infos sur Internet... Aaron est accusé en 2010 pour avoir mis en ligne gratuitement des publications universitaires, il met fin à ses jour 1 mois avant le début de son procès..",
        category: 'Numérique',
        subcategory: 'Open source, Reddit, RSS, Creative Commons, Procès',
        duration: 105,
        language: 'En',
        year: 2014,
        link: 'https://www.youtube.com/watch?v=9vz06QO3UkQ',
    },
    {
        genre: 'Documentaire',
        topic: '64 cases pour un genie',
        mainspeaker: 'Bobby Fischer',
        plot:
            'En 1958, Robert James “Bobby” Fischer, alors âgé de quatorze ans, stupéfia le monde des échecs en devenant le plus jeune Grand Maître de l’histoire, lançant ainsi une carrière qui allait faire de lui une légende. Pendant les quinze années qui suivirent, son incroyable ascension au sommet du jeu captiva le monde entier et permit aux échecs de connaître un essor international considérable. Puis, à l’apogée de sa réussite, Bobby Fischer prit tout le monde par surprise en décidant de disparaître des yeux du grand public.',
        category: 'Jeux',
        subcategory: 'Echecs, USA, URSS',
        duration: 108,
        language: 'En',
        year: 2011,
        link: 'https://www.youtube.com/watch?v=wrG54G8_UMU',
    },
    {
        genre: 'Documentaire',
        topic: '(Dis)honesty : the truth about lies',
        mainspeaker: 'Dan Ariely',
        plot:
            "plot d'une longue étude sur le mensonge, ses causes, les facteurs aggravants et les moyens de le limiter. Documentaire monté de manière très intéressante car il mèle des trajectoires personnelles, des scandales de société, des études sociologiques et neurologiques. Permet de s'interroger sur les moyens de réduire le nombre et l'ampleur des mensonges dans la société.",
        category: 'Sociologie',
        subcategory: 'Mensonge, société',
        duration: 89,
        language: 'En',
        year: 2015,
        link: 'https://www.youtube.com/watch?v=8yJmP1Yzb5c',
    },
    {
        genre: 'Conférence',
        topic: 'Where are the baby dinosaurs ?',
        mainspeaker: 'Jack Horner',
        plot:
            "Conférence bien menée où le paléonthologiste pose une question essentielle : pourquoi n'avons nous jamais trouvé de bébé dinosaures?  \nA partir de cet exemple on peut s'interroger sur la manière dont sont menées les expérimentations scientifiques, ou du moins comment sont choisies les hypothèses de départ.",
        category: 'sciences',
        subcategory: 'Dinosaures',
        duration: 18,
        language: 'EN',
        year: 2011,
        link: 'https://www.ted.com/talks/jack_horner_shape_shifting_dinosaurs/transcript',
    },
    {
        genre: 'Documentaire audio',
        topic: "L'espionnage série de 4 épisodes",
        mainspeaker: "espions, spécialistes de l'intelligence économique, journaliste, anciens DGSE",
        plot:
            "Toutes les formes de l'espionnage, des micros du KGB jusqu'à l'infiltration des milieux contestataires en passant par l'espionnage industriel",
        category: 'Histoire',
        subcategory: 'espionnage',
        duration: "4 x 55'",
        language: 'Fr',
        year: 2017,
        link:
            'https://www.franceculture.fr/emissions/lsd-la-serie-documentaire/lespionnage-sur-ecoute-44-mark-kennedy-lalter-espion-qui-maimait-0',
    },
    {
        genre: 'Documentaire audio',
        topic: 'Les Braqueurs - Série de 11 épisodes',
        mainspeaker: '3 anciens braqueurs',
        plot:
            'Entretiens avec 3 anciens braqueurs Français sur leur parcours dans le grand banditisme. Ce qui les a amenés à ces activités et comment ils en sont sortis.',
        category: 'Sociologie',
        subcategory: 'Police / Justice',
        duration: "11 x 15'",
        language: 'FR',
        year: 2017,
        link: 'https://www.arteradio.com/serie/les_braqueurs',
    },
    {
        genre: 'Documentaire audio',
        topic: 'Flicopolis - Série de 8 épisodes',
        mainspeaker: 'Policier des Stups',
        plot:
            'Entretien avec un jeune policier de la brigade des Stups. Il revient en détail sur son travail au quotidien, ses relations avec ses collègue et ses "clients".',
        category: 'Sociologie',
        subcategory: 'Police / Justice',
        duration: "8 x 3'",
        language: 'FR',
        year: 2016,
        link: 'https://www.arteradio.com/serie/flicopolis',
    },
    {
        genre: 'Documentaire audio',
        topic: 'Francis Ford Coppola I',
        mainspeaker: 'Francis Ford Coppola',
        plot:
            'Le réalisateur américain revient en détails sur son parcours. De son enfance à New York à ses derniers projets - entretien en 3 parties',
        category: 'Cinéma',
        subcategory: 'Cinéma',
        duration: "51'",
        language: 'FR',
        year: 2012,
        link: 'https://www.franceinter.fr/emissions/le-grand-entretien/le-grand-entretien-04-avril-2012',
    },
    {
        genre: 'Documentaire audio',
        topic: 'Francis Ford Coppola II',
        mainspeaker: 'Francis Ford Coppola',
        plot:
            'Le réalisateur américain revient en détails sur son parcours. De son enfance à New York à ses derniers projets - entretien en 3 parties',
        category: 'Cinéma',
        subcategory: 'Cinéma',
        duration: "51'",
        language: 'FR',
        year: 2012,
        link: 'https://www.franceinter.fr/emissions/le-grand-entretien/le-grand-entretien-05-avril-2012',
    },
    {
        genre: 'Documentaire audio',
        topic: 'Francis Ford Coppola III',
        mainspeaker: 'Francis Ford Coppola',
        plot:
            'Le réalisateur américain revient en détails sur son parcours. De son enfance à New York à ses derniers projets - entretien en 3 parties',
        category: 'Cinéma',
        subcategory: 'Cinéma',
        duration: "51'",
        language: 'FR',
        year: 2012,
        link: 'https://www.franceinter.fr/emissions/le-grand-entretien/le-grand-entretien-06-avril-2012',
    },
    {
        genre: 'Documentaire',
        topic: 'Survivalisme',
        mainspeaker: '-',
        plot: 'Différents points de vues sur le survivalisme, ses variantes, les raisons prônées par ses adeptes',
        category: 'Energie',
        subcategory: 'Environnement, effondrement',
        duration: 57,
        language: 'Fr',
        year: 2016,
        link: 'https://www.youtube.com/watch?v=nHJIMilnetk',
    },
    {
        genre: 'Documentaire',
        topic: 'Tampon, notre ennemi intime',
        mainspeaker: '-',
        plot: "Enquête sur les tampons : leur dangerosité, l'industrie qui se cache derrière, leur symbolique.",
        category: 'Santé',
        subcategory: 'Santé, industrie, société, féminisme',
        duration: 120,
        language: 'FR',
        year: 2017,
        link: 'https://www.youtube.com/watch?v=0nDtAMqO2iI',
    },
    {
        genre: 'Documentaire',
        topic: 'Les nouveaux chiens de garde',
        mainspeaker: '-',
        plot:
            'Documentaire phare sur les médias, le journalisme, les jeux de pouvoirs des grands groupes qui ont racheté les principaux quotidiens...',
        category: 'Médias',
        subcategory: 'Journalisme, Indépendance, pouvoir, coercition',
        duration: 100,
        language: 'Fr',
        year: 2009,
        link: 'https://vimeo.com/233964518',
    },
];

// define a fn to clean dirtyData to cleanData; ie add id + slug
// dirtyData = [item1, item2, item3, ...]
// item1 = { topic: 'blabla' ... }
function serializeData(dirtyData) {
    // takes an item in the array of data and clean it
    function serializeItem(item, index) {
        item.id = index;
        item.slug = encodeURIComponent(item.topic);

        function serializeSubcategory(dirtySub) {
            return dirtySub.split(' ').filter((el) => {
                return typeof el === 'string' && el.length > 1;
            });
        }
        item.subcategories = serializeSubcategory(item.subcategory);
        delete item.subcategory;
        return item;
    }

    const cleanData = dirtyData.map(serializeItem);
    return cleanData;
}
// call the clean data fn
export const data = serializeData(dirtyData);
const uniqueItems = (x, i, a) => a.indexOf(x) === i;
const docCategories = data.map((prod) => prod.genre).filter(uniqueItems);
docCategories.push('All');
docCategories.sort();
export const movieCategories = docCategories;