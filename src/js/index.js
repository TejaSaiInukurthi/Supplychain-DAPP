
function log(message) {
    $('#log').append($('<p>').text(message));
    $('#log').scrollTop($('#log').prop('scrollHeight'));
  }
  function error(message) {
    $('#log').append($('<p>').addClass('dark-red').text(message));
    $('#log').scrollTop($('#log').prop('scrollHeight'));
  }
  function waitForReceipt(hash, cb) {
    web3.eth.getTransactionReceipt(hash, function (err, receipt) {
      if (err) {
        error(err);
      }
      if (receipt !== null) {
        // Transaction went through
        if (cb) {
          cb(receipt);
        }
      } else {
        // Try again in 1 second
        window.setTimeout(function () {
          waitForReceipt(hash, cb);
        }, 1000);
      }
    });
  }
  const address = "0x9051E9dfc8353A0efbD68365aEDc72F02e2a6dee"; //paste your contract address here
  const abi = [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "manufacturer",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "uuid",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "location",
          "type": "address"
        }
      ],
      "name": "AssetCreate",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "uuid",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "time",
          "type": "uint256"
        }
      ],
      "name": "AssetTransfer",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "description",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "uuid",
          "type": "string"
        }
      ],
      "name": "createAsset",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "uuid",
          "type": "string"
        }
      ],
      "name": "manu",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "uuid",
          "type": "string"
        }
      ],
      "name": "stockhouse",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "uuid",
          "type": "string"
        }
      ],
      "name": "wholsaler",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "uuid",
          "type": "string"
        }
      ],
      "name": "retailer",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "uuid",
          "type": "string"
        }
      ],
      "name": "Customer",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "string",
          "name": "uuid",
          "type": "string"
        }
      ],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "string",
          "name": "uuid",
          "type": "string"
        }
      ],
      "name": "Description",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "string",
          "name": "uuid",
          "type": "string"
        }
      ],
      "name": "Owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "string",
          "name": "uuid",
          "type": "string"
        }
      ],
      "name": "manus",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "string",
          "name": "uuid",
          "type": "string"
        }
      ],
      "name": "stocks",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "string",
          "name": "uuid",
          "type": "string"
        }
      ],
      "name": "wholee",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "string",
          "name": "uuid",
          "type": "string"
        }
      ],
      "name": "reta",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "string",
          "name": "uuid",
          "type": "string"
        }
      ],
      "name": "Customers",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ];
   $(function () {
    var AssetTracker;
    $('#trackAsset').click(function (e) {
      e.preventDefault();
      AssetTracker.name.call(document.getElementById("trackUuid").value, function (err, re) {
        if (err) {
          return error(err);
        } 
        // The return value is a BigNumber object
        document.getElementById("name").innerHTML = re ;
      });
    });
    $('#trackAsset').click(function (e) {
      e.preventDefault();
            AssetTracker.Description.call(document.getElementById("trackUuid").value, function (err, res) {
        if (err) {
          return error(err);
        } 
        // The return value is a BigNumber object
       document.getElementById("description").innerHTML = res;
      });
     });
     $('#trackAsset').click(function (e) {
      e.preventDefault();
      AssetTracker.Owner.call(document.getElementById("trackUuid").value, function (err, resul) {
        if (err) {
          return error(err);
        } 
        // The return value is a BigNumber object
        document.getElementById("owner").innerHTML = resul ;
      });
     });

    $('#trackAsset').click(function (e) {
      e.preventDefault();
       AssetTracker.manus.call(document.getElementById("trackUuid").value, function (err, resu) {
        if (err) {
          return error(err);
        } 
        // The return value is a BigNumber object
       document.getElementById("manufacutrer").innerHTML = resu;
      });
    });
    $('#trackAsset').click(function (e) {
      e.preventDefault();
       AssetTracker.stocks.call(document.getElementById("trackUuid").value, function (err, resu) {
        if (err) {
          return error(err);
        } 
        // The return value is a BigNumber object
       document.getElementById("stockHolder").innerHTML = resu;
      });
    });
    $('#trackAsset').click(function (e) {
      e.preventDefault();
       AssetTracker.wholee.call(document.getElementById("trackUuid").value, function (err, resu) {
        if (err) {
          return error(err);
        } 
        // The return value is a BigNumber object
       document.getElementById("wholesaler").innerHTML = resu;
      });
    });
    $('#trackAsset').click(function (e) {
      e.preventDefault();
       AssetTracker.reta.call(document.getElementById("trackUuid").value, function (err, resu) {
        if (err) {
          return error(err);
        } 
        // The return value is a BigNumber object
       document.getElementById("retailer").innerHTML = resu;
      });
    });
    $('#trackAsset').click(function (e) {
      e.preventDefault();
       AssetTracker.Customers.call(document.getElementById("trackUuid").value, function (err, resu) {
        if (err) {
          return error(err);
        } 
        // The return value is a BigNumber object
       document.getElementById("users").innerHTML = resu;
      });
    });
    $('#createAsset').click(function (e) {
      e.preventDefault();
      if(web3.eth.defaultAccount === undefined) {
        return error("No accounts found. If you're using MetaMask, " +
                     "please unlock it first and reload the page.");
      }
      log("Transaction On its Way...");
      AssetTracker.createAsset.sendTransaction(document.getElementById("assetName").value,
      document.getElementById("assetDescription").value,
      document.getElementById("assetUuid").value,function (err, hash) {
        if (err) {
          return error(err);
        }
        waitForReceipt(hash, function () {
          log("Transaction succeeded.");
        });
      });
    });
    $('#Manufacutrer').click(function (e) {
      e.preventDefault();
      if(web3.eth.defaultAccount === undefined) {
        return error("No accounts found. If you're using MetaMask, " +
                     "please unlock it first and reload the page.");
      }
      log("Transaction On its Way...");
      AssetTracker.manu.sendTransaction(document.getElementById("address").value,
      document.getElementById("Uuid").value,function (err, hash) {
        if (err) {
          return error(err);
        }
        waitForReceipt(hash, function () {
          log("Transaction succeeded.");
        });
      });
    });
    $('#Stockholder').click(function (e) {
      e.preventDefault();
      if(web3.eth.defaultAccount === undefined) {
        return error("No accounts found. If you're using MetaMask, " +
                     "please unlock it first and reload the page.");
      }
      log("Transaction On its Way...");
      AssetTracker.stockhouse.sendTransaction(document.getElementById("addres").value,
      document.getElementById("Uui").value,function (err, hash) {
        if (err) {
          return error(err);
        }
        waitForReceipt(hash, function () {
          log("Transaction succeeded.");
        });
      });
    });
    $('#Wholesaler').click(function (e) {
      e.preventDefault();
      if(web3.eth.defaultAccount === undefined) {
        return error("No accounts found. If you're using MetaMask, " +
                     "please unlock it first and reload the page.");
      }
      log("Transaction On its Way...");
      AssetTracker.wholsaler.sendTransaction(document.getElementById("addre").value,
      document.getElementById("Uu").value,function (err, hash) {
        if (err) {
          return error(err);
        }
        waitForReceipt(hash, function () {
          log("Transaction succeeded.");
        });
      });
    });
    $("#button").click(function() {
      $("#address").show();
      $("#Uuid").show();
    });
    $("#b").click(function() {
      $("#addres").show();
      $("#Uui").show();
    });
    $("#u").click(function() {
      $("#addre").show();
      $("#Uu").show();
    });
    $("#t").click(function() {
      $("#addr").show();
      $("#uid").show();
    });
    $("#tt").click(function() {
      $("#add").show();
      $("#Uud").show();
    });
    
    $('#Retailer').click(function (e) {
      e.preventDefault();
      if(web3.eth.defaultAccount === undefined) {
        return error("No accounts found. If you're using MetaMask, " +
                     "please unlock it first and reload the page.");
      }
      log("Transaction On its Way...");
      AssetTracker.retailer.sendTransaction(document.getElementById("addr").value,
      document.getElementById("uid").value,function (err, hash) {
        if (err) {
          return error(err);
        }
        waitForReceipt(hash, function () {
          log("Transaction succeeded.");
        });
      });
    });
    $('#user').click(function (e) {
      e.preventDefault();
      if(web3.eth.defaultAccount === undefined) {
        return error("No accounts found. If you're using MetaMask, " +
                     "please unlock it first and reload the page.");
      }
      log("Transaction On its Way...");
      AssetTracker.Customer.sendTransaction(document.getElementById("add").value,
      document.getElementById("Uud").value,function (err, hash) {
        if (err) {
          return error(err);
        }
        waitForReceipt(hash, function () {
          log("Transaction succeeded.");
        });
      });
    });
    if (typeof(web3) === "undefined") {
      error("Unable to find web3. " +
            "Please run MetaMask (or something else that injects web3).");
    } else {
      log("Found injected web3.");
      web3 = new Web3(web3.currentProvider);
      ethereum.enable();
      if (web3.version.network != 4) {
        error("Wrong network detected. Please switch to the Ganache test network.");
      } else {
        log("Connected to the Ganache test network.");
        AssetTracker = web3.eth.contract(abi).at(address);
        }
    }
  });
