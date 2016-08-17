## Peer

### Functions

#### peer.joinRoom(roomName, [options]);

Join a room and connect to all users in the room. Returns either a `MeshRoom` or an `SFURoom`

- roomName {string}
  - The name of the room to join.
- options {object}
  - mode {string}
    - Specify whether to join a full mesh room or an sfu room. Must be one of `'mesh'` or `'sfu'`. The mode is set to `'mesh'` if this option isn't specified.
  - stream {MediaStream}
    - The MediaStream object to send to the other users in the room.

## MeshRoom

A room connecting you to users in a peer to peer full mesh. Create using `peer.joinRoom('roomName', {mode: 'mesh'})`.

``` javascript
var peer = new Peer({key: myApiKey});
var meshRoom = peer.joinRoom('AwesomeRoom', {mode: 'mesh'});
meshRoom.on('stream', function(stream) {
  var streamURL = URL.createObjectURL(stream);
  var remoteId = stream.peerId;
  $('#videos').append(
    '<video autoplay class="remoteVideos" src="' + streamURL + '" id="video_' + peerId + '">'
  );
});
meshRoom.on('peerLeave', function(peerId) {
  $('#video_' + peerId).remove();
});
meshRoom.call(myLocalStream);
```

### Functions

#### call([stream])

Creates a MediaConnection with all users in the room. Equivalent to doing `peer.call(id)` for all users in the room. Uses the stream provided in `joinRoom()` if stream argument is not provided.

- stream {MediaStream}
  - The MediaStream to send to the other peers.

#### close()

Leave the room and close all Connections to users in the room.

#### getLog()

Request the last 100 messages sent to the room. Logs are deleted when the room becomes empty. Get the response by listening to for the `log` event.

``` javascript
meshRoom.on('log', function(logs) {
  for (var i = 0; i < logs.length; i++) {
    var log = logs[i];
    switch(log.messageType) {
      case 'ROOM_USER_JOIN':
        $('#logs').append('<div>' + log.message.src + ' joined the room.</div>');
        break;
      case 'ROOM_USER_LEAVE':
        $('#logs').append('<div>' + log.message.src + ' left the room.</div>');
        break;
      case 'ROOM_DATA':
        $('#logs').append('<div>' + log.src + ': ' + log.message.data + '</div>');
        break;
    }
});
meshRoom.getLog();
```

#### send(data)

Send data to all users in the room over WebSocket i.e. through the server. (Sending data directly p2p over data channel is not implemented yet but will be in the future.)

- data {any}
  - The data to send. May fail if too big.
 
``` javascript
meshRoom.on('data', function(message) {
  $('#messages').append('<div>' + message.src + ': ' + message.data + '</div>');
});

meshRoom.send('Hello world!');
```

### Events

#### open `meshRoom.on('open', function() { ... });`

Emitted when the server acknowledges this client joining the room.

#### stream `meshRoom.on('stream', function(peerStream) { ... });`

Emitted when a MediaConnection to a user in the room is established. The peerId of the owner can be gotten using `peerStream.peerId`.

#### peerJoin `meshRoom.on('peerJoin', function(peerId) { ... });`

Emitted when a user joins the room.

#### peerLeave `meshRoom.on('peerLeave', function(peerId) { ... });`

Emitted when a user leaves the room.

#### data `meshRoom.on('data', function(dataMessage) { ... });`

Emitted when you receive data from another user.

- `dataMessage.src` The peerId of the sender
- `dataMessage.data` The data received

#### log `meshRoom.on('log', function(logs) { ... });`

Emitted when you receive the room logs from the server after `meshRoom.getLog()`. The logs are an array of objects in the form of `{timestamp: number, messageType: type, message: message}`. `messageType` can be one of `'ROOM_DATA'`, `'ROOM_USER_JOIN'` or `'ROOM_USER_LEAVE'`.

#### close `meshRoom.on('close', function() { ... });`

Emitted after a successful call to `meshRoom.close()`.

#### error `meshRoom.on('error', function(err) { ... });`

Emitted when an error occurs.

## SFURoom

A room connecting you to users using an SFU server. Create using `peer.joinRoom('roomName', {mode: 'sfu'})`.

``` javascript
var peer = new Peer({key: myApiKey});
var sfuRoom = peer.joinRoom('AwesomeRoom', {mode: 'sfu'});
sfuRoom.on('stream', function(stream) {
  var streamURL = URL.createObjectURL(stream);
  var remoteId = stream.peerId;
  $('#videos').append(
    '<video autoplay class="remoteVideos" src="' + streamURL + '" id="video_' + peerId + '">'
  );
});
sfuRoom.on('removeStream', function(stream) {
  $('#video_' + stream.peerId).remove();
});
sfuRoom.call(myLocalStream);
```

### Functions

#### call([stream])

Calls the SFU Server. Start sending your MediaStream and receiving the streams of the users in the room.

- stream {MediaStream}
  - The MediaStream to send to the other peers.

#### close()

Leave the room and close all Connections to users in the room.

#### getLog()

Request the last 100 messages sent to the room. Logs are deleted when the room becomes empty. Get the response by listening to for the `log` event.

``` javascript
sfuRoom.on('log', function(logs) {
  for (var i = 0; i < logs.length; i++) {
    var log = logs[i];
    switch(log.messageType) {
      case 'ROOM_USER_JOIN':
        $('#logs').append('<div>' + log.message.src + ' joined the room.</div>');
        break;
      case 'ROOM_USER_LEAVE':
        $('#logs').append('<div>' + log.message.src + ' left the room.</div>');
        break;
      case 'ROOM_DATA':
        $('#logs').append('<div>' + log.src + ': ' + log.message.data + '</div>');
        break;
    }
});
sfuRoom.getLog();
```

#### send(data)

Send data to all users in the room.

- data {any}
  - The data to send. May fail if too big.

``` javascript
sfuRoom.on('data', function(message) {
  $('#messages').append('<div>' + message.src + ': ' + message.data + '</div>');
});

sfuRoom.send('Hello world!');
```

### Events

#### open `sfuRoom.on('open', function() { ... });`

Emitted when the server acknowledges this client joining the room.

#### stream `sfuRoom.on('stream', function(peerStream) { ... });`

Emitted when a stream is received from another user in the room. The peerId of the owner can be gotten using `peerStream.peerId`.

#### removeStream `sfuRoom.on('removeStream', function(peerStream) { ... });`

Emitted when a stream stops and should be removed. The peerId of the owner can be gotten using `peerStream.peerId`.

#### peerJoin `sfuRoom.on('peerJoin', function(peerId) { ... });`

Emitted when a user joins the room.

#### peerLeave `sfuRoom.on('peerLeave', function(peerId) { ... });`

Emitted when a user leaves the room.

#### data `sfuRoom.on('data', function(dataMessage) { ... });`

Emitted when you receive data from another user.

- `sfuRoom.src` The peerId of the sender
- `sfuRoom.data` The data received

#### log `sfuRoom.on('log', function(logs) { ... });`

Emitted when you receive the room logs from the server after `sfuRoom.getLog()`. The logs are an array of objects in the form of `{timestamp: number, messageType: type, message: message}`. `messageType` can be one of `'ROOM_DATA'`, `
'ROOM_USER_JOIN'` or `'ROOM_USER_LEAVE'`.

#### close `sfuRoom.on('close', function() { ... });`

Emitted after a successful call to `sfuRoom.close()`.

#### error `sfuRoom.on('error', function(err) { ... });`

Emitted when an error occurs.
