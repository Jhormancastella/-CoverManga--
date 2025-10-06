// js/firebase-config.js
const firebaseConfig = {
    apiKey: "AIzaSyCqsB9Y1CKKjnawNUfVVEnmm6u3oivpyVM",
    authDomain: "galer-anime.firebaseapp.com",
    projectId: "galer-anime",
    storageBucket: "galer-anime.firebasestorage.app",
    messagingSenderId: "1057820744655",
    appId: "1:1057820744655:web:46ed61120adca8a778d0ba"
};

// Inicializar Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const ADMIN_PASSWORD = "Rosy123";

// Autenticación para admin.html
if (window.location.pathname.includes('admin.html')) {
    const isAuthenticated = sessionStorage.getItem('adminAuthenticated');
    if (!isAuthenticated) {
        const password = prompt('🔐 Contraseña de administración:');
        if (password === ADMIN_PASSWORD) {
            sessionStorage.setItem('adminAuthenticated', 'true');
        } else {
            alert('❌ Contraseña incorrecta');
            window.location.href = 'index.html';
        }
    }
}
