# Notify

Notification component and functions for React.

<img alt="demo" src="https://res.cloudinary.com/https-tinloof-com/image/upload/v1602609796/blog/how-to-create-react-notifications-with-0-dependencies/6_d3s7q4.gif">


[Demo](https://codesandbox.io/s/tinloof-notify-hd8pt?file=/src/App.js)

### Basic usage
Using the `Notification` component:

```js
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
  </>
);
```

Using `notify` functions:

```js
<>
  <button onClick={() => info(message, true)}>Info</button>
  <button onClick={() => success(message, true)}>Success</button>
  <button onClick={() => warning(message, true)}>Warning</button>
  <button onClick={() => error(message, true)}>Error</button>
</>
```
