import React from 'react';
import TeamNav from '../../components/TeamNav';
import Avatar from '../../components/Avatar';
import { rhythm } from '../../utils/typography';

const Team = () => {
  const avatars = {
    fabi: require('../../images/fabi.jpg'),
    jo: require('../../images/jo.jpg'),
    lina: require('../../images/lina.jpg'),
    nick: require('../../images/nick.jpg'),
  };

  return (
    <main>
      <TeamNav />
      <h1>Smart Driving 2017/2018</h1>
      <p><strong>Teamspecherin: Lina Peters</strong></p>
      <h2>Kernteam</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Avatar size={5} imgUrl={avatars.lina} caption="Lina Peters" />
        <Avatar size={5} imgUrl={avatars.nick} caption="Leo Binder" />
        <Avatar size={5} imgUrl={avatars.lina} caption="Nick Fahrendorff" />
        <Avatar size={5} imgUrl={avatars.fabi} caption="Fabian Freihube" />
        <Avatar size={5} imgUrl={avatars.lina} caption="Philipp Kleinhenz"  style={{ marginRight: 0 }} />
      </div>

      <h2>Freie Teammitglieder</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Avatar size={5} imgUrl={avatars.jo} caption="Jonathan Gruber" />
        <Avatar size={5} imgUrl={avatars.lina} caption="Eike Florian Petersen" />
        <Avatar size={5} imgUrl={avatars.lina} caption="Nick Fahrendorff" />
      </div>
    </main>
  );
};

export default Team;
