import { useState, useContext } from "react";
import AppContext from '../context/AppContext';

const FileLoader = () => {

  const { data } = useContext(AppContext);
  const [file, setFile] = useState([]);
  const [messages, setMessages] = useState([]);

  const decomposeFileContent = (fileContent) => {
    const content = fileContent.split('\n');
    const regexKey = new RegExp(/^\d{2}\/\d{2}\/\d{2}\s+(\d{1}|\d{2}):\d{2}\s+(p.|a.)\sm.\s-\s(?:.*)/, "gm");
    const regexDateTim = new RegExp(/\d{2}\/\d{2}\/\d{2}\s+(\d{1}|\d{2}):\d{2}\s+(p.|a.)\sm./);

    const keys = fileContent.match(regexKey);

    const messages = [];

    for (let id = 0; id < keys.length; id++) {
      const key = keys[id];

      let author = key.slice(key.indexOf('-'), key.indexOf(':'));
      console.log(`author: ${author}`);
      const dateTimeArray = regexDateTim.exec(key);
      const dateTimeString = dateTimeArray[0];

      const text = key.slice(key.indexOf(''));


      const [dateValues, timeValues, indicator] = dateTimeString.split(' ');
      const [day, month, year] = dateValues.split('/');
      const [hours, minutes] = timeValues.split(':');

      const add = indicator.startsWith('a') ? 0 : 12;

      // TODO: This will be a problem if there are chats before 2000
      const date = new Date(20 + year, month - 1, day, add + parseInt(hours), minutes);

      const message = { id, key, author, date, text };
      messages.push(message);
    };
    setMessages(messages);
  };
  const readFile = (e) => {
    const files = e.target.files;
    const fileReader = new FileReader();

    // read only one file
    fileReader.readAsText(files[0], 'UTF-8');

    fileReader.onloadstart = (e) => {
      //console.log(e);
    };

    fileReader.onload = (e) => {
      let content = e.target.result;
      AppContext.data = content;
      decomposeFileContent(content);
    };
  };


  return (
    <container>
      <label>Selecciona tu chat</label>
      <input type="file" onChange={readFile} />
      {messages.map((message) => {
        return (
          <>
            <span>author: {message.author}</span>
            <p key={message.id}>{message.text}</p>
          </>
        );
      })
      }
    </container >
  );
};

export default FileLoader;
