//certificate subject title {default text size-50}
let txt_S='30px'
//certificate subject Titles{subTitle__}
// title0
let subTitle="10th English unit-1";
// title1
let subTitle1="Prose The young seegul synonyms online test";
// title2
let subTitle2="2021-batch";
// title3
let subTitle3="With Below Result";

//Test Unit-{quiz start page,quiz page}
let testUnit="10th English unit-1"
//================paste --Quetion-- below named {qtnr}========
let qtnr=[ 
        { 
          question: "<img src='../qtn_imgs/q1.jpg' width='100%'/>", 
          answers: { 
            a: "<img src='../qtn_imgs/q1.jpg' width='100%'/>", 
            b: "humorous", 
            c: "ridiculous", 
            d: "cooked up", 
        }, 
          correctAnswer: "a", 
        }
        , 
        { 
          question: "Its <u>advent</u> caused my mother to throw a shoe.", 
          answers: { 
            a: "arrival", 
            b: "departure", 
            c: "rise", 
            d: "coming", 
          }, 
          correctAnswer: "b", 
        }
        , 
        { 
          question: "My mother was <u>asleep</u> in her room.", 
          answers: { 
            a: "slumber", 
            b: "resting", 
            c: "awake", 
            d: "working", 
          }, 
          correctAnswer: "c", 
        }
  , 
        { 
          question: "They were the steps of a man walking <u>rapidly</u>.", 
          answers: { 
            a: "roughly", 
            b: "quickly", 
            c: "hurriedly", 
            d: "slowly", 
          }, 
          correctAnswer: "d", 
        }, 
        { 
          question: "I could see the faint <u>shine</u> of plates.", 
          answers: { 
            a: "gloomy", 
            b: "dim", 
            c: "dark", 
            d: "light", 
          }, 
          correctAnswer: "a", 
        }, 
 
              { 
          question: "At <u>regular</u> intervals a board creaked in the upstairs.", 
          answers: { 
            a: "usual", 
            b: "irregular", 
            c: "equal", 
            d: "similar", 
          }, 
          correctAnswer: "b", 
        }, 
 
        { 
          question: "She shouted <u>intuitively</u>.", 
          answers: { 
            a: "senselessly", 
            b: "terribly", 
            c: "sensibly", 
            d: "immediately", 
          }, 
          correctAnswer: "c", 
        }, 
 
        { 
          question: "Mother made one of her <u>incomparable</u> decisions.", 
          answers: { 
            a: "well planned", 
            b: "pre planned", 
            c: "hasty", 
            d: "comparable", 
          }, 
          correctAnswer: "d", 
        }, 
 
        { 
          question: "She flung a shoe across the <u>narrow</u> spot.", 
          answers: { 
            a: "wide", 
            b: "small", 
            c: "high", 
            d: "crocked", 
          }, 
          correctAnswer: "a", 
        }, 
 
        { 
          question: "Bodwell was subject to <u>mild</u> attacks.", 
          answers: { 
            a: "gentle", 
            b: "harsh", 
            c: "light", 
            d: "muscled", 
          }, 
          correctAnswer: "b", 
        }, 
 
              { 
          question: "Clouds hung black and <u>low</u>.", 
          answers: { 
            a: "bottom", 
            b: "top", 
            c: "high", 
            d: "long", 
          }, 
          correctAnswer: "c", 
        }, 
 
        { 
          question: "The lady seems <u>hysterical</u>.", 
          answers: { 
            a: "mad", 
            b: "senseless", 
            c: "wise", 
            d: "sane", 
          }, 
          correctAnswer: "d", 
        }, 
 
        { 
          question: "Grandfather evidently jumped to the <u>conclusion</u>.", 
          answers: { 
            a: "beginning", 
            b: "decision", 
            c: "final", 
            d: "consideration", 
          }, 
          correctAnswer: "a", 
        }, 
 
        { 
          question: "The <u>indignant</u> old man belonged to the house.", 
          answers: { 
            a: "happy", 
            b: "angry", 
            c: "calm", 
            d: "sad", 
          }, 
          correctAnswer: "c",
  }
]
// ===========================================================
let qtn;
function shuffleArr() {
 qtn= qtnr.sort(() => (Math.random() > .5) ? 1 : -1)
}
shuffleArr()
export {qtn,shuffleArr,subTitle,testUnit,subTitle1,subTitle2,subTitle3,txt_S}