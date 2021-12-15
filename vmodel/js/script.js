// const options = {
//   el: '#pippo',
//   data: { //fonte dati
//     message: 'Ciao Classe 49',
//     pippo: '',
//     number: 10,
//     posts: [],
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem possimus libero maxime nemo! Nihil quas placeat reiciendis nostrum fugiat quis, nulla accusantium autem consectetur soluta minima, consequuntur nisi sapiente? Ex.'

//   }
// }


const app = new Vue(
  {
    el: '#pippo',
    data: { //fonte dati
      message: '',
      placeHolderMessage: 'Inserisci un messaggio',
      messageTwo: 'Ciao Classe 50',
      name: 'Pluto',
      pippo: '',
      number: 10,
      posts: [],
      classList: 'red text-center',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem possimus libero maxime nemo! Nihil quas placeat reiciendis nostrum fugiat quis, nulla accusantium autem consectetur soluta minima, consequuntur nisi sapiente? Ex.'

    },
    methods: {
      miaFunzione: function () {
        //codice
      }
    }
  }
);

// console.log(app);