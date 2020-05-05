import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root'
})

export class MediaItemService {

    mediaItems = [
        {
            id: 1, 
            name: 'Anchor in hope', 
            source: 'https://www.youtube.com/embed/RoSO3_0Ufr0',
            videos: [
                {
                    id: 1, 
                    title: "Adrienne is cool", 
                    url: 'https://www.youtube.com/embed/RoSO3_0Ufr0'
                }
            ],
            category: 'Calm Yoga', 
            isFavorite: false,
            quizzType: 'multiple',
            questions: [
                {
                    id: 1, 
                    question: "What color shirt did Adrian wear in the video?",
                    correct: "red",
                    options: ["green", "purple", "turquois"]
                }
            ]
        },
        {
            id: 2, 
            name: 'Bewerte deinen Home Office Skill', 
            source: 'https://www.youtube.com/embed/yhB2z9XquUU',
            videos: [
                {
                    id: 1, 
                    title: "Regelmäßiger Tagesrythmus",
                    text: 'Durch das Homeoffice kann der Tagesrhythmus ganz schön aus dem Gleichgewicht geraten. Auf einmal müssen die Kinder nicht mehr rechtzeitig in der Schule sein, der Arbeitsweg entfällt und schon ist der chaotische Tagesrhythmus drin. Das heißt nicht, dass jeder Mensch früh aufstehen muss. Wichtig ist nur, dass du weiß zu welchen Zeiten du am produktivsten ist und diese Zeit dementsprechend regelmäßig nutzt. Wie gut kennst du "deine Zeiten" und wie regelmäßig nutzt du sie dementsprechend?"',
                    url: "https://www.youtube.com/embed/yhB2z9XquUU"
                },
                {
                    id: 2, 
                    title: "Ergonomie",
                    text: `Ein ergonomischer Arbeitsplatz im Büro wird in der Regel vom Arbeitgeber gewährleistet. Zu Hause kann das jedoch ganz anders aussehen, vor allem, wenn du bis dato nicht im Homeoffice gearbeitet hast.

                    Wie bewertest du die Ergonomie deines Arbeitsplatzes, wenn du dir die folgenden Empfehlungen durchlesen:
                    - Eine ergonomische Tastatur und Maus sind vorhanden
                    - Dein Stuhl ist höhenverstellbar, erlaubt Positionswechsel und hat Armlehnen
                    - Der Schreibtisch ist auch höhenverstellbarer und verfügt über ausreichend Fläche (empfehlenswert sind mind 1,28 m² bzw. 160 x 80 cm Arbeitsfläche)
                    - Die ideale Sitzposition sieht so aus: Ober- und Unterarme bilden einen Winkel von mind. 90°, wobei die Oberarme locker herunterhängen können. Gleichzeitig bilden Ober- und Unterschenkel ebenfalls einen Winkel von mind. 90°, wobei die Oberschenkel voll auf der Sitzfläche aufliegen
                    - Du hast einen Monitor mit mind. 80 cm Abstand zum Auge
                    - Dein Arbeitsplatz ist beleuchtet, aber ohne blendende Lichtquellen
                    - Wenig Lärmquellen im nähren Umfeld`,
                    url: "https://www.youtube.com/embed/5dsGWM5XGdg"
                },
                {
                    id: 3,
                    title: 'Selbstmanagement',
                    text: `Konzentriert aber nicht zu lange arbeiten, Pausen nicht vergessen, ohne die leichte Absprache im Büro trotzdem priorisieren und dabei vielleicht sogar Kinder und Mitbewohner jonglieren. Keine leichte Aufgabe!

                    Die Kunst die Balance in alledem zu finden nennen wir Selbstmanagement. Stress pur für dich oder kein Problem?`,
                    url: ''
                },
                {
                    id: 4, 
                    title: 'Frische Luft',
                    text: `Der Hashtag "WeStayHome" wirbt für zu Hause bleiben, frische Luft zu schnappen hat aber diverse Vorteile: Das Draußen-Sein in natürlicher oder naturnaher Umgebung baut Stress ab und lindert Ängste, es macht gelassen und kreativ. Und wer kann das derzeit nicht gebrauchen?!

                    Es muss kein riesiger Waldspaziergang sein, auch viele kleine Gänge vor die Türe können dem Lagerkoller und Bewegungsmangel entgegenwirken. Wie schätzt du dich dahingehend ein?`,
                    url: ''
                },
                {
                    id: 5, 
                    title: 'Kommunikation mit Haushaltsmitgliedern',
                    text: `Wusstest du, dass nach der Lockerung der Quarantänevorschriften in der zentralchinesischen Metropole Xi‘an die Scheidungstermine ausgebucht waren?

                    Das vermehrte Beisammensein durch die Ausgangsbeschränkungen wirkt wie eine Lupe auf die Konflikte mit den Menschen die uns am nähsten sind. Wie gut bist du darin Probleme anzusprechen und Lösungen für sie zu finden?`,
                    url: ''
                },
                {
                    id: 6, 
                    title: 'Sport',
                    text: `Fitnessstudios, Schwimmbäder und andere Sporthallen sind derzeit geschlossen. Umfragen zeigen, dass 31% der Deutschen bereits mehr oder weniger regelmäßig Sport zu Hause betreiben.

                    Tust du was für deine körperliche Gesundheit nötig ist und treibst regelmäßig Sport?`,
                    url:''
                },
                {
                    id: 7, 
                    title: 'Soziale Kontakte pflegen',
                    text: `Soziale Distanzierung wird gefordert im Kampf gegen Corona, jedoch ist dieser Begriff irrefürend. Viel besser ist: räumliche Distanzierung.

                    Menschen sind soziale Wesen und benötigen den Kontakt mit anderen. Bleibst du, im Rahmen des Möglichen, im Kontakt mit Freunden und Familie?`,
                    url:''
                }, 
                {
                    id: 8,
                    title: 'Abwechslung suchen neben Arbeit',
                    text: `Lass dich nicht dazu verleiten ständig Überstunden zu schieben, Projekte übermäßig zu perfektionieren und nur für die Arbeit zu leben. Es kann leicht passieren in einen Trott zu kommen, wenn man immer am selben Ort ist.

                    Suchst du dir neben der Arbeit Projekte, die du z.B. gemeinsam mit deiner Familie oder auch alleine machst?`,
                    url:''
                }
            ],
            category: 'Quizz',
            isFavorite: true,
            quizzType: 'slider', 
            questions: [
                {
                    id: 1, 
                    question: "Bewerte Deinen Tagesrythmus"
                },
                {
                    id: 2, 
                    question: "Bewerte die Ergonomie Deines Arbeitsplatzes"
                }, 
                {
                    id: 3,
                    question: 'Bewerte Dein Selbstmanagement'
                },
                {
                    id: 4,
                    question: 'Bewerte Deine Frischluftzufuhr'
                },
                {
                    id: 5, 
                    question: 'Bewerte Deine Kommunikation'
                }, 
                {
                    id: 6, 
                    question: 'Bewerte Deine Sportlichkeit'
                }, 
                {
                    id: 7, 
                    question: 'Bewerte, wie Du Deine sozialen Kontakte pfelgst'
                },
                {
                    id: 8,
                    question: 'Bewerte, wieviel Abwechslung Du hast'
                }
            ],
            result_categories: [
                {
                    id: 1,
                    description: "Home Office Pro",
                    text: `Am Schreibtisch mit großen Monitor und höhenverstellbarem Stuhl sitzt es sich auch nach 8 Stunden noch gut. Dein Rücken ist gestählt, die Haushaltsmitglieder kennen die Regeln und halten sich an sie. Die Fotos deiner Ausflüge inspirieren dein Umfeld, mit denen du den Kontakt weiter digital hältst. Was die derzeitige Situation auch mit sich bringt, souverän gehst du damit um und bleibst entspannt.

                    "I have nothing more to teach you!"`,
                    picture: "./assets/professional.jpg"
                },
                {
                    id: 2, 
                    description: "Home Office Semi-Pro",
                    text: `Du hast den Dreh schon ganz gut raus wenn es um das Arbeiten zu Hause geht. Dir kann man kaum noch etwas vormachen in deinem Alltag und auch das Drumherum mit den Haushaltsmitgliedern sowie dem Ausgleich groovt sich langsam ein. An manchen Stellschrauben kannst du drehen aber die wichtigsten Hürden sind geschafft!`,
                    picture: "./assets/semipro.jpg"
                },
                {
                    id: 3,
                    description: "Home Office Beginner",
                    text: `Du hast die ersten Babyschritte gemacht um dein Home Office einzurichten und tust dein Bestes. Dennoch gibt es viel Potential zur Verbesserung und du weißt es!`,
                    picture: "./assets/beginner.jpg"
                },
                {
                    id: 4, 
                    description: "Home Office Noob",
                    text: `Dein Laptop ist gebrechlich und auf der Couch sitzend krümmst du dich über das Touchpad und starrst auf den winzigen Monitor. Den Rest des Tages verbringst du auch auf der Couch, weinst den guten alten Zeiten nach und versinkst immer tiefer in der Misere. Wir sagen dir ganz klar: So kann das nicht weiter gehen!!`,
                    picture: "./assets/noob.jpg"
                }
            ],
        }
    ];

    get() {
        return this.mediaItems
    }

    add(mediaItem) {
        this.mediaItems.push(mediaItem)
    }

    delete(mediaItem) {
        const index = this.mediaItems.indexOf(mediaItem);
        if (index >=0) {
            this.mediaItems.splice(index, 1);
        }
    }

}