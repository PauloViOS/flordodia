import Vue from 'vue'

var logged_user = null;

function mockasync (data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({data: data}), 600)
  })
}

const api = {
    login(username, password){
        if(password){
            logged_user = {
                username: username,
                first_name: 'Julyane',
                last_name: 'Wenderroscky',
                email: 'julywend@blau.com',
                notifications_enabled: true,
                permissions:{
                    ADMIN: username == 'admin',
                    STAFF: username == 'admin',
                }
            };
        }
        return mockasync(logged_user);
    },
    
    logout(){
        logged_user = null;
        return mockasync({});
    },

    whoami(){
        return mockasync(logged_user ? {
            authenticated: true,
            user: logged_user,
        } : {authenticated: false});
    },
    
    add_todo(newtask){
        return mockasync({description: newtask, done: false});
    },

    list_todos(){
        return mockasync({
            todos: [
                {description: 'Do the laundry', done: true},
                {description: 'Walk the dog', done: false}
            ]
        });
    },

    list_products(){
        return mockasync([
            {
            product_name: 'Avental com luvas',
            product_description: 'Lindo avental artesanal com luvas de forno',
            product_image: 'avental.png',
            product_price: 70.00
            },

            {
            product_name: 'Bolsa simples',
            product_description: 'Bolsa artesanal com várias estampas',
            product_image: 'bolsasimples.png',
            product_price: 40.00
            },

            {
            product_name: 'Bolsa de mão',
            product_description: 'Com 4 divisões',
            product_image: 'carteira.png',
            product_price: 35.00
            },

            {
            product_name: 'Cesta de pães',
            product_description: 'Cesta desmontável para sua comodidade',
            product_image: 'cesta.png',
            product_price: 30.00
            },

            {
            product_name: 'Lixeira de carro',
            product_description: 'Atenção: não serve pra motos',
            product_image: 'lixeira.png',
            product_price: 20.00
            },

            {
            product_name: 'Scrunchie',
            product_description: 'Xuxinha gourmet para suas madeixas',
            product_image: 'xuxinha.png',
            product_price: 7.00
            },

            {
            product_name: 'Necessaire',
            product_description: 'Com interior lavável',
            product_image: 'necessaire.png',
            product_price: 40.00
            },

            {
            product_name: 'Necessaire Baby',
            product_description: 'Para fraldas e lenços umedecidos',
            product_image: 'necessaire_baby.png',
            product_price: 45.00
            },
        ])
    }
};

export default api;
