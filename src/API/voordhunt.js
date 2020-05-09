 // private static void VisitWooordhunt(string foreign, out string spell, out string native)
  // {
  //     spell = "";
  //     native = "";
  //     try
  //     {
  //         var url = $"http://wooordhunt.ru/word/{foreign}";
  //         var web = new XmlDocument();
  //         web.Load(url);
  //         spell = web.DocumentElement.SelectSingleNode("//*[@id=\"uk_tr_sound\"]/span[1]")?.InnerText ?? "";
  //         native = web.DocumentElement.SelectSingleNode("//*[@id=\"wd_content\"]/span/text()")?.InnerText ?? "";
  //     }
  //     catch (Exception)
  //     {
  //         // ignored
  //     }
  // }

  // visitWoordhunt(foreign) {
  //   var url = `https://wooordhunt.ru/word/${foreign}`;
  //   var xmlHttp = new XMLHttpRequest();
  //   xmlHttp.onreadystatechange = this.getInfo;
  //   xmlHttp.open( "GET", url, false );
  //   xmlHttp.send();
  //   var responseText = xmlHttp.responseText;
  //   return responseText;
  // }


    // getData() {
  //   // create a new XMLHttpRequest
  //   var xhr = new XMLHttpRequest()

  //   // get a callback when the server responds
  //   xhr.addEventListener('load', () => {
  //     // update the state of the component with the result here
  //     console.log(xhr.responseText)
  //   })
  //   // open the request with the verb and the url
  //   xhr.open('GET', 'https://wooordhunt.ru')
  //   // send the request
  //   xhr.send()
  // }

  // getInfo(resp) {
  // 	// if (request.readyState == 4) {
  // 	// 	var val = request.responseText;
  // 	// 	document.getElementById('chiru').innerHTML = val;
  // 	// }
  // }