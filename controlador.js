 new Vue({
    el: '#app',
    data: {
      mensaje: 'holaasd',
      mensajes: []},
      methods:{
       mm: function(){
         this.mensaje = '';
       },
        update: function(){
          fetch('https://api.telegram.org/bot1226812462:AAFBjHsd3NJtRwXt304buRYfeW-0t_OGi7Q/getUpdates')
          .then(response => response.json())
         .then( json => {
           let datos = json.result;
           const lista = [];
           let item = {};
           for(let key in datos){
            /* item.text = datos[key].message.text
             item.name =  datos[key].message.from.first_name;
             item.key =  datos[key].update_id;
             item.from_id = datos[key].message.from.id;*/
             lista.push({
               text: datos[key].message.text,
               name: datos[key].message.from.first_name,
               key: datos[key].update_id,
               from_id: datos[key].message.from.id


            });
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
            "chat_id": 837689725,
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
         
    
  