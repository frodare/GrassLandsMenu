const applicationId = '849382C8'

window['__onGCastApiAvailable'] = function (isAvailable) {
  if (isAvailable) {
    initializeCastApi();
  }
};

initializeCastApi = function () {
  cast.framework.CastContext.getInstance().setOptions({
    receiverApplicationId: applicationId,
    autoJoinPolicy: chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED
  });

  var castSession = cast.framework.CastContext.getInstance().getCurrentSession();

  // var mediaInfo = new chrome.cast.media.MediaInfo(currentMediaURL, contentType);
  // var request = new chrome.cast.media.LoadRequest(mediaInfo);
  // castSession.loadMedia(request).then(() => console.log('Load succeed'), errorCode => console.log('Error code: ' + errorCode) );

  //playerController.addEventListener(cast.framework.RemotePlayerEventType.IS_CONNECTED_CHANGED, connectionChange);




  var context = cast.framework.CastContext.getInstance();
  context.addEventListener(
    cast.framework.CastContextEventType.SESSION_STATE_CHANGED,
    function(event) {
      switch (event.sessionState) {
        case cast.framework.SessionState.SESSION_STARTED:
        case cast.framework.SessionState.SESSION_RESUMED:
          break;
        case cast.framework.SessionState.SESSION_ENDED:
          console.log('CastContext: CastSession disconnected');
          // Update locally as necessary
          break;
      }
    })

    function stopCasting() {
      var castSession = cast.framework.CastContext.getInstance().getCurrentSession();
      // End the session and pass 'true' to indicate
      // that receiver application should be stopped.
      castSession.endSession(true);
    }
};

// const connectionChange = () => {
//   if (!player.isConnected) {
//     console.log('RemotePlayerController: Player disconnected');
//   }
// }