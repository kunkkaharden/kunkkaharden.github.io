 new Vue({
    el: '#app',
    data: {
      mensaje: 'holaasd',
      mensajes: ['wii']},
      methods:{
        update: function(){
          fetch('https://api.telegram.org/bot1226812462:AAFBjHsd3NJtRwXt304buRYfeW-0t_OGi7Q/getUpdates')
          .then(response => response.json())
         .then( json => {
           let datos = json.result;
           const lista = [];
           for(let key in datos){
             lista.push(datos[key].message.text);
             console.log(datos[key]);
           }
           this.mensajes = lista;
         });
         
              
        },
        csms: function(){
          this.mensajes = "wiiiiiiiiiiiiiiiiiiiii";
        },
        enviar: function() {
         
          var url = 'https://api.telegram.org/bot1226812462:AAFBjHsd3NJtRwXt304buRYfeW-0t_OGi7Q/sendMessage';
          data = {
            "chat_id": 877561784,
            "text": this.mensaje,
            }

            fetch(url, {
              method: 'POST', // or 'PUT'
              body: JSON.stringify(data), // data can be `string` or {object}!
              headers:{
                'Content-Type': 'application/json'
              }
            }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));
          
        }
        
      }
    });
         
    
  