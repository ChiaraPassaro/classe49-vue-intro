const app = new Vue(
  {
    el: '#app',
    data: {
      title: 'Ciao Classe 49',
      color: 'red',
      number: 35,
      age: null,
      image: 'https://images.unsplash.com/photo-1620481679288-0c3894901bcf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80'
    },
    methods: {
      changeColor: function (message) {
        //Codice
        console.log(message);
        console.log(this._data);
        if (this.color == 'red') {
          this.color = 'blue';
        }
        else {
          this.color = 'red';
        }
      },
      addOneStudent: function () {
        this.number += 1;
      },
      getKey: function () {
        console.log('pippo');
      }
    }
  }
);