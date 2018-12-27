import React from 'react';
import fraserPicture from './pictures/plage-fraserIsland.jpg';
import goatPicture from './pictures/goatisland.jpg';
import southSydneyPicture from './pictures/south-sydney.jpg';
import doringoPicture from './pictures/dorrigo-rainforestnationalpark.jpg';
import teHengaPicture from './pictures/TeHanga-Goldie-Bushwalk.jpg';
import blueMontainsPicture from './pictures/GrandCanyon-BlueMountains.jpeg';
import platypusPicture from './pictures/platypus-eungellanationalpark.jpg';
import whangareifallsPicture from './pictures/vegetation-whangareifalls.jpg';
import pinnaclesPicture from './pictures/Pinnacles.jpg';
import failPicture from './pictures/GrandCanyon-Lookout-Bleumountains.jpg';
import './AusNzQuiz.css';

export default class AusNzQuiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          title: 'La plage',
          img: fraserPicture,
          aus: {
            correct: true,
            text:
              'Bonne réponse ! Voici une des nombreuses plages de Fraser Island, la plus grande île de sable au monde au large de la côte est.',
          },
          nz: {
            text:
              'Perdu ! Voici une des nombreuses plages de Fraser Island, la plus grande île de sable au monde au large de la côte est.',
          },
        },
        {
          title: 'L‘île',
          img: goatPicture,
          aus: {
            text: "Perdu, c'est Goat Island (l'île de la chêvre) en Nouvelle-Zélande.",
          },
          nz: {
            correct: true,
            text:
              "Bien joué ! Vous avez reconnu Goat Island (l'île de la chêvre) en Nouvelle-Zélande. Bêêêê !",
          },
        },
        {
          title: 'La vue',
          img: southSydneyPicture,
          aus: {
            correct: true,
            text: 'Bravo, vous admirez les plaines au Sud de Sydney en Australie.',
          },
          nz: {
            text:
              "Et non ! La Nouvelle-Zélande n'est pas si plate ! Vous admirez les plaines au Sud de Sydney en Australie.",
          },
        },
        {
          title: 'La vue (bis)',
          img: doringoPicture,
          aus: {
            correct: true,
            text:
              'Qui a dit qu\'il ne pleuvait jamais en Australie ? Bienvenue au Dorrigo Rainforest National Park. Ces "rainforest" ou "forêts tropicales" sont très présentes sur la côte est Australienne et en Nouvelle-Zélande.',
          },
          nz: {
            text:
              'On vous avait prévenus, il y a des pièges ! Bienvenue au Dorrigo Rainforest National Park. Ces "rainforest" ou "forêts tropicales" sont très présentes sur la côte est Australienne et en Nouvelle-Zélande.',
          },
        },
        {
          title: 'La plage (bis)',
          img: teHengaPicture,
          aus: {
            text:
              'Pouin pouin pouin, cette eau turquoise a été vue depuis la Nouvelle-Zélande, lors de la marche côtière "Te Henga".',
          },
          nz: {
            correct: true,
            text:
              'Bien vu ! L\'eau peut aussi être turquoise et paradisiaque en Nouvelle-Zélande, surtout sous ce beau soleil le long du littoral "Te Henga".',
          },
        },
        {
          title: "La forêt & l'aventurier",
          img: blueMontainsPicture,
          aus: {
            correct: true,
            text:
              "Encore l'Australie ? C'est l'jeu ma pauvre Lucette... N'est-il pas beau notre aventurier au coeur de la rainforest du parc national des Blues Mountains ?",
          },
          nz: {
            text:
              "Perdu ! L'intrepide Paulin se trouve au coeur de la rainforest du parc national des Blues Mountains en Australie.",
          },
        },
        {
          title: "L'animal",
          img: platypusPicture,
          aus: {
            correct: true,
            text:
              "Des connaisseurs de l'ornithorynque (ou platypus en anglais) ? Bravo en tout cas, celui-là barbotait dans une rivière du Parc National Eunguella et on n'en trouve que dans ce pays.",
          },
          nz: {
            text:
              'Perdu ! Dites "Bonjour" à l\'ornithorynque (ou platypus en anglais) qui barbotait dans une rivière du Parc National Eunguella en Australie. On n\'en trouve que dans ce pays !',
          },
        },
        {
          title: 'La forêt (bis)',
          img: whangareifallsPicture,
          aus: {
            text:
              'Pas facile hein ? Cette rainforest se trouve en Nouvelle-Zélande, du côté de chutes Whangarei.',
          },
          nz: {
            correct: true,
            text: 'Bien vu :) Cette rainforest se trouve du côté de chutes Whangarei.',
          },
        },
        {
          title: 'Le sommet',
          img: pinnaclesPicture,
          aus: {
            text:
              'Ben  alors ? Vous n\'avez pas reconnu les "Pinnacles" (pics) dans la région de Corromandel en Nouvelle-Zélande ?',
          },
          nz: {
            correct: true,
            text:
              'Yeahhh ! Vous avez bien reconnu les "Pinnacles" (pics) dans la région de Corromandel. Bravo !',
          },
        },
        {
          title: 'Le fail',
          img: failPicture,
          aus: {
            correct: true,
            text:
              "Une chance sur deux et... c'est gagné ! Nous sommes au sommet du Grand Canyon, dans le parc de Blues Mountains atteint après 2 heures de marche. Nous étions censés découvrir une vue superbe sur le canyon...",
          },
          nz: {
            text:
              "Ok c'était impossible. Nous sommes au sommet du Grand Canyon, dans le parc de Blues Mountains en Australie atteint après 2 heures de marche. Nous étions censés découvrir une vue superbe sur le canyon...",
          },
        },
      ],
    };
  }

  selectChoiceHandler = (questionIndex, choice) => () =>
    this.setState(state => ({
      questions: state.questions.map((question, i) => {
        if (i === questionIndex) {
          return {
            ...question,
            selected: choice,
          };
        }
        return question;
      }),
    }));

  render() {
    const { questions } = this.state;
    return (
      <div className="AusNzQuiz">
        {questions.map((question, i) => (
          <div className="AusNzQuiz_question" key={`question-${i}`}>
            <h2 className="AusNzQuiz_question_title">{question.title}</h2>
            <img className="AusNzQuiz_question_image" src={question.img} alt={question.title} />
            <div className="AusNzQuiz_question_choices">
              <label
                className="AusNzQuiz_question_choices_choice"
                onClick={this.selectChoiceHandler(i, 'aus')}
              >
                <input type="radio" name={`question-${i}`} /> Australie
              </label>
              <label
                className="AusNzQuiz_question_choices_choice"
                onClick={this.selectChoiceHandler(i, 'nz')}
              >
                <input type="radio" name={`question-${i}`} /> Nouvelle-Zélande
              </label>
              {question.selected ? (
                <p
                  className={`AusNzQuiz_question_answer ${
                    question[question.selected].correct ? '-correct' : '-incorrect'
                  }`}
                >
                  {question[question.selected].text}
                </p>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    );
  }
}
