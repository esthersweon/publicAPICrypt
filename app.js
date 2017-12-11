console.log("JS Loaded");

$('#btn').click(function(){
 var value = $('#whichCrypto').val();
 var $output = $('#outputValue');
$.ajax({
    url: "https://api.coindesk.com/v1/bpi/currentprice.json",
    method: "GET",
    success: function(response) {
      for (var currency in response.bpi) {
if (currency === value) {
  $output.text(`${currency} = ${response.bpi[currency].rate_float)}`;
}
}   
    },
    error: function(info) {
        console.log('There was an error', info);
    },
    dataType: 'json'
});
})
