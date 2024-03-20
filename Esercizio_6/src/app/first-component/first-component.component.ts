import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent {

  clickBottone(link: string){
    window.open(link);
  }
  
  calciatori = [

    {nome: "Kylian", cognome: "Mbappè", eta:25, colore:"lightgreen", nazionalita: "fr",ruolo: "attaccante", overall:91, squadra:"Paris Saint Germain", immagine:"https://images2.gazzettaobjects.it/assets-mc/calcio/giocatori/kylian_mbappe_20121998.png", info:"https://www.transfermarkt.it/kylian-mbappe/profil/spieler/342229", posizione:1 },

    {nome: "Kevin", cognome: "De Bruyne", eta:32, colore:"lightgreen", nazionalita: "be",ruolo: "centrocampista", overall:91, squadra:"Manchester City",immagine:"https://img.a.transfermarkt.technology/portrait/big/88755-1684245748.jpg?lm=1", info:"https://www.transfermarkt.it/kevin-de-bruyne/profil/spieler/88755", posizione:2 },

    {nome: "Erling", cognome: "Haaland", eta:23, colore:"lightgreen", nazionalita: "no",ruolo: "attaccante", overall:91, squadra:"Manchester City",immagine:"https://img.a.transfermarkt.technology/portrait/big/418560-1709108116.png?lm=1" , info:"https://www.transfermarkt.it/erling-haaland/profil/spieler/418560" , posizione:3 },

    {nome: "Alexia", cognome: "Putellas", eta:30, colore:"lightgreen", nazionalita: "es",ruolo: "attaccante", overall:91, squadra:"Barcellona femminile",immagine:"https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/ALEXIA%20PUTELLAS%20-%20RETRAT%20(1).jpg", info:"https://it.wikipedia.org/wiki/Alexia_Putellas" , posizione:4  },

    {nome: "Lionel", cognome: "Messi", eta:36, colore:"lightgreen", nazionalita: "ar",ruolo: "attaccante", overall:90, squadra:"Inter Miami",immagine:"https://img.a.transfermarkt.technology/portrait/big/28003-1694590254.jpg?lm=1", info:"https://www.transfermarkt.it/lionel-messi/profil/spieler/28003" , posizione:5 },

    {nome: "Sam", cognome: "Kerr", eta:30, colore:"lightgreen", nazionalita: "au",ruolo: "attaccante", overall:90, squadra:"Chelsea femminile",immagine:"https://b.fssta.com/uploads/application/soccer/headshots/10700.vresize.350.350.medium.62.png" , info:"https://it.wikipedia.org/wiki/Samantha_Kerr", posizione:6 },

    {nome: "Karim", cognome: "Benzema", eta:36, colore:"lightgreen", nazionalita: "fr",ruolo: "attaccante", overall:90, squadra:"Al Hittihad",immagine:"https://img.a.transfermarkt.technology/portrait/big/18922-1702414196.jpg?lm=1" , info:"https://www.transfermarkt.it/karim-benzema/profil/spieler/18922" , posizione:7 },

    {nome: "Caroine Graham", cognome: "Hansen", eta:33, colore:"lightgreen", nazionalita: "no",ruolo: "attaccante", overall:90, squadra:"Barcellona femminile",immagine:"https://upload.wikimedia.org/wikipedia/commons/3/35/20150426_PSG_vs_Wolfsburg_036.jpg", info:"https://it.wikipedia.org/wiki/Caroline_Graham_Hansen" , posizione:8 },

    {nome: "Thibaut", cognome: "Courtois", eta:31, colore:"lightgreen", nazionalita: "be",ruolo: "portiere", overall:90, squadra:"Real Madrid",immagine:"https://img.a.transfermarkt.technology/portrait/big/108390-1665067957.jpg?lm=1" , info:"https://www.transfermarkt.it/thibaut-courtois/profil/spieler/108390", posizione:9  },
 
    {nome: "Aitana", cognome: "Bonmati'", eta:26, colore:"lightgreen", nazionalita: "es",ruolo: "attaccante", overall:90, squadra:"Barcellona femminile",immagine:"https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/AITANA%20BONMAT%C3%8D%20-%20RETRAT.jpg", info:"https://it.wikipedia.org/wiki/Aitana_Bonmat%C3%AD" , posizione:10 },
  ]

}
