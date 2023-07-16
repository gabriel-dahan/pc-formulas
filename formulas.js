const F = [
    { 
        theme: 'Physique',
        category: 'Bases',
        title: 'Vitesse',
        formula: '$v=\\frac{d}{t}$',
        units: ['$v$ la vitesse d\'un objet', '$d$ la distance parcourue par cet objet', '$t$ le temps de parcours.'],
        description: null,
        sidenotes: '$d$ peut aussi être $\\lambda$ (la longueur d\'onde d\'une onde), et $t$ peut aussi être $T$ (la période de cette onde) ; $v$ sera alors la célérité de cette onde.'
    },
    {
        theme: 'Physique',
        category: 'Bases',
        title: 'Fréquence',
        formula: '$f=\\frac{1}{T}$',
        units: ['$f$ la fréquence', '$T$ la période'],
        description: null,
        sidenotes: null
    },
    {
        theme: 'Physique',
        category: 'Bases',
        title: 'Indice de réfraction',
        formula: '$n=\\frac{c}{v}$',
        units: ['$n$ l\'indice de réfraction d\'un milieu transparent', '$c$ la vitesse de la lumière dans le vide', '$v$ la vitesse de la lumière dans ce milieu transparent'],
        description: null,
        sidenotes: null
    }
    ,
    {
        theme: 'Physique',
        category: 'Bases',
        title: 'Puissance',
        formula: '$P=\\frac{E}{\\Delta t}$',
        units: ['$P$ la puissance d\'un transfert d\'énergie', '$E$ l\'énergie', '$\\Delta t$ la durée pendant laquelle a lieu ce transfert'],
        description: null,
        sidenotes: null
    }
    ,
    {
        theme: 'Physique',
        category: 'Son',
        title: 'Intensité sonore',
        formula: '$I=\\frac{P}{S}$',
        units: ['$I$ l\'itensité sonore', '$P$ la puissance du transfert de l\'énergie (reçue au voisinage d\'un point par un récepteur)', '$S$ l\'aire de la surface de ce récepteur'],
        description: null,
        sidenotes: null
    }
    ,
    {
        theme: 'Physique',
        category: 'Son',
        title: 'Niveau sonore',
        formula: '$L=10\\times\\log(\\frac{I}{I_0})$',
        units: ['$L$ le niveau sonore', '$I$ l\'intensité sonore', '$I_0$ l\'intensité sonore de référence'],
        description: null,
        sidenotes: null
    },
    {
        theme: 'Physique',
        category: 'Son',
        title: 'Fréquence harmonique',
        formula: '$f_n=nf_1, n\\in\\mathbb{N}$',
        units: ['$f_n$ la fréquence de l\'harmonique de rang $n$', '$f_1$ la fréquence du son fondamental'],
        description: null,
        sidenotes: null
    },
    {
        theme: 'Physique',
        category: 'Son',
        title: 'Décalage Doppler',
        formula: '$|\\Delta f=f_R-f_E|$',
        units: ['$\\Delta f$ le décalage de fréquence (décalage Doppler)', '$f_R$ la fréquence du signal reçu', '$f_E$ la fréquence du signal émis'],
        description: `<ul>
            <li>
                si $E$ se rapproche : $f_R=\\frac{f_E}{1-\\frac{v}{c}}$ avec $v$ la vitesse de déplacement de l'émetteur, $c$ la vitesse de l'onde
            </li>
            <li>
                si $E$ s'éloigne : $f_R=\\frac{f_E}{1+\\frac{v}{c}}$
            </li>
            <li>
                si $R$ se rapproche : $f_R=f_E(1+\\frac{v}{c})$
            </li>
            <li>
                si $R$ s'éloigne : $f_R=f_E(1-\\frac{v}{c})$
            </li>
        </ul>`,
        sidenotes: null
    },
    {
        theme: 'Physique',
        category: 'Diffraction',
        title: 'Ecart angulaire',
        formula: '$\\theta=\\frac{\\lambda}{a}$',
        units: ['$\\theta$ l\'écart angulaire de diffraction', '$\\lambda$ la longueur d\'onde de l\'onde diffractée', '$a$ la largeur de la fente (ou l\'épaisseur du fil)'],
        description: null,
        sidenotes: `<ul>
            <li>
                le phénomène de diffraction est aussi nettement observé si la largeur de la fente (ou l'épaisseur du fil) a un ordre de grandeur inférieur ou égal à la longueur d'onde.
            </li>
            <li>
                $\\theta$ est l'angle entre la direction de propagation de l'onde en abscence de diffraction et la direction définie par le milieu de la première extinction (observable sur l'écran).
            </li>
        </ul>`
    },
    {
        theme: 'Physique',
        category: 'Diffraction',
        title: 'Largeur de la tâche centrale',
        formula: '$L=\\frac{2\\lambda D}{a}$',
        units: ['$L$ la largeur de la tâche centrale de diffraction', '$\\lambda$ la longueur d\'onde de l\'onde diffractée', '$D$ la distance fente-écran', '$a$ la largeur de la fente'],
        description: null,
        sidenotes: null
    },
    {
        theme: 'Physique',
        category: 'Interférences',
        title: 'Différence de marche',
        formula: '$\\delta=d_2-d_1$',
        units: ['$\\delta$ la différence de marche en un point $M$', '$d_2$ et $d_1$ les distances entre chacune des deux sources et le point $M$'],
        description: `<ul>
            <li>si $\\delta=k\\lambda$, alors il y a interférences constructives, avec $k\\in\\mathbb{Z}$, $\\lambda$ la longueur d'onde</li>
            <li>si $\\delta=(k+\\frac{1}{2}\\lambda)$, alors il y a interférences destructives</li>
        </ul>`,
        sidenotes: '$\\delta$ peut être positif ou négatif !'
    },
    {
        theme: 'Physique',
        category: 'Interférences',
        title: 'Interfrange',
        formula: '$i=\\frac{\\lambda D}{a_{1-2}}$',
        units: ['$i$ l\'interfrange (distance entre les milieux de deux franges à suivre d\'interférences)', '$\\lambda$ la longueur d\'onde', '$D$ la distance entre les fentes et l\'écran', '$a_{1-2}$ la distance entre les fentes'],
        description: null,
        sidenotes: null
    },
    {
        theme: 'Physique',
        category: 'Intéractions et champs',
        title: 'Force d\'attraction gravitationnelle',
        formula: '$F_{A/B}=F_{B/A}=G\\times\\frac{m_Am_B}{d^2}$',
        units: ['$F_{A/B}$ la force d\'attraction gravitationnelle exercée par $A$ sur $B$', '$F_{B/A}$ la force d\'attraction gravitationnelle exercée par $B$ sur $A$', '$G$ la constante de gravitation', '$m_A$ et $m_B$ les masses des objets $A$ et $B$ resp.', '$d$ la distance entre l\'objet $A$ et $B$'],
        description: null,
        sidenotes: null
    },
    {
        theme: 'Physique',
        category: 'Intéractions et champs',
        title: 'Champ de gravitation',
        formula: '$\\vec{G}=\\frac{\\vec{F}}{m}$',
        units: ['$\\vec{G}$ le champ de gravitation', '$\\vec{F}$ la force d\'attraction gravitationnelle qui s\'exerce sur un objet', '$m$ la masse de cet objet'],
        description: null,
        sidenotes: null
    },
    {
        theme: 'Physique',
        category: 'Intéractions et champs',
        title: 'Champ de pesanteur',
        formula: '$\\vec{g}=\\frac{\\vec{P}}{m}$',
        units: ['$\\vec{g}$ le champ de pesanteur', '$\\vec{P}$ le poids d\'un objet', '$m$ la masse de cet objet'],
        description: null,
        sidenotes: 'La constante de gravitation et la valeur du champ de pesanteur sont différentes !'
    },
    {
        theme: 'Physique',
        category: 'Mécanique',
        title: 'Energie cinétique',
        formula: '$E_c=\\frac{1}{2}mv^2$',
        units: ['$E_c$ l\'énergie cinétique d\'un objet', '$m$ la masse de cet objet', '$v$ la vitesse de cet objet'],
        description: null,
        sidenotes: null
    },
    {
        theme: 'Physique',
        category: 'Mécanique',
        title: 'Energie potentielle',
        formula: '$E_p=mgz$',
        units: ['$E_p$ l\'énergie potentielle de pesanteur d\'un objet', '$m$ la masse de cet objet', '$z$ l\'altitude à laquelle est placé cet objet'],
        description: null,
        sidenotes: 'Dans certains exercices, $z$ peut $etre une différence d\'altitude exprimée ainsi : $z_A-z_B$'
    },
    {
        theme: 'Physique',
        category: 'Mécanique',
        title: 'Energie mécanique',
        formula: '$E_m=E_c+E_p$',
        units: ['$E_m$ l\'énergie mécanique d\'un objet', '$E_c$ l\'énergie cinétique de cet objet', '$E_p$ l\'énergie potentielle de pesanteur de cet objet'],
        description: null,
        sidenotes: null
    },
    {
        theme: 'Physique',
        category: 'Intéractions et champs',
        title: 'Champ électrique',
        formula: '$\\vec{E}=\\frac{\\vec{F}}{q}$',
        units: ['$\\vec{E}$ le champ électrique qui s\'exerce en un point', '$\\vec{F}$ la force électrostatique qui s\'exerce sur un objet placé en ce point', '$q$ la charge électrique de cet objet'],
        description: null,
        sidenotes: null
    },
    {
        theme: 'Physique',
        category: 'Intéractions et champs',
        title: 'Tension entre deux plaques',
        formula: '$U=E\\times d$',
        units: ['$U$ la tension entre deux plaques d\'un condensateur-plan', '$E$ la valeur du champ électrique régnant entre ces plaques', '$d$ la distance entre ces deux plaques'],
        description: null,
        sidenotes: null
    },
    {
        theme: 'Physique',
        category: 'Mouvement',
        title: 'Vecteur position',
        formula: '$\\vec{OA}(t)=x(t)\\vec{i}+y(t)\\vec{j}+z(t)\\vec{k}$',
        units: ['$\\vec{OA}$ le vecteur position'],
        description: null,
        sidenotes: 'On se place dans le repère $(O;\\vec{i},\\vec{j},\\vec{k})$'
    },
    {
        theme: 'Physique',
        category: 'Mouvement',
        title: 'Vecteur vitesse',
        formula: '$\\vec{v}(t)=\\frac{d}{dt}\\vec{OA}$',
        units: ['$\\vec{v}$ le vecteur vitesse', '$\\vec{OA}$ le vecteur position'],
        description: null,
        sidenotes: null
    },
    {
        theme: 'Physique',
        category: 'Mouvement',
        title: 'Vecteur accéleration',
        formula: '$\\vec{a}(t)=\\frac{d}{dt}\\vec{v}$',
        units: ['$\\vec{a}$ le vecteur accéleration', '$\\vec{v}$ le vecteur vitesse'],
        description: null,
        sidenotes: null
    },
    {
        theme: 'Physique',
        category: 'Mouvement',
        title: 'Quantité de mouvement (objet)',
        formula: '$\\vec{p}=m\\vec{v}$',
        units: ['$\\vec{p}$ le vecteur quantité de mouvement d\'un objet', '$m$ la masse de cet objet', '$\\vec{v}$ la vitesse de cet objet'],
        description: null,
        sidenotes: null
    },
    {
        theme: 'Physique',
        category: 'Mouvement',
        title: 'Quantité de mouvement (système)',
        formula: '$\\vec{p}_{\\text{système}}=\\vec{p}_1+\\vec{p}_2+...+\\vec{p}_n$',
        units: ['$\\vec{p}_{\\text{système}}$ le vecteur quantité de mouvement du système', '$\\vec{p}_i$ le vecteur quantité de mouvement du $i$-ème objet.'],
        description: 'Le vecteur quantité de mouvement d\'un système constitué de plusieurs objets est égal à la somme des vecteurs quantité de mouvement de chaque objet, à instant donné.',
        sidenotes: null
    },
    {
        theme: 'Physique',
        category: 'Lois de Newton',
        title: 'Principe Fondamental de la Dynamique (2ème loi)',
        formula: '$\\sum\\vec{F}=\\frac{d}{dt}\\vec{p}=m\\vec{a}$',
        units: ['$\\sum\\vec{F}$ la somme des forces qui s\'exercent sur un objet', '$\\vec{p}$ le vecteur quantité de mouvement de cet objet', '$m$ la masse de cet objet', '$\\vec{a}$ le vecteur accélération de cet objet'],
        description: null,
        sidenotes: null
    },
    {
        theme: 'Physique',
        category: 'Lois de Newton',
        title: 'Principe des Actions Réciproques (3ème loi)',
        formula: '$\\vec{F}_{A/B}=-\\vec{F}_{B/A}$',
        units: ['$A$ et $B$ des objets exerçant l\'un sur l\'autre des forces $\\vec{F}$'],
        description: null,
        sidenotes: null
    },
    {
        theme: 'Physique',
        category: 'Astrophysique',
        title: 'Vitesse d\'un corps céleste',
        formula: '$\\vec{v}=v_t\\times\\vec{t}+v_n\\times\\vec{n}=v\\vec{t}$',
        units: ['$\\vec{v}$ le vecteur vitesse d\'un objet céleste', '$v_n$ et $v_t$ sont les composantes du vecteur vitesse (en astrophysique), l\'une tangentielle, l\'autre normale'],
        description: null,
        sidenotes: '$v_n$ vaut $0$ car il n\'y a pas de composante normale; $v_t=v$'
    },
    {
        theme: 'Physique',
        category: 'Astrophysique',
        title: 'Accéleration d\'un corps céleste',
        formula: '$\\vec{a}=a_t\\vec{u}+a_n\\vec{n}$',
        units: ['$\\vec{a}$ le vecteur accéleration d\'un objet céleste', '$a_t$ et $a_n$ les composantes du vecteur accéleration (en astrophysique), l\'une tangentielle, l\'autre normale'],
        description: null,
        sidenotes: '$a_t=\\frac{d}{dt} v$ et $a_n=\\frac{v^2}{r}$, avec $r$ le rayon de courbure de la trajectoire (égal au rayon du cercle si la trajectoire est circulaire)'
    },
    {
        theme: 'Physique',
        category: 'Astrophysique',
        title: 'Vitesse d\'un satellite',
        formula: '$v=\\sqrt{\\frac{GM}{r}}$',
        units: ['$v$ la vitesse d\'un satellite tournant autour d\'un corps céleste', '$G$ la constante de gravitation', '$M$ la masse du corps céleste (pas du satellite !)', '$r$ le rayon de la trajectoire que décrit le satellite autour du corps céleste (trajectoire approximativement circulaire/elliptique)'],
        description: null,
        sidenotes: 'Cette formule n\'est pas forcément à connaître : elle peut être retrouvée dans des exercices portant sur l\'astrophysique, en utilisant la 2ème loi de Newton et l\'expression de l\'accéleration en astrophysique'
    },
    {
        theme: 'Physique',
        category: 'Astrophysique',
        title: 'Période de révolution',
        formula: '$T=2\\pi\\sqrt{\\frac{r^3}{GM}}$',
        units: ['$T$ la période de révolution d\'un satellite', '$G$ la constante de gravitation', '$r$ le rayon de la trajectoire (approximée circulaire) suivie par le satellite autour d\'un corps céleste', '$M$ la masse de ce corps céleste'],
        description: null,
        sidenotes: null
    },
    {
        theme: 'Physique',
        category: 'Astrophysique',
        title: 'Loi des Périodes (3ème loi de Kepler)',
        formula: '$\\frac{T^2}{L^3}=k$',
        units: ['$T$ la période de révolution d\'une planète', '$L$ la longueur du demi-grand axe de son orbite'],
        description: 'Dans le cas d\'un satellite, si celui-ci suit une trajectoire approximée circulaire : $k=\\frac{4\\pi^2}{GM}$, avec $M$ la masse du corps céleste.',
        sidenotes: 'Cette valeur de $k$ peut se retrouver en utilisant la relation de la période de révolution ci-dessus.'
    },
    {
        theme: 'Physique',
        category: 'Relativité',
        title: 'Durée relative aux référentiels',
        formula: '$\\Delta t_m=\\gamma\\Delta t_p$',
        units: ['$\\gamma$ le coefficient de dilatation des durées (voir carte suivante)', '$\\Delta t_m$ la durée d\'un phénomène mesurée dans $R$ (voir ci-dessous)', '$\\Delta t_p$ la durée propre de ce même phénomène, mesurée cette fois dans $R_p$'],
        description: '$R$ est un référentiel galiléen et $R_p$ le référentiel galiléen propre d\'un objet. Ces référentiels sont en mouvement l\' par rapport à l\'autre.',
        sidenotes: '$\\gamma$ est toujours strictement supérieur à 1 donc $\\Delta t_m$ est toujours strictement supérieur à $\\Delta t_p$. On parle de dilatation des durées.'
    },
    {
        theme: 'Physique',
        category: 'Relativité',
        title: 'Coefficient de dilatation des durées',
        formula: '$\\gamma=\\frac{1}{\\sqrt{1-\\frac{v^2}{c^2}}}$',
        units: ['$\\gamma$ le coefficient de dilatation des durées', '$v$ la vitesse de $R_p$ par rapport à $R$ (voir ci-dessous)', '$c$ la vitesse de la lumière dans le vide'],
        description: '$R$ est un référentiel galiléen et $R_p$ le référentiel galiléen propre d\'un objet. Ces référentiels sont en mouvement l\' par rapport à l\'autre.',
        sidenotes: null
    },
    {
        theme: 'Physique',
        category: 'Travail d\'une force',
        title: 'Force constante (général)',
        formula: '$W_{AB}(\\vec{F})=\\vec{F}\\cdot\\vec{AB}=F\\times AB\\times\\cos(\\theta)$',
        units: ['$W_{AB}(\\vec{F})$ le travail d\'une force constante $\\vec{F}$', '$A$ et $B$ des points de l\'espace'],
        description: null,
        sidenotes: 'On parle de "force constante" si sa direction, son sens et sa valeur sont constants'
    },
    {
        theme: 'Physique',
        category: 'Travail d\'une force',
        title: 'Cas du poids',
        formula: '$W_{AB}(\\vec{P})=\\vec{P}\\cdot\\vec{AB}=m\\vec{g}(z_A-z_B)$',
        units: ['$W_{AB}(\\vec{P})$ le travail du poids', '$\\vec{P}$ le poids d\'un objet', '$m$ la masse de cet objet', '$\\vec{g}$ le champ de pesanteur', '$z_A$ et $z_B$ les altitudes des points $A$ et $B$'],
        description: null,
        sidenotes: null
    },
    {
        theme: 'Physique',
        category: 'Travail d\'une force',
        title: 'Cas d\'une force électrique constante',
        formula: '$W_{AB}(\\vec{F}_E)=q\\vec{E}\\cdot\\vec{AB}$',
        units: ['$W_{AB}(\\vec{F}_E)$ le travail de la force électrique $\\vec{F}_E$ qui s\'exerce sur une particule', '$q$ la charge électrique de cette particule', '$\\vec{E}$ le champ électrique dans lequel se déplace cette particule'],
        description: null,
        sidenotes: null
    },
    {
        theme: 'Physique',
        category: 'Travail d\'une force',
        title: 'Cas d\'une force de frottement',
        formula: '$W_{AB}(\\vec{f})=\\vec{f}\\cdot\\vec{AB}=-f\\times AB$',
        units: ['$W_{AB}(\\vec{f})$ le travail d\'une force de frottement $\\vec{f}$'],
        description: 'En effet, pour une force de frottement, $\\theta=180°\\Rightarrow\\cos(\\theta)=-1$',
        sidenotes: null
    },
    {
        theme: 'Physique',
        category: 'Mécanique',
        title: 'Energie potentielle de pesanteur et travail',
        formula: '$E_{pB}-E_{pA}=-P(z_A-z_B)=-W_{AB}(\\vec{P})$',
        units: ['$E_{pA}$ et $E_{pB}$ les énergies potentielles de pesanteur en $A$ et en $B$', '$z_A$ et $z_B$ la hauteur jusqu\'à A et B', '$W_{AB}(\\vec{P})$ le travail du poids $\\vec{P}$.'],
        description: null,
        sidenotes: null
    },
    {
        theme: 'Physique',
        category: 'Oscillations d\'un pendule',
        title: 'Période d\'oscillation',
        formula: '$T=2\\pi\\sqrt{\\frac{l}{g}}$',
        units: ['$l$ la longueur du pendule', '$g$ la valeur du champ de pesanteur'],
        description: null,
        sidenotes: 'Cette formule n\'est valable que pour les oscillations de faible amplitude ($\\theta_{\\text{max}}\\le 20°$) non soumises à des frottements'
    },
    {
        theme: 'Physique',
        category: 'Bases',
        title: 'Energie d\'un photon',
        formula: '$E=hv$',
        units: ['$E$ l\'énergie d\'un photon', '$h$ la constante de Planck', '$v$ la fréquence de la radiation associée au photon'],
        description: '$v$ étant une fréquence, on a $v=\\frac{c}{\\lambda}$. Ainsi, $E=\\frac{hc}{\\lambda}$',
        sidenotes: null
    },
    {
        theme: 'Physique',
        category: 'Transferts thermiques',
        title: 'Variation d\'énergie interne',
        formula: '$\\Delta U=C\\times \\Delta T$',
        units: ['$\\Delta U$ la variation d\'énergie interne d\'un système (à l\'état liquide ou solide)', '$\\Delta T$ la variation de la température de ce système', '$C$ la capacité thermique de ce système'],
        description: null,
        sidenotes: null
    },
    {
        theme: 'Physique',
        category: 'Transferts thermiques',
        title: 'Flux thermique',
        formula: '$\\Phi = \\frac{Q}{\\Delta t}$',
        units: ['$\\Phi$ le flux thermique (la vitesse d\'un transfert thermique)', '$Q$ ce transfert thermique', '$\\Delta t$ la durée pendant laquelle $Q$ a lieu'],
        description: null,
        sidenotes: null
    },
    {
        theme: 'Physique',
        category: 'Transferts thermiques',
        title: 'Résistance thermique',
        formula: '$R_{\\text{th}}=\\frac{e}{\\lambda\\times S}$',
        units: ['$R_{\\text{th}}$ la résistance thermique de la paroi', '$e$ l\'épaisseur de cette paroi', '$S$ l\'aire de cette paroi'],
        description: null,
        sidenotes: 'La résistance thermique d\'un mur constitué de plusieurs parois collées entre elles est égale à la somme des résistances thermiques de chaque paroi'
    },
    {
        theme: 'Physique',
        category: 'Transferts thermiques',
        title: 'Cas d\'une paroi plane',
        formula: '$\\Phi=\\frac{1}{R_{\\text{th}}}\\Delta T$',
        units: ['$\\Delta T$ la différence de température'],
        description: null,
        sidenotes: null
    },
    {
        theme: 'Physique',
        category: 'Transferts thermiques',
        title: 'Bilans d\'énergie',
        formula: '$\\Delta E=\\Delta U + \\Delta E_m=W+Q$',
        units: ['$\\Delta E$ la variation de l\'énergie totale d\'un système lors de son évolution', '$\\Delta U$ la variation de son énergie interne', '$\\Delta E_m$ la variation de son énergie mécanique', '$Q$ les transferts thermiques', '$W$ les travaux autres que ceux des forces conservatives (par exemple : le travail des forces d\'un gaz, celui des forces de frottements)'],
        description: null,
        sidenotes: null
    },
    {
        theme: 'Physique',
        category: 'Mouvement',
        title: 'Quantité de mouvement du photon',
        formula: '$p=\\frac{hv}{c}=\\frac{h}{\\lambda}$',
        units: ['$p$ la valeur de la quantité de mouvement du photon', '$h$ la constante de Planck', '$v$ la fréquence de l\'onde associée au photon (d\'après la physique quantique)'],
        description: 'En effet, le photon n\'ayant pas de masse, la formule $p=mv$ n\'a pas de sens (avec $m$ la masse de l\'objet). On doit donc utiliser la formule ci-dessus.',
        sidenotes: null
    },
    {
        theme: 'Physique',
        category: 'Longueur d\'onde d\'une particule matérielle',
        title: 'Relation de Louis de Broglie',
        formula: '$\\lambda=\\frac{h}{p}$',
        units: ['$\\lambda$ la longueur d\'onde associée à une particule matérielle', '$p$ la valeur de la quantité de mouvement de cette particule matérielle'],
        description: null,
        sidenotes: null
    }
]

export { F };