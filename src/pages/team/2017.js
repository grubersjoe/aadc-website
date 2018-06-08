import React from 'react';
import TeamNav from '../../components/TeamNav';
import Avatar from '../../components/Avatar';
import { avatarLina, avatarNick, avatarFabi, avatarJo } from '../../images/avatars';
// import { rhythm } from '../../utils/typography';

const Team = () => (
  <main>
    <TeamNav />
    <h1>Team Smart Driving 2017/2018</h1>
    <p>Teamspecherin: Lina Peters</p>
    <h2>Kernteam</h2>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <Avatar imgUrl={avatarLina} caption="Lina Peters" />
      <Avatar imgUrl={avatarNick} caption="Leo Binder" />
      <Avatar imgUrl={avatarNick} caption="Nick Fahrendorff" />
      <Avatar imgUrl={avatarFabi} caption="Fabian Freihube" />
      <Avatar imgUrl={avatarFabi} caption="Philipp Kleinhenz" />
    </div>

    <h2>Freie Mitarbeiter</h2>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <Avatar imgUrl={avatarFabi} caption="Franz Anders" />
      <Avatar
        imgUrl={avatarJo}
        caption="Jonathan Gruber"
        profiles={{
          website: 'https://grubersjoe.de',
          github: 'https://github.com/grubersjoe',
          xing: 'https://www.xing.com/profile/Jonathan_Gruber',
        }}
      />
      <Avatar imgUrl={avatarFabi} caption="Fabian ?" />
    </div>
  </main>
);

export default Team;
