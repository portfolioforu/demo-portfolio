// Contenu fictif — profil généraliste (systèmes, réseaux & cybersécurité)
// Démo technique pour Portfolio For U — ne reflète pas une vraie personne.

export type ListItem = { bold?: string; text: string }

export const profile = {
  name: 'Testeur Dupuis',
  role: 'BTS SIO — Option SISR',
  tagline:
    "Je conçois, déploie et durcis des systèmes Linux/Windows — pare-feu, VPN, Active Directory — jusqu'à leur dernière ligne de configuration.",
  location: 'Auvergne-Rhône-Alpes, France',
  email: 'test2@portfolioforu.com',
  availability: 'Disponible pour une alternance — rentrée 2026',
}

export const stats = [
  { value: '2 ans', label: 'formation spécialisée' },
  { value: '8 sem.', label: 'stage infrastructure' },
  { value: '5+', label: 'projets réseau & système' },
]

export const about = {
  paragraphs: [
    "Formé aux exigences du terrain, je maîtrise le déploiement de services critiques (DNS, DHCP, Active Directory), le suivi d'incidents et le scripting d'automatisation. Rigoureux et curieux, je prépare une spécialisation en cybersécurité.",
    "Ce qui m'intéresse : comprendre une infrastructure de bout en bout, du câble au pare-feu, plutôt que de me limiter à une brique isolée. J'aime autant écrire un script d'automatisation que documenter une procédure pour la rendre reproductible.",
  ],
  tags: ['Linux Debian', 'Windows Server', 'Active Directory', 'Netfilter'],
}

export const experienceIntro =
  "Une formation construite autour de projets concrets plutôt que de cours purement théoriques, avec une spécialisation progressive vers l'administration système, réseau et la sécurité."

export const experience = [
  {
    period: '2025 — 8 semaines',
    title: 'Stage technicien réseau & infrastructure',
    org: 'TechData',
    description:
      "Immersion complète dans le quotidien d'un service informatique interne, avec une montée en autonomie progressive : les deux premières semaines ont été consacrées à l'observation et à la prise en main de l'existant, avant de se voir confier des missions à part entière.",
    list: [
      { bold: 'Brassage & commutation', text: "installation, repérage et configuration de commutateurs Cisco IOS, mise en place de VLANs pour segmenter le trafic entre services et limiter la portée d'un incident de sécurité." },
      { bold: 'Scripting & automatisation', text: "écriture de scripts Bash et Python pour automatiser les sauvegardes, dont le script de sauvegarde présenté en détail dans la section Projets, développé et mis en production durant ce stage." },
      { bold: 'Support & incidents', text: "traitement des tickets de niveau 1 et 2, diagnostic de pannes réseau avec Wireshark, avec un temps de résolution qui s'est nettement amélioré au fil des semaines grâce à la connaissance progressive de l'infrastructure existante." },
      { bold: 'Documentation', text: "rédaction de procédures d'intervention destinées aux futurs stagiaires, et mise à jour du schéma réseau qui n'avait pas été actualisé depuis plusieurs mois." },
    ] as ListItem[],
    skillsGained: ['VLANs Cisco', 'Scripting Bash/Python', 'Diagnostic Wireshark'],
  },
  {
    period: '2024 — 2026',
    title: 'BTS SIO — Option SISR',
    org: 'Services Informatiques aux Organisations',
    description:
      "Formation en deux ans structurée autour de projets concrets plutôt que de cours purement théoriques, avec une spécialisation progressive vers l'administration système, réseau et la sécurité.",
    list: [
      { bold: 'Administration système', text: 'installation et administration de serveurs Linux (Debian) et Windows Server, incluant Active Directory, DNS et DHCP — compétences directement mobilisées dans les projets Serveur web sécurisé et Déploiement Active Directory.' },
      { bold: 'Réseau', text: "configuration du routage dynamique, conception de plans d'adressage, mise en place de pare-feu et d'accès distants VPN pour la connexion sécurisée de postes nomades." },
      { bold: 'Sécurité & continuité', text: 'gestion des risques informatiques, mise en conformité réglementaire, et élaboration de plans de continuité et de reprise d\'activité (PCA/PRA) face à un scénario de sinistre.' },
      { bold: 'Projets transversaux', text: "travail en mode projet avec cahier des charges, contraintes de délai et soutenance devant un jury, à l'image des épreuves E4 et E5 présentées dans la section Compétences & Projets." },
    ] as ListItem[],
    skillsGained: ['Active Directory', 'Routage & VPN', 'PCA/PRA'],
  },
  {
    period: '2024',
    title: 'Baccalauréat général',
    org: 'Spécialités NSI & Mathématiques',
    description:
      "Choix de spécialités orienté informatique dès le lycée, posant les bases théoriques mobilisées ensuite en BTS.",
    list: [
      { text: "Architecture matérielle des ordinateurs et modèles réseaux (OSI/TCP-IP), première approche du fonctionnement d'Internet au niveau des couches protocolaires." },
      { text: 'Bases de données relationnelles et langage SQL, à travers la conception de schémas simples et l\'écriture de requêtes.' },
      { text: 'Programmation en Python : structures de données, algorithmique de base, premiers scripts autonomes.' },
    ] as ListItem[],
    skillsGained: ['Modèle OSI/TCP-IP', 'SQL', 'Python'],
  },
]

export const skills = [
  {
    category: 'Systèmes & réseaux',
    items: ['Linux (Debian / Ubuntu Server)', 'Windows Server (Active Directory, GPO)', 'Cisco IOS (switchs, routeurs, VLANs)', 'Wireshark (analyse de trames & logs)', 'Pare-feu & sécurité (Netfilter / iptables)'],
  },
  {
    category: 'Développement & outils',
    items: ['Python (scripts & automatisation)', 'Bash / shell Linux', 'HTML5 / CSS3', 'Git & GitHub'],
  },
]

export const projects = [
  {
    slug: 'serveur-web-securise',
    eyebrow: 'Réseau & sécurité',
    title: 'Serveur web sécurisé',
    summary:
      "Déploiement complet d'une infrastructure web sous Linux Debian, du système minimal jusqu'au HTTPS forcé. Pare-feu Netfilter en politique DROP par défaut, SSH durci par clés RSA 4096, et bannissement automatique des IP suspectes avec Fail2ban.",
    tags: ['Debian 12', 'Nginx', 'Fail2ban'],
    meta: {
      technologies: "Debian 12, Nginx, Netfilter/iptables, Fail2ban, SSL/TLS, Let's Encrypt",
      duration: 'Environ 3 semaines',
      contexte: 'Projet académique BTS SIO / E4',
    },
    results: [
      { value: '100%', label: "des intrusions de niveau 1 bloquées aux tests" },
      { value: '3', label: 'ports strictement nécessaires exposés' },
      { value: '4096', label: 'bits pour les clés SSH RSA' },
    ],
    sections: [
      {
        heading: '1. Contexte & problématique',
        paragraphs: [
          "Dans le cadre de l'épreuve E4 du BTS SIO, l'objectif était de concevoir de bout en bout une infrastructure web capable d'être exposée sur Internet sans compromettre la sécurité du système. Les serveurs web mal configurés sont une cible privilégiée des scans automatisés : ports ouverts inutilement, comptes root accessibles en SSH, absence de chiffrement. Le cahier des charges imposait de repartir d'un système vierge plutôt que d'une image préconfigurée, afin de maîtriser chaque brique installée.",
        ],
      },
      {
        heading: '2. Architecture mise en place',
        paragraphs: [
          'Le serveur repose sur une machine virtuelle Debian 12 en édition Minimal, sans interface graphique, pour réduire la surface d\'attaque et la consommation de ressources. Nginx sert de serveur web frontal, avec un unique reverse proxy exposé publiquement. Le pare-feu Netfilter filtre l\'intégralité du trafic entrant et sortant avant même qu\'il n\'atteigne les services applicatifs.',
        ],
      },
      {
        heading: '3. Étapes de réalisation',
        list: [
          { bold: 'Installation du système', text: 'déploiement d\'une Debian 12 Minimal sur machine virtuelle, partitionnement manuel, création d\'un compte administrateur non-root dès l\'installation.' },
          { bold: 'Mise à jour & durcissement de base', text: 'mise à jour complète des paquets, désactivation des services non nécessaires, configuration du fuseau horaire et de la synchronisation NTP pour des logs exploitables.' },
          { bold: 'Configuration du pare-feu Netfilter', text: 'écriture de règles iptables avec politique DROP par défaut sur les chaînes INPUT et FORWARD. Autorisation explicite des flux TCP 80 (HTTP), 443 (HTTPS) et du port SSH personnalisé, avec sauvegarde des règles au démarrage via iptables-persistent.' },
          { bold: 'Sécurisation SSH', text: 'changement du port par défaut, désactivation de la connexion directe au compte root (PermitRootLogin no), authentification exclusivement par paire de clés RSA 4096 bits, désactivation de l\'authentification par mot de passe.' },
          { bold: 'Installation & configuration de Nginx', text: 'mise en place des blocs serveur, configuration des en-têtes de sécurité (X-Frame-Options, X-Content-Type-Options), désactivation de l\'affichage de la version du serveur.' },
          { bold: 'Protection Fail2ban', text: 'configuration d\'une jail dédiée à SSH avec bannissement automatique après 3 tentatives infructueuses sur une fenêtre de 10 minutes, durée de bannissement progressive en cas de récidive.' },
          { bold: 'Chiffrement SSL/TLS', text: 'génération d\'un certificat, configuration de Nginx pour rediriger systématiquement le trafic HTTP vers HTTPS, désactivation des protocoles TLS obsolètes (TLS 1.0 et 1.1).' },
        ] as ListItem[],
      },
      {
        heading: '4. Difficultés rencontrées',
        paragraphs: [
          'La principale difficulté a été de calibrer les règles Fail2ban sans provoquer de faux positifs lors des phases de test, où de nombreuses connexions légitimes échouaient à cause d\'erreurs de configuration côté client. Le second point délicat a concerné la persistance des règles Netfilter au redémarrage, qui nécessitait un service dédié plutôt qu\'un simple script.',
        ],
      },
      {
        heading: '5. Tests & validation',
        paragraphs: [
          'Le serveur a été testé face à des outils d\'analyse de vulnérabilités (Nmap pour le scan de ports, Nikto pour l\'analyse des failles web courantes). Seuls les ports strictement nécessaires apparaissent ouverts lors d\'un scan externe. Des tentatives de connexion SSH par force brute simulées ont été bloquées après le seuil configuré, confirmant le bon fonctionnement de Fail2ban.',
        ],
      },
      {
        heading: '6. Résultat & compétences acquises',
        paragraphs: [
          'Le niveau de durcissement (hardening) atteint permet de bloquer 100 % des tentatives d\'intrusion de niveau 1 lors des tests. Ce projet a permis de comprendre en profondeur le fonctionnement d\'un pare-feu Linux au niveau des règles, au-delà de la simple configuration d\'une interface graphique, ainsi que l\'articulation entre plusieurs couches de sécurité complémentaires (réseau, authentification, chiffrement, détection d\'intrusion).',
        ],
      },
    ],
  },
  {
    slug: 'script-sauvegarde-systeme',
    eyebrow: 'Automatisation',
    title: 'Script de sauvegarde système',
    summary:
      "Solution développée en mission de stage pour automatiser les sauvegardes critiques sans intervention manuelle : extraction quotidienne, archivage horodaté, vérification d'intégrité par empreinte SHA-256, rétention glissante de 30 jours et rapport d'exécution envoyé par mail.",
    tags: ['Python 3', 'Crontab', 'SHA-256'],
    meta: {
      technologies: 'Python 3, Bash, Crontab, SHA-256, sendmail',
      duration: '2 semaines de développement, en production depuis',
      contexte: 'Mission de stage chez TechData',
    },
    results: [
      { value: '30 j', label: 'de rétention glissante des archives' },
      { value: '0', label: 'sauvegarde manquée depuis la mise en production' },
      { value: '02h00', label: 'heure d\'exécution nocturne automatique' },
    ],
    sections: [
      {
        heading: '1. Problématique initiale',
        paragraphs: [
          "L'entreprise manquait d'une solution centralisée et légère pour effectuer des sauvegardes régulières des fichiers de configuration réseau et des bases de données. Les sauvegardes existantes étaient déclenchées manuellement par les techniciens, de façon irrégulière, sans vérification de leur intégrité ni traçabilité en cas d'échec. Le besoin exprimé était un outil autonome, capable de tourner sans surveillance humaine et sans impacter la bande passante durant les heures de travail.",
        ],
      },
      {
        heading: '2. Analyse & choix techniques',
        paragraphs: [
          "Python a été choisi pour la logique métier (sélection des répertoires, calcul d'empreintes, gestion des erreurs) pour sa lisibilité et sa gestion native des exceptions, complété par des appels Bash pour les opérations système bas niveau (compression, permissions). Crontab a été retenu plutôt qu'un service dédié pour sa simplicité de maintenance par une petite équipe technique.",
        ],
      },
      {
        heading: '3. Fonctionnalités développées',
        list: [
          { bold: 'Extraction automatique', text: 'récupération quotidienne des répertoires cibles (/etc, /var/www, bases SQL) via une liste de chemins configurable dans un fichier séparé, pour éviter de modifier le script à chaque ajustement du périmètre.' },
          { bold: 'Compression & archivage', text: 'création d\'archives horodatées au format .tar.gz, avec un nommage incluant la date et l\'heure pour éviter tout écrasement accidentel.' },
          { bold: 'Contrôle d\'intégrité', text: 'calcul de l\'empreinte SHA-256 de chaque archive immédiatement après création, stockée dans un fichier de contrôle séparé pour détecter toute altération ultérieure du fichier.' },
          { bold: 'Rétention glissante', text: 'suppression automatique des archives de plus de 30 jours pour préserver l\'espace disque, avec conservation systématique de la dernière sauvegarde même si elle dépasse ce délai.' },
          { bold: 'Gestion des erreurs', text: 'chaque étape (extraction, compression, calcul d\'empreinte) est encadrée par une gestion d\'exception qui interrompt proprement le script et consigne la cause exacte de l\'échec dans un fichier de log dédié.' },
          { bold: 'Alerte mail', text: "envoi automatique d'un rapport d'exécution à l'administrateur système, résumant les fichiers sauvegardés, la taille de l'archive générée et un statut clair (succès ou erreur avec détail)." },
        ] as ListItem[],
      },
      {
        heading: '4. Difficultés rencontrées',
        paragraphs: [
          "Le principal défi a été de garantir que le script ne s'exécute jamais partiellement de façon silencieuse : une compression interrompue en cours de route aurait pu laisser une archive corrompue perçue comme valide. La solution a consisté à écrire l'archive dans un répertoire temporaire et à ne la déplacer vers son emplacement final qu'une fois le contrôle d'intégrité validé.",
        ],
      },
      {
        heading: '5. Déploiement & suivi',
        paragraphs: [
          "Le script a été intégré dans la crontab du serveur principal pour une exécution nocturne à 02h00, en dehors des heures de forte activité réseau. Il tourne actuellement en production sans interruption depuis sa mise en place, avec un historique de rapports mail permettant de vérifier a posteriori qu'aucune sauvegarde n'a été manquée.",
        ],
      },
      {
        heading: '6. Résultat & compétences acquises',
        paragraphs: [
          "Ce projet a permis de passer d'une pratique manuelle et irrégulière à un processus fiable et traçable, sans charge de maintenance pour l'équipe. Il a été l'occasion de manipuler en profondeur la gestion d'erreurs en Python, l'articulation entre scripts Python et commandes système, et la conception d'un outil pensé pour fonctionner sans surveillance humaine.",
        ],
      },
    ],
  },
  {
    slug: 'deploiement-active-directory',
    eyebrow: 'Systèmes Windows',
    title: 'Déploiement Active Directory & GPO',
    summary:
      "Mise en place d'un domaine Active Directory complet pour un parc hétérogène : structuration en unités d'organisation, stratégies de groupe pour le verrouillage des sessions et la diffusion d'imprimantes, et politique de mots de passe renforcée pour homogénéiser la sécurité sans intervention poste par poste.",
    tags: ['Windows Server', 'Active Directory', 'GPO'],
    meta: {
      technologies: 'Windows Server 2022, Active Directory, GPO, DNS, DHCP',
      duration: 'Environ 3 semaines',
      contexte: 'Projet académique BTS SIO / E5',
    },
    results: [
      { value: '~30', label: 'postes du parc simulé standardisés' },
      { value: '90 j', label: "d'expiration des mots de passe" },
      { value: '5', label: 'tentatives avant verrouillage de compte' },
    ],
    sections: [
      {
        heading: '1. Contexte & problématique',
        paragraphs: [
          "Le scénario de l'épreuve E5 partait d'un parc informatique fictif d'une trentaine de postes gérés de façon indépendante : chaque machine avait ses propres comptes locaux, aucune politique de mot de passe commune, et l'installation d'imprimantes ou de logiciels se faisait poste par poste. Cette situation posait un problème de sécurité évident (mots de passe faibles, comptes orphelins) et un problème d'efficacité (temps perdu à répéter les mêmes configurations).",
        ],
      },
      {
        heading: '2. Architecture mise en place',
        paragraphs: [
          "Un serveur Windows Server 2022 a été promu contrôleur de domaine, avec le service DNS intégré pour la résolution de noms interne, condition indispensable au bon fonctionnement d'Active Directory. L'annuaire a été structuré en unités d'organisation reflétant les services de l'entreprise fictive, chacune recevant ses propres stratégies de groupe pour permettre une granularité fine sans dupliquer les règles communes.",
        ],
      },
      {
        heading: '3. Étapes de réalisation',
        list: [
          { bold: 'Installation du rôle AD DS', text: 'promotion du serveur en contrôleur de domaine, configuration de la zone DNS intégrée à l\'annuaire, vérification de la réplication et de la résolution de noms avant toute étape suivante.' },
          { bold: 'Structure de l\'annuaire', text: 'création d\'unités d\'organisation (OU) par service, avec des sous-OU distinguant postes et utilisateurs pour faciliter l\'application ciblée des stratégies. Création des groupes de sécurité et des comptes utilisateurs avec convention de nommage documentée.' },
          { bold: 'Stratégies de groupe (GPO)', text: 'verrouillage automatique des sessions après une période d\'inactivité, restriction de l\'accès au panneau de configuration pour les comptes utilisateurs standards, déploiement automatique d\'imprimantes réseau par service via GPO plutôt que par installation manuelle.' },
          { bold: 'Politique de mots de passe', text: 'complexité renforcée (majuscules, chiffres, caractères spéciaux), expiration à 90 jours, verrouillage du compte après 5 tentatives infructueuses avec réinitialisation automatique du compteur après 30 minutes.' },
          { bold: 'Jonction des postes clients', text: 'intégration au domaine poste par poste, vérification systématique de l\'application des stratégies via la commande gpresult /r pour détecter d\'éventuels conflits d\'héritage entre OU.' },
          { bold: 'Documentation', text: 'rédaction d\'un schéma de l\'annuaire et d\'une procédure de création de compte, pour qu\'un autre administrateur puisse reprendre la gestion du domaine sans connaissance préalable des choix effectués.' },
        ] as ListItem[],
      },
      {
        heading: '4. Difficultés rencontrées',
        paragraphs: [
          "La difficulté principale a été de gérer l'héritage des stratégies de groupe entre unités d'organisation imbriquées : une GPO appliquée au niveau racine du domaine pouvait être écrasée ou fusionnée de façon inattendue par une GPO plus spécifique. Il a fallu utiliser l'outil de modélisation de stratégie de groupe pour visualiser le résultat effectif avant application, plutôt que de le découvrir a posteriori sur les postes clients.",
        ],
      },
      {
        heading: '5. Tests & validation',
        paragraphs: [
          "Chaque GPO a été testée sur un poste de validation avant déploiement sur l'ensemble du parc simulé, afin d'éviter qu'une erreur de configuration ne bloque plusieurs postes simultanément. La politique de mots de passe a été vérifiée en tentant volontairement des mots de passe non conformes, et le verrouillage de compte a été testé avec des tentatives de connexion délibérément erronées.",
        ],
      },
      {
        heading: '6. Résultat & compétences acquises',
        paragraphs: [
          "L'ensemble des postes du parc applique désormais les mêmes règles de sécurité sans intervention manuelle poste par poste, et la création d'un nouvel utilisateur ou l'ajout d'un nouveau poste suit une procédure standardisée de quelques minutes contre une configuration manuelle complète auparavant. Ce projet a permis d'appréhender concrètement la logique d'héritage des GPO, la conception d'une arborescence d'annuaire cohérente avec l'organisation réelle d'une structure, et l'importance de documenter les choix d'administration pour la continuité du service.",
        ],
      },
    ],
  },
]

export const certifications = [
  { name: 'PIX — Niveau avancé', note: 'Certification des compétences numériques — 2024', status: 'obtenue' as const },
  { name: 'Cisco CCNA — Introduction to Networks', note: 'Fondamentaux réseau, routage et commutation — session visée : fin 2026', status: 'en préparation' as const },
  { name: 'TOEIC', note: 'Anglais professionnel — session visée : fin 2026', status: 'en préparation' as const },
  { name: 'Microsoft Certified: Windows Server Hybrid Administrator', note: 'Administration Active Directory, GPO et environnements hybrides — session visée : 2027', status: 'en préparation' as const },
]

export const veille = [
  { title: 'Sécurité des infrastructures & CVE', text: "Suivi des bulletins de vulnérabilités (CERT-FR, NVD) touchant les services que j'administre — Nginx, OpenSSH, Fail2ban — pour anticiper les correctifs à appliquer." },
  { title: 'Évolutions Active Directory & Windows Server', text: 'Veille sur les nouvelles stratégies de groupe et les recommandations Microsoft en matière de durcissement des annuaires d\'entreprise.' },
  { title: 'Automatisation & scripting réseau', text: "Découverte d'outils d'automatisation d'infrastructure (Ansible, scripts Python avancés) pour aller au-delà des tâches manuelles répétitives." },
  { title: 'Virtualisation & conteneurisation', text: 'Découverte de Proxmox et Docker en environnement personnel, pour comprendre comment les infrastructures modernes s\'éloignent du tout-matériel physique.' },
]

export const contact = {
  heading: 'Me contacter',
  body: 'Disponible pour une alternance à partir de la rentrée 2026.',
  availabilityNote:
    "Basé en région Auvergne-Rhône-Alpes, mobile pour une alternance dans un rayon élargi. Rythme recherché : 3 semaines entreprise / 1 semaine centre de formation, à partir de septembre 2026.",
  linkedin: 'https://linkedin.com',
  looking:
    "Une alternance en administration systèmes et réseaux, idéalement dans une structure où je pourrai continuer à toucher à la fois à l'infrastructure Linux, à l'environnement Windows Server et à des problématiques de sécurité concrètes. Je porte un intérêt particulier aux missions incluant du scripting d'automatisation, à l'image du script de sauvegarde développé durant mon stage.",
  faq: [
    { question: 'Quelle est ta date de disponibilité ?', answer: "Rentrée de septembre 2026, en rythme d'alternance 3 semaines entreprise / 1 semaine centre de formation." },
    { question: "Quel type de structure t'intéresse ?", answer: "PME comme grand groupe, du moment que le poste couvre à la fois l'administration système, le réseau et des enjeux de sécurité concrets plutôt qu'une mission cantonnée au support de premier niveau." },
    { question: 'Es-tu disponible pour un entretien avant la rentrée ?', answer: 'Oui, je peux échanger dès maintenant par mail ou visioconférence pour discuter d\'une alternance à venir.' },
  ],
}
