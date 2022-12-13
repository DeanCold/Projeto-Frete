// Import the functions you need from the SDKs you need
				  
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getFirestore, setDoc, addDoc, doc, collection } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyBwia_-YsBKzPwliIGB37kwERmBwO1MbDM",

  authDomain: "usuario-cadastro.firebaseapp.com",

  projectId: "usuario-cadastro",

  storageBucket: "usuario-cadastro.appspot.com",

  messagingSenderId: "198415552446",

  appId: "1:198415552446:web:45f91fd9d462cd8a60f3ef"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);





let buttonCadastrar = document.getElementById('btn_cadastrar');



buttonCadastrar.addEventListener('click', (e) => {
     addDoc(collection(db,"usuarios"), {
         Nome: input_nome.value,
          DataNasc: input_data.value,
         Cidade: select_cidade.value,
          Bairro: input_bairro.value,
          Email: input_email.value,
          ConfirmEmail: input_emailConfirm.value,
          Senha: input_senha.value,
          ConfirmSenha: input_senhaConfirm.value
    });
    alert('User added');
});