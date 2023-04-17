import React from 'react';

//Socials import
import data from '/src/data/socials.json';

//style import
import style from './socials.module.scss';

const Socials = () => {
  return (
    <div className={style.container}>
      {data.map((social, index) => {
        return (
          <a
            key={index}
            href={social.url}
            target="_blank"
            className={style.link}
          >
            <img src={social.icon} alt={social.name} className={style.icon} />
          </a>
        );
      })}
    </div>
  );
};

export default Socials;
