export const CATEGORIES = {
    attitudeEtComportement : {chapitre: 1, nom: "Attitude et comportement"},
    bilans : {chapitre : 2, nom: "Bilans"},
    protectionEtSecurite : {chapitre : 3, nom: "Protection et sécurité"},
    hygieneEtAseptie : {chapitre : 4, nom: "Hygiène et aseptie"},
    urgencesVitales : {chapitre: 5, nom: "Urgences vitales"},
    malaisesEtAffectionSpecifiques : {chapitre: 6, nom: "Malaises et affection spécifique"},
    atteintesCirconstentielles : {chapitre: 7, nom: "Atteintes circonstentielles"},
    traumatismes : {chapitre: 8, nom: "Traumatismes"},
    souffrancesPsychologiquesEtComportementsInhabituels: {chapitre: 9, nom: "Souffrances psychologiques et comportements inhabituels"},
    relevageEtBrancardage: {chapitre: 10, nom: "Relevage et brancardage"},
    situationsParticulières: {chapitre: 11, nom: "Situations particulières"}
};

export const QUESTIONS_CHAP2 = [
    {
        question: "Quel est l'objectif principal du bilan dans la prise en charge d'une victime ?",
        options: [
            "Administrer les premiers soins adaptés à la victime", 
            "Recueillir des informations permettant d'évaluer la situation et l'état de la victime tout au long de sa prise en charge", 
            "Décider immédiatement de l'hospitalisation de la victime", 
            "Réaliser des gestes de réanimation cardio-pulmonaire"],
        answer: "Recueillir des informations permettant d'évaluer la situation et l'état de la victime tout au long de sa prise en charge",
        code: "[02AC01 / 12-2023] PSE1"
    },
    {
        question: "Quels sont les principes à respecter lors de la réalisation d'un bilan sur une victime ?",
        options: [
            "Fournir immédiatement les premiers soins sans évaluation préalable.", 
            "Commencer par une évaluation globale, puis aller dans le détail, rechercher et traiter en priorité « ce qui tue en premier », et fonctionner en cercles de contrôle continu (évaluer, agir, contrôler, réévaluer)", 
            "Se concentrer uniquement sur les blessures visibles et ignorer les signes vitaux", 
            "Commencer le traitement médical définitif sur le terrain avant l'arrivée des secours spécialisés."],
        answer: "Commencer par une évaluation globale, puis aller dans le détail, rechercher et traiter en priorité « ce qui tue en premier », et fonctionner en cercles de contrôle continu (évaluer, agir, contrôler, réévaluer)",
        code: "[02AC01 / 12-2023] PSE1"
    },
    {
        question: "Combien de regard(s) distingue l'approche chronologique du bilan ?",
        options: [
            "2",
            "3",
            "4",
            "5"
        ],
        answer: "4",
        code : "[02AC01 / 12-2023] PSE1"
    },
    {
        question: "Quel regard apprécie la situation dans sa globalité pour déceler d’éventuels dangers pour l’équipe, la victime et son environnement ?",
        options: [
            "Premier regard",
            "Deuxième regard",
            "Troisième regard",
            "Quatrième regard"
        ],
        answer: "Premier regard",
        code : "[02AC01 / 12-2023] PSE1"
    },
    {
        question: "Quel regard progresse vers la victime et a pour objectif d’identifier une menace vitale ainsi que la plainte principale ?",
        options: [
            "Premier regard",
            "Deuxième regard",
            "Troisième regard",
            "Quatrième regard"
        ],
        answer: "Deuxième regard",
        code : "[02AC01 / 12-2023] PSE1"
    },
    {
        question: "Quel regard repose sur une évaluation hiérarchisée et structurée des fonctions vitales, l’une après l’autre pour rechercher une détresse vitale moins évidente ?",
        options: [
            "Premier regard",
            "Deuxième regard",
            "Troisième regard",
            "Quatrième regard"
        ],
        answer: "Troisième regard",
        code : "[02AC01 / 12-2023] PSE1"
    },
    {
        question: "Quel regard permet de compléter l’évaluation en approfondissant l’interrogatoire, en examinant la victime et en poursuivant la mesure des paramètres vitaux ?",
        options: [
            "Premier regard",
            "Deuxième regard",
            "Troisième regard",
            "Quatrième regard"
        ],
        answer: "Quatrième regard",
        code : "[02AC01 / 12-2023] PSE1"
    },
    {
        question: "À partir de quel regard une logique de surveillance de la victime débute ?",
        options: [
            "Premier regard",
            "Deuxième regard",
            "Troisième regard",
            "Quatrième regard"
        ],
        answer: "Deuxième regard",
        code : "[02AC01 / 12-2023] PSE1"
    },

];