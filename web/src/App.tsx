import React, { useState, useCallback, ChangeEvent } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3333');

socket.on('connect', () => console.log('usuario entrou'));

const App: React.FC = () => {
  const [message, setMessage] = useState('');

  const handleChangeMessage = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setMessage(e.target.value);
    },
    [],
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Digite sua mensagem"
        size={50}
        value={message}
        onChange={handleChangeMessage}
      />
      <button type="button">Enviar mensagem</button>
    </div>
  );
};

export default App;
