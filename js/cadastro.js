
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getDatabase, ref, set, push } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyB1zvYFQg0EkG30pzy17YA9UVZ4jUCiYpc",
  authDomain: "adoclyanimais-8a6d0.firebaseapp.com",
  databaseURL: "https://adoclyanimais-8a6d0-default-rtdb.firebaseio.com",
  projectId: "adoclyanimais-8a6d0",
  storageBucket: "adoclyanimais-8a6d0.appspot.com",
  messagingSenderId: "122709311228",
  appId: "1:122709311228:web:6a50080d5601d3be402179",
  measurementId: "G-CQWMXPYCFN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const addItem = async (data) => {
  const newItemRef = ref(db, 'Cadastro'); 
  const newItemKey = push(newItemRef).key; 

  try {
      await set(ref(db, `Cadastro/${newItemKey}`), data);
      console.log('Documento adicionado com ID: ', newItemKey);
  } catch (error) {
      console.error('Erro ao adicionar documento: ', error);
  }
};

const inputEmail = document.querySelector("#email")
const inputSenha = document.querySelector("#senha")
const btnCadastro = document.querySelector("#criar")
// Exemplo de uso: chamar addItem com dados


  
  // Supondo que você tenha um botão com este ID
  btnCadastro.addEventListener('click', () => {
    addItem({ 
      email: inputEmail.value, 
      senha: inputSenha.value });
  });

        
        /*import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
        import { getAnalytics, ref, set, push} from "https://www.gstatic.com/firebasejs/10.14.0/firebase-database.js";
  
        const firebaseConfig = {
    apiKey: "AIzaSyB1zvYFQg0EkG30pzy17YA9UVZ4jUCiYpc",
    authDomain: "adoclyanimais-8a6d0.firebaseapp.com",
    databaseURL: "https://adoclyanimais-8a6d0-default-rtdb.firebaseio.com",
    projectId: "adoclyanimais-8a6d0",
    storageBucket: "adoclyanimais-8a6d0.appspot.com",
    messagingSenderId: "122709311228",
    appId: "1:122709311228:web:6a50080d5601d3be402179",
    measurementId: "G-CQWMXPYCFN"
  };


  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const inputEmail = document.querySelector("#email")
  const inputSenha = document.querySelector("#senha")
  const btnCadastro = document.querySelector("#criar")

  const addItem = async (data) => {
    const newItemRef = ref(db, 'Cadastro'); 
    const newItemKey = push(newItemRef).key; 

    try {
        await set(ref(db, `Cadastro/${newItemKey}`), data);
        console.log('Documento adicionado com ID: ', newItemKey);
    } catch (error) {
        console.error('Erro ao adicionar documento: ', error);
    }
};

btnCadastro.addEventListener('click', () => {
  addItem({ 
      email: inputEmail.value, 
      senha: inputSenha.value 
  }); // Fecha o modal após o cadastro
});

  async function post() {
    const url = 'https://adoclyanimais-8a6d0-default-rtdb.firebaseio.com/Cadastro.json'

    const newData = {
        email: inputEmail.value,
        senha: inputSenha.value
    }

    const resposta = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Ttype':'application/json'
        },
        body: JSON.stringify(newData)
    })

    console.log("Enviado com sucesso")
  }*/

  



