import { db } from "./firebase-config.js";
import {
collection,
addDoc,
serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

window.submitTournament = async function () {

const igl = document.getElementById("igl").value;
const p1 = document.getElementById("p1").value;
const p2 = document.getElementById("p2").value;
const p3 = document.getElementById("p3").value;
const p4 = document.getElementById("p4").value;
const whatsapp = document.getElementById("whatsapp").value;
const payment = document.getElementById("payment").value;

if (
!igl || !p1 || !p2 || !p3 || !p4 ||
!whatsapp || !payment
){
alert("Please fill all fields.");
return;
}

await addDoc(collection(db,"registrations"),{

igl,
player1:p1,
player2:p2,
player3:p3,
player4:p4,
whatsapp,
payment,
time:serverTimestamp()

});

alert("Registration Successful ✅");

document.getElementById("registerForm").reset();

}
