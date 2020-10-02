import React from "react";
import Highlight from "react-highlight";

import "./App.css";
import "./highlight-js-night-owl.css";

import { Notification, Color, info, success, warning, error } from "./notify";

const message = "This is a notification!";

function DeclarativeDemo() {
  const [notifications, setNotifications] = React.useState([]);

  const createNotification = (color) =>
    setNotifications([...notifications, { color, id: notifications.length }]);

  const deleteNotification = (id) =>
    setNotifications(
      notifications.filter((notification) => notification.id !== id)
    );

  return (
    <>
      <button onClick={() => createNotification(Color.info)}>Info</button>
      <button onClick={() => createNotification(Color.success)}>Success</button>
      <button onClick={() => createNotification(Color.warning)}>Warning</button>
      <button onClick={() => createNotification(Color.error)}>Error</button>
      {notifications.map(({ id, color }) => (
        <Notification
          key={id}
          onDelete={() => deleteNotification(id)}
          color={color}
          autoClose={true}
        >
          {message}
        </Notification>
      ))}
      <Highlight>
        {`const [notifications, setNotifications] = React.useState([]);

const createNotification = (color) =>
  setNotifications([...notifications, { color, id: notifications.length }]);

const deleteNotification = (id) =>
  setNotifications(
    notifications.filter((notification) => notification.id !== id)
  );

return (
  <>
    <button onClick={() => createNotification(Color.info)}>Info</button>
    <button onClick={() => createNotification(Color.success)}>Success</button>
    <button onClick={() => createNotification(Color.warning)}>Warning</button>
    <button onClick={() => createNotification(Color.error)}>Error</button>
    {notifications.map(({ id, color }) => (
      <Notification
        key={id}
        onDelete={() => deleteNotification(id)}
        color={color}
        autoClose={true}
      >
        {message}
      </Notification>
    ))}
  </>
);`}
      </Highlight>
    </>
  );
}

function ImperativeDemo() {
  return (
    <>
      <button onClick={() => info(message, true)}>Info</button>
      <button onClick={() => success(message, true)}>Success</button>
      <button onClick={() => warning(message, true)}>Warning</button>
      <button onClick={() => error(message, true)}>Error</button>
      <Highlight>
        {`<>
  <button onClick={() => info(message, true)}>Info</button>
  <button onClick={() => success(message, true)}>Success</button>
  <button onClick={() => warning(message, true)}>Warning</button>
  <button onClick={() => error(message, true)}>Error</button>
</>`}
      </Highlight>
    </>
  );
}

function App() {
  const [demo, setDemo] = React.useState("declarative");

  return (
    <div className="App">
      <select onChange={(e) => setDemo(e.target.value)}>
        <option value="declarative">Declarative demo</option>
        <option value="imperative">Imperative demo</option>
      </select>
      {demo === "declarative" ? <DeclarativeDemo /> : <ImperativeDemo />}
    </div>
  );
}

export default App;
