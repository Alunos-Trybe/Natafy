import React from "react";
import "./Menu.scss";
import { HiHome, HiSearch, HiHeart } from "react-icons/hi";
import { RiPlayListFill } from "react-icons/ri";
import { TbPlaylistAdd } from "react-icons/tb";
import logo from '../../assets/logo.png'

// const MenuItems used to create sideMenu items
const MenuItems = [
  ["Inicio", <HiHome size={30}/>, "/"],
  ["Buscar", <HiSearch size={30}/>, "search"],
  ["Playlists", <RiPlayListFill size={30}/> ,"playlist"],
  ["Criar Playlist", <TbPlaylistAdd size={30}/>, "createPlaylist"],
  ["Favoritos", <HiHeart size={30}/>,"favorites"],
];

function Menu() {
  return (
    <div className="Menu">
      <div className="Menu__container">
        <img src={logo} alt="logo-natafy" />
        <ul>
          {MenuItems.map((item, index) => (
            <div className="Menu__item" key={index}>
                {item[1]}
                <li><a href={`${item[2]}`}>{item[0]}</a></li>
                </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Menu;
