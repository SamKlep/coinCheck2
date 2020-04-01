request("GET", "http://rest-sandbox.coinapi.io/v1/exchangerate/BTC?apikey=0FB5E317-142D-412D-824B-A5F59FE8F0E0")
                .then((data) => {
                    var data = data.target.response
                    var dataObject = JSON.parse(data)
                    console.log(dataObject)

                    var FullDigitalCurrencyArray = dataObject.rates.filter(function (data) {

                        if (data.asset_id_quote === 'USD') {
                            return true
                        }
                        if (data.asset_id_quote === 'LTC') {
                            return true
                        }
                        if (data.asset_id_quote === 'ETH') {
                            return true
                        }
                        if (data.asset_id_quote === 'XRP') {
                            return true
                        }
                        if (data.asset_id_quote === 'BCH') {
                            return true
                        }
                        else {
                            console.log('Not looking for these')
                        }
                        return false


                        console.log(FullDigitalCurrencyArray)

                    });



                    console.log(FullDigitalCurrencyArray)


                    var selectCoins = FullDigitalCurrencyArray.map(data2 => {

                        var siteDict = []

                        if (data2.asset_id_quote === 'USD') {
                            var USD = data2.rate
                            console.log(USD)
                            siteDict.push([USD])
                            console.log(USD)
                            return USD
                        }
                        if (data2.asset_id_quote === 'LTC') {
                            var LTC = data2.rate
                            return LTC
                        }
                        if (data2.asset_id_quote === 'ETH') {
                            var ETH = data2.rate
                            return ETH
                        }
                        if (data2.asset_id_quote === 'BCH') {
                            var BCH = data2.rate
                            return BCH
                        }
                        if (data2.asset_id_quote === 'XRP') {
                            var XRP = data2.rate
                            return XRP
                        }

                        var siteDict = { 'USD': USD, 'LTC': LTC, 'ETH': ETH, 'BCH': BCH, 'XRP': XRP }
                        console.log(siteDict)

                        return (USD, LTC, ETH, XRP, BCH)

                    });

                });



            var selectCoins = {}


            request("GET", "http://rest-sandbox.coinapi.io/v1/exchangerate/BTC?apikey=0FB5E317-142D-412D-824B-A5F59FE8F0E0")
                .then((data) => {
                    var data = data.target.response
                    var dataObject = JSON.parse(data)
                    console.log(dataObject)

                    var FullDigitalCurrencyArray = dataObject.rates.filter(function (data) {

                        if (data.asset_id_quote === 'USD') {
                            return true
                        }
                        if (data.asset_id_quote === 'LTC') {
                            return true
                        }
                        if (data.asset_id_quote === 'ETH') {
                            return true
                        }
                        if (data.asset_id_quote === 'XRP') {
                            return true
                        }
                        if (data.asset_id_quote === 'BCH') {
                            return true
                        }
                        else {
                            console.log('Not looking for these')
                        }
                        return false


                        console.log(FullDigitalCurrencyArray)

                    });


                    FullDigitalCurrencyArray.forEach(data2 => {

                        if (data2.asset_id_quote === 'USD') {
                            var USD = data2.rate
                            selectCoins["USD"] = USD
                        }
                        if (data2.asset_id_quote === 'LTC') {
                            var LTC = data2.rate
                            selectCoins["LTC"] = LTC
                        }
                        if (data2.asset_id_quote === 'ETH') {
                            var ETH = data2.rate
                            selectCoins["ETH"] = ETH
                        }
                        if (data2.asset_id_quote === 'BCH') {
                            var BCH = data2.rate
                            selectCoins["BCH"] = BCH
                        }
                        if (data2.asset_id_quote === 'XRP') {
                            var XRP = data2.rate
                            selectCoins["XRP"] = XRP
                        }

                        return (USD, LTC, ETH, XRP, BCH)


                    });
                    var objectLTC = document.getElementById('LTC'); //Grabbing Elements by ID's
                    var objectBCH = document.getElementById('BCH');
                    var objectETH = document.getElementById('ETH');
                    var objectBTC = document.getElementById('BTC');
                    var objectUSD = document.getElementById('USD');

                    LTCusd = selectCoins.USD / (selectCoins.LTC) //Converting LItecoin value to USD
                    BCHusd = selectCoins.USD / (selectCoins.BCH) //Converting BitCoin Cash value to USD
                    ETHusd = selectCoins.USD / (selectCoins.ETH) //Converting Ethereum value to USD

                    BCHScreenData = BCHusd.toFixed(2) //Rounding values to 2 decimal places
                    LTCScreenData = LTCusd.toFixed(2)
                    ETHScreenData = ETHusd.toFixed(2)
                    USDScreenData = selectCoins.USD.toFixed(2)

                    objectBCH.innerHTML = ('$' + BCHScreenData) //Rendering Coin figures to Screen
                    objectLTC.innerHTML = ('$' + LTCScreenData)
                    objectETH.innerHTML = ('$' + ETHScreenData)
                    objectUSD.innerHTML = ('$' + USDScreenData)

                });

            function request(method, url) {
                return new Promise(function (resolve, reject) {
                    var xhr = new XMLHttpRequest();
                    xhr.open(method, url);
                    xhr.onload = resolve;
                    xhr.onerror = reject;
                    xhr.send();
                });
            }

            $(document).ready(function() {
                $.get("https://min-api.cryptocompare.com/data/v2/news/?lang=EN&api_key=985402fdb81c74083af15ad1ab0b905937ad295d50144f8055daa7565b2338f0",
                    {
                       data: JSON
                    },
                    function(response) {
                        console.log("hello")
                        console.log(response);
                        // console.log(typeof(Data))
                        console.log(response.Data[0].body)
                        console.log("hello")
                    
                         var newsElement = document.getElementById("news-body")
                        //  newsElement.innerHTML = response.Data[0].body
                         
            
                         var items = response.Data
                         var newsStory = items.map((item)=>{
                             return (
                                 `
                                 <div id="news-wrapper">
                                 <div id="news-body">
                                 <a href="${item.url}">
                                 <h3 id="news-header">${item.title}</h3>
                                 </a>
                                 <p id="news">${item.body}</p>
                                 </div>
                                 </div>`
                             )
                             console.log(item.title)
                         })
                         newsElement.innerHTML = newsStory
            
                  });
            
            });
