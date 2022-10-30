import React from 'react';
import './list-item.scss';
import {projectImages} from "../../assets/image";

const ListItem = ({
  idBook,
  title,
  author,
  openModalFunc
}) => {
  return (
    <div className='list-item'>
      <div className="list-item_description">
        <span>title: {title}</span> <br/>
        <span>author: {author}</span>
      </div>
      <div className="list-item_actions">
        <button onClick={() => openModalFunc('edit', {title, author, idBook})}>
          {projectImages.edit}
        </button>
        <button onClick={() => openModalFunc('delete', {title, author, idBook})}>
          {projectImages.delete}
        </button>
      </div>
    </div>
  );
};

export default ListItem;