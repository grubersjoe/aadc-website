import React from 'react';
import TeamNav from '../../components/TeamNav';
import Avatar from '../../components/Avatar';
import { avatarLina, avatarNick, avatarFabi, avatarJo } from '../../images/avatars';
// import { rhythm } from '../../utils/typography';

const Team = () => {
  return (
    <main>
      <TeamNav />
      <h1>Team Smart Driving 2017/2018</h1>
      <p><strong>Teamspecherin: Lina Peters</strong></p>
      <h2>Kernteam</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Avatar size={5} imgUrl={avatarLina} caption="Lina Peters" />
        <Avatar size={5} imgUrl={avatarNick} caption="Leo Binder" />
        <Avatar size={5} imgUrl={avatarNick} caption="Nick Fahrendorff" />
        <Avatar size={5} imgUrl={avatarFabi} caption="Fabian Freihube" />
        <Avatar size={5} imgUrl={avatarFabi} caption="Philipp Kleinhenz" />
      </div>

      <h2>Freie Mitarbeiter</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Avatar size={5} imgUrl={avatarFabi} caption="Franz Anders" />
        <Avatar size={5} imgUrl={avatarJo} caption="Jonathan Gruber" />
        <Avatar size={5} imgUrl={avatarFabi} caption="Fabian ?" />
      </div>
    </main>
  );
};

export default Team;
