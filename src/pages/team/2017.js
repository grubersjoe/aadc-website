import React from 'react';
import TeamNav from '../../components/TeamNav';
import Avatar from '../../components/Avatar';
import {
  avatarFabi,
  avatarFranz,
  avatarLeo,
  avatarLina,
  avatarJo,
  avatarNick,
  avatarPhilipp,
} from '../../images/avatars';
import { team2017 } from '../../images/team';

const Team = () => (
  <main>
    <TeamNav />
    <h1>Team Smart Driving 2017/2018</h1>
    <p>
      Teamspecherin: Lina Peters &ndash;{' '}
      <a href="mailto:lina.peters@stud.htwk-leipzig.de">lina.peters@stud.htwk-leipzig.de</a>
    </p>

    <a href={team2017} target="_blank">
      <img src={team2017} alt="Team Smart Driving 2017/2018" />
    </a>

    <h2>Kernteam</h2>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <Avatar imgUrl={avatarLina} caption="Lina Peters" />
      <Avatar imgUrl={avatarLeo} caption="Leo Binder" />
      <Avatar imgUrl={avatarNick} caption="Nick Fahrendorff" />
      <Avatar imgUrl={avatarFabi} caption="Fabian Freihube" />
      <Avatar imgUrl={avatarPhilipp} caption="Philipp Kleinhenz" />
    </div>

    <h2>Freie Mitarbeiter</h2>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <Avatar imgUrl={avatarFranz} caption="Franz Anders" />
      <Avatar
        imgUrl={avatarJo}
        caption="Jonathan Gruber"
        profiles={{
          website: 'https://grubersjoe.de',
          github: 'https://github.com/grubersjoe',
          xing: 'https://www.xing.com/profile/Jonathan_Gruber',
        }}
      />
      <Avatar caption="Fabian Sauer" />
    </div>
  </main>
);

export default Team;
