import { db } from "./firebase-config.js";
import {
collection,
getDocs
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

async function loadTeams(){

const snapshot = await getDocs(collection(db,"registrations"));

let html = "<h2 style='color:red'>Registered Teams</h2>";

snapshot.forEach((doc)=>{

const t = doc.data();

html += `
<div style="background:#111;border:2px solid red;padding:15px;margin:15px 0;border-radius:10px;">
<b>IGL:</b> ${t.igl}<br>
<b>Player 1:</b> ${t.player1}<br>
<b>Player 2:</b> ${t.player2}<br>
<b>Player 3:</b> ${t.player3}<br>
<b>Player 4:</b> ${t.player4}<br>
<b>WhatsApp:</b> ${t.whatsapp}<br>
<b>UTR:</b> ${t.payment}
</div>
`;

});

document.body.innerHTML += html;

}

loadTeams();
