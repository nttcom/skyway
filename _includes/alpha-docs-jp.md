## Peer

### Functions

#### peer.joinRoom(roomName, [options]);

名前を指定してルームに参加します。`MeshRoom`オブジェクト、もしくは`SFURoom`オブジェクトを返します。

- roomName {string}
  - 参加するルームの名前
- options {object}
  - mode {string}
    - `'mesh'`(フルメッシュのルーム) か `'sfu'`(SFUを使用したルーム)のどちらかを指定
    - 指定しない場合のデフォルト値は`'mesh'`
  - stream {MediaStream}
    - ルーム内の他のユーザに送られるMediaStream

## MeshRoom

他のユーザとフルメッシュ接続するタイプのルームです。`peer.joinRoom('roomName', {mode: 'mesh'})`の戻り値でMeshRoomのインスタンスを取得することができます。

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
meshRoom.on('call', function(call){
  call.answer(window.localStream);
});
meshRoom.on('peerLeave', function(peerId) {
  $('#video_' + peerId).remove();
});
meshRoom.call(myLocalStream);
```

### Functions

#### call([stream])

ルーム内のすべてのユーザに対してMediaConnectionを確立します。内部でルーム内の全ユーザに対して`peer.call(id)`を行っています。接続が確立すると'stream'イベントが発生し、他のユーザのストリームを取得することができます。引数のstreamが与えられなかった場合、`joinRoom()`のときに渡したストリームを使用します。

- stream {MediaStream}
  - ルーム内のユーザに送るMediaStream

#### close()

ルームを退出し、ルーム内のすべてのユーザとのコネクションを`close`します。

#### getLog()

ルームの最新100件のメッセージログをリクエストします。レスポンスは`log`イベントのリスナーによって取得できます。

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

#### sendByWS(data)

WebSocketを使用して、サーバを経由してルーム内の全てのユーザにデータを送信します。(将来的に、Data Channelを使用したP2Pで直接データを送信するメソッドが追加される予定です。)

- data {any}
  - 送信するデータ(サイズが大きいと失敗する場合があります)

``` javascript
meshRoom.on('data', function(message) {
  $('#messages').append('<div>' + message.src + ': ' + message.data + '</div>');
});

meshRoom.sendByWS('Hello world!');
```

### Events

#### open `meshRoom.on('open', function() { ... });`

ユーザがルームへ入室したときに発生します。

#### call `meshRoom.on('call', function(call) { ... });`

ルーム内のユーザから接続があったときに発生します。`call.answer(localStream)` で接続出来ます。

#### stream `meshRoom.on('stream', function(peerStream) { ... });`

他のユーザのストリームを受信した時に発生します。送信者のpeerIdは `peerStream.peerId`で取得できます。

#### peerJoin `meshRoom.on('peerJoin', function(peerId) { ... });`

ルームに新しいユーザが参加したときに発生します。

#### peerLeave `meshRoom.on('peerLeave', function(peerId) { ... });`

あるユーザがルームを退出したときに発生します。

#### data `meshRoom.on('data', function(dataMessage) { ... });`

他のユーザから送信されたデータを受信した時に発生します。


- `dataMessage.src` 送信者のpeerId
- `dataMessage.data` 受信したデータ

#### log `meshRoom.on('log', function(logs) { ... });`

`meshRoom.getLog()`の後、サーバからログを受信した時に発生します。`logs`は`{timestamp: number, messageType: type, message: message}`形式のオブジェクトの配列です。`messageType`は`'ROOM_DATA'`、 `'ROOM_USER_JOIN'` もしくは `'ROOM_USER_LEAVE'`のいずれかです。

#### close `meshRoom.on('close', function() { ... });`

ルームをcloseしたときに発生します。

#### error `meshRoom.on('error', function(err) { ... });`

エラーが起きた時に発生します。

## SFURoom

SFUサーバを介して他のユーザと接続するタイプのルームです。SFUサーバに対してのみメディアを送信するので、MeshRoomよりもクライアントの処理は軽くなります。
`peer.joinRoom('roomName', {mode: 'sfu'})`の戻り値でSFURoomのインスタンスを取得することができます。

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

SFUサーバへの接続を開始します。接続が確立すると'stream'イベントが発生し、他のユーザのストリームを取得することができます。
引数のstreamが与えられなかった場合、`joinRoom()`のときに渡したストリームを使用します。

- stream {MediaStream}
  - 他のユーザに送るMediaStream

#### close()

ルームを退出し、ルーム内の全てのコネクションを`close`します。

#### getLog()

ルームの最新100件のメッセージログをリクエストします。レスポンスは`log`イベントのリスナーによって取得できます。

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

WebSocketを使用して、ルーム内の全てのユーザにデータを送信します。

- data {any}
  - 送信するデータ(サイズが大きいと失敗する場合があります)

``` javascript
sfuRoom.on('data', function(message) {
  $('#messages').append('<div>' + message.src + ': ' + message.data + '</div>');
});

sfuRoom.send('Hello world!');
```

### Events

#### open `sfuRoom.on('open', function() { ... });`

ユーザがルームへ入室したときに発生します。

#### stream `sfuRoom.on('stream', function(peerStream) { ... });`

他のユーザのストリームを受信した時に発生します。送信者のpeerIdは `peerStream.peerId`で取得できます。

#### peerJoin `sfuRoom.on('peerJoin', function(peerId) { ... });`

ルームに新しいユーザが参加したときに発生します。

#### peerLeave `sfuRoom.on('peerLeave', function(peerId) { ... });`

あるユーザがルームを退出したときに発生します。

#### data `sfuRoom.on('data', function(dataMessage) { ... });`

他のユーザから送信されたデータを受信した時に発生します。

- `dataMessage.src` 送信者のpeerId
- `dataMessage.data` 受信したデータ

#### log `sfuRoom.on('log', function(logs) { ... });`

`sfuRoom.getLog()`の後、サーバからログを受信した時に発生します。`logs`は`{timestamp: number, messageType: type, message: message}`形式のオブジェクトの配列です。`messageType`は`'ROOM_DATA'`、 `'ROOM_USER_JOIN'` もしくは `'ROOM_USER_LEAVE'`のいずれかです。

#### close `sfuRoom.on('close', function() { ... });`

`sfuRoom.close()`が完了したときに発生します。

#### error `sfuRoom.on('error', function(err) { ... });`

エラーが起きた時に発生します。
