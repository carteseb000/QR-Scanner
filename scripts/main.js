var db = {
  "Data": {
    "Users": [
      {
        "User": "Owner",
        "Credits": ""
      },
      {
        "User": "Deborah Carter",
        "Credits": 0.00,
        "isBanned\r": "FALSE\r"
      },
      {
        "User": "Alyssa Carter",
        "Credits": 0.00,
        "isBanned\r": "FALSE\r"
      },
      {
        "User": "Angel Carter",
        "Credits": 0.00,
        "isBanned\r": "FALSE\r"
      },
      {
        "User": "test",
        "Credits": 0.00,
        "isBanned\r": "FALSE"
      }
    ]
  }
};

function onScanSuccess(decodedText, decodedResult) {
  // handle the scanned code as you like, for example:
  if (decodedText == "Owner") {
    alert(`Code matched = ${decodedText}`, decodedResult);
  } else {
	  //
  }
}
  
function onScanFailure(error) {
  // handle scan failure, usually better to ignore and keep scanning.
  // for example:
  // console.warn(`Code scan error = ${error}`);
}
  
let html5QrcodeScanner = new Html5QrcodeScanner("reader", { fps: 10, qrbox: {width: 250, height: 250} }, /* verbose= */ false);

html5QrcodeScanner.render(onScanSuccess, onScanFailure);