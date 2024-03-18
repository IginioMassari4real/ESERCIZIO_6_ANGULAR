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
  
  calciatori = [

    {nome: "Kylian", cognome: "Mbappè", eta:25, colore:"lightgreen", nazionalita: "francia",ruolo: "attaccante", overall:91, squadra:"Paris Saint Germain", immagine:"https://images2.gazzettaobjects.it/assets-mc/calcio/giocatori/kylian_mbappe_20121998.png"  },

    {nome: "Kevin", cognome: "De Bruyne", eta:32, colore:"lightgreen", nazionalita: "belgio",ruolo: "centrocampista", overall:91, squadra:"Manchester City",immagine:"https://img.a.transfermarkt.technology/portrait/big/88755-1684245748.jpg?lm=1"},

    {nome: "Erling", cognome: "Haaland", eta:23, colore:"lightgreen", nazionalita: "norvegia",ruolo: "attaccante", overall:91, squadra:"Manchester City",immagine:"https://img.a.transfermarkt.technology/portrait/big/418560-1709108116.png?lm=1"  },

    {nome: "Alexia", cognome: "Putellas", eta:30, colore:"lightgreen", nazionalita: "spagna",ruolo: "attaccante", overall:91, squadra:"Barcellona femminile",immagine:"https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/ALEXIA%20PUTELLAS%20-%20RETRAT%20(1).jpg"  },

    {nome: "Lionel", cognome: "Messi", eta:36, colore:"lightgreen", nazionalita: "argentina",ruolo: "attaccante", overall:90, squadra:"Inter Miami",immagine:"https://img.a.transfermarkt.technology/portrait/big/28003-1694590254.jpg?lm=1"  },

    {nome: "Sam", cognome: "Kerr", eta:30, colore:"lightgreen", nazionalita: "australia",ruolo: "attaccante", overall:90, squadra:"Chelsea femminile",immagine:"https://b.fssta.com/uploads/application/soccer/headshots/10700.vresize.350.350.medium.62.png"  },

    {nome: "Karim", cognome: "Benzema", eta:36, colore:"lightgreen", nazionalita: "francia",ruolo: "attaccante", overall:90, squadra:"Al Hittihad",immagine:"https://img.a.transfermarkt.technology/portrait/big/18922-1702414196.jpg?lm=1"  },

    {nome: "Caroine Graham", cognome: "Hansen", eta:33, colore:"lightgreen", nazionalita: "norvegia",ruolo: "attaccante", overall:90, squadra:"Barcellona femminile",immagine:"https://upload.wikimedia.org/wikipedia/commons/3/35/20150426_PSG_vs_Wolfsburg_036.jpg"  },

    {nome: "Thibaut", cognome: "Courtois", eta:31, colore:"lightgreen", nazionalita: "belgio",ruolo: "portiere", overall:90, squadra:"Real Madrid",immagine:"https://img.a.transfermarkt.technology/portrait/big/108390-1665067957.jpg?lm=1"  },
 
    {nome: "Aitana", cognome: "Bonmati'", eta:26, colore:"lightgreen", nazionalita: "spagna",ruolo: "attaccante", overall:90, squadra:"Barcellona femminile",immagine:"https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/AITANA%20BONMAT%C3%8D%20-%20RETRAT.jpg"  },
  ]

}
