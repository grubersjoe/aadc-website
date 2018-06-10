import React from 'react';
import TeamNav from '../../components/TeamNav';
import Avatar from '../../components/Avatar';
import {
  avatarFabi,
  avatarLina,
  avatarJo,
  avatarMicha,
  avatarNick,
  avatarPhilipp,
} from '../../images/avatars';
import { team2016 } from '../../images/team';

const Team = () => (
  <main>
    <TeamNav />
    <h1>Team Smart Driving 2016/2017</h1>
    <p>
      Teamspecher: Fabian Freihube &ndash;{' '}
      <a href="mailto:fabian.freihube@stud.htwk-leipzig.de">fabian.freihube@stud.htwk-leipzig.de</a>
    </p>

    <a href={team2016} target="_blank">
      <img src={team2016} alt="Team Smart Driving 2017/2018" />
    </a>

    <h2>Kernteam</h2>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <Avatar imgUrl={avatarFabi} caption="Fabian Freihube" />`
      <Avatar imgUrl={avatarNick} caption="Nick Fahrendorff" />
      <Avatar
        imgUrl={avatarJo}
        caption="Jonathan Gruber"
        profiles={{
          website: 'https://grubersjoe.de',
          github: 'https://github.com/grubersjoe',
          xing: 'https://www.xing.com/profile/Jonathan_Gruber',
        }}
      />
      <Avatar imgUrl={avatarMicha} caption="Michael Horn" />
      <Avatar imgUrl={avatarLina} caption="Lina Peters" />
    </div>

    <h2>Freie Mitarbeiter</h2>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <Avatar imgUrl={avatarPhilipp} caption="Philipp Kleinhenz" />
      <Avatar caption="Sonja Mauersberger" />
    </div>
  </main>
);

export default Team;
